import React from "react";
import { Card, Divider, Message, Grid, Button } from "semantic-ui-react";
import ReadMoreReact from "read-more-react";

/*
id,
  title,
  description,
  commitment,
  company,
  cities,
  applyUrl,
  tags
*/

function Job({ job }) {
  const readMore = {
    color: "blue",
    cursor: "pointer"
  };

  const {
    id,
    title,
    description,
    commitment,
    company,
    cities,
    applyUrl,
    tags,
    createdAt
  } = job;

  return (
    <div>
      <Card
        color="green"
        centered
        key={id}
        style={{ width: "75%", textAlign: "justify" }}
      >
        <Card.Content>
          <Card.Header>
            <h1>{title}</h1>
          </Card.Header>
          <Divider />
          <Card.Description>
            <Message>
              <ReadMoreReact
                text={description}
                min={500}
                ideal={700}
                max={750}
                key={createdAt}
                readMoreText={<span style={readMore}>Read more...</span>}
              />
            </Message>
            <Divider />
            <br />
            <Message color="blue" style={{ width: "90%", margin: "auto" }}>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <strong>Location: </strong>
                    {cities.length > 0 ? cities.map(city => city.name) : "N/A"}
                  </Grid.Column>
                  <Grid.Column>
                    <strong>Company: </strong>
                    {company.name ? company.name : "N/A"}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <strong>Commitment: </strong>
                    {commitment.title ? commitment.title : "N/A"}
                  </Grid.Column>

                  <Grid.Column>
                    <strong>Tags: </strong>
                    {tags.length > 0 ? tags.map(tag => tag.name + ", ") : "N/A"}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  {applyUrl ? (
                    <a
                      href={applyUrl}
                      target="blank"
                      style={{ margin: "auto" }}
                    >
                      <Button positive>
                        <strong style={{ color: "white" }}>Apply Here</strong>
                      </Button>
                    </a>
                  ) : (
                    "N/A"
                  )}
                </Grid.Row>
              </Grid>
            </Message>
          </Card.Description>
        </Card.Content>
      </Card>
      ;
    </div>
  );
}

export default Job;
