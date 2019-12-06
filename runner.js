options = {}
module.exports =  class Runner {
    constructor(_options) {
        options = _options
    }

    async run(){
        try {
            options.core.debug(`Starting Parsing on labels ${options.labels.join(',')}`)

            options.core.debug({payload: JSON.stringify(options.github.context.payload)})
            console.log(options.github.context.payload)
            await options.octokit.issues.createComment({
                repo: options.repo,
                owner: options.owner,
                issue_number: options.github.context.payload.issue.number,
                body: 'Hello from Actions'
            })

        } catch ( error ) {
            options.core.setFailed(`Failure ${error}`) 
        }
    }

}
