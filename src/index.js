import { declare } from "@babel/helper-plugin-utils";
import presetEnv from "@babel/preset-env";
import presetReact from "@babel/preset-react";
import classProperties from "@babel/plugin-proposal-class-properties";
import privateMethods from "@babel/plugin-proposal-private-methods";
import optionalChaining from "@babel/plugin-proposal-optional-chaining";

export default declare((api, opts) => {
  api.assertVersion(7);
  const { development } = opts; // If Development mode.

  const presetENVOptions = {
    useBuiltIns: 'usage',
    corejs: {
      version: 3,
    },
    shippedProposals: true,
  };

  if(development) {
    presetENVOptions.targets = {
      chrome: '90'
    }
  }

  return {
    presets: [
      [presetEnv, presetENVOptions],
      presetReact,
    ],
    plugins: [
      optionalChaining,
      classProperties,
      privateMethods,
    ],
  };
});
