import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cryptos" },
    { name: "Crypto Screener", content: "Welcome to Crypto Screener" },
  ];
}

export default function Home() {
  return (
    <div>
      <Button className="bg-blue-600">Click Me</Button>
    </div>
  );
}
