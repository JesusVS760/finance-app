"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { columns, Payment } from "./columns";
import { DataTable } from "@/components/ui/data-table";
const AccountsPage = () => {
  const newAccount = useNewAccount();

  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 500,
      status: "success",
      email: "a@example.com",
    },
  ];

  return (
    <div className="max-2-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-non drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
          <Button onClick={newAccount.onOpen} size="sm">
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable filterKey="email" columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
