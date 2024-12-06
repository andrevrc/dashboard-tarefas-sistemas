export type Projeto = {
    id?: string;
    idRedmine: number;
    nome: string;
    descricao?: string;
    qtdTarefasAbertas?: number;
    qtdTarefasFechadas?: number;
}

export type Modulo = {
    idRedmine: number;
    nomeModulo: string;
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
    observacao?: string;
}

export type Status = {
    idRedmine: number;
    descricao: string;
}

export type infoTelaInicial = {
    qtdProjetos: number;
    qtdTarefasAbertas: number;
    qtdTarefasFinalizadas: number;
    qtdProjetosCadastrados: number;
    qtdUnidades: number;
}