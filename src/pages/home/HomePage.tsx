import { Link, useLoaderData } from "react-router-dom";
import type { HomeLoaderResult } from "./homeLoader";

function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  const renderedPackages = featuredPackages.map((p) => {
    return (
      <div
        key={p.name}
        className="flex flex-col justify-between gap-3 border rounded shadow p-4"
      >
        <div className="flex flex-col gap-2 border-bottom border-gray-400">
          <div className="font-bold text-center">{p.name}</div>
          <div className="text-sm text-gray-500 text-center">{p.description}</div>
          <div className="text-sm text-gray-500 text-center">
            {p.maintainers.length} Maintainers
          </div>
        </div>
        <Link
          className="border rounded border-gray-900 text-center"
          to={`/packages/${p.name}`}
        >
          View
        </Link>
      </div>
    );
  });

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">The NPM Registry</h1>
        <p className="mx-auto max-1-[600px] text-gray-500">
          The package manager for javascript Search and view packages
        </p>
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
        {renderedPackages}
      </div>
    </div>
  );
}

export default HomePage;
