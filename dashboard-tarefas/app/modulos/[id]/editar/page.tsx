import { getModuloId } from "@/app/lib/conexao-firebase";
import { Modulo } from "@/app/lib/tipos-dados";
import Menu from "@/app/ui/geral/menu-lateral";
import FormNovoModulo from "@/app/ui/modulos/form";

export default async function EditarModulo(props : {params: Promise<{id: string}>}) {
    const params = await props.params;
    const id = params.id;

    let m: Modulo = await getModuloId(id);

    return (
        <main className="flex flex-row w-screen h-screen">
            <Menu opcaoMenu={"modulos"} />
            <FormNovoModulo modulo={m} />
        </main>
    );
}