module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@helpers": "./src/helpers",
          "@hooks": "./src/hooks",
          "@navigation": "./src/navigation",
          "@features": "./src/features",
          "@elements": "./src/elements",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
