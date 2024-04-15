import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type Mode = 'production' | 'development';

interface EnvVariables {
	mode: Mode;
	port: number;
}

export default (env: EnvVariables) => {
	console.log('env = ', env);
	const isDev = env.mode === 'development';

	const config: webpack.Configuration = {
		mode: env.mode,
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: isDev ? '[name].bundle.js' : '[name].[contenthash].js',
			publicPath: '/',
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
				},
			],
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.json', '.png', '.css', '.xml', '.csv'],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'src', 'index.html'),
			}),
			new CleanWebpackPlugin(),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(env.mode),
			}),
		],
		devtool: isDev ? 'inline-source-map' : false,
		optimization: {
			splitChunks: {
				chunks: 'all',
			},
		},
		devServer: isDev
			? {
					port: env.port,
					open: true,
					historyApiFallback: true,
				}
			: undefined,
	};
	return config;
};
