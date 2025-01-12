import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";

export const useGetCategory = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["category", { id }],
    queryFn: async () => {
      const response = await client.api.categories[":id"].$get({
        param: { id },
      });

      if (!response) {
        throw new Error("Failed to fetch category");
      }
      const { data } = (await response.json()) as {
        data: { id: string; name: string };
      };
      return data;
    },
  });
  return query;
};
