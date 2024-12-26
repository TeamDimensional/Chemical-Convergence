ServerEvents.recipes(e => {
    e.shaped(
        "ae2:controller", ["FIF", "ECE", "SRS"],
        {
            F: "ae2:fluix_dust", E: "ae2:engineering_processor", R: "botania:rune_envy", I: "ae2:energy_acceptor",
            S: "elementalcraft:swift_alloy_ingot", C: "industrialforegoing:machine_frame_simple"
        }
    )

    e.shaped(
        "ae2:energy_acceptor", ["MFM", "QCQ", "MFM"],
        { M: "chemlib:magnesium_plate", F: "ae2:fluix_dust", Q: "ae2:quartz_glass", C: "minecraft:copper_ingot" }
    )

    CCRecipes.crushing(e, { "ae2:fluix_dust": 1 }, "ae2:fluix_crystal")
    CCRecipes.crushing(e, { "ae2:certus_quartz_dust": 1 }, "ae2:certus_quartz_crystal")

    CCRecipes.inscriber(
        e, "4x ae2:engineering_processor",
        ["createutilities:void_steel_sheet", "minecraft:redstone", "ae2:silicon"]
    )

    CCRecipes.mixing(e, "ae2:quartz_glass", "heated", ["elementalcraft:burnt_glass", "ae2:certus_quartz_dust"])
    CCRecipes.mixing(
        e, "3x ae2:fluix_crystal", "heated",
        [
            "elementalcraft:watercrystal", "ae2:certus_quartz_crystal",
            "minecraft:glowstone_dust", "200x $kubejs:molten_redstone"
        ]
    )

    CCRecipes.chemicalCrystallization(e, "ae2:certus_quartz_crystal", ["8x chemlib:silicon_dioxide"])
    CCRecipes.chemicalCrystallization(e, "ae2:silicon", ["8x chemlib:silicon"])
})