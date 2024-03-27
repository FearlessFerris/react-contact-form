
import './App.css';

// Styling 
import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

// Components 
import ContactInformationForm from './Form';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title> Contact Information Form </title>
      </Helmet>
      <Header as = 'h1'> Contact Information Form </Header>
      <ContactInformationForm />
    </div>
  );
}

export default App;
