import Navbar from './components/Navbar'
import './App.css';
import AppRouter from './components/AppRouter';
import { useContext } from 'react';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader';

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader/>
  }

  return (
    <div className="App">
      <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;
