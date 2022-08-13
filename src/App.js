import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className='container mx-auto pb-12 px-3'>
          Content
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
