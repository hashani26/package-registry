import { useLoaderData } from "react-router-dom";

function SearchPage() {
  const data = useLoaderData();
  console.log("🚀 ~ SearchPage ~ data:", data)
  
  return <div>Search Page</div>;
}

export default SearchPage;
