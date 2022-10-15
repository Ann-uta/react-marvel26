import './App.css';
import HeroCard from './HeroCard/HeroCard';
import heroes from './HeroCard/HeroData';


function App() {
  return (
    <div className="App">
      {
        heroes.map ((hero) =>
        <HeroCard id={hero.id}
        img={hero.img}
        name={hero.name}
        universe={hero.universe}
        alterEgo={hero.alterEgo}
        occupation={hero.occupation}
        friends={hero.friends}
        superpower={hero.superpower}
        more={hero.more}/>)
      }
    </div>
  );
}

export default App;
