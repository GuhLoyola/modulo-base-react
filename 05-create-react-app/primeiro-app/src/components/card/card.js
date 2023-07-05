import React from "react";
import './card.css'

// Passando propriedades através de um componente de função:

const Card = (props) => {
    return(
            <div className="card">
                <h3>{ props.title }</h3>
                <p>Esse é um texto do card.</p>
            </div>
    )
}

// Passando propriedades através de um componente de classe: 

// class Card extends React.Component {
//     render() {
//         return (
//             <div className="card">
//                 <h3>{ this.props.title }</h3>
//                 <p>Esse é um texto do card.</p>
//             </div>
//         );
//     }
// }

export default Card