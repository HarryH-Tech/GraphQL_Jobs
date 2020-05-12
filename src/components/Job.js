import React from "react";
import { Card, Divider, Message, Grid, Button } from "semantic-ui-react";
import ReadMoreReact from "read-more-react";
import shortid from "shortid";

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
    cursor: "pointer",
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
    createdAt,
  } = job;

  return (
    <>
      <Card
        color="green"
        centered
        key={id}
        style={{ width: "75%", textAlign: "justify" }}
      >
        <Card.Content key={shortid.generate()}>
          <Card.Header key={shortid.generate()}>
            <h1 key={shortid.generate()}>{title}</h1>
          </Card.Header>
          <Divider key={shortid.generate()} />
          <Card.Description key={shortid.generate()}>
            <Message key={shortid.generate()}>
              <ReadMoreReact
                text={description}
                min={500}
                ideal={700}
                max={750}
                key={createdAt}
                readMoreText={
                  <span key={shortid.generate()} style={readMore}>
                    Read more...
                  </span>
                }
              />
            </Message>
            <Divider key={shortid.generate()} />
            <br key={shortid.generate()} />
            <Message
              key={shortid.generate()}
              color="blue"
              style={{ width: "90%", margin: "auto" }}
            >
              <Grid columns={2} key={shortid.generate()}>
                <Grid.Row key={shortid.generate()}>
                  <Grid.Column key={shortid.generate()}>
                    <strong key={shortid.generate()}>Location: </strong>
                    {cities.length > 0
                      ? cities.map((city) => city.name)
                      : "N/A"}
                  </Grid.Column>
                  <Grid.Column key={shortid.generate()}>
                    <strong key={shortid.generate()}>Company: </strong>
                    {company.name ? company.name : "N/A"}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row key={shortid.generate()}>
                  <Grid.Column key={shortid.generate()}>
                    <strong key={shortid.generate()}>Commitment: </strong>
                    {commitment.title ? commitment.title : "N/A"}
                  </Grid.Column>

                  <Grid.Column key={shortid.generate()}>
                    <strong key={shortid.generate()}>Tags: </strong>
                    {tags.length > 0
                      ? tags.map((tag) => tag.name + ", ")
                      : "N/A"}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row key={shortid.generate()}>
                  {applyUrl ? (
                    <a
                      href={applyUrl}
                      target="blank"
                      style={{ margin: "auto" }}
                      key={shortid.generate()}
                    >
                      <Button positive key={shortid.generate()}>
                        <strong
                          key={shortid.generate()}
                          style={{ color: "white" }}
                        >
                          Apply Here
                        </strong>
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
      <br key={shortid.generate()} />
    </>
  );
}

export default Job;
