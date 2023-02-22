import React from "react";

function Modal({ meal }) {
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h2 className="card-title">
            {meal?.strMeal}
            <div className="badge badge-secondary">{meal?.strCategory}</div>
          </h2>
          <p className="py-4 text-xl">{meal?.strInstructions}</p>

          <div className="modal-action">
            <a
              href={meal?.strYoutube}
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              YouTube
            </a>
            <label htmlFor="my-modal-5" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
