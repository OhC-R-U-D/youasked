import React, { Component } from "react";

export default class CommunityGuideLinesPage extends Component {
  render() {
    return (
      <div className="guide-title">
        <h1>You Asked! Community GuideLines</h1>
        <body className="guide-body">
          <p>
            Welcome to the You Asked community! This is a safe Advice Forum to
            post your deepest or most shallow questions out into the Universe.
          </p>
          <p>
            We want everyone to be part of our community and have their voice
            heard.
          </p>
          <p>
            We encourage your feedback and aim to respond to your {""}
            <a href="/contact">comments</a>
            {""} as soon as possible.
          </p>
          <p>
            While we do moderate this community, we welcome open discussion.
          </p>
        </body>
        <article className="guide-article">
          <h4>
            To help everyone enjoy our community, we ask that when you post and
            comment, you keep in mind the following:{" "}
          </h4>
        </article>
        <section className="guide-section">
          <ol>
            We don’t allow defamatory, indecent, offensive, profane,
            discriminatory, misleading, unlawful or threatening comments.{" "}
          </ol>
          <ol>
            Personal attacks, name-calolng, trolling and abuse will not be
            tolerated.{" "}
          </ol>
          <ol>
            Spamming, posting promotional material or posting links to third
            party websites is not permitted.{" "}
          </ol>
          <ol>
            We reserve the right to delete comments at our discretion and block
            any repeat offenders. We will remove content that is fraudulent,
            deceptive or misleading.{" "}
          </ol>
          <ol>Coordinated group attacks will not be tolerated. </ol>
          <ol>
            Respect that other people in the community have had different life
            experiences and may have a different perspective to yours. We
            welcome different viewpoints.{" "}
          </ol>
          <ol>Coordinated group attacks will not be tolerated. </ol>
          <ol>
            Our community is a public place. Don’t post personal information
            that you would not be comfortable sharing with a stranger. We
            recommend that you don’t post any information that may identify you
            or anyone else, such as your address, email address or phone number.{" "}
          </ol>
          <h5>
            If you a question about our services or policies, please get in
            touch via our contact page.
          </h5>
        </section>
      </div>
    );
  }
}
