import { USER_ENDPOINT } from "../constants";
import { GetUsersModel } from "../types/get-users.model";

/**
 * Fetch users from the API
 * @returns
 */
export const getUsers = async (): Promise<GetUsersModel> => {
  const resp = await fetch(USER_ENDPOINT);

  if (!resp.ok)
    throw new Error(`Response failed with status code: ${resp.status}`);

  const json = await resp.json();

  return json as GetUsersModel;
};
