import Link from "next/link"

export const Menu = () => {
    return (
        <menu className="w-72 mx-auto text-center pt-10">
            <ul>
                <li>
                    <Link href="/ssr-landing" className="mb-3 p-3 block w-full bg-slate-200 hover:bg-slate-400 rounded">
                        Landing Page
                    </Link>
                </li>
                <li>
                    <Link href="/csr-passwords" className="mb-3 p-3 block w-full bg-slate-200 hover:bg-slate-400 rounded">
                        Generador de contraseñas
                    </Link>
                </li>
                <li>
                    <Link href="/dr-dynamic" className="mb-3 p-3 block w-full bg-slate-200 hover:bg-slate-400 rounded">
                        DragonBall API
                    </Link>
                </li>
            </ul>
        </menu>
    )
}