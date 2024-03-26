import logo from './logo.svg';
import './App.css';
import React,{ useState,useEffect,lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet} from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestrauntMenu from './components/RestrauntMenu';
import UserContext from './utils.js/UserContext';
import { Provider } from "react-redux";
import Cart from './components/Cart';
import appStore from './utils.js/AppStore';
import { Sign_in } from './googlesign_in/sign_in';



const About = lazy(() => import('./components/about'));


function App() {


  const [userName, setUserName] = useState();
  const [isSignedIn, setIsSignedIn] = useState(false);


  // useEffect(() => {
  //   const userEmail = localStorage.getItem('email');
  //   console.log("User email from localStorage:", userEmail); // Debugging line
  //   if (userEmail) {
  //     setUserName(userEmail);
  //     setIsSignedIn(true);
  //   } else {
  //     console.log("No user email found, should show sign-in."); // Debugging line
  //     setIsSignedIn(false); // Explicitly set it to false for clarity
  //   }
  // }, []);
  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
        setUserName(userEmail);
        setIsSignedIn(true);
    } else {
        setIsSignedIn(false);
    }
}, []);
  

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName  }}>
    <div className="App">
      {/* <header className="App-header">
        <Header/>
        <Outlet/>
      </header> */}
      {isSignedIn ? (
            <>
              <Header /> {/* Include the Header */}
              <Outlet /> {/* And the Outlet for child routes */}
            </>
          ) : (
            <Sign_in />
          )}
    </div>
    </UserContext.Provider>
    </Provider>
  );

}



//Router Configuration
export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
    
      },
      {
        path:"/about",
        element:<About/>,
        errorElement:<Error/>
    
      },  
      {
        path:"/contact",
        element:<Contact/>,
        errorElement:<Error/>
      },
      {
        path:"/restaurants/:resid",
        element:<RestrauntMenu/>,
        errorElement:<Error/>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement:<Error/>
  }, 
]);

export default App;
