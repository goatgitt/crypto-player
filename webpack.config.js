const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
  "react": "React",
  "react-dom": "ReactDOM"
},
  resolve: {
    extensions: ['.tsx', '.ts', '.js', "", ".webpack.js", ".web.js"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
};
