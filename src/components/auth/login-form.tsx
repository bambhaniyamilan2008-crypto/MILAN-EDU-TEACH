
// @ts-nocheck
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AtSign, KeyRound, LogIn, School2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { type UserRole } from '@/lib/types';
import { useAuth } from '@/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [role, setRole] = useState<UserRole>('student');
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  const handleEmailPasswordSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!auth) return;
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      // Try to create a new user first.
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Account Created & Logged In",
        description: `Redirecting to ${role} dashboard...`,
      });
      router.push(`/${role}/dashboard`);
    } catch (error: any) {
      // If user already exists, sign them in.
      if (error.code === 'auth/email-already-in-use') {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          toast({
            title: "Login Successful",
            description: `Redirecting to ${role} dashboard...`,
          });
          router.push(`/${role}/dashboard`);
        } catch (signInError: any) {
          console.error("Firebase Sign-In Error:", signInError);
          toast({
            variant: "destructive",
            title: "Login Failed",
            description: signInError.message || "An unexpected error occurred during sign-in.",
          });
        }
      } else {
        // Handle other errors during creation
        console.error("Firebase Auth Error:", error);
        toast({
          variant: "destructive",
          title: "Authentication Failed",
          description: error.message || "An unexpected error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!auth) return;
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({
        title: "Login Successful",
        description: `Redirecting to ${role} dashboard...`,
      });
      router.push(`/${role}/dashboard`);
    } catch (error: any) {
      console.error("Google Sign-In Error:", error);
       toast({
        variant: "destructive",
        title: "Google Sign-In Failed",
        description: error.message || "Could not sign in with Google.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleEmailPasswordSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input name="email" id="email" type="email" placeholder="user@example.com" required className="pl-10" defaultValue="test@example.com" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input name="password" id="password" type="password" required className="pl-10" defaultValue="password" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select onValueChange={(value: UserRole) => setRole(value)} defaultValue={role}>
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <School2 className="h-5 w-5 text-muted-foreground" />
                <SelectValue placeholder="Select your role" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="parent">Parent</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground"></div>
          ) : (
            <>
              <LogIn className="mr-2 h-5 w-5" />
              Sign In
            </>
          )}
        </Button>
      </form>
       <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
       <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={loading}>
        <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.2 64.5c-20.3-19.2-49.3-30.8-82.9-30.8-62.8 0-113.4 51.6-113.4 114.9s50.6 114.9 113.4 114.9c71.2 0 98.2-53.2 102.3-78.1l-104.5-.2v-69.7h197.4c1.1 10.2 1.9 20.9 1.9 32.2z"></path></svg>
        Google
      </Button>
    </div>
  );
}
