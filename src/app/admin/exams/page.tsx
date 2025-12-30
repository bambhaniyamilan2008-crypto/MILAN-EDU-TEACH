import { PageHeader } from '@/components/dashboard/page-header';

export default function Page() {
  return (
    <div>
      <PageHeader title="Exams & Results" description="Manage exams and results." />
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p>Exams and results management content goes here.</p>
      </div>
    </div>
  );
}
