import { useQuery } from "react-query";
import { getUsers } from "../api/get-users";

const QUERY_KEY = "USER_QUERY";

/**
 * React query hook wrapping get users API call
 * @returns
 */
export const useUserQuery = () => {
  return useQuery(QUERY_KEY, getUsers);
};
