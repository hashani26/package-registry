import { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetails } from "../../api/types/packageDetails";

interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export async function detailsLoader({
  params,
}: LoaderArgs): Promise<DetailsLoaderResult> {
  if (!params.name) {
    throw Error("provide a route param");
  }
  const res = await getPackage(params.name);
  return {
    details: res,
  };
}
