import Image from "next/image"

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <Image src={"/img/404.jpg"} alt='Erro 404' width={1000} height={1000}></Image>
        </div>
    )
}
