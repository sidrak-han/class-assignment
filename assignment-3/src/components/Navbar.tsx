import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <nav className="flex items-center justify-evenly bg-gray-500 h-14 text-white">
            <h1 className="text-3xl font-semibold">Sidra Khan</h1>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Skills</Link>
            <Link href={"/"}>Contact</Link>
        </nav>
      
    </div>
  )
}

export default Navbar
