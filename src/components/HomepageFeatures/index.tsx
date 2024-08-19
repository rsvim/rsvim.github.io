import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Never Blocks",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Always running in async mode and never blocks anything.</>,
  },
  {
    title: "TUI Engine",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Widgets, layouts and rendering effects that can help improve user
        experiences.
      </>
    ),
  },
  {
    title: "Javascript Runtime",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Best scripting runtime with Javascript/Typescript ever, builtin support
        for async/await, type system and plugin manager.
      </>
    ),
  },
  {
    title: "Background Service",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Running as a background daemon that allows multiple users access and
        work together, local or remote.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      {/*<div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>*/}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
