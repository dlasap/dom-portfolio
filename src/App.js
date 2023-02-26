import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Aside">
        <Aside />
      </div>
      <div className="Content">
        <Content />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
