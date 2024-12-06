import { getTiposChamadosId } from "@/app/lib/conexao-firebase";
import { TipoTarefa } from "@/app/lib/tipos-dados";
import FormNovo from "@/app/ui/geral/form-geral";
import Menu from "@/app/ui/geral/menu-lateral";

export default async function EditarTipo(props : {params: Promise<{id: string}>}) {
    const params = await props.params;
    const id = params.id;

    let t: TipoTarefa = await getTiposChamadosId(id);

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"tipos-chamados"} />
            <FormNovo tipo="Tipo" element={t} />
        </main>
    );
}