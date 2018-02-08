/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Help extends React.Component {
  render() {
    const supportLinks = [
      {
        content:
          `Schauen Sie in die [Liste der Korrekturen.](${siteConfig.baseUrl + 'docs/errata.html'})`,
        title: 'Korrekturen',
      },
      {
        content: 'Schicken Sie mir eine E-Mail: <erik@behrends.io>',
        title: 'Kontakt',
      },
      {
        content: "coming soon",
        title: 'Newsletter',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Haben Sie Fragen zu React Native?</h2>
            </header>
            <p>Vielleicht kann ich Ihnen weiterhelfen.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
