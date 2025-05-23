import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BlogFormValues, BlogType } from '../../types/blog';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: BlogFormValues) => void;
  initialValues?: BlogFormValues;
}

const BlogModal: FC<BlogModalProps> = ({ isOpen, onClose, onSubmit, initialValues }) => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<BlogFormValues>({
    defaultValues: initialValues
  });

  useEffect(() => {
    if (isOpen && initialValues) {
      reset(initialValues);
    } else if (isOpen) {
      reset({
        title: '',
        description: '',
        type: '' as BlogType
      });
    }
  }, [isOpen, initialValues, reset]);

  const handleFormSubmit = (values: BlogFormValues) => {
    onSubmit(values);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-dark-light rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {initialValues ? 'Edit Blog' : 'Create New Blog'}
        </h2>
        
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Title</label>
            <input
              {...register('title', { required: 'Title is required' })}
              className="w-full px-3 py-2 border rounded-lg dark:bg-dark dark:border-gray-600"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Description</label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              className="w-full px-3 py-2 border rounded-lg dark:bg-dark dark:border-gray-600"
              rows={4}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Type</label>
            <select
              {...register('type', { required: 'Type is required' })}
              className="w-full px-3 py-2 border rounded-lg dark:bg-dark dark:border-gray-600"
            >
              <option value="">Select a type</option>
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="health">Health</option>
              <option value="entertainment">Entertainment</option>
              <option value="hospitality">Hospitality</option>
            </select>
            {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-dark"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-black border rounded-lg hover:bg-primary-dark"
            >
              {initialValues ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;