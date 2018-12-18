const isEqual = require('lodash/isEqual')
const { promisify } = require('util')
const fs = require('fs')
const EventEmitter = require('eventemitter3')

const readdir = promisify(fs.readdir)

class DirWatcher extends EventEmitter {

  constructor () {
    super()
    this.files = []
    this.timeout = null
    this.isRunning = false
  }

  watch (path, delay) {
    this.isRunning = true
    readdir(path)
      .then(files => {
        if (this.isRunning) {
          this.check(files)
          this.files = files
          this.timeout = setTimeout(() => { this.watch(path, delay) }, delay)
        }
      })

  /*  return () => {
      this.isRunning = false
      clearTimeout(this.timeout)
    }*/
  }

  check (files) {
    if (!isEqual(files, this.files)) {
      this.emit('dirwatcher:changed', files)
    }
  }


}

module.exports = DirWatcher