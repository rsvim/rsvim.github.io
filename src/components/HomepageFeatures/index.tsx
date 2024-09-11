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
    title: "Simply",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        A powerful TUI engine similar to GUI frameworks that provides widgets,
        event handlers, layouts, etc.
      </>
    ),
  },
  {
    title: "Programmable",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        A programmable editor that provides a consistent script runtime, with
        builtin support for type system, async/await, plugin management, etc.
      </>
    ),
  },
  {
    title: "Multiplayer",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        A background editing service that allows multiple remote clients to
        access and work together.
      </>
    ),
  },
  {
    title: "Integrable",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        A text processing tool that batch processes text contents and integrates
        with shell environment.
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
