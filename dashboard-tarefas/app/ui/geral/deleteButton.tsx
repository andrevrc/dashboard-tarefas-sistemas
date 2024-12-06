import { deleteTiposChamados } from "@/app/lib/conexao-firebase";
import { Status, TipoTarefa } from "@/app/lib/tipos-dados";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function DeleteButton({ tipo, entidade }: { tipo: "Tipo"|"Status"|"Filtro", entidade: TipoTarefa | Status }) {
    const handleDeleteButtonTipo = deleteTiposChamados.bind(null, entidade as TipoTarefa);
    //const handleDeleteButtonStatus = deleteTiposChamados.bind(null, entidade as TipoTarefa);
    //const handleDeleteButtonView = deleteTiposChamados.bind(null, entidade as TipoTarefa);

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
                (<form action={handleDeleteButtonTipo}>
                    <button type="submit">
                        <XMarkIcon className="w-6" />
                    </button>
                </form>)
            }

            {(tipo === "Filtro") && 
                <form action={handleDeleteButtonTipo}>
                    <button type="submit">
                        <XMarkIcon className="w-6" />
                    </button>
                </form>
            }
        </>
        
    );
}