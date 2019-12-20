import gql from "graphql-tag";

export const QUERY_ALL_JOBS = gql`
  {
    jobs {
      id
      title
      description
      commitment {
        title
      }
      company {
        name
      }
      cities {
        name
        country {
          name
        }
      }
      createdAt

      applyUrl
      tags {
        name
      }
    }
  }
`;
