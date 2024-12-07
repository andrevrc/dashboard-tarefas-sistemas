import { deleteFiltros, deleteStatus, deleteTiposChamados } from "@/app/lib/conexao-firebase";
import { filtro, Status, TipoTarefa } from "@/app/lib/tipos-dados";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function DeleteButton({ tipo, entidade }: { tipo: "Tipo"|"Status"|"Filtro", entidade: TipoTarefa | Status | filtro }) {
    const handleDeleteButtonTipo = deleteTiposChamados.bind(null, entidade as TipoTarefa);
    const handleDeleteButtonStatus = deleteStatus.bind(null, entidade as Status);
    const handleDeleteButtonFiltro = deleteFiltros.bind(null, entidade as filtro);

    return (
        <>
            {(tipo === "Tipo") && 
                <form action={handleDeleteButtonTipo}>
                    <button type="submit">
                        <XMarkIcon className="w-6" />
                    </button>
                </form>
            }

            {(tipo === "Status") && 
                (<form action={handleDeleteButtonStatus}>
                    <button type="submit">
                        <XMarkIcon className="w-6" />
                    </button>
                </form>)
            }

            {(tipo === "Filtro") && 
                <form action={handleDeleteButtonFiltro}>
                    <button type="submit">
                        <XMarkIcon className="w-6" />
                    </button>
                </form>
            }
        </>
        
    );
}