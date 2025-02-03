import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./SearchLoader";

function SearchPage() {
  const data = useLoaderData() as SearchLoaderResult; //why not assert on data?
  console.log("🚀 ~ SearchPage ~ data:", data);

  return <div>Search Page</div>;
}

export default SearchPage;
