/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock =
  CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return (
    siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc
  );
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a
          className="button"
          href={this.props.href}
          target={this.props.target}
        >
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self'
};

const SplashContainer = props => (
  <div id={props.id} className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('rn-book.jpg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('errata.html', language)}>
              Infos zum Buch
            </Button>
            <Button href="#buy">Buch kaufen</Button>
            <Button href="https://www.udemy.com/react-native-einstieg/?couponCode=TWT108">Video-Kurs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const FeatureCallout = props => (
  <div
    className="productShowcaseSection"
    style={{ textAlign: 'center' }}
  >
    <h2>
      Mit diesem Buch gelingt der Einstieg in die Entwicklung nativer Apps
    </h2>
    <p>
      Mit React Native können Sie vollwertige native Apps
      plattformübergreifend mit JavaScript entwickeln. Der Einstieg in die
      App-Entwicklung ist so einfach wie nie zuvor.
    </p>
    <p>
      Dieses Buch zeigt Ihnen, wie Apps parallel für Android und iOS mit
      einer weitgehend einheitlichen Codebasis umgesetzt werden. Sie
      benötigen dazu lediglich Programmiererfahrung in JavaScript.
    </p>
    <br />
  </div>
);

const FeatureCallout2 = props => (
  <Container padding={['bottom']}>
    <h2>
      Nie zuvor war der Einstieg in die Entwicklung mobiler Apps leichter
    </h2>
    <p>
      Mit React Native können Sie vollwertige native Apps
      plattformübergreifend mit JavaScript entwickeln. Der Einstieg in die
      App-Entwicklung ist durch dieses Framework so einfach wie nie zuvor.
    </p>
    <p>
      Dieses Buch zeigt Ihnen, wie Apps parallel für Android und iOS mit
      einer weitgehend einheitlichen Codebasis umgesetzt werden. Sie
      benötigen dazu lediglich Programmiererfahrung, idealerweise in
      JavaScript.
    </p>
  </Container>
);

const Features = props => (
  <Container background="light" padding="bottom">
    <GridBlock
      align="center"
      contents={[
        {
          title: 'Schneller Einstieg',
          content:
            'Testen Sie Ihre erste eigene App nach **wenigen Minuten** auf dem Smartphone.',
          image: `${siteConfig.baseUrl}img/icons/mbri-mobirise.svg`,
          imageAlign: 'top',
        },
        {
          title: 'iPhone-Apps ohne Mac entwickeln',
          content:
            'Programmieren Sie native Apps für das iPhone auf Windows oder Linux - **ein Mac wird nicht benötigt**.',
          image: `${siteConfig.baseUrl}img/icons/mbri-laptop.svg`,
          imageAlign: 'top',
        },
        {
          title: 'Praktisches Basiswissen',
          content:
            'Relevante Features neuerer Versionen von JavaScript und **grundlegende Konzepte** des Frameworks werden beschrieben.',
          image: `${siteConfig.baseUrl}img/icons/mbri-idea.svg`,
          imageAlign: 'top',
        }
      ]}
      layout="threeColumn"
    />
    <br />
    <br />
    <GridBlock
      align="center"
      contents={[
        {
          title: 'Plattformübergreifende Komponenten',
          content:
            'Lernen Sie **wichtige APIs und UI-Komponenten** wie Listen kennen.',
          image: `${siteConfig.baseUrl}img/icons/mbri-extension.svg`,
          imageAlign: 'top',
        },
        {
          title: 'Darstellung und Styling',
          content:
            'Erfahren Sie, wie ein **displayunabhängiges Styling** mit dem Flexbox-Layout erreicht wird.',
          image: `${siteConfig.baseUrl}img/icons/mbri-magic-stick.svg`,
          imageAlign: 'top',
        },
        {
          title: 'Beispiel-App',
          content:
            'Setzen Sie schrittweise eine **umfangreiche App** parallel für Android und iOS um, mit der Sie ein Tagebuch führen können.',
          image: `${siteConfig.baseUrl}img/icons/mbri-mobile2.svg`,
          imageAlign: 'top',
        }
      ]}
      layout="threeColumn"
    />
    <br />
    <br />
    <GridBlock
      align="center"
      contents={[
        {
          title: 'Kamera und Standort',
          content:
            'Binden Sie Fotoaufnahmen der **Kamera** und momentane Wetterdaten für Ihren **Standort** ein.',
          image: `${siteConfig.baseUrl}img/icons/mbri-camera.svg`,
          imageAlign: 'top',
        },
        {
          title: 'Navigation',
          content:
            'Mehrere Screens werden durch react-navigation in einer passenden **Navigationsstruktur** zusammengefasst.',
          image: `${siteConfig.baseUrl}img/icons/mbri-left-right.svg`,
          imageAlign: 'top',
        },
        {
          title: 'Animationen und Touchgesten',
          content:
            'Sie erhalten einen Einblick in den Umgang mit **Touchgesten und Animationen** zur Bereicherung der Usability.',
          image: `${siteConfig.baseUrl}img/icons/mbri-touch-swipe.svg`,
          imageAlign: 'top',
        }
      ]}
      layout="threeColumn"
    />
  </Container>
);

const Buy = props => (
  <SplashContainer id="buy">
    <Logo img_src={imgUrl('rn-book.jpg')} />
    <div className="inner">
      <h2 className="projectTitle" style={{ textAlign: 'center' }}>
        Buch kaufen
      </h2>
      <PromoSection>
        <Button
          href="https://oreilly.de/produkt/react-native/"
          target="_blank"
        >
          O'Reilly
        </Button>
        <Button
          href="https://www.thalia.de/shop/home/suchartikel/react_native/erik_behrends/EAN9783960090663/ID74645976.html"
          target="_blank"
        >
          Thalia
        </Button>
        <Button
          href="https://www.amazon.de/React-Native-parallel-Android-entwickeln/dp/3960090668/"
          target="_blank"
        >
          Amazon
        </Button>
      </PromoSection>
    </div>
  </SplashContainer>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <Features />
          <Buy />
        </div>
      </div>
    );
  }
}

module.exports = Index;
