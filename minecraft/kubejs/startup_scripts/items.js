StartupEvents.registry("item", e => {
    CCUtils.run("items", () => {
        e.create("sturdy_ember_plate")
    })
})

StartupEvents.registry("block", e => {
    CCUtils.run("block", () => {
        e.create("ember_plated_inert_casing")
    })
})

StartupEvents.registry("fluid", e => {
    CCUtils.run("fluid", () => {
        e.create("molten_redstone")
            .thickTexture(0xFF0000)
            .bucketColor(0xFF0000)
            .displayName("Molten Redstone")
    })
})
