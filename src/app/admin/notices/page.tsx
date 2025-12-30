import { PageHeader } from '@/components/dashboard/page-header';

export default function Page() {
  return (
    <div>
      <PageHeader title="Notice Board" description="Manage notices." />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p>Notice board content goes here.</p>
      </div>
    </div>
  );
}
