
import './ItemListContainer.scss'

export const ItemListContainer = ({mensaje}) => {
    return(
        <div className="list__container">
            <h2>Lista Contenedora</h2>
            <hr/>
            <p>{mensaje}</p>
        </div>
    )
}