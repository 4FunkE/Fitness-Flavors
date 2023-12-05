import React, { useState, useEffect } from "react";

// Most if not all imagages u see were taken from : https://pixabay.com/ and https://unsplash.com/
// Others were taken from pinterest and twitter
//
// import axios from "axios";
import "../styles/Food.css";
import GreekSalad from "../../src/components/images/food/GreekSalad.jpg";
import Kale from "../../src/components/images/food/kale.jpg";
import ChickenSalad from "../../src/components/images/food/Grilledchickensalad.jpg";
import QuinoaSalad from "../../src/components/images/food/Quinoasalad.jpg";
import GrilledSalmon from "../../src/components/images/food/GrilledSalmon.jpg";
import ProteinPancakes from "../../src/components/images/food/ProteinPancakes.jpg";
import GreenSmoothieBowl from "../../src/components/images/food/GreenSmoothieBowl.jpg";
import TurkeyWrap from "../../src/components/images/food/TurkeyWrap.jpg";
import Nuts from "../../src/components/images/food/NUTS.jpg";
import CucumberHummus from "../../src/components/images/food/CucumberHummus.jpg";
import GreekYogurt from "../../src/components/images/food/GreekYogurt.jpg";
import OatMeal from "../../src/components/images/food/OatMeal.jpg";

const Food = () => {
  const [apiData, setApiData] = useState([]);
  const apiKey = "1"; // api key is in the dotenv

  // useEffect(() => {
  //   axios
  //     .get(`https://api.spoonacular.com/food/search?query=apple&number=10`, {
  //       headers: {
  //         "X-Api-Key": apiKey,
  //       },
  //     })
  //     .then((response) => {
  //       setApiData(response.data.searchResults);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching food data:", error);
  //     });
  // }, [apiKey]);

  // Hardcoded food data
  const hardcodedData = [
    {
      name: "Greek Salad",
      image: GreekSalad,
      content: "A delicious and healthy Greek Salad. Perfect for a light meal.",
      recipeLink: "https://downshiftology.com/recipes/greek-salad/",
    },

    {
      name: "Grilled Chicken Salad",
      image: ChickenSalad,
      content:
        "Grilled chicken salad with fresh greens. Ideal for post-workout recovery.",
      recipeLink: "https://www.wholesomeyum.com/grilled-chicken-salad/",
    },
    // Add more items as needed
    {
      name: "Quinoa Salad",
      image: QuinoaSalad,
      content:
        "A protein-packed quinoa salad with fresh vegetables. Ideal for a pre-workout meal.",
      recipeLink: "https://www.inspiredtaste.net/38096/quinoa-salad-recipe/",
    },

    {
      name: "Kale and Quinoa Bowl",
      image: Kale,
      content:
        "A nutrient-packed kale and quinoa bowl with a lemon-tahini dressing. Perfect for post-workout.",
      recipeLink: "https://example.com/greek-salad-recipe",
    },

    // {
    //   name: "Mixed Berry Smoothie",
    //   image: "https://example.com/mixed-berry-smoothie.jpg",
    //   content:
    //     "Fuel your workout with a nutritious mixed berry smoothie loaded with antioxidants.",
    // },
    {
      name: "Grilled Salmon",
      image: GrilledSalmon,
      content:
        "Grilled salmon fillet with asparagus. Perfect for post-workout muscle recovery.",
      recipeLink: "https://www.allrecipes.com/recipe/12720/grilled-salmon-i/",
    },

    {
      name: "Protein Pancakes",
      image: ProteinPancakes,
      content:
        "High-protein pancakes made with oats and Greek yogurt. Great for a post-workout breakfast.",
      recipeLink: "https://eatthegains.com/protein-pancakes/",
    },
    {
      name: "Green Smoothie Bowl",
      // IMAGE WAS TAKEN FROM : https://minimalistbaker.com/super-green-smoothie-bowl/
      image: GreenSmoothieBowl,
      content:
        "A green smoothie bowl topped with fresh fruits and seeds. Energize your morning workout.",
      recipeLink: "https://minimalistbaker.com/super-green-smoothie-bowl/",
    },
    {
      name: "Turkey and Avocado Wrap",
      image: TurkeyWrap,
      content:
        "A whole-grain turkey and avocado wrap. A balanced meal for pre or post-workout fuel.",
      recipeLink:
        "https://www.foodnetwork.com/recipes/food-network-kitchen/turkey-avocado-wrap-recipe-1928232",
    },
    {
      name: "Mixed Nuts",
      image: Nuts,
      content:
        "A handful of mixed nuts for a quick and healthy pre-workout snack.",
      recipeLink:
        "https://www.foodnetwork.com/recipes/mixed-nuts-with-rosemary-recipe-1939549",
    },
    {
      name: "Cucumber and Hummus",
      // IMAGE IS FROM https://anothertablespoon.com/cucumber-hummus/
      image: CucumberHummus,
      content:
        "Crispy cucumber slices with hummus. A refreshing and nutritious pre-workout option.",
      recipeLink: "https://anothertablespoon.com/cucumber-hummus/",
    },

    {
      name: "Greek Yogurt Parfait",
      image: GreekYogurt,
      content:
        "A delicious Greek yogurt parfait with layers of fresh berries, honey, and granola. ",
      recipeLink:
        "https://www.foodnetwork.com/recipes/best-yogurt-parfait-ever-2138618",
    },
    {
      name: "Oatmeal with Almonds and Bananas",
      image: OatMeal,
      // IMAGE FROM: https://www.cookingclassy.com/oatmeal-eight-ways/
      content:
        "Warm and comforting oatmeal topped with sliced almonds and ripe banana.",
      recipeLink: "https://www.cookingclassy.com/oatmeal-eight-ways/",
    },

    // Add more items as needed
  ];
  return (
    <div className="foodname bg-custom-dark-blue justify-center text-center items-center pt-12 text-3xl">
      Most Popular Food
      <div className="bg-custom-dark-blue food-container flex flex-wrap justify-center items-center gap-10 pt-12 pb-32 text-sm ">
        {/* Render API-Fetched Data */}
        {apiData.map((foodItem) => (
          <div
            key={foodItem.name}
            className="border border-gray-300 rounded-2xl p-4 flex flex-col items-center text-center"
          >
            <img
              src={foodItem.image}
              alt={foodItem.name}
              className="w-full h-auto rounded-2xl"
            />
            <h3 className="text-lg font-semibold mt-2">{foodItem.name}</h3>
            <p className="text-gray-600">{foodItem.content}</p>
            {/* Add a link to the recipe */}
            <a
              href={foodItem.recipeLink}
              className="text-custom-blue mt-2 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recipe Link
            </a>
          </div>
        ))}
        {/* Render Hardcoded Data */}
        {hardcodedData.map((foodItem) => (
          <div
            key={foodItem.name}
            className="border border-gray-300 text-black rounded-2xl p-4 bg-custom-secondary w-96 text-center flex flex-col items-center"
          >
            <img
              src={foodItem.image}
              alt={foodItem.name}
              className="w-full h-auto rounded-2xl food-image"
            />
            <h3 className="text-lg font-semibold mt-2">{foodItem.name}</h3>
            <p className="text-gray-600">{foodItem.content}</p>
            {/* Add a link to the recipe */}
            <a
              href={foodItem.recipeLink}
              className="text-custom-blue mt-2 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Like it? Try It!
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
