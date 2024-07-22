import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Landing from './components/landing'; 
import Footer from './components/footer';
import { Container } from 'react-bootstrap';
import Unknown from './components/unknown';

function App() {
  const baseName = process.env.PUBLIC_URL;
  console.log("BASE NAME:", baseName);

  return (
    <Container fluid className="App d-flex flex-column">
      <Router>
        <Header/>
        <Routes> 
          <Route path="/" element={<Landing/>}/>
          <Route path="*" element={<Unknown/>}/>
        </Routes>
        <Footer/>
      </Router>
    </Container>
  );
}

export default App;
