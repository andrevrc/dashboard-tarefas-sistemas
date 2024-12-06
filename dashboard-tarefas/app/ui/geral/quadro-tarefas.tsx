import { Tarefa } from "@/app/lib/tipos-dados";
import clsx from "clsx";

export default function QuadroTarefas({ tarefas } :{tarefas?: Array<Tarefa>}) {
    // tarefas?.map((tarefa: Tarefa) => console.log(tarefa.prioridade))

    return (
        <div className="my-40 mx-32 grid grid-cols-5 border-1 bg-white rounded-2xl shadow-xl shadow-[#E2E8F0]">
            {/* Título da Tabela */}
            <div className="col-span-5 text-3xl font-bold p-6">Últimas tarefas</div>

            { /* Título das Colunas */ }
            <div className="col-span-5 text-2xl text-center font-bold bg-[#F1F5F9] border-[#E2E8F0] border-y-2 grid grid-cols-subgrid py-6">
                <div className="">#</div>
                <div>Título</div>
                <div>Prioridade</div>
                <div>Projeto</div>
                <div>Progresso</div>
            </div>

            {/* Informações de Tarefas */}
            {tarefas?.map((tarefa: Tarefa) => (
                <div key={tarefa.idTarefa} className="col-span-5 text-xl text-center grid grid-cols-subgrid py-6 border-[#E2E8F0] border-b-2">
                    <div>{tarefa.idTarefa}</div>
                    <div className="text-left">{tarefa.titulo}</div>
                    <div>
                        <span className={clsx("px-6 py-2 text-white rounded-xl",{
                            "bg-alta": tarefa.prioridade.id === 5,
                            "bg-medio": tarefa.prioridade.id === 6,
                            "bg-baixa": tarefa.prioridade.id === 7,
                            "bg-urgente": tarefa.prioridade.id === 4 || tarefa.prioridade.id === 19
                        })}>{tarefa.prioridade.descricao}</span>
                    </div>
                    <div>{tarefa.projeto.nome}</div>
                    <div>{tarefa.data.getDay()}/{tarefa.data.getMonth()}/{tarefa.data.getFullYear()}</div>
                </div>
            ))}

            {/* { <div className="col-span-5 text-xl border-b-2 border-slate-100 text-center grid grid-cols-subgrid py-6">
                <div>348999</div>
                <div className="text-left">Implementação de testes automatizados 2</div>
                <div>
                    <span className="px-6 py-2 bg-medio text-white rounded-xl">Média</span>
                </div>
                <div>SIPAC</div>
                <div>100%</div>
            </div> } */}
        </div>       
    );
}