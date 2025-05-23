import { Blog, BlogFormValues } from '../types/blog';

const BLOG_STORAGE_KEY = 'dashboard_blogs';

export const getBlogs = (): Blog[] => {
  const blogs = localStorage.getItem(BLOG_STORAGE_KEY);
  return blogs ? JSON.parse(blogs) : [];
};

export const createBlog = (values: BlogFormValues): Blog => {
  const blogs = getBlogs();
  const newBlog = {
    ...values,
    id: Date.now().toString(),
    createdAt: new Date(),
  };
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify([newBlog, ...blogs]));
  return newBlog;
};

export const updateBlog = (id: string, values: BlogFormValues): Blog | null => {
  const blogs = getBlogs();
  const index = blogs.findIndex(blog => blog.id === id);
  if (index === -1) return null;
  
  const updatedBlog = { ...blogs[index], ...values, updatedAt: new Date() };
  const updatedBlogs = [...blogs];
  updatedBlogs[index] = updatedBlog;
  
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(updatedBlogs));
  return updatedBlog;
};

export const deleteBlog = (id: string): boolean => {
  const blogs = getBlogs();
  const updatedBlogs = blogs.filter(blog => blog.id !== id);
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(updatedBlogs));
  return blogs.length !== updatedBlogs.length;
};