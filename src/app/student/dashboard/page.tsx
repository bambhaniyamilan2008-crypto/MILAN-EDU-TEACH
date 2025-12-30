
import { PageHeader } from '@/components/dashboard/page-header';
import { AIChatTutor } from '@/components/dashboard/student/ai-chat-tutor';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BookCheck,
  CalendarClock,
  ClipboardCheck,
  Clock,
  User,
  Video,
} from 'lucide-react';
import Link from 'next/link';

const schedule = [
  { time: '09:00 - 09:50', subject: 'Mathematics', teacher: 'Vinesh sir' },
  { time: '10:00 - 10:50', subject: 'Physics', teacher: 'Dobariya sir' },
  { time: '11:00 - 11:50', subject: 'English', teacher: 'Mr. Davis' },
  { time: '12:50 - 01:40', subject: 'Chemistry', teacher: 'Mavani sir' },
];

const deadlines = [
    { title: 'Algebra II - Problem Set 3', subject: 'Mathematics', dueDate: 'Aug 15' },
    { title: 'Lab Report: Thermodynamics', subject: 'Physics', dueDate: 'Aug 12' },
    { title: 'Character Analysis of Hamlet', subject: 'English', dueDate: 'Aug 20' },
]

export default function StudentDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Hi, Alex!"
        description="Let's make today a productive day for learning."
      >
        <Button asChild>
            <Link href="/student/timetable">
                <CalendarClock className="mr-2 h-4 w-4" />
                View Full Timetable
            </Link>
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>
                Here are your classes for today, {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schedule.map((item) => (
                  <div key={item.subject} className="flex items-center gap-4 rounded-lg border p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{item.subject}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{item.time}</span>
                        <span className='flex items-center gap-1'><User size={14} /> {item.teacher}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Video className="mr-2 h-4 w-4" />
                      Join
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>AI Chat Tutor</CardTitle>
              <CardDescription>Get instant help with your schoolwork.</CardDescription>
            </CardHeader>
            <CardContent>
                <AIChatTutor />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">
                Pending Assignments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Due this week</p>
            </CardContent>
             <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">
                Overall Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">
                Great job, keep it up!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Don't forget to submit your work on time.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {deadlines.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">
                            <ClipboardCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.subject}</p>
                            <p className="text-xs text-muted-foreground mt-1">Due: {item.dueDate}</p>
                        </div>
                    </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
