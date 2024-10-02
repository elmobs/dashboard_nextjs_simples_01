"use client"
import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { Bar, CartesianGrid, XAxis, BarChart } from "recharts";

export function Chart() {

    const chartData = [
        { month: "Janeiro", produdo_01: 214, produto_02: 187 },
        { month: "Fevereiro", produdo_01: 178, produto_02: 205 },
        { month: "Março", produdo_01: 245, produto_02: 267 },
        { month: "Abril", produdo_01: 298, produto_02: 178 },
        { month: "Maio", produdo_01: 137, produto_02: 234 },
        { month: "Junho", produdo_01: 255, produto_02: 160 },
    ]

    const chartConfig = {
        produdo_01: {
            label: "Protudo 01",
            color: "blue"
        },
        produto_02: {
            label: "Produto 02",
            color: "red",
        },
    } satisfies ChartConfig

    return(
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-700">
                        Demonstrativo de Vendas
                    </CardTitle>
                    <DollarSign className="ml-auto w-4 h-4" />
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false}/>
                        <XAxis 
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Bar dataKey="produdo_01" fill="var(--color-produdo_01)" radius={4}/>
                        <Bar dataKey="produto_02" fill="var(--color-produto_02)" radius={4}/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}