import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { styleText } from 'util';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Entry Point --> Output
export default (env, argv) => {
  const isProduction = argv.mode === 'production';
  const CSSExtract = new MiniCssExtractPlugin({filename: 'styles.css'});

  return {
    entry: './src/app.js',
    output : {
      path: path.resolve(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    mode: isProduction ? 'production': 'development',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }, {
        test: /\.s?css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      }]
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      CSSExtract,
    ],
    devtool: isProduction ? 'source-map': 'inline-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      devMiddleware: {
        publicPath: '/dist/',
      },
      historyApiFallback: true
    }
  };
};