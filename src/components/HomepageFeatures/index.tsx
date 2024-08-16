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
    title: "Follow VIM's Philosophy",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        RSVIM is still the VIM editor with editing modes, buffers, windows,
        statusline, etc. Not anything else.
      </>
    ),
  },
  {
    title: "Programmable Editor",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        RSVIM provides the best scripting runtime with Javascript/Typescript
        ever, with builtin support for async/await, type system and plugin
        manager.
      </>
    ),
  },
  {
    title: "Background Editing Service",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>Allow multiple users access and work together, local or remote.</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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
