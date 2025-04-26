import { Card, CardContent } from "@/components/ui/card";

export default function SalesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Vendas</h1>
      
      {/* Aqui pode vir gráficos, relatórios, etc */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">Total de Vendas</h2>
          <p className="text-2xl mt-2 font-bold">R$ 50.000</p>
        </CardContent>
      </Card>
    </div>
  );
}
