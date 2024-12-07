import { getTarefasByFiltros, getTarefasByModulos, getTarefasFinalizadasByModulos } from "@/app/lib/acesso-redmine";
import { getFiltrosId, getModuloId } from "@/app/lib/conexao-firebase";
import { filtro, infoTelaInicial, Modulo } from "@/app/lib/tipos-dados";
import { infoTarefas } from "@/app/lib/util-types";
import InfoGeral from "@/app/ui/geral/infoGeral";
import Menu from "@/app/ui/geral/menu-lateral";
import QuadroTarefas from "@/app/ui/geral/quadro-tarefas";

export default async function EditarModulo(props : {params: Promise<{id: string}>}) {
    const params = await props.params;
    const id = params.id;

    let filtro: filtro = await getFiltrosId(id);
    let dadosAbertas = await getTarefasByFiltros(filtro);
    let tarefas = infoTarefas(dadosAbertas["issues"]);

    let info: infoTelaInicial = {
        qtdProjetos: 0,
        qtdTarefasAbertas: dadosAbertas["total_count"],
        qtdTarefasFinalizadas: 0,
        qtdModulos: 0,
        qtdProjetosCadastrados: 0,
        desc: filtro.nomeFiltro
    }

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"filtros"} />

            <div className="flex-grow flex flex-col content-start w-5/6">
                <InfoGeral opcao="Filtro" dados={info} />
                <QuadroTarefas tarefas={tarefas} />
            </div>
        </main>
    );
}