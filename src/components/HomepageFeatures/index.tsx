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
    title: "Speed",
    Svg: require("@site/static/img/lightning.svg").default,
    description: <>Fully utilizes all CPU cores and never freezes.</>,
  },
  {
    title: "Flexible",
    Svg: require("@site/static/img/artist_palette.svg").default,
    description: (
      <>Powerful TUI engine with widgets, event handlers, layouts, etc.</>
    ),
  },
  {
    title: "Programmable",
    Svg: require("@site/static/img/musical_keyboard.svg").default,
    description: <>JavaScript-based runtime include TypeScript support.</>,
  },
  {
    title: "Multiplayer",
    Svg: require("@site/static/img/footprints.svg").default,
    description: <>Multiple users access remotely and work together.</>,
  },
  {
    title: "Integrable",
    Svg: require("@site/static/img/electric_plug_red.svg").default,
    description: <>Integrate with the shell environment.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--2")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center">
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
          <div className="col col--1"></div>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          <div className="col col--1"></div>
        </div>
      </div>
    </section>
  );
}
