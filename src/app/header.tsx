import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#252570] text-[#EEEEEE] border-b-[1px] border-white">
             <div  className="flex flex-row items-center justify-between px-16 h-20">

                <div id="Logo">
                    <h1 className="text-3xl font-bold font-sans">ABRAR</h1>
                </div>
                
                <div id="links">
                    <ul className="flex flex-row items-center gap-8 font-semibold">

                        <Link href="./" className="transition-all hover:bg-blue-600 hover:text-white p-2 rounded-md">
                        <li>Home</li>
                        </Link>

                        <Link href="./solutions" className="transition-all hover:bg-blue-600 hover:text-white p-2 rounded-md">
                        <li>Solutions</li>
                        </Link>

                        <Link href="./pricing" className="transition-all hover:bg-blue-600 hover:text-white p-2 rounded-md">
                        <li>Pricing</li>
                        </Link>

                        <Link href="#" className="transition-all hover:bg-blue-600 hover:text-white p-2 rounded-md">
                        <li>Resources</li>
                        </Link>

                        <Link href="#" className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-2 rounded-lg">
                        <li className="">Log In</li>
                        </Link>

                        <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg">
                        <li>Sign Up</li>
                        </Link>
                        
                    </ul>
                </div>

             </div>
        </header>
    )
}