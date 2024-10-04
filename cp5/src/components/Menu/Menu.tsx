import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/pagina-1">Biografia</Link> </li>
                <li> <Link href="/pagina-2">Teoria do Nascimento de Venus</Link> </li>
                <li> <Link href="/pagina-3">Livro</Link></li>
                <li> <Link href="/pagina-4">Cálculo</Link></li>
            </ul>
        </nav>
    )
}