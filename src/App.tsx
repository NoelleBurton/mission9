import React from 'react';
import './App.css';
import data from './data.json';

// create an interface
interface Team {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

// root object has a key called "teams"
const teams: Team[] = data.teams;

// #1 welcome function
function Welcome() {
  return (
    <div>
      <h1>March Madness</h1>
      <h3>
        This app displays the school name, mascot name, and location for all the
        basketball teams in the NCAA.
      </h3>
    </div>
  );
}

// #2 component to create an individual card
class TeamComponent extends React.Component<{ team: Team }, {}> {
  render() {
    const { team } = this.props;
    return (
      <div className="team-card">
        <h4>{team.school}</h4>
        <p>Macot Name: {team.name}</p>
        <p>
          Location: {team.city}, {team.state}
        </p>
      </div>
    );
  }
}

// #3 class to create all cards
function TeamList() {
  return (
    <div>
      {teams.map((team) => (
        <TeamComponent key={team.tid} team={team} />
      ))}
    </div>
  );
}

// app function
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
