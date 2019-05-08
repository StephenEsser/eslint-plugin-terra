# no-inline-styles

This rule disallows inline styles. In many cases inline styles are being used in place of stylesheets which can create challenging issues between browsers prefixing and themes.

## Rule Details

The following patterns are considered warnings:

```jsx
var React = require('react');

var Example = <div style={{ color: "blue" }}>Hello World</div>;
```

The following patterns are **not** considered warnings:

```jsx
var React = require('react');

var Example = <div>Hello World</div>;
```

```jsx
var React = require('react');

var Example = <div className="example">Hello World</div>;
```

## When Not To Use It

In some cases it is necessary to set inline styles such as dynamic height and widths that update as a result of state changes or browser resizing. In this cases you can disable this rule.