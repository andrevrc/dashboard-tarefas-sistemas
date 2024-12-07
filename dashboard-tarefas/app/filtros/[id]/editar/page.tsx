import { getFiltrosId, getModuloId } from "@/app/lib/conexao-firebase";
import { filtro, Modulo } from "@/app/lib/tipos-dados";
import FormNovoFiltro from "@/app/ui/filtro/form-filtro";
import Menu from "@/app/ui/geral/menu-lateral";
import FormNovoModulo from "@/app/ui/modulos/form";

export default async function EditarModulo(props : {params: Promise<{id: string}>}) {
    const params = await props.params;
    const id = params.id;

    let element: filtro = await getFiltrosId(id);

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"filtros"} />
            <FormNovoFiltro element={element} />
        </main>
    );
}