const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your React application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JSX and ES6
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Add more loaders for other file types (e.g., CSS, images)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
    }),
  ],
  devServer: {
    contentBase: './dist', // Serve the bundled files from the "dist" directory
    port: 3000, // Specify the port for the development server
  },
};
