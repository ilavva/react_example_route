import { About } from "../About/About";
import CheesecakeRecipe from "../Lesson1-components/CheesecakeRecipe/CheesecakeRecipe";
import { Gallery } from "../Lesson1-components/Gallery/Gallery";
import { Home } from "../Home/Home";
import { ContactUs } from "../ContactUs/ContactUs";
import { Food } from "../Food-Components/Food/Food";

import { Lesson1 } from "../Lesson1-components/Lesson1/Lesson1";
import { Parent1 } from "../Lesson2-Components/Parent1/Parent1";
import { Conference } from "../Conference-Components/Conference/Conference";
import { FoodRecipies } from "../FoodRecipies-Components/FoodRecipies/FoodRecipies";
export type NavItem = {
  key: number;
  displayStr: string;
  hrefStr: string;
  refComponent: React.ElementType;
};

export const arrForNav = [
  {
    key: 2,
    displayStr: "Conference",
    hrefStr: "/conference",
    refComponent: Conference,
  },

  {
    key: 2,
    displayStr: "Food Recipies",
    hrefStr: "/FoodRecipies",
    refComponent: FoodRecipies,
  },

  {
    key: 4,
    displayStr: "Meals",
    hrefStr: "/food",
    refComponent: Food,
  },
  {
    key: 5,
    displayStr: "Contact Us",
    hrefStr: "/contact",
    refComponent: ContactUs,
  },
  {
    key: 1,
    displayStr: "About",
    hrefStr: "/about",
    refComponent: About,
  },
  {
    key: 3,
    displayStr: "Lesson1",
    hrefStr: "/lesson1",
    refComponent: Lesson1,
  },
  {
    key: 6,
    displayStr: "Lesson2",
    hrefStr: "/lession2",
    refComponent: Parent1,
  },
  {
    key: 7,
    displayStr: "Gallery",
    hrefStr: "/gallery",
    refComponent: Gallery,
  },
  {
    key: 8,
    displayStr: "Recipe",
    hrefStr: "/cheese",
    refComponent: CheesecakeRecipe,
  },
  {
    key: 0,
    displayStr: "Home",
    hrefStr: "/",
    refComponent: Home,
  },
];

// export const arrForNav2 = [
//   {
//     displayStr: "Base",
//     hrefStr: "/",
//     refComponent: Home,
//   },
//   {
//     displayStr: "About",
//     hrefStr: "/about",
//     refComponent: About,
//   },
//   {
//     displayStr: "Products",
//     hrefStr: "/products",
//     refComponent: Gallery,
//   },
//   {
//     displayStr: "Recipe",
//     hrefStr: "/cheese",
//     refComponent: CheesecakeRecipe,
//   },
// ];
