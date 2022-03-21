// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import NoPage from './Component/NoPage/NoPage';
import Header from './Component/Header/Header';
import Leagues from './Component/Leagues/Leagues';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="leagues" element={<Leagues />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>

    <Header></Header>
    </div>
  );
}

export default App;
