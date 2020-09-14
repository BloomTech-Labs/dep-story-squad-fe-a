import React, { useEffect } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

import { config } from '../../../utils/oktaConfig';

import Header from '../../common/Header.js';
import './LoginContainer.less';
const LoginContainer = () => {
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config;
    // destructure your config so that you can pass it into the required fields in your widget.
    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
      clientId,
      redirectUri,
      registration: {
        // there is more we can do to handle some errors here.
      },
      features: { registration: false },
      // turning this feature on allows your widget to use Okta for user registration
      logo: 'path-to-your-logo',
      // add your custom logo to your signing/register widget here.
      i18n: {
        en: {
          'primaryauth.title': 'Welcome to Labs Basic SPA Please sign in',
          // change title for your app
        },
      },
      authParams: {
        pkce,
        issuer,
        display: 'page',
        scopes,
      },
    });

    widget.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );
  }, []);

  return (
    <div>
      <Header title="Story Squad" />
      <section className="main-container">
        <div className="welcome-text">
          <p>
            Story Squad is a game where imagination comes to play. It’s where
            generating ideas scores big.
          </p>
          <br />
          <p>
            Story Squad springs storytellers into action by partnering them up
            to participate in interactive & immersive creative challenges.
          </p>
          <br />
          <p>
            Become a master of your craft by submitting original drawings &
            handwritten stories, receiving and giving real feedback, sharing
            points in a squad-vs-squad matchup, and finally see if you won.
          </p>
          <br />
          <p>Ready?</p>
        </div>
        <div id="sign-in-widget" />
      </section>
    </div>
  );
};

export default LoginContainer;
