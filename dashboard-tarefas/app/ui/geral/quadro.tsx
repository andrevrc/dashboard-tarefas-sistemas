"use client"

import { Status, TipoTarefa } from "@/app/lib/tipos-dados";
import { ArrowRightIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { DeleteButton } from "./deleteButton";

export default function Quadro({ 
    tipo, entidades
} :{
    tipo: "Tipo" | "Status",
    entidades?: Array<TipoTarefa | Status>
}) {
    return (
        <div className="my-40 mx-32 grid grid-cols-4 border-1 bg-white rounded-2xl shadow-xl shadow-[#E2E8F0]">
            {/* Título da Tabela */}
            <div className="col-span-4 text-3xl font-bold p-6">
                {tipo === "Tipo" && "Tipos de Chamados"}
                {tipo === "Status" && "Status"}
            </div>

            { /* Título das Colunas */ }
            <div className="col-span-4 text-2xl text-center font-bold bg-[#F1F5F9] border-[#E2E8F0] border-y-2 grid grid-cols-subgrid py-6">
                <div>
                    {tipo === "Tipo" && "Tipos"}
                    {tipo === "Status" && "Status"}
                </div>

                {(tipo === "Status") && 
                    <div className="col-span-2">Quantidade de Tarefas</div>
                }

                {(tipo !== "Status") && 
                    <>
                    <div>Tarefas Abertas</div>
                    <div>Tarefas Fechadas</div>
                    </>
                }
                <div>Opções</div>
            </div>

            {/* Informações de Tarefas */}
            {(entidades !== null) && entidades?.map((entidade: TipoTarefa | Status) => (
                <div key={entidade.idRedmine} className="col-span-4 text-xl text-center grid grid-cols-subgrid py-6 border-[#E2E8F0] border-b-2">
                    <div>
                        {(tipo === "Tipo") && (entidade as TipoTarefa).tipo}
                        {(tipo === "Status") && (entidade as Status).status}
                    </div>

                    {(tipo === "Status") &&
                        <div className="text-center col-span-2">{entidade.qTarefasAbertas}</div>
                    }

                    {(tipo !== "Status") &&
                        <>
                        <div className="text-center">{entidade.qTarefasAbertas}</div>
                        <div>
                            <span className={clsx("px-6 py-2 text-black rounded-xl")}>{entidade.qTarefasFechadas}</span>
                        </div>
                        </>
                    }

                    
                    <div className="flex flex-row justify-center gap-10">
                        {(tipo === "Tipo") &&
                            <Link href={`/tipos-chamados/${entidade.id}/editar`}>
                                <PencilSquareIcon className="w-6" />
                            </Link>
                        }

                        {(tipo === "Status") &&
                            <Link href={`/status/${entidade.id}/editar`}>
                                <PencilSquareIcon className="w-6" />
                            </Link>
                        }

                        <DeleteButton tipo={tipo} entidade={entidade} />

                        {(tipo === "Tipo") &&
                            <Link href={`/tipos-chamados/tipo/${entidade.id}`}>
                                <ArrowRightIcon className="w-6" />
                            </Link>
                        }

                        {(tipo === "Status") &&
                            <Link href={`/status/status/${entidade.id}`}>
                                <ArrowRightIcon className="w-6" />
                            </Link>
                        }
                    </div>
                </div>
            ))}
        </div>       
    );
}