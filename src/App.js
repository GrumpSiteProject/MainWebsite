import "./css/grumpBackground.css"
import './App.css';
import MainPage from "./comps/MainPage"
import Footer from "./staticComps/Footer"
import Header from "./staticComps/Header"
function App() {
  return (
<div class="bg-gradient">
  <div class="bg-dots">
    <Header/>
    <MainPage/>
    <Footer/>
  </div>
  
</div>
  );
}

export default App;
