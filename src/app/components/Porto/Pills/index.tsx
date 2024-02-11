import { MouseEventHandler, ReactNode } from "react"

interface IProps {
    children: ReactNode
    onclick: MouseEventHandler<HTMLButtonElement>
    filter: string
}

export const Pills = ({ children, onclick, filter }: IProps) => {
    return(
        <button className={`border transition-all ${children == filter ? 'border-white text-white' : 'border-none text-secondary'} px-6 py-3 rounded-full tracking-[1rem] uppercase`} onClick={onclick}>{children}</button>
    )
}