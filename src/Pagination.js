import React from 'react';

function Pagination({ goToNextPage , goToPreviousPage }) {
  return(
    <div>
        {
            goToNextPage &&
            <button onClick={goToNextPage}>
            Previous
        </button>
        }  
        {   
            goToPreviousPage && 
            <button onClick={goToPreviousPage}>
            Next
            </button>
        } 
        
    </div>
  ) 
}

export default Pagination;
