# react-aria-tooltip

Simple ReactJS component that adds the appropriate role, identification structure, and aria-hidden attribute for a tooltip.

## Installation

`npm install react-aria-tooltip`

## Usage

```js
import ReactARIAToolTip from "react-aria-tooltip";

return (
  <ReactARIAToolTip message="Your custom message">
    <SomeTagOrComponent>Some content</SomeTagOrComponent>
  </ReactARIAToolTip>
);
```

## Options

1.  `message` string that will display in the tooltip (required)
1.  `eventType` this can either be 'click' or 'hover' (default 'click')
1.  `allowClickOnSelf` this is only applicable to the click `eventType`. This value defines whether a click on the target element will also toggle the tooltip (default 'false')
1.  `direction` the placement of the tooltip. Can be one of four options 'top', 'bottom', 'right', 'left' (default 'top')
1.  `duration` this is only applicable to the click `eventType`. This value defines the amount of time the tooltip is present after the user clicks the target element (default 2000). If the value is `0` or `false` then the tooltip will persist until the user clicks outside of the bounds of any of the tooltip content and/or button.
1.  `bgcolor` controls the background color of the tooltip. (default '#000')

**Note:** Please use a color contrast checker such as http://webaim.org/resources/contrastchecker/ to make sure the font color, defaulted to white/#fff, works with your bgcolor value)

## Storybook

React aria tooltip uses Storybook to validate UI behaviors and visual the rendering states. To see and test `react-aria-tooltip` run `yarn run storybook` after installing all packages by running `yarn`. This should start a local service at http://localhost:6006 where you can see the available directions (top, right, bottom, left) and events (click & hover) in UI wrapper.

## Examples

### Hover

```html
<ReactARIAToolTip
  message="Tooltip text"
  eventType="hover"
  direction="bottom"
  bgcolor="#333"
>
  <span>Some text</span>
</ReactARIAToolTip>
```

### Click (auto remove with duration)

```html
<ReactARIAToolTip
  message="Something fancy"
  eventType="click"
  duration="500"
  bgcolor="red"
>
  <img src="../path/to/some/image" alt="" title="" />
</ReactARIAToolTip>
```

### Click (remove with clicking outside of tooltip)

```html
<ReactARIAToolTip
  message="Something fancy"
  eventType="click"
  duration="{false}"
  bgcolor="red"
>
  <img src="../path/to/some/image" alt="" title="" />
</ReactARIAToolTip>
```

## Styling

All styles are handled inline but each element contains a CSS class so you can override what's necessary to override locally. Below is the basic structure for reference:

```html
<div class="ra-tooltip-wrapper">
  <div class="ra-tooltip">
    <div class="ra-tooltip-message">
      <p>Tooltip text</p>
    </div>
  </div>
</div>
```

## MIT Licensed
