import React from "react";

import {PaginationWrap} from '../styled';

const Pagination = ({usersPerPage, totalUsers, paginate, currentPage}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalUsers /usersPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <PaginationWrap>
        {
          pageNumbers.map(number => {
            return (
              <li className={'item_number'} key={number}>
                <button className={`${currentPage === number ? 'active' : null} page_link`}  onClick={()=> paginate(number)}>
                  {number}
                </button>
              </li>
            )
          })
        }
    </PaginationWrap>
  )
}

export default Pagination;