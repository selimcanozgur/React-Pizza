import Logo from "./Logo";
import SearchOrder from "../features/order/SearchOrder";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
