"use client"

import { filtro, Status, TipoTarefa } from "@/app/lib/tipos-dados";
import { ArrowRightIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { DeleteButton } from "./deleteButton";

export default function QuadroFiltro({ filtros } :{
    filtros?: Array<filtro>
}) {
    return (
        <div className="my-40 mx-32 grid grid-cols-4 border-1 bg-white rounded-2xl shadow-xl shadow-[#E2E8F0]">
            {/* Título da Tabela */}
            <div className="col-span-4 text-3xl font-bold p-6">
                Filtros
            </div>

            { /* Título das Colunas */ }
            <div className="col-span-4 text-2xl text-center font-bold bg-[#F1F5F9] border-[#E2E8F0] border-y-2 grid grid-cols-subgrid py-6">
                <div>
                    Filtro
                </div>

                
                <div className="col-span-2">Quantidade de Tarefas</div>

                <div>Opções</div>
            </div>

            {/* Informações de Tarefas */}
            {filtros?.map((entidade: filtro) => (
                <div key={entidade.id} className="col-span-4 text-xl text-center grid grid-cols-subgrid py-6 border-[#E2E8F0] border-b-2">
                    <div>
                        {entidade?.nomeFiltro}
                    </div>

                    
                    <div className="text-center col-span-2">{entidade?.qTarefas}</div>

                    <div className="flex flex-row justify-center gap-10">
                        <Link href={`/filtros/${entidade.id}/editar`}>
                            <PencilSquareIcon className="w-6" />
                        </Link>
                        
                        <DeleteButton tipo={"Filtro"} entidade={entidade} />

                        
                        <Link href={`/filtros/filtro/${entidade.id}`}>
                            <ArrowRightIcon className="w-6" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>       
    );
}