import { Link } from "gatsby";
import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";

import { responsiveTitle2 } from "../components/typography.module.css";

// export const query = graphql`
//   query AboutPageQuery {
//     about: Person(id: "8875d471-a3af-4093-b298-eda7d20234b6") {
//       name,
//       _rawBio
//     }
//   }
// `;

// export const query = graphql`
//   query PersonQuery {
//     sanityPerson {
//       name
//       profileImage {
//         asset {
//           gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
//         }
//       }
//     }
//   }

const AboutPage = props => {
  return (
    <Layout>
      <SEO title="About Me" />
      <Container>
        <h1 className={responsiveTitle2}>About Me</h1>
        <p>Hi! My name is Xian (pronounced Zai-anne) and I am a UI/UX-focused technical product manager and front-end developer. I have worked on building Design Systems for global retailer, <Link to="https://gap.com/">Gap Inc</Link> and unicorn startup, <Link to="https://branch.io/">Branch</Link> (evaluated at $6B). I have worked on more redesigns than I can name, and have hands-on experience managing CMS migrations from legacy systems to Drupal, Contentful, and WordPress. In addition, I have worked on architecting and building out localized sites.</p>
        <p>
          Other than global site initiatives, I am constantly focused on improving site experiences from coming up with new feature ideas to engineering goals like increasing page speed, to design goals like improving UX, to marketing goals like optimizing CRO. I have performed AB and personalization testing through Tealium, Optimizely, VWO, and Google Optimized and measure KPIs using Google Analytics, Adobe Experience Manager, and Amplitude.
        </p>
        <p>
          Outside of work, I enjoy making fermented foods like kimchi and sourdough bread and rock climbing.
        </p>
        <p>
          You can find me on <Link to="https://www.linkedin.com/in/xian-chen-4998673b/">LinkedIn</Link> | <Link to="docs/resume_030122.pdf">Resume</Link>
        </p>
      </Container>
    </Layout>
  );
};

// <h2>{data.sanityPerson.name}</h2>
// <GatsbyImage image={data.sanityPerson.profileImage.asset.gatsbyImageData} />

// const AboutPage = props => {
//   const { data, errors } = props;
//   if (errors) {
//     return (
//       <Layout>
//         <GraphQLErrorList errors={errors} />
//       </Layout>
//     );
//   }
  
//   return (
//     <Layout>
//       <SEO title="About Me" />
//       <Container>
//         <h1 className={responsiveTitle2}>About Me</h1>
        
//       </Container>
//     </Layout>
//   );
// };


export default AboutPage;

