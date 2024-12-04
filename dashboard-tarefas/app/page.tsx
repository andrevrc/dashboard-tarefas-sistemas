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

  const info: infoTelaInicial = {
    qtdProjetos: qtdProjetos,
    qtdTarefasAbertas: qtdTarefasAbertas,
    qtdTarefasFinalizadas: qtdTarefasFinalizadas,
    qtdUnidades: 0,
    qtdProjetosCadastrados: 0
  }

  return (
    <Inicio dados={info} />
  );
}

export function infoTarefas(dados: any) {
  let tarefas: any = [];

  dados.map((task: any) => {
    const tarefa: Tarefa = {
      idTarefa: task["id"],
      titulo: task["subject"],
      prioridade: task["priority"],
      projeto: task["project"],
      data: new Date(task["start_date"])
    };

    tarefas.push(tarefa);
  });

  return tarefas;
}