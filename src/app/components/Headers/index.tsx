import Image from "next/image"
import menu from '@/app/assets/icons/menu.svg'
import { Buttons } from "../SharedComponents/Buttons"

export const Header = () => {
    return(
        <div className="fixed top-0 w-full z-40">
            <div className="container mx-auto p-5 flex items-center justify-between">
                <button>
                    <Image src={menu} alt="menu" className="w-2/3"/>
                </button>
                <Buttons>Contact Me</Buttons>
            </div>
        </div>
    )
}