import Menu from "@/app/ui/geral/menu-lateral";
import { infoTelaInicial, Modulo, Projeto } from "../../../lib/tipos-dados";
import { getTarefas, getTarefasByModulos, getTarefasFinalizadas, getTarefasFinalizadasByModulos, getTarefasListaProjetos } from "../../../lib/acesso-redmine";
import { infoTarefas } from "../../../page";
import { getModuloId, getProjetos, getProjetosId } from "@/app/lib/conexao-firebase";
import InfoGeral from "@/app/ui/geral/infoGeral";
import QuadroTarefas from "@/app/ui/geral/quadro-tarefas";

export default async function ProjetoA(props : {params: Promise<{id: string}>}) {
  const params = await props.params;
  const id = params.id;
  const projeto:Projeto = await getProjetosId(id);
  
  const tarefaAbertas = await getTarefas(projeto.idRedmine);
  const tarefasFinalizadas = await getTarefasFinalizadas(projeto.idRedmine);
  let tarefas = infoTarefas(tarefaAbertas["issues"]);

  const qtdTarefasAbertas = tarefaAbertas.total_count;
  const qtdTarefasFechadas = tarefasFinalizadas.total_count;
  
  let info: infoTelaInicial = {
    qtdProjetos: 0,
    qtdTarefasAbertas: qtdTarefasAbertas,
    qtdTarefasFinalizadas: qtdTarefasFechadas,
    qtdModulos: 0,
    qtdProjetosCadastrados: 0,
 }

  return (
    <main className="flex flex-row w-screen h-screen">
        <Menu opcaoMenu={"projetos"} />

        <div className="flex-grow flex flex-col content-start w-5/6">
            <InfoGeral opcao="Projetos" dados={info} />
            <QuadroTarefas tarefas={tarefas} />
        </div>
    </main>
  );
}
