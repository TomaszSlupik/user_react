import './App.css';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import Animals from './components/Animals/Animals'
import Food from './components/Food/Food';
import Button from './components/Button/Button';
import Question from './components/Question/Question';

function App() {

  const link = {
    react: 'https://pl.reactjs.org/'
  }

  return (
    <div className="App">
          <Header />
          <hr />
          <Users />
          <hr />
          <Animals />
          <hr />
          <Food />
          <hr />
          <Button />
          <hr />
          <Question />
          <hr />
          

      <a href={link.react} target="blank">React webside</a>

    </div>
  );
}

export default App;
