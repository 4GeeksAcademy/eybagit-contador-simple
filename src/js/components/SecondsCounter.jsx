import React from 'react'
import ReactDOM from 'react-dom/client'
import TimerDisplay from './TimerDisplay.jsx'

function SecondsCounter(props) {
  const IdContenedorSegundos = 'contadorSegundos'

  if (!SecondsCounter.relojActivo) {
    SecondsCounter.relojActivo = true

    let segundosActual = props.inicio
    const esRegresiva = props.enCuentaRegresiva === true

    setTimeout(() => {
      const container = document.getElementById(IdContenedorSegundos)
      if (!container) return

      const TimerRoot = ReactDOM.createRoot(container)

      function renderTimer() {
        const terminado = esRegresiva && segundosActual === 0
        TimerRoot.render(
          <TimerDisplay segundos={segundosActual} terminado={terminado} />
        )
      }

      renderTimer()
      setInterval(() => {
        segundosActual = esRegresiva
          ? Math.max(segundosActual - 1, 0)
          : segundosActual + 1
        renderTimer()
      }, 1000)
    }, 0)
  }

  return (
    <div className="contenedor-principal d-flex justify-content-center">
      <div
        id={IdContenedorSegundos}
        className="contenedor-temporizador fondo-negro 
                   d-flex justify-content-center align-items-center 
                   w-100 h-100"
      />
    </div>
  )
}

export default SecondsCounter;