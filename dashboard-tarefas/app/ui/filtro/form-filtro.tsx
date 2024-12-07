"use client"

import { postFiltro, postStatus, postTiposChamados, updateFiltros, updateModulo, updateProject, updateStatus, updateTiposChamados } from "@/app/lib/conexao-firebase";
import { filtro, Status, TipoTarefa } from "@/app/lib/tipos-dados";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function FormNovoFiltro({element}:{element?: filtro}) {
    const [nome, setNome] = useState<string>("");
    const [tipoTarefa, setTipoTarefa] = useState<number>(0);
    const [status, setStatus] = useState<number>(0);
    const [modulo, setModulo] = useState<number>(0);
    const [descricao, setDescricao] = useState<string>("");

    const handleSubmit = async (e: any) => {
        let sucesso = false;
        let erro = false;

        e.preventDefault();

        if ((element === null || element === undefined) 
                && (nome === "" || descricao === "" || tipoTarefa === 0 || status === 0 || modulo === 0)) {
            //console.log((element === null || element === undefined) );
            erro = true;
        }

        if (erro) {
            console.log("Ocorreu erro.");
            return;
        }

        let t : filtro = {
            nomeFiltro: nome,
            desc: descricao,
            tipoTarefa: tipoTarefa,
            status: status,
            modulo: modulo
        }

        

        if (element === null || element === undefined) {
            sucesso = await postFiltro(t);
        } else {
            if (nome === "")
                t.nomeFiltro = element.nomeFiltro;

            if (descricao === "") {
                t.desc = element.desc;
            }

            if (tipoTarefa === 0)
                t.tipoTarefa = element.tipoTarefa;

            if (status === 0)
                t.status = element.status;

            if (modulo === 0)
                t.modulo = element.modulo;

            t.id = element.id;

            //console.log(m);
            sucesso = await updateFiltros(t);
        }

        if (sucesso) {
            setNome("");
            setDescricao("");
            setTipoTarefa(0);
            setStatus(0);
            setModulo(0);

            redirect('/filtros');
        }
    }

    return (
        <main className="w-5/6 flex flex-col">
            <div className="">
                <div className="bg-background-purple pt-16 pl-10 p-24 text-3xl text-gray-200 font-bold p-10"></div>
            </div>

            <div id="formulario" className="self-center w-3/6 absolute top-24 flex flex-col justify-evenly p-4 text-lg bg-white rounded-lg gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl">
                        Novo Filtro
                    </h1>
                    <p className="text-base">Por favor, insira as informações abaixo para um novo filtro
                    .</p>
                </div>

                <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-8">
                    {/* <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">
                            Id do 
                                {(tipo === "Status") &&
                                    " Status"
                                }

                                {(tipo === "Tipo") &&
                                    " Tipo"
                                }
                            :
                        </label>
                        <input type="number" defaultValue={element?.idRedmine} required className="w-4/5" onChange={(e) => setIdRedmine(Number(e.target.value))} />
                    </div> */}

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">
                            Nome do Filtro:
                        </label>

                        <input type="text" defaultValue={element?.nomeFiltro} className="w-4/5" onChange={(e) => setNome(e.target.value)} />
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">
                            Status:
                        </label>

                        <input type="number" defaultValue={element?.status} className="w-4/5" onChange={(e) => setStatus(Number(e.target.value))} />
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">
                            Módulo:
                        </label>

                        <input type="number" defaultValue={element?.modulo} className="w-4/5" onChange={(e) => setModulo(Number(e.target.value))} />
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">
                            Tipo:
                        </label>

                        <input type="number" defaultValue={element?.tipoTarefa} className="w-4/5" onChange={(e) => setTipoTarefa(Number(e.target.value))} />
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">Descrição:</label>
                        <textarea className="w-4/5" defaultValue={element?.desc} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    
                    <div className="flex flex-row gap-5 items-center self-center">
                        {(element === null || element === undefined) && 
                            <button type="submit" className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Novo Filtro</button>
                        }

                        {(element !== null && element !== undefined) && 
                            <button type="submit" className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Editar Filtro</button>
                        }

                        
                        <Link href={"/filtros"} className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Cancelar</Link>
                        
                    </div>
                </form>
            </div>
        </main>
    );
}