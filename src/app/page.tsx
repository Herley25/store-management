import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (opcional, pode fazer depois) */}
      <nav className="w-64 bg-white p-4 shadow-md hidden md:block">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2">
            <Link href="/sales">
              <Button variant="ghost">Vendas</Button>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/users">
              <Button variant="ghost">Usuários</Button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Vendas Totais</h2>
              <p className="text-2xl mt-2 font-bold">R$ 50.000</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Pedidos Enviados</h2>
              <p className="text-2xl mt-2 font-bold">120</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Pedidos Pendentes</h2>
              <p className="text-2xl mt-2 font-bold">30</p>
            </CardContent>
          </Card>
        </div>

        {/* Aqui depois podemos colocar uma tabela de vendas */}

        {/* Tabela de Vendas */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Últimas Vendas</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#001</TableCell>
                <TableCell>Maria Silva</TableCell>
                <TableCell>R$ 1.200</TableCell>
                <TableCell>
                  <span className="text-green-600 font-semibold">Pago</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#002</TableCell>
                <TableCell>João Souza</TableCell>
                <TableCell>R$ 850</TableCell>
                <TableCell>
                  <span className="text-yellow-500 font-semibold">Pendente</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#003</TableCell>
                <TableCell>Carla Moura</TableCell>
                <TableCell>R$ 3.500</TableCell>
                <TableCell>
                  <span className="text-red-600 font-semibold">Cancelado</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </main>
    </div>
  )
}
