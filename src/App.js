import { BrowserRouter as Router, Link} from "react-router-dom";
import Search from './components/Search';
import Category from './components/Category';
import Pages from "./pages/Pages";
import styled from "styled-components";
import { GiKnifeFork } from 'react-icons/gi'

function App() {
  return (
      <Router>
        <Nav><Logo to="/"><GiKnifeFork/>Delicious</Logo></Nav>
        <Search />
        <Category />
        <Pages />
      </Router>    
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family : "Lobster Two", cursive;
`
const Nav = styled.nav`
  padding : 4rem 0;
  display : flex;
  justify-content : flex-start;
  align-items : center;

  svg {
    font-size :2rem;
  }
`

export default App;
