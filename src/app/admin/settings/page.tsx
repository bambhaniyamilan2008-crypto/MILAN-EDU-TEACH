import { PageHeader } from '@/components/dashboard/page-header';

export default function Page() {
  return (
    <div>
      <PageHeader title="Settings" description="Manage application settings." />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p>Settings content goes here.</p>
      </div>
    </div>
  );
}
