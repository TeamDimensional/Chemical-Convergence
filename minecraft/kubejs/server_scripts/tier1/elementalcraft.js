ServerEvents.recipes(e => {
    CCRecipes.elementBinding(
        e, "2x elementalcraft:swift_alloy_ingot", 1400, "air",
        ["elementalcraft:drenched_iron_ingot", "elementalcraft:aircrystal", "chemlib:silver_ingot", "minecraft:copper_ingot"],
    )

    CCRecipes.elementInfusion(e, "elementalcraft:burnt_glass", 500, "fire", "#forge:glass")
    CCRecipes.elementInfusion(e, "elementalcraft:whiterock", 500, "air", "botania:livingrock")
    CCRecipes.elementInfusion(e, "elementalcraft:drenched_iron_ingot", 1000, "water", "botania:manasteel_ingot")

    CCRecipes.elementInfusion(e, "elementalcraft:watercrystal", 1000, "water", "elementalcraft:inert_crystal")
    CCRecipes.elementInfusion(e, "elementalcraft:aircrystal", 1000, "air", "elementalcraft:inert_crystal")
    CCRecipes.elementInfusion(e, "elementalcraft:firecrystal", 1000, "fire", "elementalcraft:inert_crystal")
    CCRecipes.elementInfusion(e, "elementalcraft:earthcrystal", 1000, "earth", "elementalcraft:inert_crystal")

    CCRecipes.pressureChamber(
        e, ["4x elementalcraft:inert_crystal"], 2.5,
        ["embers:dawnstone_ingot", "2x actuallyadditions:enori_crystal", "2x actuallyadditions:restonia_crystal"]
    );

    ["air", "fire", "water", "earth"].forEach(t => {
        CCRecipes.elementCrystallization(
            e,
            [
                { "quality": -0.5, "item": `elementalcraft:crude_${t}_gem`, "weight": 15 },
                { "item": `elementalcraft:fine_${t}_gem`, "weight": 4 },
                { "item": `elementalcraft:pristine_${t}_gem`, "weight": 1 },
            ], 5000, t,
            [`elementalcraft:${t}crystal`, `#elementalcraft:gems/input_${t}`, `#elementalcraft:shards/${t}`]
        )
    })
})