
'use client';

import { PageHeader } from '@/components/dashboard/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { StudentPerformanceChart } from '@/components/dashboard/student/student-performance-chart';

const latestResults = [
  { subject: 'Mathematics', grade: 'A', score: 95, remarks: 'Excellent' },
  { subject: 'Physics', grade: 'B+', score: 88, remarks: 'Good' },
  { subject: 'Chemistry', grade: 'A-', score: 92, remarks: 'Very Good' },
  { subject: 'English Literature', grade: 'B', score: 85, remarks: 'Good' },
  { subject: 'Chemistry', grade: 'C+', score: 78, remarks: 'Needs Improvement' },
];

export default function ResultsPage() {
  return (
    <div>
      <PageHeader
        title="Your Results"
        description="View your exam results and track your performance."
      >
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                <CardTitle>Latest Exam Results</CardTitle>
                <CardDescription>Mid-Term Examination - May 2024</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead className="text-center">Score</TableHead>
                        <TableHead>Remarks</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {latestResults.map((result) => (
                        <TableRow key={result.subject}>
                        <TableCell className="font-medium">{result.subject}</TableCell>
                        <TableCell>
                            <Badge variant={result.score >= 80 ? 'default' : 'secondary'}>
                            {result.grade}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-center font-mono">{result.score}</TableCell>
                        <TableCell>{result.remarks}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Performance Summary</CardTitle>
                    <CardDescription>Overall performance in the latest exam.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Overall Grade</p>
                        <p className="text-2xl font-bold">B+</p>
                    </div>
                     <div>
                        <p className="text-sm font-medium text-muted-foreground">Total Marks</p>
                        <p className="text-2xl font-bold">438 / 500</p>
                    </div>
                     <div>
                        <p className="text-sm font-medium text-muted-foreground">Percentage</p>
                        <p className="text-2xl font-bold">87.6%</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
      <Card className="mt-6">
        <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
            <CardDescription>Your scores over the last few assessments.</CardDescription>
        </CardHeader>
        <CardContent>
            <StudentPerformanceChart />
        </CardContent>
      </Card>
    </div>
  );
}
