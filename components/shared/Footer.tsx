import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
        <Image src='/assets/images/logo.png' alt="logo" width={80} height={10}/>
        </Link>
        <p>2023 elderJoy. Todos os Direitos Reservados.</p>
      </div>
    </footer>
  )
}

export default Footer