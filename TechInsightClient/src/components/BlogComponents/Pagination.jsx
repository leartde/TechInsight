import React from 'react'

function Pagination({onPageChange, currentPage, blogs, pageSize}) {
    let totalPages = 0;
    
    const renderPaginationLinks = () => {
        if (blogs.length === 0) {
            return null;}
        else{
            totalPages = Math.ceil(blogs.length / pageSize);
        }

        return Array.from({length : totalPages},  (_, i)=> i+1).map((pageNumber)=>(
            <li 
                className={`border-gray-200 shadow p-2 w-8 bg-white item-center ${pageNumber === currentPage? "activePagination": ""}`} 
                key={pageNumber}
            >
                <button 
                    className="w-full h-full"
                    onClick={()=>onPageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
            </li>
        ))
    } 
    return (
        <ul className='pagination  my-10 flex-wrap gap-4 '>
            <li>
                <button 
                    className={`border-gray-200 shadow p-2 bg-white ${currentPage === 1 ? "hidden" : ""}`}  
                    onClick={()=>onPageChange(currentPage - 1)}
                >
                    Previous
                </button>
            </li>
            <div className='flex gap-1'>
                {renderPaginationLinks()}
            </div>
            <li> 
                <button 
                    className={`border-gray-200 shadow p-2 bg-white ${currentPage === totalPages ? "hidden" : ""}`}  
                    onClick={()=>onPageChange(currentPage + 1)}
                >
                    Next
                </button>
            </li>
        </ul>
    )
}

export default Pagination