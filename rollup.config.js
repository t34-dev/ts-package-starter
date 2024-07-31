import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'umd',
            name: 'welldoittoo',
            sourcemap: true
        },
        {
            file: 'dist/index.min.js',
            format: 'umd',
            name: 'welldoittoo',
            sourcemap: true,
            plugins: [terser()]
        },
        {
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.min.js',
            format: 'es',
            sourcemap: true,
            plugins: [terser()]
        }
    ],
    plugins: [
        alias({
            entries: [
                { find: '@', replacement: path.resolve(__dirname, 'src') }
            ]
        }),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist',
            rootDir: 'src'
        })
    ]
};
