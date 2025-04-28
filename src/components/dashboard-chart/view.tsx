"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Janeiro', vendas: 4000, usuarios: 2400 },
  { name: 'Fevereiro', vendas: 3000, usuarios: 1398 },
  { name: 'Março', vendas: 2000, usuarios: 9800 },
  { name: 'Abril', vendas: 2780, usuarios: 3908 },
];

export default function DashboardChart() {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">Resumo Mensal</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="vendas" fill="#8884d8" />
              <Bar dataKey="usuarios" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
