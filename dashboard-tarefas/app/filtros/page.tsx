import Menu from "@/app/ui/geral/menu-lateral";
import { infoTelaInicial } from "../lib/tipos-dados";
import { getTarefas, getTarefasByFiltros, getTarefasByModulos, getTarefasFinalizadas, getTarefasFinalizadasByModulos } from "@/app/lib/acesso-redmine";
import InfoGeralProjetos from "@/app/ui/projetos/infoProjetosGeral";
import { getFiltros, getModulos } from "@/app/lib/conexao-firebase";
import QuadroModulos from "../ui/modulos/quadro-modulos";
import Quadro from "../ui/geral/quadro";
import QuadroFiltro from "../ui/geral/quadro-filtro";

export default async function Page() {
    let filtros = await getFiltros();
    let qtdfiltros = filtros.length;

    console.log(filtros);

    let qtdTarefasAbertas: number = 0;
    let qtdTarefasFechadas: number = 0;

    for(let i = 0; i < filtros.length; i++) {
        let tarefas = await getTarefasByFiltros(filtros[i]);

        filtros[i].qTarefas = tarefas["total_count"];

        qtdTarefasAbertas += tarefas["total_count"];
    }
    
    let info: infoTelaInicial = {
        qtdProjetos: 0,
        qtdTarefasAbertas: qtdTarefasAbertas,
        qtdTarefasFinalizadas: qtdTarefasFechadas,
        qtdModulos: 0,
        qtdFiltros: qtdfiltros,
        qtdProjetosCadastrados: 0
    }

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"filtros"} />
            <div className="flex-grow flex flex-col content-start w-5/6">
                <InfoGeralProjetos opcao="Filtros" dados={info} />
                <QuadroFiltro filtros={filtros} />
            </div>
        </main>
    );
}