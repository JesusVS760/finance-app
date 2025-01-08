"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
// import Image from "next/image";

export default function Home() {
  const { onOpen } = useNewAccount();
  return (
    <div onClick={onOpen}>
      <Button>Add an account</Button>
    </div>
  );
}
