import React, { useState } from "react";

const Search = ({ searchMeal }) => {
  const [meal, setMeal] = useState("");
  const searchNow = (e) => {
    e.preventDefault();
    if (meal) {
      searchMeal(meal);
      setMeal("");
    } else {
      alert("Empty Search Field");
    }
  };
  return (
    <div className=" w-10/12 mx-auto my-3">
      <form action="" className="flex justify-between" onSubmit={searchNow}>
        <input
          type="text"
          placeholder="What Are Your Looking for..."
          className="input input-bordered w-full mr-4"
          value={meal}
          onChange={(e) => {
            setMeal(e.target.value);
          }}
        />
        <button className="btn btn-secondary w-1/5" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
