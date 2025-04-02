"use client";

import { useMountedState } from "react-use";
import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { EditAccountSheet } from "@/features/accounts/components/edit-account-sheet";
import { NewTranactionSheet } from "@/features/transactions/components/new-transaction-sheet";
import { NewCategorySheet } from "@/features/categories/components/new-category-sheet";

export const SheetProvider = () => {
  const isMounted = useMountedState();
  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />
      <NewTranactionSheet />
      <NewCategorySheet />
    </>
  );
};
