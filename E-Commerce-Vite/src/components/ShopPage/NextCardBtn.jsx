function Pagination() {
    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
          Prev
        </button>
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
          1
        </button>
        <button className="px-4 py-2 border rounded-md bg-blue-500 text-white">
          2
        </button>
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
          3
        </button>
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50">
          Next
        </button>
      </div>
    );
  }
  
  export default Pagination;