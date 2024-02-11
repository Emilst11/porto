import { IButtons } from "./buttons.interface"

export const Buttons = ({ children, type }: IButtons) => {
    const typeButton = () => {
        switch (type) {
            case 'inverted-primary':
                return 'rounded-lg hover:bg-white hover:text-base'
            case 'rounded':
                return 'bg-white text-base rounded-full'
            case 'rounded-inverted':
                return 'rounded-full hover:bg-white hover:text-base'
            case 'primary':
                return 'bg-white text-base rounded-lg';
            default:
                return 'border-transparent font-light'
        }
    }
    return(
        <button className={`border tracking-[.5rem] transition-all px-8 py-4 font-medium ${typeButton()}`}>{children}</button>
    )
}