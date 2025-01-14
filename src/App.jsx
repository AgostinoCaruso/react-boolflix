import './App.css'

//components
import Header from './components/Header';
import Main from './components/Main';

import { MovieContext, MovieProvider } from './Context/MovieContext';

function App() {

  return (
    <MovieProvider>
      <Header />
      <Main />
    </MovieProvider>
  );
}

export default App