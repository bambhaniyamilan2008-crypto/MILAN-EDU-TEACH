
'use client';

import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';

const chartData = [
  {
    month: 'Jan',
    math: 80,
    physics: 75,
    chemistry: 85,
    english: 78,
  },
  {
    month: 'Feb',
    math: 82,
    physics: 78,
    chemistry: 88,
    english: 80,
  },
  {
    month: 'Mar',
    math: 85,
    physics: 82,
    chemistry: 86,
    english: 84,
  },
  {
    month: 'Apr',
    math: 90,
    physics: 85,
    chemistry: 90,
    english: 88,
  },
  {
    month: 'May',
    math: 95,
    physics: 88,
    chemistry: 92,
    english: 85,
  },
];

const chartConfig = {
  math: {
    label: 'Mathematics',
    color: 'hsl(var(--chart-1))',
  },
  physics: {
    label: 'Physics',
    color: 'hsl(var(--chart-2))',
  },
  chemistry: {
    label: 'Chemistry',
    color: 'hsl(var(--chart-3))',
  },
  english: {
    label: 'English',
    color: 'hsl(var(--chart-4))',
  },
};

export function StudentPerformanceChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <XAxis
            dataKey="month"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            domain={[60, 100]}
          />
          <Tooltip
            cursor={true}
            content={
              <ChartTooltipContent
                indicator="dot"
                labelClassName="text-sm"
                className="rounded-lg border bg-background p-2 shadow-sm"
              />
            }
          />
          <Legend content={(props) => <ChartLegendContent {...(props as any)} />} />
          <Line
            type="monotone"
            dataKey="math"
            stroke="var(--color-math)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="physics"
            stroke="var(--color-physics)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="chemistry"
            stroke="var(--color-chemistry)"
            strokeWidth={2}
            dot={false}
          />
           <Line
            type="monotone"
            dataKey="english"
            stroke="var(--color-english)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
