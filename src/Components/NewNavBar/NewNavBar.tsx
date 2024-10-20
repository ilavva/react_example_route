import "./NewNavBar.css";

import { Link } from "react-router-dom";
import { NavItem } from "./NavBarInfo";

export const NewNavBar = (props: { theArr: NavItem[] }) => {
  return (
    <div>
      <div className="NewNavBar">
        {props.theArr.map((curr) => {
          return (
            <div key={curr.key}>
              <Link to={curr.hrefStr}>{curr.displayStr}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
