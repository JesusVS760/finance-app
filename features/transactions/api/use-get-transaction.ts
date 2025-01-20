import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

export const useGetTransaction = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["transaction", { id }],
    queryFn: async () => {
      const response = await client.api.transactions[":id"].$get({
        param: { id },
      });

      if (!response) {
        throw new Error("Failed to fetch transaction");
      }
      const { data } = (await response.json()) as unknown as {
        data: {
          name: string;
          id: string;
        };
      };
      return data;
    },
  });
  return query;
};
