// Usamos o Real Time Database para salvar e consultar informações.
"use server"

import { Modulo, Projeto, Status, TipoTarefa } from "@/app/lib/tipos-dados";
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

function getUrlDeletePutModulos() {
    return getUrlBase() + "/modulos/";
}

function getUrlFiltros() {
    return getUrlBase() + "/filtros.json";
}

function getUrlStatus() {
    return getUrlBase() + "/status.json";
}

function getUrlTipoChamados() {
    return getUrlBase() + "/tipo-chamados.json";
}

function getUrlDeletePutTipoChamados() {
    return getUrlBase() + "/tipo-chamados/";
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

    await fetch(getUrlModulosObservados(), {
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

export async function getModulos() {
    let modulos : Object[] = [{}];
    let mod : Modulo[] = [];

    let urlGetModulos = montarGetUrlParams({url: getUrlModulosObservados(), params: ""});

    await fetch(urlGetModulos)
            .then(async (resultado) => await resultado.json())
            .then((json) => {
                modulos = json;
            })
            .catch((erro) => console.log(erro));
    
    if (modulos !== null) { 
        Object.values(modulos).map((m: any, k: any, arr: any) => {
            console.log(m);

            let modulo : Modulo = {
                id: Object.keys(modulos)[k],
                idRedmine : Number(m["idRedmine"]),
                descricao: m["descricao"],
                nomeModulo: m["nomeModulo"]
            };

            mod.push(modulo);
        });
    }
    
    return mod;
}

export async function getModuloId(id: string) {
    let modulo : Modulo = {
        id: "",
        idRedmine: 0,
        descricao: "",
        nomeModulo: ""
    };

    let urlGetModulo = getUrlDeletePutModulos() + id + ".json";

    let modulos = await fetch(urlGetModulo)
            .then(async (resultado) => await resultado.json())
            .catch((erro) => console.log(erro));
    
    if (modulos !== null) { 
        modulo = {
            id: id,
            idRedmine : Number(modulos["idRedmine"]),
            descricao: modulos["descricao"],
            nomeModulo: modulos["nomeModulo"]
        };
    }
    
    return modulo;
}

export async function deleteModulo(modulo: Modulo) {
    let urlDeleteModulo = getUrlDeletePutModulos() + modulo.id + ".json";
    await fetch(urlDeleteModulo, {
        method: "DELETE"
    });

    revalidatePath('/modulos');
    redirect('/modulos');
}

export async function updateModulo(modulo: Modulo) {
    let urlUpdateProjetos = getUrlDeletePutModulos() + modulo.id + ".json";

    await fetch(urlUpdateProjetos, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(modulo)
    })
    .catch((e: any) => {
        console.log(e);
        return false;
    });

    return true;
}

// -------------------------------------------------------------

export async function postTiposChamados(tipo_chamado: TipoTarefa) {
    let sucesso = false;

    await fetch(getUrlTipoChamados(), {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(tipo_chamado)
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

export async function getTiposChamados() {
    let tipoChamados : Object[] = [{}];
    let tipo : TipoTarefa[] = [];

    let urlGetTipoChamados = montarGetUrlParams({url: getUrlTipoChamados(), params: ""});

    await fetch(urlGetTipoChamados)
            .then(async (resultado) => await resultado.json())
            .then((json) => {
                tipoChamados = json;
            })
            .catch((erro) => console.log(erro));
    
    if (tipoChamados !== null) { 
        Object.values(tipoChamados).map((m: any, k: any, arr: any) => {
            console.log(m);

            let t : TipoTarefa = {
                id: Object.keys(tipoChamados)[k],
                idRedmine : Number(m["idRedmine"]),
                tipo: m["tipo"],
                descricao: m["descricao"]
            };

            tipo.push(t);
        });
    }
    
    return tipo;
}

export async function getTiposChamadosId(id: string) {
    let tipo : TipoTarefa = {
        id: "",
        idRedmine: 0,
        descricao: "",
        tipo: ""
    };

    let urlGetTipos = getUrlDeletePutTipoChamados() + id + ".json";

    let tipos = await fetch(urlGetTipos)
            .then(async (resultado) => await resultado.json())
            .catch((erro) => console.log(erro));
    
    if (tipos !== null) { 
        tipo = {
            id: id,
            idRedmine : Number(tipos["idRedmine"]),
            descricao: tipos["descricao"],
            tipo: tipos["tipo"]
        };
    }
    
    return tipo;
}

export async function deleteTiposChamados(tipo: TipoTarefa) {
    console.log(tipo);
    let urlDeleteTipo = getUrlDeletePutTipoChamados() + tipo.id + ".json";
    console.log(urlDeleteTipo);
    await fetch(urlDeleteTipo, {
        method: "DELETE"
    });

    revalidatePath('/tipos-chamados');
    redirect('/tipos-chamados');
}

export async function updateTiposChamados(tipo: TipoTarefa) {
    let urlUpdateTipos = getUrlDeletePutTipoChamados() + tipo.id + ".json";

    await fetch(urlUpdateTipos, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(tipo)
    })
    .catch((e: any) => {
        console.log(e);
        return false;
    });

    return true;
}

// -------------------------------------------------------------

export async function postStatus(status : Status) {
    let sucesso = false;

    await fetch(getUrlModulosObservados(), {
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