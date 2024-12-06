import Inicio from '@/app/ui/geral/inicio';
import { getTarefas, getProjetos, getTarefasFinalizadas } from './lib/acesso-redmine';
import { infoTelaInicial, Tarefa } from '@/app/lib/tipos-dados';

export default async function Page() {
  let tarefasAbertas = await getTarefas(null);
  let lista_tarefas = await infoTarefas(tarefasAbertas["issues"]);
  let qtdTarefasAbertas = tarefasAbertas["total_count"];

  let projetos = await getProjetos();
  let qtdProjetos = projetos["total_count"];

  let tarefasFinalizadas = await getTarefasFinalizadas(null);
  let qtdTarefasFinalizadas = tarefasFinalizadas["total_count"];

  let info: infoTelaInicial = {
    qtdProjetos: qtdProjetos,
    qtdTarefasAbertas: qtdTarefasAbertas,
    qtdTarefasFinalizadas: qtdTarefasFinalizadas,
    qtdModulos: 0,
    qtdProjetosCadastrados: 0
  }

  return (
    <Inicio dados={info} tarefas={lista_tarefas} />
  );
}

export function infoTarefas(dados: any) {
  let tarefas: any = [];

  dados.map((task: any) => {
    const tarefa: Tarefa = {
      idTarefa: task["id"],
      titulo: task["subject"],
      prioridade: {
        id: task["priority"]["id"],
        descricao: task["priority"]["name"]
      },
      projeto: {
        idRedmine: task["project"]["id"],
        nome: task["project"]["name"]
      },
      data: new Date(task["start_date"])
    };

    tarefas.push(tarefa);
  });

  return tarefas;
}