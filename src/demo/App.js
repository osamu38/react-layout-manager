import React, { Component } from 'react';
import styled from 'styled-components';
import RLM from '../lib';

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0 8px;
  outline: none;
  border: 1px #ccc solid;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: inherit;
  font-size: 14px;
  color: inherit;
  vertical-align: middle;
  appearance: none;
`;
const Unit = styled.div`
  font-size: 12px;
  text-align: center;
`;
const Label = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
function Email() {
  const EmailStyle = {
    width: [100, '100%'],
    horizontalSpace: 5,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          wrap: true,
          wrapVerticalSpace: 5,
        },
      },
    ],
  };
  const EmailInnerStyle = {
    width: ['65%', 16, '35%'],
    horizontalSpace: 5,
  };

  return (
    <RLM {...EmailStyle}>
      <Label>Email</Label>
      <RLM {...EmailInnerStyle}>
        <Input placeholder="react-layout-manager" />
        <Unit>@</Unit>
        <Input placeholder="gmail.com" />
      </RLM>
    </RLM>
  );
}
function Tel() {
  const TelStyle = {
    width: [100, 160],
    horizontalSpace: 5,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          width: '100%',
          wrap: true,
          wrapVerticalSpace: 5,
        },
      },
    ],
  };

  return (
    <RLM {...TelStyle}>
      <Label>Tel</Label>
      <Input placeholder="090XXXXXXXX" />
    </RLM>
  );
}
function Password() {
  const PasswordStyle = {
    width: [100, 240],
    horizontalSpace: 5,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          width: '100%',
          wrap: true,
          wrapVerticalSpace: 5,
        },
      },
    ],
  };

  return (
    <RLM {...PasswordStyle}>
      <Label>Password</Label>
      <Input placeholder="rEaCtLaYoUtMaNaGeR"/>
    </RLM>
  );
}
function Birthday() {
  const BirthdayStyle = {
    width: [100, '100%'],
    horizontalSpace: 5,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          wrap: true,
          wrapVerticalSpace: 5,
        },
      },
    ],
  };
  const BirthdayInnerStyle = {
    width: [56, 16, 44, 16, 44],
    horizontalSpace: 5,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          width: ['40%', 16, '30%', 16, '30%'],
        },
      },
    ],
  };

  return (
    <RLM {...BirthdayStyle}>
      <Label>Birthday</Label>
      <RLM {...BirthdayInnerStyle}>
        <Input placeholder="YYYY" />
        <Unit>ー</Unit>
        <Input placeholder="MM" />
        <Unit>ー</Unit>
        <Input placeholder="DD" />
      </RLM>
    </RLM>
  );
}
function PostalCode() {
  const PostalCodeStyle = {
    width: [100, '100%'],
    horizontalSpace: 5,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          wrap: true,
          wrapVerticalSpace: 5,
        },
      },
    ],
  };
  const PostalCodeInnerStyle = {
    width: [64, 16, 80],
    horizontalSpace: 5,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          width: ['50%', 16, '50%']
        },
      },
    ],
  };

  return (
    <RLM {...PostalCodeStyle}>
      <Label>PostalCode</Label>
      <RLM {...PostalCodeInnerStyle}>
        <Input placeholder="XXX" />
        <Unit>ー</Unit>
        <Input placeholder="XXXX" />
      </RLM>
    </RLM>
  );
}
function CardNumber() {
  const CardNumberStyle = {
    width: [100, '100%'],
    horizontalSpace: 5,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          wrap: true,
          wrapVerticalSpace: 5,
        },
      },
    ],
  };
  const CardNumberInnerStyle = {
    width: ['50%', 16, '50%'],
    horizontalSpace: 5,
    wrapVerticalSpace: 10,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          width: ['100%', null, '100%'],
          wrap: true,
          visible: [true, false, true],
        },
      },
    ],
  };
  const CardNumberCellStyle = {
    width: ['50%', 16, '50%'],
    horizontalSpace: 5,
  };

  return (
    <RLM {...CardNumberStyle}>
      <Label>CardNumber</Label>
      <RLM {...CardNumberInnerStyle}>
        <RLM {...CardNumberCellStyle}>
          <Input placeholder="XXXX" />
          <Unit>ー</Unit>
          <Input placeholder="XXXX" />
        </RLM>
        <Unit>ー</Unit>
        <RLM {...CardNumberCellStyle}>
          <Input placeholder="XXXX" />
          <Unit>ー</Unit>
          <Input placeholder="XXXX" />
        </RLM>
      </RLM>
    </RLM>
  );
}
function Main() {
  const MainStyle = {
    width: '100%',
    verticalSpace: 10,
    innerWidth: 500,
    align: 'center',
  };

  return (
    <RLM {...MainStyle}>
      <Email />
      <Tel />
      <Password />
      <Birthday />
      <PostalCode />
      <CardNumber />
    </RLM>
  );
}

class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}

export default App;
