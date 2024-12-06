import { getTarefasByTipos, getTarefasFinalizadasByTipos } from "@/app/lib/acesso-redmine";
import { getTiposChamadosId } from "@/app/lib/conexao-firebase";
import { infoTelaInicial, Modulo, TipoTarefa } from "@/app/lib/tipos-dados";
import { infoTarefas } from "@/app/lib/util-types";
import InfoGeral from "@/app/ui/geral/infoGeral";
import Menu from "@/app/ui/geral/menu-lateral";
import QuadroTarefas from "@/app/ui/geral/quadro-tarefas";

export default async function ViewTipo(props : {params: Promise<{id: string}>}) {
    const params = await props.params;
    const id = params.id;

    let t: TipoTarefa = await getTiposChamadosId(id);
    let dadosAbertas = await getTarefasByTipos(t.idRedmine);
    let dadosFechadas = await getTarefasFinalizadasByTipos(t.idRedmine);
    let tarefas = infoTarefas(dadosAbertas["issues"]);

    let info: infoTelaInicial = {
        qtdProjetos: 0,
        qtdTarefasAbertas: dadosAbertas["total_count"],
        qtdTarefasFinalizadas: dadosFechadas["total_count"],
        qtdModulos: 0,
        qtdProjetosCadastrados: 0,
        desc: t.descricao
    }

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"tipos-chamados"} />

            <div className="flex-grow flex flex-col content-start w-5/6">
                <InfoGeral opcao="Tipo" dados={info} />
                <QuadroTarefas tarefas={tarefas} />
            </div>
        </main>
    );
}