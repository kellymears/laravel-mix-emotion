# laravel-mix-emotion

Zero-config Laravel Mix extension that enables Emotion styled components.

## Installation

1. `yarn add -D laravel-mix-emotion`

2. Add `require('laravel-mix-emotion')` to your `webpack.mix.js` config file. Initialize using `mix.emotion()`.

## Options

`laravel-mix-emotion` takes a single (optional) config param passed when initializing the extension: `emotionFormat`. This allows you to specify formatting instructions for Emotion generated classnames.

```js
mix.emotion({
  emotionFormat: '[local]',
})
```
