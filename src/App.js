import './App.css';
import Table from './Components/Table';

function App() {
  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Alex',
      job: 'Influencer',
    },
    {
      name: 'Ebuka',
      job: 'Balleer',
    },
    {
      name: 'davis',
      job: 'Arguemetawyer',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
       <Table charactersdata={characters}/>
      </header>
    </div>
  );
}

export default App;
