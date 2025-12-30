// @ts-nocheck
"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { month: "January", students: 186 },
  { month: "February", students: 305 },
  { month: "March", students: 237 },
  { month: "April", students: 73 },
  { month: "May", students: 209 },
  { month: "June", students: 214 },
  { month: "July", students: 250 },
  { month: "August", students: 280 },
  { month: "September", students: 265 },
  { month: "October", students: 180 },
  { month: "November", students: 190 },
  { month: "December", students: 220 },
]

const chartConfig = {
  students: {
    label: "Students",
    color: "hsl(var(--primary))",
  },
}

export function StudentEnrollmentChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
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
          />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent 
              indicator="dot"
              labelClassName="text-sm"
              className="rounded-lg border bg-background p-2 shadow-sm"
            />}
          />
          <Bar dataKey="students" fill="var(--color-students)" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
