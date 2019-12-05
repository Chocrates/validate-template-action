module.exports =  class Runner {
    constructor(options) {
        this.options = options
    }

    async run(){
        try {
            const octokit = new this.options.github.GitHub(this.options.token)

            this.options.core.debug(`Starting Parsing on labels ${this.options.labels.join(',')}`)

            this.options.core.debug({payload: JSON.stringify(this.options.github.context.payload)})
            console.log(this.options.github.context.payload)

        } catch ( error ) {
            this.options.core.setFailed(`Failure ${error}`) 
        }
    }

}
