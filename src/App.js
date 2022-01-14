import './App.scss';
import { Footer } from './Components/Partials/Footer/footer.js'
import { FooterNav } from './Components/Partials/Footer/footer.js'
import { Header } from './Components/Partials/Header/header.js'
import { Main } from './Components/Partials/Main/main.js'
import { Nav } from './Components/Partials/Nav/nav.js'
import { navArr } from './Components/Partials/Nav/nav.js'



function App() {
  return (
    <div className="container">
      <div>
        <Header pagetitle="My First React App Header Title" />
      </div>

      <div className="centerContainer">
        <Nav data={navArr}/>
        <Main />
      </div>

      <div className ="footerContainer">
        <Footer />
        <FooterNav data={navArr}/>
      </div>
      
    </div>
  );
}

export default App;
