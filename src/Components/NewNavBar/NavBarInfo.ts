import { About } from "../About/About";
import CheesecakeRecipe from "../CheesecakeRecipe/CheesecakeRecipe";
import { Gallery } from "../Gallery/Gallery";
import { Home } from "../Home/Home";
import { ContactUs } from "../ContactUs/ContactUs";
import { Food } from "../Food/Food";

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
    refComponent: Gallery,
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
