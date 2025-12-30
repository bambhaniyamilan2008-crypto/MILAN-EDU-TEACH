import { PageHeader } from '@/components/dashboard/page-header';

export default function Page() {
  return (
    <div>
      <PageHeader title="Reports" description="Generate and view reports." />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p>Reports content goes here.</p>
      </div>
    </div>
  );
}
