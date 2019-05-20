const mix = require('laravel-mix')

class Emotion {
  name() {
    return 'emotion'
  }

  dependencies() {
    this.requiresReload = `
      Dependencies have been installed. Please run again.
    `

    return [
      'emotion',
      '@emotion/core',
      '@emotion/styled',
      '@emotion/babel-preset-css-prop',
      'babel-plugin-emotion',
    ]
  }

  register(options) {
    this.config = {
      emotionFormat: options && options.emotionFormat ?
                     options.emotionFormat
                     : '[local]',
    }
  }

  babelConfig() {
    return {
      presets: [['@emotion/babel-preset-css-prop', {
        autoLabel: true,
        labelFormat: this.config.emotionFormat,
      }]],
      plugins: [['emotion', {
          autoLabel: true,
          labelFormat: this.config.emotionFormat,
      }]],
    }
  }
}

mix.extend('emotion', new Emotion())
