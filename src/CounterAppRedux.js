
import { useDispatch, useSelector } from 'react-redux';
import './css.css'


function CounterAppRedux() {

  const dispatch = useDispatch()

  const state = useSelector(state => state.counterReducer)

  return (

    <>
      <div>
        <p>
          El value del value es: {state.value}
        </p>
      </div>
      <p>
        <button onClick={() => dispatch({ type: 'restar' })} >Restar</button>
        <button onClick={() => dispatch({ type: 'resetear' })} >Resetear</button>
        <button onClick={() => dispatch({ type: 'adicionar' })}  >Adicionar</button>
      </p>
    </>

  );
}


export default CounterAppRedux;
