import React, { useState, useEffect } from "react";

export default function Pagination({ count, limit, page, onPageChange }) {
  const pagination = [];
  const numberOfPages = Math.ceil(count / limit);

  for (let i = 1; i <= numberOfPages; i++) {
    pagination.push(
      <li key={i} className="page-item">
        <a
          onClick={(e) => {
            e.preventDefault();
            onPageChange(i);
          }}
          className="page-link"
          href="#"
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">{pagination}</ul>
      {/* <ul className="pagination justify-content-center">
        {Array(numberOfPages)
          .fill()
          .map((_, i) => (
            <a
              onClick={(e) => {
                e.preventDefault();
                onPageChange(i + 1);
              }}
              className="page-link"
              href="#"
            >
              {i + 1}
            </a>
          ))}
      </ul> */}
    </nav>
  );
}
