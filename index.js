const core = require('@actions/core')
const github = require('@actions/github')


run = async () => {
    try {
        const labels = core.getInput('ISSUE_LABELS').split(',')
        const template = core.getInput('ISSUE_TEMPLATE')

        core.debug(`Starting Parsing on labels ${labels.join(',')}`)
    } catch ( error ) {
        core.setFailed(`Failure ${error}`) 
    }
}

run()

module.export = { run }
