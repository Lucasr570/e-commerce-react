/* eslint-disable react/prop-types */
import { useState } from "react"
import '../styles/card.css'

// eslint-disable-next-line react/prop-types
export const Card = ({imagen, 
                      titulo, 
                      descripcion, 
                      // eslint-disable-next-line react/prop-types
                      precio, 
                      handleAgregar,
                      handleQuitar,
                      // eslint-disable-next-line react/prop-types, no-unused-vars
                      handleAumentar,
                      // eslint-disable-next-line no-unused-vars
                      handleDisminuir
                    }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () =>{
        handleAgregar()
        setAdded(true)
    }

    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

  return (
    <div className="tarjeta">
        <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>

        {added
            ? <button
                type="button"
                className="boton-quitar"
                onClick={clickQuitar}
            >
                Quitar del Carrito
            </button>
            : <button
                type="button"
                className="boton-agregar"
                onClick={clickAgregar}
            >
                Agregar al Carrito
            </button>
        }

        </div>
    </div>
  )
}
