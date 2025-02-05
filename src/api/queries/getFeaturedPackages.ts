import type { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES = ["react", "typescript", "vite", "esbuild"];

export async function getFeaturedPackages(): Promise<PackageDetails[]> {
  const promises = FEATURED_PACKAGES.map(async (packageName) => {
    const res = await fetch(`https://registry.npmjs.org/${packageName}`);
    return res.json();
  });

  const data = await Promise.all(promises);

  return data as PackageDetails[];
}
