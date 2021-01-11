module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbname: 'jest'
    },
    binary: {
      version: '4.4.1',
      skipMD5: true
    },
    autoStart: false
  }
}
