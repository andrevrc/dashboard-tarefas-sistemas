export type Projeto = {
    id?: string;
    idRedmine: number;
    nome: string;
    descricao?: string;
    qtdTarefasAbertas?: number;
    qtdTarefasFechadas?: number;
}

export type Modulo = {
    id?: string;
    idRedmine: number;
    nomeModulo: string;
    descricao?: string;
    qtdTarefasAbertas?: number;
    qtdTarefasFechadas?: number;
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
    id?: string;
    idRedmine: number;
    descricao: string;
    status: string;
    qTarefasAbertas?: number;
    qTarefasFechadas?: number;
}

export type TipoTarefa = {
    id?: string;
    idRedmine: number;
    tipo: string;
    descricao: string;
    qTarefasAbertas?: number;
    qTarefasFechadas?: number;
}

export type infoTelaInicial = {
    qtdProjetos: number;
    qtdTarefasAbertas: number;
    qtdTarefasFinalizadas: number;
    qtdProjetosCadastrados: number;
    qtdModulos: number;
    qtdTipos?:number;
    qtdStatus?:number;
    qtdFiltros?:number;
    desc?: string;
}

export type filtro = {
    id?: string;
    nomeFiltro: string;
    tipoTarefa?: number;
    status?: number;
    modulo?: number;
    qTarefas?: number;
    desc?: string;
}