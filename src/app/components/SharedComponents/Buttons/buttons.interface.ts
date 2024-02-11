import { ReactNode } from "react";

export interface IButtons {
    children: ReactNode
    type?: 'rounded' | 'rounded-inverted' | 'inverted-primary' | 'primary'
}