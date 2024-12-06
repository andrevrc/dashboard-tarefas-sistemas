"use client"

import { Projeto } from "@/app/lib/tipos-dados";
import { ArrowRightIcon, PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { DeleteButton } from "./deleteButton";

export default function QuadroProjetos({ projetos } :{projetos?: Array<Projeto>}) {
    return (
        <div className="my-40 mx-32 grid grid-cols-4 border-1 bg-white rounded-2xl shadow-xl shadow-[#E2E8F0]">
            {/* Título da Tabela */}
            <div className="col-span-4 text-3xl font-bold p-6">Projetos</div>

            { /* Título das Colunas */ }
            <div className="col-span-4 text-2xl text-center font-bold bg-[#F1F5F9] border-[#E2E8F0] border-y-2 grid grid-cols-subgrid py-6">
                <div>Nome</div>
                <div>Tarefas Abertas</div>
                <div>Tarefas Fechadas</div>
                <div>Opções</div>
            </div>

            {/* Informações de Tarefas */}
            {(projetos !== null) && projetos?.map((projeto: Projeto) => (
                <div key={projeto.idRedmine} className="col-span-4 text-xl text-center grid grid-cols-subgrid py-6 border-[#E2E8F0] border-b-2">
                    <div>{projeto.nome}</div>
                    <div className="text-center">{projeto.qtdTarefasAbertas}</div>
                    <div>
                        <span className={clsx("px-6 py-2 text-black rounded-xl")}>{projeto.qtdTarefasFechadas}</span>
                    </div>
                    <div className="flex flex-row justify-center gap-10">
                        <Link href={`/projetos/${projeto.id}/editar`}>
                            <PencilSquareIcon className="w-6" />
                        </Link>

                        <DeleteButton projeto={projeto} />

                        <Link href={`/projetos/projeto/${projeto.id}`}>
                            <ArrowRightIcon className="w-6" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>       
    );
}