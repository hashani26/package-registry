import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <>
      <Link to="/">NPM Registry</Link>
      <SearchForm />
    </>
  );
}

export default Header;
