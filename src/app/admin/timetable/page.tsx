import { PageHeader } from '@/components/dashboard/page-header';

export default function Page() {
  return (
    <div>
      <PageHeader title="Timetable" description="Manage timetable." />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p>Timetable management content goes here.</p>
      </div>
    </div>
  );
}
