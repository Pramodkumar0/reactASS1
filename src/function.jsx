import React, {useState} from 'react';
import './index.css';
import Function,{Classfunction} from './component';


export let Bigbox = () =>
{ 
    

    let  [funcState, setfuncState] = useState(true)
    let firstbox = () => {setfuncState((state) => !state)};

    let [classState, setclassState] = useState(true)
    let secondbox = () => {setclassState((state) => !state)};

    return(
     <>
        <div className='btns'>

        <button id='btn' onClick={()=>{firstbox()}}>To see styling in functional component</button>
        <button id='btn' onClick={()=>{secondbox()}}>To see styling in class component</button>

        </div>
        
        <div className='container'>

            {!funcState ? <Function/> : null}
            {!classState ? <Classfunction/> : null}

        </div>
    </>
    )
}

