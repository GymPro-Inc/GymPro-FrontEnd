import { ReactNode } from "react"
import "./style.css"
import BackgroundFlutuante from "../BackgroundFlutuante/BackgroundFlutuante"
import MenuSlider from "../menuSlider/menuSlider"
import TopBar from "../topBar/TopBar"


interface props {
    children?: ReactNode
}

export function Pagina({ children }: props) {
    return (
        <div>
            <div className="app-container">
                <BackgroundFlutuante />
                <MenuSlider />
                <TopBar />
            </div>
            {children}
        </div>
    )
}