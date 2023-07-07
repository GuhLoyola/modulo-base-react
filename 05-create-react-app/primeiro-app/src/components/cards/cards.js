import Card from '../card/card'
import './cards.css'

const cardsTitle = ['Titulo card 1', 'Titulo card 2', 'Titulo card 3']
const cardsText = ['Esse é o texto do card 1', 'Esse é o texto do card 2', 'Esse é o texto do card 3']

const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>

            <div className='container-cards'>
                {
                    cardsTitle.map(( cardTitle, index ) =>
                        <Card key={ index }>
                            <h3>{ cardTitle }</h3>
                            <p>{ cardsText[index] }</p>
                        </Card>
                    )
                }
            </div>
        </div>
    )
}

export default Cards