import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import shortid from "shortid";

import JobsList from "./components/JobsList";
import Navbar from "./components/Navbar";

const client = new ApolloClient({
  uri: "https://api.graphql.jobs/",
});

const App = () => {
  return (
    <>
      <Navbar key={shortid.generate()} />
      <ApolloProvider client={client}>
        <JobsList key={shortid.generate()} />
      </ApolloProvider>
    </>
  );
};

export default App;
