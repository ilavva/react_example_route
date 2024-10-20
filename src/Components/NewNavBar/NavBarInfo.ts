import { About } from "../About/About";
import CheesecakeRecipe from "../CheesecakeRecipe/CheesecakeRecipe";
import { Gallery } from "../Gallery/Gallery";
import { Home } from "../Home/Home";
import { ContactUs } from "../ContactUs/ContactUs";
import { Food } from "../Food/Food";

import { Lesson1 } from "../Lesson1/Lesson1";
import { Parent1 } from "../Parent1/Parent1";

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
    displayStr: "Products",
    hrefStr: "/products",
    refComponent: Lesson1,
  },
  {
    key: 3,
    displayStr: "Meals",
    hrefStr: "/food",
    refComponent: Food,
  },
  {
    key: 4,
    displayStr: "Contact Us",
    hrefStr: "/contact",
    refComponent: ContactUs,
  },
  {
    key: 5,
    displayStr: "demo-01",
    hrefStr: "/demo-01",
    refComponent: Parent1,
  },
  {
    key: 6,
    displayStr: "Gallery",
    hrefStr: "/gallery",
    refComponent: Gallery,
  },
  {
    key: 7,
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
