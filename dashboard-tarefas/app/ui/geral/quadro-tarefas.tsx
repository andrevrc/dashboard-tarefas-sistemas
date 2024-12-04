import { Tarefa } from "@/app/lib/tipos-dados";

export default function QuadroTarefas({ tarefas } :{tarefas?: Array<Tarefa>}) {
    return (
        <div className="m-32 grid grid-cols-5 border-1 bg-white rounded-2xl">
            {/* Título da Tabela */}
            <div className="col-span-5 text-3xl font-bold p-6">Últimas tarefas</div>

            {/* Título das Colunas */}
            <div className="col-span-5 text-2xl text-center font-bold bg-slate-50 grid grid-cols-subgrid py-6">
                <div className="">#</div>
                <div>Título</div>
                <div>Prioridade</div>
                <div>Projeto</div>
                <div>Progresso</div>
            </div>

            {/* Informações */}
            <div className="col-span-5 text-xl border-b-2 border-slate-100 text-center grid grid-cols-subgrid py-6">
                <div>348999</div>
                <div className="text-left">Implementação de testes automatizados</div>
                <div>
                    <span className="px-6 py-2 bg-alta text-white rounded-xl">Alta</span>
                </div>
                <div>SIGAA</div>
                <div>100%</div>
            </div>

            <div className="col-span-5 text-xl border-b-2 border-slate-100 text-center grid grid-cols-subgrid py-6">
                <div>348999</div>
                <div className="text-left">Implementação de testes automatizados 2</div>
                <div>
                    <span className="px-6 py-2 bg-medium text-white rounded-xl">Média</span>
                </div>
                <div>SIPAC</div>
                <div>100%</div>
            </div>
        </div>       
    );
}