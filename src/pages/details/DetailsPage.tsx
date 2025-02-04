import type { DetailsLoaderResult } from "./DetailsLoader";
import { useLoaderData } from "react-router-dom";

function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  return (
    <div>
      <h1 className="text-lg font-bold py-2 uppercase">{details.name}</h1>
      <div>
        <h1 className="text-lg font-bold py-1">Description</h1>
        <div className="bg-gray-200 rounded p-2">{details.description}</div>
      </div>

      {details.author?.name && (
        <div>
          <h1 className="text-lg font-bold py-1">Author</h1>
          <div className="bg-gray-200 rounded p-2">{details.author.name}</div>
        </div>
      )}
      <div>
        <h1 className="text-lg font-bold py-1">License</h1>
        <div className="bg-gray-200 rounded p-2">{details.license}</div>
      </div>
    </div>
  );
}

export default DetailsPage;
