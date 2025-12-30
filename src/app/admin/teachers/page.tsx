import { PageHeader } from '@/components/dashboard/page-header';

export default function Page() {
  return (
    <div>
      <PageHeader title="Teachers" description="Manage teacher information." />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p>Teacher management content goes here.</p>
      </div>
    </div>
  );
}
