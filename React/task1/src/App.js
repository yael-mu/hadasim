import './App.css';
import Card from './components/card';
import Footer from './components/footer';
import HeaderComponet from './components/header_componet';

function App() {
  return <>
    <header>
      <HeaderComponet />
    </header>
    <div className='profile-container'>
      <Card name="yael" description="Software Engineer" image="https://via.placeholder.com/150" className="friend"></Card>
      <Card name="avital" description="Product Manager" image="https://via.placeholder.com/150" className="teacher"></Card>
      <Card name="tamar" description="Designer" image="https://via.placeholder.com/150" className="student"></Card>
    </div>
    <footer>
      <Footer />
    </footer>
  </>
}

export default App;
