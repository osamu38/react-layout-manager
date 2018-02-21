# react-layout-manager

Layout manager not to give margins to components

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Props](#props)
* [Examples](#examples)
* [Demos](#demos)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install -S react-layout-manager
    $ yarn add react-layout-manager

## Usage

Example:

```jsx
import RLM from 'react-layout-manager';

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
```

## Props

Props|Type|Default Value|Description
---|---|---|---
`horizontalSpace`|`string \| number \| Array<string \| number>`|`0`|Horizontal space of element and element
`verticalSpace`|`string \| number \| Array<string \| number>`|`0`|Vertical space of element and element
`wrapVerticalSpace`|`string \| number \| Array<string \| number>`|`0`|Vertical space of element and element when wrap
`width`|`string \| number \| Array<string \| number>`|`null`|Width of elements 
`innerWidth`|`string \| number \| Array<string \| number>`|`null`|Width in element
`verticalAlign`|`string \| number \| Array<string \| number>`|`null`|Vertical align
`align`|`'left' \| 'center' \| 'right' \| Array<'left' \| 'center' \| 'right'>`|`null`|Align inner element
`visible`|`boolean \| Array<boolean>`|`true`|Whether the elements are displayed or not
`wrap`|`boolean`|`false`|Whether to wrap or not

### `responsive` property

Array of objects in the form of `{ breakpoint: int, settings: { ... } }` The breakpoint _number_ is the `maxWidth` so the settings will be applied when resolution is below this value.
Example: `[ { breakpoint: 1024, settings: { wrap: true, width: ['20%', 100, '80%'] } }, { breakpoint: 768, settings: { visible: false } }]`

## Examples

Demo Source:

```jsx
import React, { Component } from 'react';
import styled from 'styled-components';
import RLM from 'react-layout-manager';

const Input = styled.input`
  ...
`;
const Unit = styled.div`
  ...
`;
const Label = styled.div`
  ...
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

```

## Demos

* https://osamu38.github.io/react-layout-manager/
