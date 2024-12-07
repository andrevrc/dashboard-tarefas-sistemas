import { getTarefasByStatus, getTarefasByTipos, getTarefasFinalizadasByTipos } from "@/app/lib/acesso-redmine";
import { getStatusId, getTiposChamadosId } from "@/app/lib/conexao-firebase";
import { infoTelaInicial, Modulo, Status, TipoTarefa } from "@/app/lib/tipos-dados";
import { infoTarefas } from "@/app/lib/util-types";
import InfoGeral from "@/app/ui/geral/infoGeral";
import Menu from "@/app/ui/geral/menu-lateral";
import QuadroTarefas from "@/app/ui/geral/quadro-tarefas";

export default async function ViewStatus(props : {params: Promise<{id: string}>}) {
    const params = await props.params;
    const id = params.id;

    let s: Status = await getStatusId(id);
    let dadosAbertas = await getTarefasByStatus(s.idRedmine);
    //let dadosFechadas = await getTarefasFinalizadasByTipos(t.idRedmine);
    let tarefas = infoTarefas(dadosAbertas["issues"]);

    let info: infoTelaInicial = {
        qtdProjetos: 0,
        qtdTarefasAbertas: dadosAbertas["total_count"],
        qtdTarefasFinalizadas: 0,
        qtdModulos: 0,
        qtdProjetosCadastrados: 0,
        desc: s.status
    }

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"status"} />

            <div className="flex-grow flex flex-col content-start w-5/6">
                <InfoGeral opcao="Status" dados={info} />
                <QuadroTarefas tarefas={tarefas} />
            </div>
        </main>
    );
}