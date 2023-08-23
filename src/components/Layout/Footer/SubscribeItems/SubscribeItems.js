import React, { useReducer } from 'react';

import youtubeActive from '../../../../assets/images/subscribe/clicked/youtube.svg';
import linkedinActive from '../../../../assets/images/subscribe/clicked/linkedin.svg';
import googleActive from '../../../../assets/images/subscribe/clicked/google.svg';
import facebookActive from '../../../../assets/images/subscribe/clicked/facebook.svg';
import twitterActive from '../../../../assets/images/subscribe/clicked/twitter.svg';

import youtube from '../../../../assets/images/subscribe/regular/youtube.svg';
import linkedin from '../../../../assets/images/subscribe/regular/linkedin.svg';
import google from '../../../../assets/images/subscribe/regular/google.svg';
import facebook from '../../../../assets/images/subscribe/regular/facebook.svg';
import twitter from '../../../../assets/images/subscribe/regular/twitter.svg';

import styles from './SubscribeItems.module.scss';
import contacts from '../../../../data/contacts';

function SubscribeItems() {
   const initialState = {
      youtube: false,
      linkedin: false,
      google: false,
      facebook: false,
      twitter: false,
   };

   function reducer(state, action) {
      switch (action.type) {
         case 'youtube':
            return { ...state, youtube: !state.youtube };
         case 'linkedin':
            return { ...state, linkedin: !state.linkedin };
         case 'google':
            return { ...state, google: !state.google };
         case 'facebook':
            return { ...state, facebook: !state.facebook };
         case 'twitter':
            return { ...state, twitter: !state.twitter };
         default:
            return { ...state };
      }
   }

   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <ul className={styles.subscribe}>
         <li className={styles.subscribe__icon}>
            <a href={contacts.youtube}>
               <img
                  onMouseEnter={() => dispatch({ type: 'youtube' })}
                  onMouseLeave={() => dispatch({ type: 'youtube' })}
                  src={state.youtube ? youtubeActive : youtube}
                  alt="youtube"
               />
            </a>
         </li>
         <li className={styles.subscribe__icon}>
            <a href={contacts.linkedin}>
               <img
                  onMouseEnter={() => dispatch({ type: 'linkedin' })}
                  onMouseLeave={() => dispatch({ type: 'linkedin' })}
                  src={state.linkedin ? linkedinActive : linkedin}
                  alt="linkedin"
               />
            </a>
         </li>
         <li className={styles.subscribe__icon}>
            <a href={contacts.google}>
               <img
                  onMouseEnter={() => dispatch({ type: 'google' })}
                  onMouseLeave={() => dispatch({ type: 'google' })}
                  src={state.google ? googleActive : google}
                  alt="google"
               />
            </a>
         </li>
         <li className={styles.subscribe__icon}>
            <a href={contacts.facebook}>
               <img
                  onMouseEnter={() => dispatch({ type: 'facebook' })}
                  onMouseLeave={() => dispatch({ type: 'facebook' })}
                  src={state.facebook ? facebookActive : facebook}
                  alt="facebook"
               />
            </a>
         </li>
         <li className={styles.subscribe__icon}>
            <a href={contacts.twitter}>
               <img
                  onMouseEnter={() => dispatch({ type: 'twitter' })}
                  onMouseLeave={() => dispatch({ type: 'twitter' })}
                  src={state.twitter ? twitterActive : twitter}
                  alt="twitter"
               />
            </a>
         </li>
      </ul>
   );
}

export default SubscribeItems;
