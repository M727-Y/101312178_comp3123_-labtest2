import './App.css';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Interface from './Interface';


function App() {
  return (
    <Container className='main'>
      <div className='row'>
        
        <div className='col-md-12'>
          <Interface />

        </div>
        
      </div>
    </Container>
  );
}

export default App;
