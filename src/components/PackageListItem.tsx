import type { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";

interface PackageListItemProps {
  pack: PackageSummary;
}

function PackageListItem({ pack }: PackageListItemProps) {
  const renderedKeywords = (pack.keywords || []).map((keyword) => {
    return (
      <div
        key={keyword}
        className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
      >
        {keyword}
      </div>
    );
  });
  return (
    <div className="border p-4 rounded flex justify-between items-center flex-col lg:flex-row">
      <div className="flex flex-col gap-2 mb-5 lg:mb-0">
        <Link to={`/packages/${pack.name}`}>{pack.name}</Link>
        <p className="text-sm text-gray-500">{pack.description}</p>
        <div className="flex gap-1 flex-wrap">{renderedKeywords}</div>
      </div>
      <div>
        <Link
          to={`/packages/${pack.name}`}
          className="py-2 px-3 rounded bg-black text-white text-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default PackageListItem;
