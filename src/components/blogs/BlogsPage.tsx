import { useState, useEffect } from 'react';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../../services/blogService';
import BlogModal from '../../components/blogs/BlogModal';
import BlogList from '../../components/blogs/BlogList';
import { Blog, BlogFormValues } from '../../types/blog';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>(getBlogs());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);

  const handleCreate = () => {
    setCurrentBlog(null);
    setIsModalOpen(true);
  };

  const handleEdit = (blog: Blog) => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      deleteBlog(id);
      setBlogs(getBlogs());
    }
  };

  const handleSubmit = (values: BlogFormValues) => {
    if (currentBlog) {
      updateBlog(currentBlog.id, values);
    } else {
      createBlog(values);
    }
    setBlogs(getBlogs());
  };

  useEffect(() => {
    if (!isModalOpen) {
      const timer = setTimeout(() => setCurrentBlog(null), 300);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <button
          onClick={handleCreate}
          className="hover:bg-primary-dark text-black px-4 py-2 rounded-lg border"
        >
          Create Blog
        </button>
      </div>

      <BlogList 
        blogs={blogs} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />

      <BlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialValues={currentBlog || undefined}
      />
    </div>
  );
};

export default BlogsPage;