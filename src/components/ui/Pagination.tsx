interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-6">
      <nav className="inline-flex rounded-md shadow">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-light text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark disabled:opacity-50"
        >
          Previous
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 border-t border-b border-gray-300 dark:border-gray-600 ${page === currentPage
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-dark-light text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark'
              }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-light text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark disabled:opacity-50"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;