import type { NextPage } from 'next';
import { DashboardList } from '~/features/Dashboard';

const Dashboard: NextPage = () => {
  return (
    <>
      <h1>Veio</h1>
      <DashboardList />
    </>
  );
};

export default Dashboard;
