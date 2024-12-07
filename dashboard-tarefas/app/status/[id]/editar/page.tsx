import { getStatusId, getTiposChamadosId } from "@/app/lib/conexao-firebase";
import { Status, TipoTarefa } from "@/app/lib/tipos-dados";
import FormNovo from "@/app/ui/geral/form-geral";
import Menu from "@/app/ui/geral/menu-lateral";

export default async function EditarStatus(props : {params: Promise<{id: string}>}) {
    const params = await props.params;
    const id = params.id;

    let s: Status = await getStatusId(id);

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"status"} />
            <FormNovo tipo="Status" element={s} />
        </main>
    );
}