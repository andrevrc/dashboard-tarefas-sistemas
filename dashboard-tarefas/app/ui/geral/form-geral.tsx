"use client"

import { postStatus, postTiposChamados, updateModulo, updateProject, updateStatus, updateTiposChamados } from "@/app/lib/conexao-firebase";
import { Status, TipoTarefa } from "@/app/lib/tipos-dados";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function FormNovo({element, tipo}:{element?: TipoTarefa|Status, tipo: "Tipo"|"Status"}) {
    const [idRedmine, setIdRedmine] = useState<number>(0);
    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");

    const handleSubmit = async (e: any) => {
        let sucesso = false;
        let erro = false;

        e.preventDefault();

        if ((element === null || element === undefined) 
                && (idRedmine === 0 || nome === "" || descricao === "")) {
            //console.log((element === null || element === undefined) );
            erro = true;
        }

        if (erro) {
            console.log("Ocorreu erro.");
            return;
        }

        let t : TipoTarefa = {
            idRedmine: idRedmine,
            tipo: nome,
            descricao: descricao
        }

        let s : Status = {
            idRedmine: idRedmine,
            status: nome,
            descricao: descricao
        }

        

        if (element === null || element === undefined) {
            if (tipo === "Tipo") {
                sucesso = await postTiposChamados(t);
            } else if (tipo === "Status") {
                sucesso = await postStatus(s);
            }
            
        } else {
            if (idRedmine === 0) {
                t.idRedmine = element.idRedmine;
                s.idRedmine = element.idRedmine;
            }

            if (nome === "")
                if (tipo === "Status")
                    s.status = (element as Status).status;
                else if (tipo === "Tipo")
                    t.tipo = (element as TipoTarefa).tipo;

            if (descricao === "") {
                t.descricao = element.descricao;
                s.descricao = element.descricao;
            }

            t.id = element.id;

            //console.log(m);
            if (tipo === "Tipo") {
                sucesso = await updateTiposChamados(t);
            } else if (tipo === "Status") {
                sucesso = await updateStatus(s);
            }
        }

        if (sucesso) {
            setIdRedmine(0);
            setNome("");
            setDescricao("");

            if (tipo === "Tipo")
                redirect('/tipos-chamados');
            else if (tipo === "Status")
                redirect('/status');
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
                        {(tipo === "Tipo") &&
                            "Novo Tipo de Chamado"
                        }
                        
                        {(tipo === "Status") &&
                            "Novo Status"
                        }
                    </h1>
                    <p className="text-base">Por favor, insira as informações abaixo para um novo 
                        {(tipo === "Tipo") && "tipo"}
                        {(tipo === "Status") && "status"}
                    .</p>
                </div>

                <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="flex flex-row gap-4 items-center">
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
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">
                            Nome do 
                            {(tipo === "Tipo") &&
                                " Tipo"
                            }
                            {(tipo === "Status") &&
                                " Status"
                            }
                            :
                        </label>

                        {(tipo === "Status") &&
                            <input type="text" defaultValue={(element as Status)?.status} className="w-4/5" onChange={(e) => setNome(e.target.value)} />
                        }

                        {(tipo === "Tipo") &&
                            <input type="text" defaultValue={(element as TipoTarefa)?.tipo} className="w-4/5" onChange={(e) => setNome(e.target.value)} />
                        }
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">Descrição:</label>
                        <textarea className="w-4/5" defaultValue={element?.descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    
                    <div className="flex flex-row gap-5 items-center self-center">
                        {(element === null || element === undefined) && 
                            <button type="submit" className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Novo {tipo}</button>
                        }

                        {(element !== null && element !== undefined) && 
                            <button type="submit" className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Editar {tipo}</button>
                        }

                        {(tipo === "Status") &&
                            <Link href={"/status"} className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Cancelar</Link>
                        }

                        {(tipo === "Tipo") &&
                            <Link href={"/tipos-chamados"} className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Cancelar</Link>
                        }
                    </div>
                </form>
            </div>
        </main>
    );
}