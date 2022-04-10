import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Art from "../components/art/art";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query ArtTemplateQuery($id: String!) {
    artProject: sanityArt(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      previewImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      _rawExcerpt
      slug {
        current
      }
    }
  }
`;

const ArtTemplate = props => {
  const { data, errors } = props;
  const project = data && data.artProject;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Art {...project} />}
    </Layout>
  );
};

export default ArtTemplate;
