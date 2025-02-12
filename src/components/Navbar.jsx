import { useState } from "react"
import Image from "./Image";
import { Link } from "react-router";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/*LOGO */}
            <Link to="/" className="flex item center gap-4 text-2xl font-bold">
                <Image src="logo.png" alt="Awill logo" w={32} h={32} />
                <span>Awill Blog</span>
            </Link>
            {/* MOBILE MENU */}
            <div className="md:hidden">
                {/* MOBILE BUTTON */}
                <div className="cursor-pointer text-4xl" onClick={() => setOpen(prev => !prev)}>
                    {open ? "X" : "☰"}
                </div>
                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-#e6e6ff transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                    <Link href="/">Home</Link>
                    <Link href="/">Trending</Link>
                    <Link href="/">Most Popular</Link>
                    <Link href="/">About</Link>
                    <Link href="/">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
                    </Link>
                </div>
            </div>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link href="/">Home</Link>
                <Link href="/">Trending</Link>
                <Link href="/">Most Popular</Link>
                <Link href="/">About</Link>
                <SignedOut>
                    <Link href="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar