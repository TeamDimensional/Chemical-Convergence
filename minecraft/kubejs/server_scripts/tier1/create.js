ServerEvents.recipes(e => {
    CCRecipes.pressing(e, "createutilities:void_steel_sheet", "createutilities:void_steel_ingot")
    CCRecipes.mixing(
        e, "2x createutilities:void_steel_ingot", "superheated",
        ["botania:manasteel_ingot", "minecraft:ender_pearl", "naturesaura:sky_ingot"]
    )

    CCRecipes.mixing(
        e, "kubejs:sturdy_ember_plate", "superheated",
        ["embers:ember_grit", "minecraft:obsidian", "minecraft:deepslate"]
    )

    CCRecipes.application(e, "create:brass_casing", ["#malum:runewood_planks", "create:brass_ingot"])
    CCRecipes.manaInfusion(e, "create:brass_ingot", 2500, "naturesaura:tainted_gold")
})