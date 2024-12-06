"use client"

import { postProjetos, updateProject } from "@/app/lib/conexao-firebase";
import { Projeto } from "@/app/lib/tipos-dados";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function FormObservarProjeto({projeto_}:{projeto_?: Projeto|undefined}) {
    const [idRedmineProjeto, setIdRedmine] = useState<number>(0);
    const [nomeProjeto, setNomeProjeto] = useState<string>("");
    const [descricaoProjeto, setDescricaoProjeto] = useState<string>("");

    const handleSubmit = async (e: any) => {
        let sucesso = false;
        let erro = false;

        e.preventDefault();

        if ((projeto_ === null || projeto_ === undefined) 
                && (idRedmineProjeto === 0 || nomeProjeto === "" || descricaoProjeto === "")) {
            erro = true;
        }

        if (erro) {
            console.log("Ocorreu erro.");
            return;
        }

        let projeto : Projeto = {
            idRedmine: idRedmineProjeto,
            nome: nomeProjeto,
            descricao: descricaoProjeto
        }

        if (projeto_ === null || projeto_ === undefined) {
            sucesso = await postProjetos(projeto);
        } else {
            if (idRedmineProjeto === 0)
                projeto.idRedmine = projeto_.idRedmine;

            if (nomeProjeto === "")
                projeto.nome = projeto_.nome;

            if (descricaoProjeto === "")
                projeto.descricao = projeto_.descricao;

            projeto.id = projeto_.id;

            //console.log(projeto);
            sucesso = await updateProject(projeto);
        }

        console.log(sucesso);

        if (sucesso) {
            setIdRedmine(0);
            setNomeProjeto("");
            setDescricaoProjeto("");
            redirect('/projetos');
        }
    }

    return (
        <main className="w-5/6 flex flex-col">
            <div className="">
                <div className="bg-background-purple pt-16 pl-10 p-24 text-3xl text-gray-200 font-bold p-10">
                    
                </div>
            </div>

            <div id="formulario" className="self-center w-3/6 absolute top-24 flex flex-col justify-evenly p-4 text-lg bg-white rounded-lg gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl">Observar projeto</h1>
                    <p className="text-base">Por favor, insira as informações abaixo para observar um projeto.</p>
                </div>

                <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">Id do Projeto:</label>
                        <input type="number" defaultValue={projeto_?.idRedmine} required className="w-4/5" onChange={(e) => setIdRedmine(Number(e.target.value))} />
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">Nome do Projeto:</label>
                        <input type="text" defaultValue={projeto_?.nome} className="w-4/5" onChange={(e) => setNomeProjeto(e.target.value)} />
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">Descrição:</label>
                        <textarea className="w-4/5" defaultValue={projeto_?.descricao} onChange={(e) => setDescricaoProjeto(e.target.value)} />
                    </div>
                    
                    <div className="flex flex-row gap-5 items-center self-center">
                        {(projeto_ === null || projeto_ === undefined) && 
                            <button type="submit" className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Observar Projeto</button>
                        }

                        {(projeto_ !== null && projeto_ !== undefined) && 
                            <button type="submit" className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Editar Projeto</button>
                        }

                        <Link href={"/projetos"} className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Cancelar</Link>
                    </div>
                </form>
            </div>
        </main>
    );
}