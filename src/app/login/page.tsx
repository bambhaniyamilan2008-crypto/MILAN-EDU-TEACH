import { LoginForm } from '@/components/auth/login-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { School } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 hero-gradient">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <Card className="z-10 w-full max-w-md shadow-2xl animate-fade-in-up">
        <CardHeader className="items-center text-center">
          <div className="rounded-full bg-primary p-3 text-primary-foreground">
            <School className="h-8 w-8" />
          </div>
          <CardTitle className="font-headline text-3xl">School Management System</CardTitle>
          <CardDescription>Sign in to your school account</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
      <footer className="z-10 mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} School Management System. All rights reserved.
      </footer>
    </main>
  );
}
