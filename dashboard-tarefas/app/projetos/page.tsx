import Menu from "@/app/ui/geral/menu-lateral";
import { BarChart } from "@/app/ui/graficos/graficoBarras"
import { infoTelaInicial } from "../lib/tipos-dados";
import { getTarefas, getTarefasFinalizadas, getTarefasListaProjetos } from "../lib/acesso-redmine";
import { infoTarefas } from "../page";
import InfoGeralProjetos from "../ui/projetos/infoProjetosGeral";
import QuadroProjetos from "../ui/projetos/quadro-projetos";
import { getProjetos } from "@/app/lib/conexao-firebase";

export default async function Page() {
    let projetos = await getProjetos();
    let qtdProjetos = projetos.length;

    let qtdTarefasAbertas: number = 0;
    let qtdTarefasFechadas: number = 0;

    for(let i = 0; i < projetos.length; i++) {
        let tarefaAbertas = await getTarefas(projetos[i]["idRedmine"]);
        let tarefasFinalizadas = await getTarefasFinalizadas(projetos[i]["idRedmine"]);

        projetos[i].qtdTarefasAbertas = tarefaAbertas["total_count"];
        projetos[i].qtdTarefasFechadas = tarefasFinalizadas["total_count"];

        qtdTarefasAbertas += tarefaAbertas["total_count"];
        qtdTarefasFechadas += tarefasFinalizadas["total_count"];
    }
    
    let info: infoTelaInicial = {
        qtdProjetos: qtdProjetos,
        qtdTarefasAbertas: qtdTarefasAbertas,
        qtdTarefasFinalizadas: qtdTarefasFechadas,
        qtdUnidades: 0,
        qtdProjetosCadastrados: 0
    }

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"projetos"} />
            <div className="flex-grow flex flex-col content-start w-5/6">
                <InfoGeralProjetos dados={info} />
                <QuadroProjetos projetos={projetos} />
            </div>
            
            {/* <BarChart
                className="h-80"
                data={chartdata}
                index="date"
                categories={["SolarPanels", "Inverters"]}
                valueFormatter={(number: number) =>
                `$${Intl.NumberFormat("us").format(number).toString()}`
                }
                onValueChange={(v: any) => console.log(v)}
            /> */}

        </main>
    );
}



// const chartdata = [
//   {
//     date: "Jan 23",
//     SolarPanels: 2890,
//     Inverters: 2338,
//   },
//   {
//     date: "Feb 23",
//     SolarPanels: 2756,
//     Inverters: 2103,
//   },
//   {
//     date: "Mar 23",
//     SolarPanels: 3322,
//     Inverters: 2194,
//   },
//   {
//     date: "Apr 23",
//     SolarPanels: 3470,
//     Inverters: 2108,
//   },
//   {
//     date: "May 23",
//     SolarPanels: 3475,
//     Inverters: 1812,
//   },
//   {
//     date: "Jun 23",
//     SolarPanels: 3129,
//     Inverters: 1726,
//   },
//   {
//     date: "Jul 23",
//     SolarPanels: 3490,
//     Inverters: 1982,
//   },
//   {
//     date: "Aug 23",
//     SolarPanels: 2903,
//     Inverters: 2012,
//   },
//   {
//     date: "Sep 23",
//     SolarPanels: 2643,
//     Inverters: 2342,
//   },
//   {
//     date: "Oct 23",
//     SolarPanels: 2837,
//     Inverters: 2473,
//   },
//   {
//     date: "Nov 23",
//     SolarPanels: 2954,
//     Inverters: 3848,
//   },
//   {
//     date: "Dec 23",
//     SolarPanels: 3239,
//     Inverters: 3736,
//   },
// ]

// export const BarChartHero = () => (
//   <BarChart
//     className="h-80"
//     data={chartdata}
//     index="date"
//     categories={["SolarPanels", "Inverters"]}
//     valueFormatter={(number: number) =>
//       `$${Intl.NumberFormat("us").format(number).toString()}`
//     }
//     onValueChange={(v) => console.log(v)}
//   />
// )