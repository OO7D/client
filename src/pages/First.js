import React from 'react';
import LandingCard from '../components/landing/LandingCard';
import LandingContents from '../components/landing/LandingContents';
import Styled from 'styled-components';

const FirstWrap = Styled.div`
      @charset "UTF-8";
      /* mobile style */

      * {
        box-sizing: border-box;
        -webkit-text-size-adjust: none;
      }

      body,
      form,
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      fieldset,
      th,
      td,
      input,
      textarea,
      select {
        margin: 0;
        padding: 0;
        font-family: 'Malgun Gothic', '맑은 고딕', dotum, '돋움', sans-serif;
      }
      body {
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
      }
      a[href^='tel'] {
        font-style: normal;
      }
      address,
      caption,
      em,
      var {
        font-style: normal;
        font-weight: normal;
      }
      input,
      textarea,
      select {
        letter-spacing: normal;
      }
      ol,
      ul,
      dl {
        list-style: none;
      }
      fieldset,
      img {
        border: 0;
      }
      legend,
      caption {
        display: none;
      }
      img {
        border: 0;
        vertical-align: top;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      br {
        letter-spacing: normal;
      }
      p {
        letter-spacing: normal;
      }
      input {
        vertical-align: middle;
      }
      input[type='text'],
      input[type='password'] {
        -webkit-appearance: none;
      }
      input[type='checkbox'] {
        -webkit-appearance: none;
        -webkit-border-radius: 0;
      }
      input:checked[type='checkbox'] {
        -webkit-appearance: checkbox;
      }
      input[type='radio'] {
        border: none;
        -webkit-appearance: none;
      }
      button,
      input[type='button'],
      input[type='submit'],
      input[type='reset'],
      input[type='file'] {
        -webkit-appearance: button;
        border-radius: 0;
      }
      textarea {
        -webkit-appearance: none;
      }
      select {
        -webkit-appearance: menulist-text;
      }
      html {
        width: 375px;
        height: 812px;
      }
      body {
        color: #c5c5c5;
      }
`;

const First = () => {
  return (
    <FirstWrap>
      <LandingCard />
      <LandingContents />
    </FirstWrap>
  );
};

export default First;
