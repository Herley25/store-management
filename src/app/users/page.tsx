import DashboardChart from "@/components/dashboard-chart/view";
import { Card, CardContent } from "@/components/ui/card";

export default function UsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Usuários</h1>
      
      {/* Aqui pode vir a lista de usuários, gráficos, etc */}
      <DashboardChart />
      
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold">Total de Usuários</h2>
          <p className="text-2xl mt-2 font-bold">150</p>
        </CardContent>
      </Card>
    </div>
  );
}
