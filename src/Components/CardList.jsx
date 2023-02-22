import React from "react";
import Card from "./Card";
import HashLoader from "react-spinners/HashLoader";
const CardList = ({ meals, loading, error }) => {
  return (
    <div className="w-10/12 mx-auto">
      {loading ? (
        <div className="text-center flex justify-center">
          <HashLoader
            color="#fff"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        meals.map((meal) => <Card key={meal.idMeal} meal={meal} />)
      )}
    </div>
  );
};

export default CardList;
