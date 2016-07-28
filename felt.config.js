'use strict'

/**
 * PostCSS selection for Felt
 */

const
  postcss = require('felt-postcss'),
  postcssImport = require('postcss-import'),
  postcssNested = require('postcss-nested'),
  postcssSimpleVars = require('postcss-simple-vars'),
  postcssMixins = require('postcss-mixins'),
  cssnext = require('postcss-cssnext')

module.exports = {
  handlers: {
    '.css': postcss({
      plugins: [
        postcssImport(),
        postcssMixins(),
        postcssSimpleVars(),
        postcssNested(),
        cssnext()
      ],
      options: {
        map: { inline: false }
      }
    })
  }
}
