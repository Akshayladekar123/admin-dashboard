import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { HomeIcon, UsersIcon, EditIcon } from '../ui/CustomIcons';

const Sidebar = ({ mobileOpen }: any) => {
  return (
    <aside className={`${mobileOpen ? 'translate-x-0' : '-translate-x-full'} 
    md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-white dark:bg-dark-800
    border-r border-gray-200 dark:border-dark-700 z-50 transition-transform duration-300 ease-in-out`}>
      <div className="p-4">
        <h1 className="text-xl font-bold text-primary dark:text-white">Admin Dashboard</h1>
      </div>
      <nav className="mt-6">
        <NavLink
          to={ROUTES.DASHBOARD}
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 ${isActive ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'hover:bg-gray-100 dark:hover:bg-dark'}`
          }
        >
          <HomeIcon className="mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to={ROUTES.USERS}
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 ${isActive ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'hover:bg-gray-100 dark:hover:bg-dark'}`
          }
        >
          <UsersIcon className="mr-3" />
          Users
        </NavLink>
        <NavLink
          to={ROUTES.BLOGS}
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 ${isActive ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'hover:bg-gray-100 dark:hover:bg-dark'}`
          }
        >
          <EditIcon className="mr-3" />
          Blogs
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;