import './HeroCard.css';

function HeroCard (props){
    return (
        <div className="hero-item">            
            <img src={props.img} alt={props.id}/>
            <h2>{props.name}</h2>
            <p>Вселенная: {props.universe}</p> 
            <p>Альтер эго: {props.alterEgo}</p>
            <p>Род деятельности: {props.occupation}</p>
            <p>Друзья: {props.friends}</p>
            <p>Суперсила: {props.superpower}</p>
            <p>Подробнее: {props.more}</p>
        </div>
    )
}

export default HeroCard;