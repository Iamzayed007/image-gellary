
import { Container } from 'react-bootstrap';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DataProvider } from './contexts/DataContext';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
<DndProvider backend={HTML5Backend}>
  <DataProvider>
  <Container>
  <Header/>
  <Gallery/>
  </Container>
  </DataProvider>
</DndProvider>
  
    </div>
  );
}

export default App;
