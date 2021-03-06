import React, { useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyle";
import RecipeCardComp from "./RecipeCard";
import HomeSvg from "../../assets/home.svg";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
// const APP_ID = "4e9f05eb";
// const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

const APP_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);

      if (result.status === 200) {
        setRecipes(result.data.hits);
        console.log(result.data.hits);
      }
    } else {
      alert("Please fill the form!");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes?.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe?.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={HomeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
