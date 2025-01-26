// import StatusLabel, { Status } from '@/app/components/status-label';
import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-button';
// import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive} disabled>
        Not active
      </StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
