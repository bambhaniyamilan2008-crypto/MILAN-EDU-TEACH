import { PageHeader } from '@/components/dashboard/page-header';

export default function Page() {
  return (
    <div>
      <PageHeader title="Subjects" description="Manage subjects." />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p>Subject management content goes here.</p>
      </div>
    </div>
  );
}
