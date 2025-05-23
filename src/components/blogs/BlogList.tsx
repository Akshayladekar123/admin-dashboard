import { Blog } from '../../types/blog';

interface BlogListProps {
  blogs: Blog[];
  onEdit: (blog: Blog) => void;
  onDelete: (id: string) => void;
}

const BlogList = ({ blogs, onEdit, onDelete }: BlogListProps) => {
  return (
    <div className="space-y-4">
      {blogs.map(blog => (
        <div key={blog.id} className="bg-white dark:bg-dark-light rounded-lg shadow-md p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">{blog.title}</h3>
              <span className="inline-block py-1 text-xs rounded-full bg-primary/10 text-primary dark:bg-primary/20 mt-1">
                {blog.type.charAt(0).toUpperCase() + blog.type.slice(1)}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(blog)}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(blog.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{blog.description}</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Posted: {new Date(blog.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;