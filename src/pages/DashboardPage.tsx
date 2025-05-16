import SummaryCards from '../components/shared/SummaryCards';
import RecentActivity from '../components/shared/RecentActivity';

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <SummaryCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-dark-light rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">User Growth</h2>
          <div className="h-64 bg-gray-100 dark:bg-dark rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart will be displayed here</p>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-light rounded-lg shadow-md p-6">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;