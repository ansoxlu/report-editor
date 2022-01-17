// eslint-disable-next-line import/no-webpack-loader-syntax
import input from '!!raw-loader!./input.graphqls'
// eslint-disable-next-line import/no-webpack-loader-syntax
import metadata from '!!raw-loader!./metadata.graphqls'
// eslint-disable-next-line import/no-webpack-loader-syntax
import plugin from '!!raw-loader!./plugin.graphqls'
// eslint-disable-next-line import/no-webpack-loader-syntax
import template from '!!raw-loader!./template.graphqls'

const schema = [
  input,
  metadata,
  plugin,
  template
]
export default schema.join('\r\n')
