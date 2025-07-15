import React from 'react'

 function SecondsCounter({ segundos }) {
  const digits = String(segundos).padStart(6, '0').split('')

  return (
    <div className="contenedor-principal d-flex justify-content-center">
      <div
        className="
          contenedor-temporizador
          fondo-negro
          d-flex justify-content-center align-items-center
          w-100 h-100
        "
      >
        <i className="fa-regular fa-clock icono voltear-horizontal" />
        {digits.map((numero, indice) => (
          <div key={indice} className="digito">
            {numero}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecondsCounter