import type { PackageSummary } from "../types/packageSummary";

interface SearchResponse {
  objects: {
    package: PackageSummary;
  }[];
}

export async function searchPackage(term: string): Promise<PackageSummary[]> {
  const response = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );
  const data: SearchResponse = await response.json();

  return data.objects.map(
    ({ package: { name, version, description, keywords } }) => {
      return {
        name,
        version,
        description,
        keywords,
      };
    }
  );
}
