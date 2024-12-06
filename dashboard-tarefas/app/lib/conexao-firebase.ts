// Usamos o Real Time Database para salvar e consultar informações.
"use server"

import { Modulo, Projeto, Status } from "@/app/lib/tipos-dados";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function getUrlBase() {
    return `${ process.env.BASE_URL_FIREBASE }`;
}

function getUrlProjetos() {
    return getUrlBase() + "/projetos.json";
}

function getUrlDeleteProjetos() {
    return getUrlBase() + "/projetos/";
}

function getUrlModulosObservados() {
    return getUrlBase() + "/modulos.json";
}

function getUrlVisualizacao() {
    return getUrlBase() + "/visualizacao.json";
}

function getUrlStatus() {
    return getUrlBase() + "/status.json";
}

function getUrlTipoTarefa() {
    return getUrlBase() + "/tipo-tarefa.json";
}

function montarGetUrlParams({url, params} : {url: string, params: string | string[][]}) {
    return `${url + new URLSearchParams(params)}`;
}

export async function postProjetos(projeto : Projeto) {
    let sucesso = false;

    await fetch(getUrlProjetos(), {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(projeto)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        sucesso = true;
    })
    .catch(err => {
        console.log(err);
        sucesso = false;
    });

    return sucesso;
}

export async function getProjetos() {
    let projetos : Object[] = [{}];
    let projs : Projeto[] = [];

    let urlGetProjetos = montarGetUrlParams({url: getUrlProjetos(), params: ""});

    //console.log(urlGetProjetos);

    await fetch(urlGetProjetos)
            .then(async (resultado) => await resultado.json())
            .then((json) => {
                projetos = json;
            })
            .catch((erro) => console.log(erro));
    
    if (projetos !== null) { 
        Object.values(projetos).map((p: any, k: any, arr: any) => {
            let proj : Projeto = {
                id: Object.keys(projetos)[k],
                idRedmine : Number(p["idRedmine"]),
                descricao: p["descricao"],
                nome: p["nome"]
            };

            projs.push(proj);
        });
    }
    
    return projs;
}

export async function getProjetosId(id: string) {
    let proj : Projeto = {
        id: "",
        idRedmine: 0,
        descricao: "",
        nome: ""
    };

    let urlGetProjetos = getUrlDeleteProjetos() + id + ".json";

    //console.log(urlGetProjetos);

    let projetos = await fetch(urlGetProjetos)
            .then(async (resultado) => await resultado.json())
            .catch((erro) => console.log(erro));
    
    if (projetos !== null) { 
        proj = {
            id: id,
            idRedmine : Number(projetos["idRedmine"]),
            descricao: projetos["descricao"],
            nome: projetos["nome"]
        };
    }
    
    return proj;
}

export async function deleteProject(projeto: Projeto) {
    let urlDeleteProjetos = getUrlDeleteProjetos() + projeto.id + ".json";
    await fetch(urlDeleteProjetos, {
        method: "DELETE"
    });

    revalidatePath('/projetos');
    redirect('/projetos');
}

export async function updateProject(projeto: Projeto) {
    console.log(projeto);

    let urlUpdateProjetos = getUrlDeleteProjetos() + projeto.id + ".json";

    console.log(urlUpdateProjetos);

    await fetch(urlUpdateProjetos, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(projeto)
    })
    .catch((e: any) => {
        console.log(e);
        return false;
    });

    return true;
}

//------------------------------------------------------------------------------------------------------------

export async function postModulos(modulo : Modulo) {
    let sucesso = false;

    fetch(getUrlModulosObservados(), {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(modulo)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        sucesso = true;
    })
    .catch(err => {
        console.log(err);
        sucesso = false;
    });

    return sucesso;
}

export async function postStatus(status : Status) {
    let sucesso = false;

    fetch(getUrlModulosObservados(), {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(status)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        sucesso = true;
    })
    .catch(err => {
        console.log(err);
        sucesso = false;
    });

    return sucesso;
}