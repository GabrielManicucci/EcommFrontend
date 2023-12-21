import { IoIosSearch } from "react-icons/io"
import { FiMenu } from "react-icons/fi"
import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-6 border-b border-gray-500">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">Ecomm</h1>
      </Link>

      <div className="flex items-center">
        <IoIosSearch className="mr-3" size={24} />
        <Link href={"/login"}>
          <FiMenu size={24} />
        </Link>
      </div>
    </nav>
  )
}
