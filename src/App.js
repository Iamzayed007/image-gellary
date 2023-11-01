
import './App.css';
import Gallery from './components/Gallery/Gallery';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div>
<h1>Image</h1>
<DndProvider backend={HTML5Backend}>
<Gallery/>
</DndProvider>
  
    </div>
  );
}

export default App;
