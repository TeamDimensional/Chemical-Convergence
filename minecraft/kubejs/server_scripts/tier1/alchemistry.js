ServerEvents.recipes(e => {
    CCRecipes.pressing(e, "chemlib:magnesium_plate", "chemlib:magnesium_ingot")

    CCRecipes.alchMetalCasting(e, "chemlib:magnesium_ingot", "16x chemlib:magnesium")
    CCRecipes.alchMetalCasting(e, "chemlib:silver_ingot", "16x chemlib:silver")
    CCRecipes.alchMetalCasting(e, "minecraft:copper_ingot", "16x chemlib:copper")
    CCRecipes.alchMetalCasting(e, "minecraft:iron_ingot", "16x chemlib:iron")

    CCRecipes.sintering(
        e, ["chemlib:carbon_monoxide", "chemlib:magnesium"], ["chemlib:magnesium_oxide", "chemlib:carbon"]
    )
    CCRecipes.sintering(
        e, ["2x chemlib:carbon_monoxide", "chemlib:silicon"], ["chemlib:silicon_dioxide", "2x chemlib:carbon"]
    )
    CCRecipes.dissolving(e, ["12x chemlib:carbon"], "minecraft:coal")
    CCRecipes.dissolving(e, ["6x chemlib:magnesium_oxide"], "embers:caminite_brick")
    CCRecipes.heatDecomposing(e, ["chemlib:copper", "2x chemlib:chlorine"], "chemlib:copper_chloride")
    CCRecipes.chemicalReduction(
        e, ["2x chemlib:iron", "3x chemlib:water"], ["6x chemlib:hydrogen", "chemlib:iron_oxide"]
    )
    CCRecipes.dissolving(e, ["4x chemlib:iron_oxide"], "minecraft:red_dye")
    CCRecipes.dissolving(e, ["8x chemlib:copper_chloride"], "minecraft:cyan_dye")
    CCRecipes.dissolving(e, ["4x chemlib:boron"], "embers:ember_grit")
    CCRecipes.dissolving(e, ["chemlib:silicon_dioxide"], "minecraft:sand")
    CCRecipes.electrolyzing(e, ["2x chemlib:hydrogen", "1x chemlib:oxygen"], "125x $minecraft:water")
})