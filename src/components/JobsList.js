import React, { useState } from "react";
import { Query } from "react-apollo";
import { QUERY_ALL_JOBS } from "../queries/ALL_JOBS";
import Job from "./Job";

function JobsList() {
  const [location, setLocation] = useState("");

  if (!location) {
    return (
      <Query query={QUERY_ALL_JOBS}>
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) return <p>Loading…</p>;
          if (error) return <p>Error :(</p>;
          return data.jobs.map(job => <Job key={job.id} job={job} />);
        }}
      </Query>
    );
  } else if (location) {
    return (
      <Query query={QUERY_ALL_JOBS}>
        {({ loading, error, data }) => {
          console.log(data);
          if (loading) return <p>Loading…</p>;
          if (error) return <p>Error :(</p>;
          return data.jobs.map(job => <Job key={job.id} job={job} />);
        }}
      </Query>
    );
  }
}

export default JobsList;
