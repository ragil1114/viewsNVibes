import React, { Fragment } from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Navbar from './components/Navbar/Navbar';
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
import {BrowserRouter as Router } from 'react-router-dom';


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
      <Fragment>
      <Navbar />
      <Banner />
      <Search />
      <Explore />
      <Adventure />
      <Booking />
      <Gallery />
      <Signin />
      <Signup />
      <Contact />
      <Footer />
      </Fragment>
    </Router>
    </ApolloProvider>
  );
}

export default App;
