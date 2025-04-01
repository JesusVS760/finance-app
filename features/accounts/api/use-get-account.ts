import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

export const useGetAccount = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["account", { id }],
    queryFn: async () => {
      const response = await client.api.accounts[":id"].$get({
        param: { id },
      });
      console.log("account data: ", response);

      if (!response) {
        throw new Error("Failed to fetch accounts");
      }
      const { data }: any = await response.json();
      console.log("account data: ", data);
      // if (!data) {
      //   console.log(response.statusText);
      // }
      console.log(data);
      return data;
    },
  });
  return query;
};
