import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([  
      {name: "Php", votes: 0},
      {name: "Python", votes: 0},
      {name: "JavaSript", votes: 0},
      {name: "Java", votes: 0}
    ])

const handleVote = (indexToUpdate) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((lang, index) => {
        if (index === indexToUpdate) {
          // Return a new object with the incremented vote count
          return { ...lang, votes: lang.votes + 1 };
        }
        // Return unchanged languages as they are
        return lang;
      })
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Vote for your Favorite Language</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        {/* 3. Map over the state array to render the language list and buttons */}
        {languages.map((lang, index) => (
          <div 
            key={lang.name} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px'
            }}
          >
            <span>
              <strong>{lang.name}</strong>: {lang.votes} {lang.votes === 1 ? 'vote' : 'votes'}
            </span>
            
            {/* Pass the index of the clicked item to our handler */}
            <button onClick={() => handleVote(index)} style={{ cursor: 'pointer' }}>
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );


  
}

export default App
