const path = require('path')
require('babel-register')
require('./main')
const Importer = require('./importer')
const DirWatcher = require('./dirwatcher')

const importer = new Importer()
const dirWatcher = new DirWatcher()
const dataPath = path.relative(__dirname, './data')

dirWatcher.on('dirwatcher:changed', (files) => {
  if (files.length) {
    importer.import(dataPath + path.sep + files[0])
      .then(
        file => { console.log(file) },
        error => { console.log(error) },
      )
  }
})

dirWatcher.watch(dataPath, 5000)
