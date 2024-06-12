import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.scss";
import {
  Home,
  Whatsnew,
  Stories,
  Descendancy
} from './pages';
import {
  Navigation
} from './components';
function App() {
const navigate = useNavigate();
  return (
    <>
      <Navigation navigate={navigate}></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/whatsnew'  element={<Whatsnew />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/descendancy' element={<Descendancy />} />
      </Routes>
    </>
  );
}

export default App
