
import { Container } from 'react-bootstrap';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div>
<DndProvider backend={HTML5Backend}>
  <Container>
<h1>Image</h1>
  <Gallery/>
  </Container>
</DndProvider>
  
    </div>
  );
}

export default App;
