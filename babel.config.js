module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@base': './src/@base',
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          data: './src/data',
          helpers: './src/helpers',
          interfaces: './src/interfaces',
          constants: './src/constants',
          layouts: './src/layouts',
          routes: './src/routes',
          screens: './src/screens',
          services: './src/services',
          utils: './src/utils',
        },
      },
    ],
  ],
}
