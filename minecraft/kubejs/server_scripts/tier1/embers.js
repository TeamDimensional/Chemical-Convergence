ServerEvents.recipes(e => {
    CCRecipes.melting(e, "100x kubejs:molten_redstone", "minecraft:redstone")
    CCRecipes.melting(e, "90x embers:molten_copper", "minecraft:copper_ingot")
    CCRecipes.melting(e, "90x embers:molten_gold", "minecraft:gold_ingot")
    CCRecipes.centrifugeMixing(e, "90x embers:molten_dawnstone", ["45x embers:molten_copper", "45x embers:molten_gold"])
    CCRecipes.stamping(e, "embers:dawnstone_ingot", "embers:ingot_stamp", "90x embers:molten_dawnstone")
})
