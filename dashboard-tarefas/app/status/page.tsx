import Menu from "@/app/ui/geral/menu-lateral";
import { infoTelaInicial } from "../lib/tipos-dados";
import { getTarefasByStatus, getTarefasByTipos, getTarefasFinalizadasByTipos } from "@/app/lib/acesso-redmine";
import InfoGeralProjetos from "@/app/ui/projetos/infoProjetosGeral";
import { getStatus } from "@/app/lib/conexao-firebase";
import Quadro from "../ui/geral/quadro";

export default async function Page() {
    let status = await getStatus();
    let qtdStatus = status.length;

    let qtdTarefasAbertas: number = 0;
    let qtdTarefasFechadas: number = 0;

    for(let i = 0; i < status.length; i++) {
        let tarefaStatus = await getTarefasByStatus(status[i]["idRedmine"]);

        status[i].qTarefasAbertas = tarefaStatus["total_count"];

        qtdTarefasAbertas += tarefaStatus["total_count"];
    }
    
    let info: infoTelaInicial = {
        qtdProjetos: 0,
        qtdTarefasAbertas: qtdTarefasAbertas,
        qtdTarefasFinalizadas: qtdTarefasFechadas,
        qtdModulos: 0,
        qtdStatus: qtdStatus,
        qtdProjetosCadastrados: 0
    }

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"status"} />
            <div className="flex-grow flex flex-col content-start w-5/6">
                <InfoGeralProjetos opcao="Status" dados={info} />
                <Quadro tipo="Status" entidades={status} />
            </div>
        </main>
    );
}