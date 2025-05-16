import { UsersIcon, FileTextIcon, SettingsIcon } from "../ui/CustomIcons";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'user',
      title: 'New user registered',
      description: 'John Doe created an account',
      time: '2 hours ago',
      icon: <UsersIcon className="text-blue-500" />,
    },
    {
      id: 2,
      type: 'report',
      title: 'Monthly report generated',
      description: 'System generated monthly sales report',
      time: '5 hours ago',
      icon: <FileTextIcon className="text-green-500" />,
    },
    {
      id: 3,
      type: 'settings',
      title: 'System updated',
      description: 'Admin updated system settings',
      time: '1 day ago',
      icon: <SettingsIcon className="text-purple-500" />,
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <div className="p-2 rounded-full bg-gray-100 dark:bg-dark mr-3">
              {activity.icon}
            </div>
            <div>
              <h3 className="font-medium">{activity.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.description}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;