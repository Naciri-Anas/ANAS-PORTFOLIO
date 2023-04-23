import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Certification from './components/certification';
import Experience from './components/experience';
import Formation from './components/formation';
import ProfileImage from "./components/image";
import Projet from "./components/projet"
import Accueil from "./components/accueil"
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


function App() {
  return (
    <BrowserRouter>
      <div>
    
        <header className="header">
          <ProfileImage />
          <h1>Naciri Anas</h1>
          <h2>Elève ingénieur En Informatique</h2>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" >
                <span class='titlecol'>Accueil</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formation" className="nav-link">
              <span class='titlecol'>Formation</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-link">
              <span class='titlecol'>Expérience</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projet" className="nav-link">
              <span class='titlecol'>Projet</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/certification" className="nav-link">
              <span class='titlecol'>Certification</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projet" element={<Projet />} />
            <Route path="/certification" element={<Certification />} />
          </Routes>
        </div>

        {/* Pied de page */}
        <footer className="footer">
          
          <p>Contactez-moi : <a class="link-opacity-100" rel="noopener" target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJWHLzXTRtsVXNCjpDkmnLzWhhScjrmCTFfCTJWnZCFWDwXsCNhLvNDRMNTWvmFZPWlq">anasnaciridev@gmail.com</a></p>
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;