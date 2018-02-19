import React, { Component } from 'react';
import styled from 'styled-components';
import RLM from './components/ReactLayoutManager';

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
const Main = () => (
  <RLM
    verticalSpace={10}
    innerWidth={500}
    align="center"
  >
    <EmailBlock />
    <TelBlock />
    <PasswordBlock />
    <BirthdayBlock />
    <PostalCodeBlock />
    <CardNumberBlock />
  </RLM>
);
const EmailBlock = () => (
  <RLM
    width={[100, '100%']}
    horizontalSpace={5}
    responsive={[
      {
        breakpoint: 480,
        settings: {
          width: [100, '100%'],
          isWrap: true,
          horizontalSpace: 0,
          wrapVerticalSpace: 5,
        },
      },
    ]}
  >
    <Label>Email</Label>
    <RLM
      width={['65%', 16, '35%']}
      horizontalSpace={5}
    >
      <Input placeholder="react-layout-manager" />
      <Unit>@</Unit>
      <Input placeholder="gmail.com" />
    </RLM>
  </RLM>
);
const PasswordBlock = () => (
  <RLM
    width={[100, 240]}
    horizontalSpace={5}
    responsive={[
      {
        breakpoint: 480,
        settings: {
          width: [100, '100%'],
          isWrap: true,
          wrapVerticalSpace: 5,
        },
      },
    ]}
  >
    <Label>Password</Label>
    <Input placeholder="rEaCtLaYoUtMaNaGeR"/>
  </RLM>
);
const BirthdayBlock = () => (
  <RLM
    width={[100, '100%']}
    horizontalSpace={5}
    responsive={[
      {
        breakpoint: 480,
        settings: {
          isWrap: true,
          wrapVerticalSpace: 5,
        },
      },
    ]}
  >
    <Label>Birthday</Label>
    <RLM
      width={[56, 16, 44, 16, 44]}
      horizontalSpace={5}
      responsive={[
        {
          breakpoint: 480,
          settings: {
            width: ['40%', 16, '30%', 16, '30%'],
          },
        },
      ]}
    >
      <Input placeholder="YYYY" />
      <Unit>ー</Unit>
      <Input placeholder="MM" />
      <Unit>ー</Unit>
      <Input placeholder="DD" />
    </RLM>
  </RLM>
);
const TelBlock = () => (
  <RLM
    width={[100, 160]}
    horizontalSpace={5}
    responsive={[
      {
        breakpoint: 480,
        settings: {
          width: [100, '100%'],
          isWrap: true,
          horizontalSpace: 0,
          wrapVerticalSpace: 5,
        },
      },
    ]}
  >
    <Label>Tel</Label>
    <Input placeholder="090XXXXXXXX" />
  </RLM>
);
const PostalCodeBlock = () => (
  <RLM
    width={[100, '100%']}
    horizontalSpace={5}
    responsive={[
      {
        breakpoint: 480,
        settings: {
          isWrap: true,
          wrapVerticalSpace: 5,
        },
      },
    ]}
  >
    <Label>PostalCode</Label>
    <RLM
      width={[64, 16, 80]}
      horizontalSpace={5}
      responsive={[
        {
          breakpoint: 480,
          settings: {
            width: ['50%', 16, '50%']
          },
        },
      ]}
    >
      <Input placeholder="XXX" />
      <Unit>ー</Unit>
      <Input placeholder="XXXX" />
    </RLM>
  </RLM>
);
const CardNumberBlock = () => (
  <RLM
    width={[100, '100%']}
    horizontalSpace={5}
    responsive={[
      {
        breakpoint: 480,
        settings: {
          isWrap: true,
          wrapVerticalSpace: 5,
        },
      },
    ]}
  >
    <Label>CardNumber</Label>
    <RLM
      width={['50%', 16, '50%']}
      horizontalSpace={5}
      wrapVerticalSpace={10}
      responsive={[
        {
          breakpoint: 480,
          settings: {
            width: ['100%', 10, '100%'],
            horizontalSpace: 0,
            isWrap: true,
            isVisible: [true, false, true],
          },
        },
      ]}
    >
      <RLM
        width={['50%', 16, '50%']}
        horizontalSpace={5}
      >
        <Input placeholder="XXXX" />
        <Unit>ー</Unit>
        <Input placeholder="XXXX" />
      </RLM>
      <Unit>ー</Unit>
      <RLM
        width={['50%', 16, '50%']}
        horizontalSpace={5}
      >
        <Input placeholder="XXXX" />
        <Unit>ー</Unit>
        <Input placeholder="XXXX" />
      </RLM>
    </RLM>
  </RLM>
);

class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}

export default App;