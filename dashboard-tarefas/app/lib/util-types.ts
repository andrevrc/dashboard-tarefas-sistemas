import { Tarefa } from "./tipos-dados";

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