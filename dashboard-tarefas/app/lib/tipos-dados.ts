export type Projeto = {
    idRedmine: number;
    nome: string;
}

export type Unidade = {
    idRedmine: number;
    nomeUnidade: string;
}

export type Tarefa = {
    idTarefa: number;
    titulo: string;
    prioridade: Prioridade;
    projeto: Projeto;
    data: Date;
}

export type Prioridade = {
    id: number;
    descricao: string;
}

export type infoTelaInicial = {
    qtdProjetos: number;
    qtdTarefasAbertas: number;
    qtdTarefasFinalizadas: number;
    qtdProjetosCadastrados: number;
    qtdUnidades: number;
  }