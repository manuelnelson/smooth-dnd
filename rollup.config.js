import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const extensions = [
	'.js', '.jsx', '.ts', '.tsx',
];

module.exports = {
  input: 'index.ts',
  output: {
    file: './dist/index.js',
    format: 'es',
    sourcemap: false,
    name: 'SmoothDnD',
    exports: 'named',
  },
	plugins: [
    babel({
			extensions,
      include: ['./index.ts', 'src/**/*'],
      exclude: 'node_modules/**',
    }),
		commonjs({
			extensions
		}),
    uglify()
  ],
};