import React from 'react';
import './App.css';
import './style/Styles.css';
import { useSuperheroes } from './hooks/useSuperheroes';
import LoadingSpinner from './component/LoadingSpinner';
import { SuperheroInterface } from './interfaces/superheroInterface';

function App() {

  const { isLoading, superHeroes } = useSuperheroes();
  console.log(JSON.stringify(superHeroes, null, 5));

  const handleClick = (e: SuperheroInterface) => {
    console.log(JSON.stringify(e, null, 5));
    showNotification(e.name);
  }

  const showNotification = (name: string) => {
    Notification.requestPermission();
    new Notification(name);
  }

  return (
    <div className="Styles">
      <div className='navigation-bar-background'>
        <div className='title-header'>Superhero App</div>
      </div>
      <div className='row'>
        {isLoading ? <LoadingSpinner /> : superHeroes.map(item => (
          <div onClick={() => handleClick(item)}>
            <img src={item.images.sm} className="mask" alt={item.biography.fullName} />
            <div className='description-card'>
              <p> {item.name}</p>
              <p> {item.appearance.height[1]} - {item.appearance.weight[1]}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
