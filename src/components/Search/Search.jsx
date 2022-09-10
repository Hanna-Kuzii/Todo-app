import React, { useState } from "react";
import "./Search.scss";

export function Search({ filterTodos, searchTodos, todos }) {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isCompletedSelected, setIsCompletedSelected] = useState(false);
  const [isUnCompletedSelected, setIsUnCompletedSelected] = useState(false);

  return (
    <div className="Search">
      <div className="Search__filter">
        <button
          name="all"
          className={
            isAllSelected
              ? "Search__filter__button--active button"
              : "Search__filter__button button"
          }
          onClick={() => {
            filterTodos("all");
            isAllSelected ? setIsAllSelected(false) : setIsAllSelected(true);
            setIsUnCompletedSelected(false);
            setIsCompletedSelected(false);
          }}
        >
          All
        </button>
        <button
          name="active"
          className={
            isUnCompletedSelected
              ? "Search__filter__button--active button"
              : "Search__filter__button button"
          }
          onClick={() => {
            filterTodos("uncompleted");
            isUnCompletedSelected
              ? setIsUnCompletedSelected(false)
              : setIsAllSelected(false);
            setIsUnCompletedSelected(true);
            setIsCompletedSelected(false);
          }}
        >
          Need to do
        </button>
        <button
          name="Completed"
          className={
            isCompletedSelected
              ? "Search__filter__button--active button"
              : "Search__filter__button button"
          }
          onClick={() => {
            filterTodos("completed");
            isCompletedSelected
              ? setIsCompletedSelected(false)
              : setIsAllSelected(false);
            setIsUnCompletedSelected(false);
            setIsCompletedSelected(true);
          }}
        >
          Completed
        </button>
      </div>
      <div className="Search__search-bar">
        <input
          className="Search__search-bar__search"
          type="search"
          placeholder="Enter the title"
          id="site-search"
          name="search-bar"
          onChange={(event) => {
            searchTodos(event.target.value);
          }}
        />

        <button className="Search__filter__button Search__search-bar__button button">
          Search
        </button>
      </div>
    </div>
  );
}
