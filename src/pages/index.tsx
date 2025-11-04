import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Logo from "@site/src/components/HomepageFeatures/logo";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {/* {siteConfig.title} */}
          <Logo />
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.indexCtas}>
          <Link
            className="button button--primary button-lg"
            to="/docs/manual/get_started"
          >
            Get Started
          </Link>
          <Link
            className="button button--secondary button-lg"
            to="/docs/api/introduction"
          >
            API References
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description="Home">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
