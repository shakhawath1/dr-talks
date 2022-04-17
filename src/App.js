import './App.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import auth from './firebase.init';

// const auth = getAuth(app);


function App() {

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user);
      })
  }
  return (


    <div className="App">
      <button onClick={handleGoogleSignIn}>Google</button>
    </div>
  );
}

export default App;