options = {}
module.exports =  class Runner {
    constructor(_options) {
        options = _options
    }

    async run(){
        try {
            console.log('Testing...')
            console.log(options)
            console.log('Testing...')
            const octokit = new options.github.GitHub(options.token)

            options.core.debug(`Starting Parsing on labels ${options.labels.join(',')}`)

            options.core.debug({payload: JSON.stringify(options.github.context.payload)})
            console.log(options.github.context.payload)

        } catch ( error ) {
            this.options.core.setFailed(`Failure ${error}`) 
        }
    }

}
