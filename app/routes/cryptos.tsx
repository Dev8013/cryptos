import React from 'react'
import Navbar from '~/components/Navbar'
import { Input } from '~/components/ui/input'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'

const cryptos = () => {
  return (
    <main>
        <Navbar/>
        <section className='bg-[#0F1316] min-h-screen text-white p-4'>
            <div className='flex items-center justify-between'>
                <p className='font-bold text-xl'>All Tokens</p>
                <Input type='text' placeholder='Search Cryptos' className='w-1/3 bg-[#1E2833]'/>
            </div>
            <div className='mt-6'>
                <Table className='bg-[#1E2833] rounded-md'>
            <TableCaption>A list of Trending Cryptos.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Token</TableHead>
      <TableHead className="text-center">24h Change</TableHead>
      <TableHead className="text-right">Price</TableHead>
        <TableHead className="text-right">Market Cap</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className="">
    <TableRow>
      <TableCell className="font-medium">Bitcoin</TableCell>
      <TableCell className="text-center">+10%</TableCell>
      <TableCell className="text-right">$89,113.00</TableCell>
      <TableCell className="text-right">$89B</TableCell>
    </TableRow>
  </TableBody>
          </Table>
            </div>
        </section>
    </main>
  )
}

export default cryptos