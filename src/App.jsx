import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { Spinner } from 'react-bootstrap';

function App() {

  const navigation = useNavigation();

  return (
    <div className="App">
      <Header />

      <div className='my-5'>
        {navigation.state === "loading" &&
          <Spinner animation="border" role="status">
            {/* <span className="visually-hidden">Loading...</span> */}
          </Spinner>
        }
      </div>

      <Outlet />
    </div>
  )
}

export default App
