import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <div className="flex items-center justify-between px-4 border-b h-14">
      <div className="flex items-center space-x-2 text-sm">
        <Link className="text-lg font-bold" to="/">
          NPM Registry
        </Link>
      </div>
      <div className="w-full max-w-xl ml-4">
        <SearchForm />
      </div>
    </div>
  );
}

export default Header;
