import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Shai Gilgeous-Alexander",
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278073.png&w=350&h=254",
      age: 24,
      note: "Most Valuable Player"
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
