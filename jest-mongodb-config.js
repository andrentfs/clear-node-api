module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbname: 'jest'
    },
    binary: {
      version: '4.0.3',
      skipMD5: true
    },
    autoStart: false
  }
}
