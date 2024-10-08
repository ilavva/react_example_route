import "./MainScreen.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NewNavBar } from "../NewNavBar/NewNavBar";
import { arrForNav } from "../NewNavBar/NavBarInfo";

const MainScreen = () => {
  return (
    <div>
      <BrowserRouter>
        <NewNavBar theArr={arrForNav} />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Gallery />} />
          <Route path="/cheese" element={<CheescakeRecipe />} />
        </Routes> */}
        <Routes>
          {arrForNav.map((curr) => (
            <Route
              key={curr.hrefStr}
              path={curr.hrefStr}
              element={<curr.refComponent />}
            />
          ))}
        </Routes>
        <div>Here will go our Footer</div>
      </BrowserRouter>
    </div>
  );
};

export default MainScreen;
