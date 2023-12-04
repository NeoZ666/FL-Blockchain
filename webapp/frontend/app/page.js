"use client";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import { useState } from "react";
import ethers from "ethers";

export default function Home() {
  const [account, setAccount] = useState(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navigation account={account} setAccount={setAccount} />
    </main>
  );
}
