import { PageHeader } from '@/components/dashboard/page-header';

export default function Page() {
  return (
    <div>
      <PageHeader title="Classes" description="Manage classes." />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p>Class management content goes here.</p>
      </div>
    </div>
  );
}
