
import { Container } from 'react-bootstrap';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DataProvider } from './contexts/DataContext';

function App() {
  return (
    <div>
<DndProvider backend={HTML5Backend}>
  <DataProvider>
  <Container>
<h1>Image</h1>
  <Gallery/>
  </Container>
  </DataProvider>
</DndProvider>
  
    </div>
  );
}

export default App;
