const core = require('@actions/core')
const github = require('@actions/github')


run = async () => {
    try {
        const labels = core.getInput('ISSUE_LABELS').split(',')
        const template = core.getInput('ISSUE_TEMPLATE')
        const token = process.env['GITHUB_TOKEN']
        const octokit = new github.GitHub(token)

        core.debug(`Starting Parsing on labels ${labels.join(',')}`)

        core.debug({payload: JSON.stringify(github.context.payload)})
    } catch ( error ) {
        core.setFailed(`Failure ${error}`) 
    }
}

run()

module.export = { run }
