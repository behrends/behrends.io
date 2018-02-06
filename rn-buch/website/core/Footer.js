/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={
                  this.props.config.baseUrl + this.props.config.footerIcon
                }
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Infos zum Buch</h5>
            <a href={this.docUrl('errata.html', this.props.language)}>
              Korrekturen
            </a>
            <a href={this.docUrl('links.html', this.props.language)}>
              Links
            </a>
          </div>
          <div>
            <h5>Zum Author</h5>
            <a href="https://www.behrends.io">Webseite</a>
            <a href="https://twitter.com/behrends">Twitter</a>
          </div>
          <div>
            <h5>Sonstiges</h5>
            <a href="https://docusaurus.io/">Website based on Docusaurus</a>
            <a href="https://mobiriseicons.com/">Icons by Mobirise</a>
          </div>
        </section>

        <section className="copyright">
          Copyright &copy; {currentYear} Erik Behrends
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
