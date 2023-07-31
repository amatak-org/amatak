import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Head from '@docusaurus/Head';

const MySEO = () => (
  <Head>
    <meta property="og:description" content="Amatak Documentations" />
    <meta charSet="utf-8" />
    <title>Amatak Opensource</title>
    <link rel="canonical" href="https://amatak.org/docs" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1930350912157340"
     crossorigin="anonymous"></script>
  </Head>
);

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'VueJS',
    Svg: require('@site/static/img/vue-fill-svgrepo-com.svg').default,
    description: (
      <>
        We love to work with Vue's framwork as the frontend it
        performant and versatile framework for building web user interfaces.
        <code><a href="https://vuejs.org/">docs</a></code>
      </>
    ),
  },
  {
    title: 'Django',
    Svg: require('@site/static/img/django-svgrepo-com.svg').default,
    description: (
      <>
        Django is a high-level Python web framework that encourages rapid development and clean,Amatak has been choice Django to put at the backend.
         <code><a href="https://www.djangoproject.com/">docs</a></code>
      </>
    ),
  },
  {
    title: 'CloudFlare',
    Svg: require('@site/static/img/cloudflare-svgrepo-com.svg').default,
    description: (
      <>
        Offering CDN, DNS, DDoS protection and security, Amatak care about your domain security and protect your domain from scam.

         <code><a href="https://www.cloudflare.com/">docs</a></code>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
