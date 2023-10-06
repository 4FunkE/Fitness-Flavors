import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Food.css";
import GreekSalad from "../../src/components/images/food/GreekSalad.jpg";
import Kale from "../../src/components/images/food/kale.jpg";
import ChickenSalad from "../../src/components/images/food/Grilledchickensalad.jpg";
import QuinoaSalad from "../../src/components/images/food/Quinoasalad.jpg";
const Food = () => {
  const [apiData, setApiData] = useState([]);
  const apiKey = "1"; // api key is in the dotenv

  useEffect(() => {
    axios
      .get(`https://api.spoonacular.com/food/search?query=apple&number=10`, {
        headers: {
          "X-Api-Key": apiKey,
        },
      })
      .then((response) => {
        setApiData(response.data.searchResults);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
      });
  }, [apiKey]);

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
      image: "https://example.com/grilled-salmon.jpg",
      content:
        "Grilled salmon fillet with asparagus. Perfect for post-workout muscle recovery.",
      recipeLink: "https://example.com/greek-salad-recipe",
    },

    {
      name: "Protein Pancakes",
      image: "https://example.com/protein-pancakes.jpg",
      content:
        "High-protein pancakes made with oats and Greek yogurt. Great for a post-workout breakfast.",
      recipeLink: "https://example.com/greek-salad-recipe",
    },
    {
      name: "Green Smoothie Bowl",
      image: "https://example.com/green-smoothie-bowl.jpg",
      content:
        "A green smoothie bowl topped with fresh fruits and seeds. Energize your morning workout.",
      recipeLink: "https://example.com/greek-salad-recipe",
    },
    {
      name: "Turkey and Avocado Wrap",
      image: "https://example.com/turkey-avocado-wrap.jpg",
      content:
        "A whole-grain turkey and avocado wrap. A balanced meal for pre or post-workout fuel.",
      recipeLink: "https://example.com/greek-salad-recipe",
    },
    {
      name: "Mixed Nuts",
      image: "https://example.com/mixed-nuts.jpg",
      content:
        "A handful of mixed nuts for a quick and healthy pre-workout snack.",
      recipeLink: "https://example.com/greek-salad-recipe",
    },
    {
      name: "Cucumber and Hummus",
      image: "https://example.com/cucumber-hummus.jpg",
      content:
        "Crispy cucumber slices with hummus. A refreshing and nutritious pre-workout option.",
      recipeLink: "https://example.com/greek-salad-recipe",
    },
    {
      name: "Greek Yogurt Parfait",
      image: "https://example.com/greek-yogurt-parfait.jpg",
      content:
        "Layered Greek yogurt parfait with berries and granola. Ideal for post-workout recovery.",
      recipeLink: "https://example.com/greek-salad-recipe",
    },

    // {
    //   name: "Sushi Rolls",
    //   image: "https://example.com/sushi-rolls.jpg",
    //   content: "Fresh and delicious sushi rolls with various fillings.",
    // },

    {
      name: "Avocado Toast",
      image: "https://example.com/avocado-toast.jpg",
      content:
        "Avocado toast with a sprinkle of salt and pepper. A healthy breakfast choice.",
      recipeLink: "https://example.com/greek-salad-recipe",
    },
    // {
    //   name: "Mango Smoothie",
    //   image: "https://example.com/mango-smoothie.jpg",
    //   content: "Cool off with a refreshing mango smoothie on a hot day.",
    // },
    {
      name: "Greek Yogurt Parfait",
      image: "https://example.com/greek-yogurt-parfait.jpg",
      content:
        "A delicious Greek yogurt parfait with layers of fresh berries, honey, and granola. ",
      recipeLink: "https://example.com/greek-salad-recipe",
    },
    {
      name: "Oatmeal with Almonds and Bananas",
      image: "https://example.com/oatmeal-almonds-bananas.jpg",
      content:
        "Warm and comforting oatmeal topped with sliced almonds and ripe banana.",
      recipeLink: "https://example.com/greek-salad-recipe",
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
