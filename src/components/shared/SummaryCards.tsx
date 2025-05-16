import { UsersIcon, UserCheckIcon, UserXIcon } from '../ui/CustomIcons';

const SummaryCards = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: <UsersIcon size={24} />, change: '+12%', trend: 'up' },
    { title: 'Active Users', value: '932', icon: <UserCheckIcon size={24} />, change: '+5%', trend: 'up' },
    { title: 'Inactive Users', value: '302', icon: <UserXIcon size={24} />, change: '-2%', trend: 'down' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700 p-6 flex items-center hover:shadow-md transition-shadow duration-200"
        >
          <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
            {stat.icon}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
            <p
              className={`text-sm mt-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}
            >
              {stat.change} from last month
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;