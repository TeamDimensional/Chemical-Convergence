ServerEvents.recipes(e => {
    e.smelting("minecraft:glass", "minecraft:sand")

    CCRecipes.spiritFocusing(e, "8x minecraft:redstone", 200, "malum:alchemical_impetus", ["arcane"])
    CCRecipes.chemicalCrystallization(e, "minecraft:diamond", ["256x chemlib:carbon", "16x chemlib:boron"])
    CCRecipes.chemicalCrystallization(e, "minecraft:amethyst_shard", ["8x chemlib:silicon_dioxide", "3x chemlib:iron"])

    CCRecipes.crushing(e, { "3x minecraft:red_dye": 1 }, "minecraft:beetroot")
    CCRecipes.crushing(e, { "3x minecraft:red_dye": 1 }, "minecraft:poppy")
    CCRecipes.crushing(e, { "3x minecraft:green_dye": 1 }, "minecraft:cactus")
    CCRecipes.crushing(e, { "3x minecraft:blue_dye": 1 }, "minecraft:blue_orchid")
    CCRecipes.milling(e, { "2x minecraft:red_dye": 1 }, "minecraft:beetroot")
    CCRecipes.milling(e, { "2x minecraft:red_dye": 1 }, "minecraft:poppy")
    CCRecipes.milling(e, { "2x minecraft:green_dye": 1 }, "minecraft:cactus")
    CCRecipes.milling(e, { "2x minecraft:blue_dye": 1 }, "minecraft:blue_orchid")

    e.shapeless("2x minecraft:cyan_dye", ["minecraft:blue_dye", "minecraft:green_dye"])
    e.shaped(
        "minecraft:cake", ["AAA", "BEB", "CCC"],
        { "A": "minecraft:milk_bucket", "B": "minecraft:sugar", "C": "minecraft:wheat", "E": "minecraft:egg" }
    )
    CCRecipes.crushing(e, { "2x minecraft:sugar": 1 }, "minecraft:sugar_cane")
    CCRecipes.milling(e, { "minecraft:sugar": 1 }, "minecraft:sugar_cane")
    CCRecipes.crushing(e, { "6x minecraft:bone_meal": 1 }, "minecraft:bone")
    CCRecipes.milling(e, { "4x minecraft:bone_meal": 1 }, "minecraft:bone")
})
