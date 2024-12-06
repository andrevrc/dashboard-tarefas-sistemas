import { getProjetosId } from "@/app/lib/conexao-firebase";
import { Projeto } from "@/app/lib/tipos-dados";
import Menu from "@/app/ui/geral/menu-lateral";
import FormObservarProjeto from "@/app/ui/projetos/form";

export default async function EditarProjeto(props : {params: Promise<{id: string}>}) {
    const params = await props.params;
    const id = params.id;

    //console.log(params);
    //console.log(id);

    let projeto: Projeto = await getProjetosId(id);

    //console.log(projeto);

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"projetos"} />
            <FormObservarProjeto projeto_={projeto} />
        </main>
    );
}