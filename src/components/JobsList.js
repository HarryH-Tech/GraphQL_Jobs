import React from "react";
import { Query } from "react-apollo";
import { QUERY_ALL_JOBS } from "../queries/ALL_JOBS";
import Job from "./Job";
import shortid from "shortid";

function JobsList() {
  return (
    <Query query={QUERY_ALL_JOBS}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <div key={shortid.generate()} style={{ textAlign: "center" }}>
              <img
                key={shortid.generate()}
                src="https://cdn.dribbble.com/users/3337757/screenshots/6825268/076_-loading_animated_dribbble_copy.gif"
                alt="Loading Spinner..."
              />
            </div>
          );
        if (error)
          return (
            <div
              style={{
                margin: "auto",
                textAlign: "center",
                padding: "0.5rem",
                backgroundColor: "#ff88aa",
                border: "0.3rem solid #ff5555",
                borderRadius: "0.4rem",
                width: "50%",
              }}
              key={shortid.generate()}
            >
              <strong key={shortid.generate()}>
                Sorry, there was an error. Please try again later.
              </strong>
            </div>
          );
        return data.jobs.map((job) => (
          <Job key={shortid.generate()} job={job} />
        ));
      }}
    </Query>
  );
}

export default JobsList;
