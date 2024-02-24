import { ReactNode } from "react"
import "./style.css"
import BackgroundFlutuante from "../../components/BackgroundFlutuante/BackgroundFlutuante"
import MenuSlider from "../../components/menuSlider"
import TopBar from "../../components/topBar"


interface props {
    children?: ReactNode
}

export function Home({ children }: props) {
    return (
        <div>
            <div className="app-container">
                <BackgroundFlutuante />
                <MenuSlider />

                <div className="content" >
                    <TopBar />
                    {children}
                </div>
            </div>
        </div >
    )
}