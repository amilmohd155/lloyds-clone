import { GetCurrentUser } from "@/api/users/me";
import { UserQueryKey } from "@/libs/query-keys";
import { NotifyOnChangeProps, useQuery } from "@tanstack/react-query";

export type UseUserQueryOptions = {
  enabled?: boolean;
  notifyOnChangeProps?: NotifyOnChangeProps;
};

const useUserQuery = (options?: UseUserQueryOptions) => {
  return useQuery({
    queryKey: UserQueryKey.currentUser,
    queryFn: GetCurrentUser,
    ...options,
  });
};

export default useUserQuery;
