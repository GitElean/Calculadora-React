import React from 'react';
import casos from '../app';
import '../styles/index.css';

function Botoncomando(dispatch, comando) {
  return (
    <button
      type="button"
      className="ghostbutton"
      onClick={
        () => dispatch({ caso: casos.comandos, accion: { comando } })
    }
    >
      {comando}
    </button>
  );
}

export default Botoncomando;
