import { graphql, useStaticQuery } from "gatsby";

type SiteMetaDataQuery = {
  site: {
    siteMetadata: SiteMetaData;
  };
};

export type SiteMetaData = {
  siteUrl: string;
  title: string;
  description: string;
};

export const useSiteMetadata = () => {
  return useStaticQuery<SiteMetaDataQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
          }
        }
      }
    `
  ).site.siteMetadata;
};
