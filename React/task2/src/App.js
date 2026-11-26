import './App.css';
import HeaderComponet from './components/header_componet';
import FilterBar from './components/filter_bar';
import Footer from './components/footer';

function App() {
  
  return <>
    <header>
      <HeaderComponet />
    </header>
    <FilterBar />
    <Footer />
  </>
}

export default App;