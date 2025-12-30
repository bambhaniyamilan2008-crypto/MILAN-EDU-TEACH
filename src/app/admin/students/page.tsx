import { PageHeader } from '@/components/dashboard/page-header';

export default function Page() {
  return (
    <div>
      <PageHeader title="Students" description="Manage student information." />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p>Student management content goes here.</p>
      </div>
    </div>
  );
}
