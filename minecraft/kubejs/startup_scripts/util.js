// priority: 5

const CCUtils = {};

(() => {
    CCUtils.run = ((name, callback) => {
        try {
            callback()
        } catch (e) {
            console.warn(`Failed to run script: ${name}! That's not good.`)
            console.warn(e)
            if (e.message.indexOf("CC Problem") != -1) {
                // have to abort loading
                throw e
            }
        }
    })

    const version_filename = "kubejs/config/cc-versions.json"
    const version_config = JsonIO.read(version_filename) || {}
    console.log("CCUtils initialized!")
    CCUtils.versioned = ((name, version, callback) => {
        console.log(`Version file: ${name} requested version: ${version}`)
        if (!version_config[name] || version_config[name] < version) {
            console.log(`Updating ${name}...`)
            version_config[name] = version
            CCUtils.run(`Update ${name} to version ${version}`, () => {
                callback()
                JsonIO.write(version_filename, version_config)
            })
        } else {
            console.log("Already at the latest version.")
        }
    })
})()
