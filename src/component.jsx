import React from "react";

//functional component
const FuncComponent = () =>{
    return(

        <div className='firstbox'>
            <h1>This is created using Functional Component</h1>
            <p>This is done using external css</p>
            <p className="last">This is done using internal css</p>
        </div>
    )
}
export default FuncComponent;

//class component
export class Classfunction extends React.Component{
    render(){
        return(

            <div className='secondbox'>
                <h1>This is created using Class Component</h1>
                <p>This is done using external css</p>
                <p className="last">This is done using internal css</p>
            </div>

        )
    }
}