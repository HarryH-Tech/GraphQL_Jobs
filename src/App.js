import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import JobsList from "./components/JobsList";
import Navbar from "./components/Navbar";

const client = new ApolloClient({
  uri: "https://api.graphql.jobs/"
});

const App = () => {
  return (
    <>
      <Navbar />
      <ApolloProvider client={client}>
        <JobsList />
      </ApolloProvider>
    </>
  );
};

export default App;
