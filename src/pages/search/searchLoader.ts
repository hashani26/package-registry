import { searchPackage } from "../../api/queries/searchPackage";
import type { PackageSummary } from "../../api/types/packageSummary";

export interface SearchLoaderResult {
  searchResults: PackageSummary[];
}

export async function searchLoader({ request }: { request: Request }) : Promise<SearchLoaderResult> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  if (!term) {
    throw new Error("Search term must be provided!");
  }

  const res = await searchPackage(term);

  return { searchResults: res };
}
