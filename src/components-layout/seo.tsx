import React, { ReactNode } from "react";
import { SiteMetaData, useSiteMetadata } from "../hooks/use-site-metadata";
import { PageProps } from "gatsby";

export type SeoProps = {
  subTitle: string;
};
export const Seo = ({ subTitle }: SeoProps) => {
  const seo: SiteMetaData = useSiteMetadata();
  return (
    <>
      <title>
        {seo.title} | {subTitle}
      </title>
    </>
  );
};
