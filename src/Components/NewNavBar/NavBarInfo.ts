import { About } from "../About/About";
import CheesecakeRecipe from "../CheesecakeRecipe/CheesecakeRecipe";
import { Gallery } from "../Gallery/Gallery";
import { Home } from "../Home/Home";
import { ContactUs } from "../ContactUs/ContactUs";
import { Food } from "../Food/Food";

import { Lesson1 } from "../Lesson1/Lesson1";
import { Parent1 } from "../Parent1/Parent1";
import { Conference } from "../Conference/Conference";
export type NavItem = {
  key: number;
  displayStr: string;
  hrefStr: string;
  refComponent: React.ElementType;
};

export const arrForNav = [
  {
    key: 0,
    displayStr: "Home",
    hrefStr: "/",
    refComponent: Home,
  },
  {
    key: 1,
    displayStr: "About",
    hrefStr: "/about",
    refComponent: About,
  },
  {
    key: 2,
    displayStr: "Conference",
    hrefStr: "/conference",
    refComponent: Conference,
  },
  {
    key: 3,
    displayStr: "Products",
    hrefStr: "/products",
    refComponent: Lesson1,
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
    key: 6,
    displayStr: "demo-01",
    hrefStr: "/demo-01",
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
