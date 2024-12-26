ServerEvents.recipes(e => {
    CCRecipes.elementBinding(
        e, "5x naturesaura:sky_ingot", 2000, "air",
        [
            "botania:rune_air", "elementalcraft:fine_air_gem",
            "chemlib:magnesium_ingot", "embers:dawnstone_ingot", "naturesaura:infused_iron"
        ]
    )

    CCRecipes.elementSawing(e, "4x naturesaura:ancient_planks", 50, 3, "naturesaura:ancient_log")
    CCRecipes.elementSawing(e, "4x naturesaura:ancient_planks", 50, 2, "naturesaura:ancient_bark")
    CCRecipes.naturalAltar(e, "naturesaura:infused_iron", 10000, 100, "botania:manasteel_ingot")
    CCRecipes.naturalAltar(e, "naturesaura:tainted_gold", 5000, 100, "minecraft:gold_ingot")
})