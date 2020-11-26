import './App.css';
import Navbar from './components/Navbar/Navbar'
import Message from './components/Message/Message'
// import FileUpload from './components/FileUpload/FileUpload'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Message/>
      {/* <FileUpload/> */}
    </div>
  );
}

export default App;
