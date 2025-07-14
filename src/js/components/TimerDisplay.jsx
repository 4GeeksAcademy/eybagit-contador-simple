import React from 'react'

 function TimerDisplay(props) {
  if (props.terminado) {
    return (
      <div className="text-white display-4 text-center">
        ¡Tiempo terminado!
      </div>
    )
  }

  const textoFormateado = String(props.segundos).padStart(6, '0')
  const digitos = textoFormateado.split('')

  return (
    <div className="d-flex align-items-center justify-content-center gap-3">
      <i className="fa-regular fa-clock icono voltear-horizontal" />
      {digitos.map((numero, posicion) => (
        <div key={posicion} className="digito">
          {numero}
        </div>
      ))}
    </div>
  )
}

export default TimerDisplay
