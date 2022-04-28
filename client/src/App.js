import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AppNavbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import Explore from './components/Explore/Explore';
import Adventure from './components/Adventure/Adventure';
import Booking from './components/Booking/Booking';
import Gallery from './components/Gallery/Gallery';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup'
import Contact from './components/Contact/Contact';
// import SearchTours from './pages/SearchTours';
// import SavedTours from './pages/SavedTours';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>  
    <Router>
      {/* <Fragment> */}
      <AppNavbar />
      {/* <SearchTours />
      <SavedTours /> */}
      <Banner />
      <Search />
      <Explore />
      <Adventure />
      <Booking />
      <Gallery />
      {/* <Signin />
      <Signup /> */}
      <Contact />
      <Footer />
      {/* </Fragment> */}
    </Router>
    </ApolloProvider>
  );
}
 export default App;


// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <>
//           <Navbar />
//           <Routes>
//             <Route exact path="/" component={SearchTours} />
//             <Route exact path="/saved" component={SavedTours} />
//             <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
//             <Route exact path="/banner" component={Banner} />
//             <Route exact path="/footer" component={Footer} />
//             <Route exact path="/search" component={Search} />
//             <Route exact path="explore" component={Explore} />
//             <Route exact path="/adventure" component={Adventure} />
//             <Route exact path="/booking" component={Booking} />
//             <Route exact path="/gallery" component={Gallery} />
//             <Route exact path="/contact" component={Contact} />
//             <Route exact path="/signin" component={Signin} />
//             <Route exact path="/signup" component={Signup} />


        
//         </Routes>
//         <>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;
