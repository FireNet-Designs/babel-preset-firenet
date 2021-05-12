# babel-preset-firenet

> Babel presets for FireNet Designs

## Usage
- For more information please see [documentation](https://babeljs.io/docs/en/presets)
- To check out our website please see [FireNet Designs](https://corethreedesign.com/)

## Install

Using npm:

```sh
npm install --save-dev babel-preset-firenet
```

or using yarn:

```sh
yarn add babel-preset-firenet --dev
```


`babel.config.js`
```javascript
const development =
    process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'qa';

module.exports = {
  presets: [
    ['babel-preset-firenet',
      { development },
    ]],
};
```
