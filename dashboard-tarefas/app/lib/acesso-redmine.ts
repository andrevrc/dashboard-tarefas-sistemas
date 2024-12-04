const headers = {
    "X-Redmine-API-Key":`${process.env.X_API_KEY_REDMINE}`
}

async function getApiTarefasRedmine(params: string) {
    const url = `${process.env.REDMINE_API_URL_BASE}`+"/issues.json?" + params;
    
    const dados_consulta_api = await fetch(url, {
        method: "GET",
        headers: {
            "X-Redmine-API-Key":`${process.env.X_API_KEY_REDMINE}`
        }
    });
    return await dados_consulta_api.json();
}

export async function getTarefas(idProjeto: number | null) {
    let params = "limit=5"; // Padrão de 5 tarefas.

    if (idProjeto !== null) {
        params += "&project_id=" + idProjeto;
    }

    let dados_tarefas = await getApiTarefasRedmine(params);
    return dados_tarefas;
}

export async function getTarefasFinalizadas(idProjeto: number | null) {
    let params = "limit=1&status_id=14"; // Padrão de 5 tarefas.

    if (idProjeto !== null) {
        params += "&project_id=" + idProjeto;
    }

    let dados_tarefas = await getApiTarefasRedmine(params);
    return dados_tarefas;
}

export async function getProjetos() {
    const url = `${process.env.REDMINE_API_URL_BASE}`+"/projects.json";
    const dados_consulta_projetos = await fetch(url, {
        method: "GET",
        headers: headers
    });

    return await dados_consulta_projetos.json();
}