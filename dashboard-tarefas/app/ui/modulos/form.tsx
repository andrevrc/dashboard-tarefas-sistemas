"use client"

import { postModulos, postProjetos, updateModulo, updateProject } from "@/app/lib/conexao-firebase";
import { Modulo } from "@/app/lib/tipos-dados";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function FormNovoModulo({modulo}:{modulo?: Modulo|undefined}) {
    const [idRedmine, setIdRedmine] = useState<number>(0);
    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");

    const handleSubmit = async (e: any) => {
        let sucesso = false;
        let erro = false;

        e.preventDefault();

        if ((modulo === null || modulo === undefined) 
                && (idRedmine === 0 || nome === "" || descricao === "")) {
            console.log((modulo === null || modulo === undefined) );
            erro = true;
        }

        if (erro) {
            console.log("Ocorreu erro.");
            return;
        }

        let m : Modulo = {
            idRedmine: idRedmine,
            nomeModulo: nome,
            descricao: descricao
        }

        if (modulo === null || modulo === undefined) {
            sucesso = await postModulos(m);
        } else {
            if (idRedmine === 0)
                m.idRedmine = modulo.idRedmine;

            if (nome === "")
                m.nomeModulo = modulo.nomeModulo;

            if (descricao === "")
                m.descricao = modulo.descricao;

            m.id = modulo.id;

            //console.log(m);
            sucesso = await updateModulo(m);
        }

        if (sucesso) {
            setIdRedmine(0);
            setNome("");
            setDescricao("");
            redirect('/modulos');
        }
    }

    return (
        <main className="w-5/6 flex flex-col">
            <div className="">
                <div className="bg-background-purple pt-16 pl-10 p-24 text-3xl text-gray-200 font-bold p-10"></div>
            </div>

            <div id="formulario" className="self-center w-3/6 absolute top-24 flex flex-col justify-evenly p-4 text-lg bg-white rounded-lg gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-3xl">Novo Módulo</h1>
                    <p className="text-base">Por favor, insira as informações abaixo para um novo módulo.</p>
                </div>

                <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">Id do Módulo:</label>
                        <input type="number" defaultValue={modulo?.idRedmine} required className="w-4/5" onChange={(e) => setIdRedmine(Number(e.target.value))} />
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">Nome do Módulo:</label>
                        <input type="text" defaultValue={modulo?.nomeModulo} className="w-4/5" onChange={(e) => setNome(e.target.value)} />
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <label className="font-bold text-lg w-1/5">Descrição:</label>
                        <textarea className="w-4/5" defaultValue={modulo?.descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    
                    <div className="flex flex-row gap-5 items-center self-center">
                        {(modulo === null || modulo === undefined) && 
                            <button type="submit" className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Novo Módulo</button>
                        }

                        {(modulo !== null && modulo !== undefined) && 
                            <button type="submit" className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Editar Módulo</button>
                        }

                        <Link href={"/modulos"} className="text-lg font-bold bg-[#624BFF] text-white p-3 px-6 rounded-xl">Cancelar</Link>
                    </div>
                </form>
            </div>
        </main>
    );
}