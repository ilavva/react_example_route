import { About } from "../About/About";
import CheesecakeRecipe from "../CheesecakeRecipe/CheesecakeRecipe";
import { Gallery } from "../Gallery/Gallery";
import { Home } from "../Home/Home";
import { ContactUs } from "../ContactUs/ContactUs";

export type NavItem = {
  displayStr: string;
  hrefStr: string;
  refComponent: React.ElementType;
};

export const arrForNav = [
  {
    displayStr: "Home",
    hrefStr: "/",
    refComponent: Home,
  },
  {
    displayStr: "About",
    hrefStr: "/about",
    refComponent: About,
  },
  {
    displayStr: "Products",
    hrefStr: "/products",
    refComponent: Gallery,
  },
  {
    displayStr: "CheeseCake",
    hrefStr: "/cheese",
    refComponent: CheesecakeRecipe,
  },
  {
    displayStr: "Contact Us",
    hrefStr: "/contact",
    refComponent: ContactUs,
  },
];

export const arrForNav2 = [
  {
    displayStr: "Base",
    hrefStr: "/",
    refComponent: Home,
  },
  {
    displayStr: "About",
    hrefStr: "/about",
    refComponent: About,
  },
  {
    displayStr: "Products",
    hrefStr: "/products",
    refComponent: Gallery,
  },
  {
    displayStr: "Recipe",
    hrefStr: "/cheese",
    refComponent: CheesecakeRecipe,
  },
];
