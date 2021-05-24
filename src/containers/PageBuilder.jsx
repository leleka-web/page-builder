import React from "react";
import { registeredComponents } from "../consts";
import Helmet from "react-helmet";
import { getComponentFromList } from "../helpers";

const MetaTags = ({ title, meta }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {meta &&
        meta.map(({ name, content }) => (
          <meta key={name + content} name={name} content={content} />
        ))}
    </Helmet>
  );
};

const PageBuilder = ({ pageComponents, seoMeta }) => {
  return (
    <>
      {seoMeta && <MetaTags {...seoMeta} />}
      {pageComponents
        .filter(({ componentName }) => {
          const Component = getComponentFromList(
            registeredComponents,
            componentName
          );
          return typeof Component === "function";
        })
        .map(({ componentData, componentName }, index) => {
          const Component = getComponentFromList(
            registeredComponents,
            componentName
          );
          return <Component key={index} {...componentData} />;
        })}
    </>
  );
};

export default React.memo(PageBuilder);
