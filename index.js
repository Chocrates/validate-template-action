const core = require('@actions/core')
const github = require('@actions/github')


run = async () => {
    try {
        core.debug('Test')
    } catch ( error ) {
        core.setFailed(`Failure ${error}`) 
    }
}

run()

module.export = { run }
