import React from 'react';
import './App.css';
import './style/Styles.css';
import { useSuperheroes } from './hooks/useSuperheroes';

function App() {

  const { isLoading, superHeroes } = useSuperheroes();
  console.log(JSON.stringify(superHeroes, null, 5));

  return (
    <div className="Styles">
      <div className='navigation-bar-background'>
        <div className='title-header'>Superhero App</div>
      </div>      
      <div className='row'>
        {superHeroes.map(item => (
            <div>
              <img src={item.images.sm} className="mask" alt={item.biography.fullName} />
              <div className='description-card'>
                <p>{item.biography.fullName}</p>           
                <p>{item.appearance.height}</p>
                <p>{item.appearance.weight}</p>
              </div>              
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
