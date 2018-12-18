const { promisify } = require('util')
const fs = require('fs')
const parse = promisify(require('csv-parse'))
const parseSync = require('csv-parse/lib/sync')

const readFile = promisify(fs.readFile)

class Importer {

  import (path) {
    return readFile(path)
      .then(content =>
        parse(content, {
          columns: true,
        })
      )
  }

  importSync (path) {
    const content = fs.readFileSync(path)
    return parseSync(content, {
      columns: true
    })
  }

}

module.exports = Importer