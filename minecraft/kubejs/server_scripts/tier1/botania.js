ServerEvents.recipes(e => {
    CCRecipes.manaInfusion(e, "botania:mana_powder", 2000, "minecraft:gunpowder")
    CCRecipes.manaInfusion(e, "botania:mana_powder", 800, "minecraft:redstone")
    CCRecipes.manaInfusion(e, "botania:manasteel_ingot", 3000, "minecraft:iron_ingot")
    CCRecipes.manaInfusion(e, "botania:mana_diamond", 10000, "minecraft:diamond")
    CCRecipes.runicAltar(
        e, "botania:rune_envy", 16000,
        ["botania:mana_diamond", "minecraft:amethyst_shard", "botania:rune_winter", "botania:rune_earth"]
    )

    CCRecipes.runicAltar(
        e, "2x botania:rune_earth", 6400,
        ["minecraft:deepslate", "elementalcraft:whiterock", "botania:mana_powder", "minecraft:brown_mushroom"]
    )
    CCRecipes.runicAltar(
        e, "2x botania:rune_fire", 6400,
        ["minecraft:blaze_powder", "minecraft:magma_block", "botania:mana_powder", "minecraft:coal_block"]
    )
    CCRecipes.runicAltar(
        e, "2x botania:rune_air", 6400,
        ["minecraft:feather", "#minecraft:wool", "botania:mana_powder", "minecraft:string"]
    )
    CCRecipes.runicAltar(
        e, "2x botania:rune_water", 6400,
        ["#minecraft:fishes", "minecraft:sugar_cane", "botania:mana_powder", "minecraft:bone_meal"]
    )

    CCRecipes.runicAltar(
        e, "botania:rune_winter", 10400,
        [
            "minecraft:packed_ice", "minecraft:snow_block", "minecraft:cake",
            "elementalcraft:drenched_iron_ingot", "botania:rune_water", "botania:rune_earth"
        ]
    )
    CCRecipes.runicAltar(
        e, "botania:rune_autumn", 10400,
        [
            "minecraft:potato", "malum:runewood_leaves", "minecraft:spider_eye",
            "minecraft:rose_bush", "botania:rune_fire", "botania:rune_air"
        ]
    )
    CCRecipes.runicAltar(
        e, "botania:rune_summer", 10400,
        [
            "minecraft:melon_slice", "minecraft:red_sand", "minecraft:slime_ball",
            "elementalcraft:elemental_firefuel", "botania:rune_earth", "botania:rune_air"
        ]
    )
    CCRecipes.runicAltar(
        e, "botania:rune_spring", 10400,
        [
            "minecraft:wheat", "#minecraft:saplings", "minecraft:pumpkin_seeds",
            "elementalcraft:springaline_shard", "botania:rune_water", "botania:rune_fire"
        ]
    )
    CCRecipes.pureDaisy(e, "botania:livingrock", "minecraft:stone")
})