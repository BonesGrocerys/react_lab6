import './App.css';
import Table from './components/Table';


const data = [
  ['Id:', 1, 2, 3, 4],
  ['Исполнитель', 'KUTE', 'Kordhell', 'SHPACKYOU$', 'Kaito Shoma'],
  ['Название трека', 'Techno killa', 'Murder in my mind', 'Paradise', 'GAZ'],
];

function App() {
  return (
    <div >
      <div className="body">
        <div className='header'>Музыканты</div>
      <div><Table data={data} /></div>
      </div>
      
      
    </div>
  );
}

export default App;
