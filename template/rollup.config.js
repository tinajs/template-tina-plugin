import merge from 'deepmerge'
import base from './rollup.config.base.js'

export default merge(base, {
  output: {
    file: 'dist/<%= name %>.js',
    format: 'umd',
    name: '<%= name %>',
  },
})
