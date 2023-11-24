import { MouseEventHandler } from "react"

export interface carProps {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    transmission: string
    model:string
    year: number
}

export interface CustomButtonProps {
    title: string
    icon?: any
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    isDisabled?: boolean
    btnType?: 'submit' | 'button'

}
