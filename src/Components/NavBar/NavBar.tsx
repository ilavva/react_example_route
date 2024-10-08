import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div>
        <Link to={"./"}>Home</Link>
      </div>
      <div>
        <Link to={"./about"}>About</Link>
      </div>
      <div>
        <Link to={"./products"}>Products</Link>
      </div>
      <div>
        <Link to={"./cheese"}>Cheesecake</Link>
      </div>
    </div>
  );
}
