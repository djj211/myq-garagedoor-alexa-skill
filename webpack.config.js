const slsw = require('serverless-webpack');
const os = require('os');
const isLocal = slsw.lib.webpack.isLocal;

console.log(`webpack local build ${isLocal}`);
console.log(`os CPU count ${os.cpus().length}`);

const plugins = [];

module.exports = {
  context: __dirname,
  target: 'node',
  entry: slsw.lib.entries,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'cache-loader' },
          {
            loader: 'thread-loader',
            options: {
              workers: os.cpus().length,
              workerParallelJobs: 20,
              workerNodeArgs: ['--max-old-space-size=1024'],
              poolTimeout: isLocal ? Infinity : 500,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              experimentalWatchApi: true,
            },
          },
        ],
      },
      {
        test: /\.yaml$/,
        use: 'raw-loader',
      },
    ],
  },
  externals: ['aws-sdk'],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  node: false,
  optimization: {
    minimize: false,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devtool: 'source-map',
  plugins,
};