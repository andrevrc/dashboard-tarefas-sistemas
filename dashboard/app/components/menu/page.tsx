import Link from "next/link";

export default function Menu() {
    return (
        <nav className="h-screen flex flex-col bg-background-menu gap-6 p-6">
            <div className="px-4 py-6">
                <span className="grid h-10 w-32 place-content-center rounded-lg bg-slate-100 text-xs text-gray-600">
                    Logo
                </span>
            </div>

            <ul className="">
                <li>
                    <Link
                        href="/"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                        Início
                    </Link>
                </li>

                <li>
                    <Link
                        href="/"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                        Projetos
                    </Link>
                </li>

                <li>
                    <Link
                        href="/"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                        Unidades
                    </Link>
                </li>

                <li>
                    <Link
                        href="/"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                        Visualizações Gerais
                    </Link>
                </li>
            </ul>
            
            {/* <div>Projetos</div>
            <div>Unidades</div>
            <div>Visualizações Gerais</div> */}
        </nav>
    );
}