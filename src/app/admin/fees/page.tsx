import { PageHeader } from '@/components/dashboard/page-header';

export default function Page() {
  return (
    <div>
      <PageHeader title="Fees" description="Manage fees." />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p>Fee management content goes here.</p>
      </div>
    </div>
  );
}
