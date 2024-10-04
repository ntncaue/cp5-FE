import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li> <Link href="/"></Link> </li>
                <li> <Link href="/pagina-1"></Link> </li>
                <li> <Link href="/pagina-2"></Link> </li>
                <li> <Link href="/pagina-3"></Link></li>
                <li> <Link href="/pagina-4"></Link></li>
            </ul>
        </nav>
    )
}