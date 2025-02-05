import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

function SearchPage() {
  const data = useLoaderData() as SearchLoaderResult; //why not assert on data?
  console.log("🚀 ~ SearchPage ~ data:", data);

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">
        {data.searchResults.map((pack) => (
          <PackageListItem key={pack.name} pack={pack} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
