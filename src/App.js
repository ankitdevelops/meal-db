import { useState, useEffect } from "react";
import Search from "./Components/Search";
import Header from "./Components/Header";
import CardList from "./Components/CardList";
import axios from "axios";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
        );
        const data = await response?.data?.meals[0];
        setMeals([data]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [keyword]);

  const searchMeal = (meal) => {
    setKeyword(meal);
  };
  return (
    <main className="md:container container px-3 mx-auto md:mx-auto my-24">
      <Header />
      <Search searchMeal={searchMeal} />
      <CardList meals={meals} loading={loading} error={error} />
    </main>
  );
}

export default App;
