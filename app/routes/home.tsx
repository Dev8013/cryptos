import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cryptos" },
    { name: "Crypto Screener", content: "Welcome to Crypto Screener" },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
