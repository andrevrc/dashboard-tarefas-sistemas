import { getTarefasByModulos, getTarefasFinalizadasByModulos } from "@/app/lib/acesso-redmine";
import { getModuloId } from "@/app/lib/conexao-firebase";
import { infoTelaInicial, Modulo } from "@/app/lib/tipos-dados";
import { infoTarefas } from "@/app/lib/util-types";
import InfoGeral from "@/app/ui/geral/infoGeral";
import Menu from "@/app/ui/geral/menu-lateral";
import QuadroTarefas from "@/app/ui/geral/quadro-tarefas";

export default async function EditarProjeto(props : {params: Promise<{id: string}>}) {
    const params = await props.params;
    const id = params.id;

    let m: Modulo = await getModuloId(id);
    let dadosAbertas = await getTarefasByModulos(m.idRedmine);
    let dadosFechadas = await getTarefasFinalizadasByModulos(m.idRedmine);
    let tarefas = infoTarefas(dadosAbertas["issues"]);

    let info: infoTelaInicial = {
        qtdProjetos: 0,
        qtdTarefasAbertas: dadosAbertas["total_count"],
        qtdTarefasFinalizadas: dadosFechadas["total_count"],
        qtdModulos: 0,
        qtdProjetosCadastrados: 0,
        desc: m.nomeModulo
    }

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"modulos"} />

            <div className="flex-grow flex flex-col content-start w-5/6">
                <InfoGeral opcao="Módulos" dados={info} />
                <QuadroTarefas tarefas={tarefas} />
            </div>
        </main>
    );
}