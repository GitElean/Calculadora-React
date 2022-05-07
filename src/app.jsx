import React from 'react';
import './styles/index.css';
import { useReducer } from 'react/cjs/react.production.min';
import Butterfly from './components/butterfly';
import Echidna from './assets/echidna.png';
import Rosa from './assets/rose.png';

export const casos = {
  digito: 'digito',
  operaciones: 'operaciones',
  comandos: 'comandos',
};

const initial = () => ({
  n: 0,
});

const reducer = (state, { caso, accion }) => {
  switch (caso) {
    case casos.digito:
      return {
        ...state,
        n2: '${state.n2 || ""}${accion.numero}',
      };
  }
};

function App() {
  const [{ n1, n2, operacion }, dispatch] = useReducer(reducer, initial);

  return (
    <div className="text-black font-bold bg-gradient-to-br from-[#e4fe91] to-[#0d1216] justify-center self-center content-center align-middle text-center flex w-full h-screen overflow-hidden">
      <div className="z-10 bottom-0 right-[-35%] absolute">
        <img src={Echidna} alt="Echidna" width="50%" />
      </div>
      <div className="w-1/3 h-2/3 bg-[#ebead6] opacity-50 flex rounded-lg content-center items-center justify-center z-20 m-auto">
        <div className="grid-cols-6 p-4">
          <div className="w-[90%] h-1/6 bg-[#085c78] text-white opacity-90 p-2 m-4 text-right">
            <div className="opacity-90 text-base">
              {n1}
              {' '}
              {operacion}
            </div>
            <div className="text-lg">{n2}</div>
          </div>
          <div className="grid-rows-4">
            <button type="button" className="ghostbutton">1</button>
            <button type="button" className="ghostbutton">2</button>
            <button type="button" className="ghostbutton">3</button>
            <button onClick={1} type="button" className="ghostbutton">+</button>
          </div>
          <div className="grid-rows-4">
            <button type="button" className="ghostbutton">4</button>
            <button type="button" className="ghostbutton">5</button>
            <button type="button" className="ghostbutton">6</button>
            <button onClick={1} type="button" className="ghostbutton">-</button>
          </div>
          <div className="grid-rows-4">
            <button type="button" className="ghostbutton">7</button>
            <button type="button" className="ghostbutton">8</button>
            <button type="button" className="ghostbutton">9</button>
            <button onClick={1} type="button" className="ghostbutton">x</button>
          </div>
          <div className="grid-rows-4">
            <button onClick={1} type="button" className="ghostbutton">0</button>
            <button onClick={1} type="button" className="ghostbutton">/</button>
            <button onClick={1} type="button" className="ghostbutton">%</button>
            <button onClick={1} type="button" className="ghostbutton">=</button>
          </div>
          <div className="grid-rows-4">
            <button type="button" className="ghostbutton">.</button>
            <button type="button" className="ghostbutton">+/-</button>
            <button type="button" className="ghostbutton">c</button>
            <button type="button" className="ghostbutton">A/C</button>
          </div>
        </div>
      </div>
      <div className="top-0 left-0 h-[5%] w-[5%] absolute z-10">
        <Butterfly />
      </div>
      <div className="top-[7%] left-[6%] h-[5%] w-[5%] absolute z-10">
        <Butterfly />
      </div>
      <div className="top-[18%] left-[4%] h-[5%] w-[5%] absolute z-10">
        <Butterfly />
      </div>
      <div className="top-[27%] left-[17%] h-[5%] w-[5%] absolute z-10">
        <Butterfly />
      </div>
      <div className="top-[50%] left-[10%] h-[5%] w-[5%] absolute z-10">
        <Butterfly />
      </div>
      <div className="bottom-[2%] left-[30%] absolute z-10">
        <img src={Rosa} alt="rose" width="20%" height="20%" />
      </div>
    </div>
  );
}

export default App;
