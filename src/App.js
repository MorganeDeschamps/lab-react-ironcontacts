import './App.css';
import 'bulma/css/bulma.css';

import ContactsPage from './components/ContactsPage';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <ContactsPage />
    </div>
  );
}

export default App;
