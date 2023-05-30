import { useState } from "react"
import Header from "../header/header"
import { ItemListContainer } from "../itemListContainer/ItemListContainer"
import './carrito.scss'

export const Clicker = ({init=0 , step = 1}) => {
    const [counter, setCounter ] = useState (init)

    const sumar = () => {
        setCounter(counter+step)
    }
    const resetear = () => {
        setCounter(init)
    }
    return (
        <div className="carrito__container">
            <Header counter={counter} />
            <ItemListContainer mensaje="PreEntregaRojo1" />
            <button onClick={sumar}> Añadir al carrito</button>
            <button onClick={resetear}>Resetear carrito</button>
            <p>{counter}</p>
        </div>
    )
}