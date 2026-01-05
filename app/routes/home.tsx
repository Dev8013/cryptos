import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cryptos" },
    { name: "Crypto Screener", content: "Welcome to Crypto Screener" },
  ];
}

export default function Home() {
  return (
    <div className="bg-[#0F1316] min-h-screen text-white">
      <Navbar />
      <section className="grid grid-cols-2 mt-4">
        <div className="bg-[#1E2833] m-2 rounded-md p-2">
          <p>Overview</p>
          {/* Replace with Image */}
          <p>Bitcoin / BTC</p>
          <h1 className="font-bold text-xl">$89,113.00</h1>
        </div>
        <div className="bg-[#1E2833] m-2 rounded-md p-2">
          <p>Trending Coins</p>
          <Table>
            <TableCaption>A list of Trending Cryptos.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead className="text-center">24h Change</TableHead>
      <TableHead className="text-right">Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="">
    <TableRow>
      <TableCell className="font-medium">Bitcoin</TableCell>
      <TableCell className="text-center">+10%</TableCell>
      <TableCell className="text-right">$89,113.00</TableCell>
    </TableRow>
  </TableBody>
          </Table>
        </div>
      </section>
      <section>
        <div className="bg-[#1E2833] m-2 rounded-md p-2">
          <p>Categories</p>
        </div>
      </section>
    </div>
  );
}
