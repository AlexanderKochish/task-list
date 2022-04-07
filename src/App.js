import './App.css';
import Header from './components/Header/Header';
import TaskList from './components/Task-List/TaskList';

function App() {
  return (
    <div className="App">
      <Header />
        <div className='app__container'>
            <TaskList />
        </div>
    </div>
  );
}

export default App;
