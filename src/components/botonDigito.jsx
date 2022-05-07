import React from 'react';
import casos from '../app';
import '../styles/index.css';

function Botondigito(dispatch, numero) {
  return (
    <button
      type="button"
      className="ghostbutton"
      onClick={
        () => dispatch({ caso: casos.digito, accion: { numero } })
    }
    >
      {numero}
    </button>
  );
}

export default Botondigito;
