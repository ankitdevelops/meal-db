import React from "react";
import Modal from "./Modal";

const Card = ({ meal }) => {
  console.log(meal);
  return (
    <div className="card sm:card-side bg-base-100 shadow-xl">
      <figure className="">
        <img
          src={meal?.strMealThumb}
          alt="meal thumbnail"
          className="w-full h-full"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">
          {meal?.strMeal}
          <div className="badge badge-secondary">{meal?.strCategory}</div>
        </h2>
        <p>{meal?.strInstructions?.substring(0, 500)} ...</p>
        <div className="card-actions justify-end">
          {/* The button to open modal */}
          <label htmlFor="my-modal-5" className="btn">
            Read More
          </label>
          {/* Modal */}
          <Modal meal={meal} />
          {/* YouTube button */}
          <a
            href={meal?.strYoutube}
            target="_blank"
            className="btn btn-primary"
            rel="noreferrer"
          >
            Watch Instructions On YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
