CCUtils.run("no_worldgen", () => {
    const version = 2
    const disabled_files = [
        // ores
        ["minecraft", "placed_feature/amethyst_geode"],
        ["minecraft", "placed_feature/ore_coal_lower"],
        ["minecraft", "placed_feature/ore_coal_upper"],
        ["minecraft", "placed_feature/ore_copper"],
        ["minecraft", "placed_feature/ore_copper_large"],
        ["minecraft", "placed_feature/ore_debris_small"],
        ["minecraft", "placed_feature/ore_diamond"],
        ["minecraft", "placed_feature/ore_diamond_buried"],
        ["minecraft", "placed_feature/ore_diamond_large"],
        ["minecraft", "placed_feature/ore_diamond_medium"],
        ["minecraft", "placed_feature/ore_emerald"],
        ["minecraft", "placed_feature/ore_gold"],
        ["minecraft", "placed_feature/ore_gold_deltas"],
        ["minecraft", "placed_feature/ore_gold_extra"],
        ["minecraft", "placed_feature/ore_gold_lower"],
        ["minecraft", "placed_feature/ore_gold_nether"],
        ["minecraft", "placed_feature/ore_infested"],
        ["minecraft", "placed_feature/ore_iron_middle"],
        ["minecraft", "placed_feature/ore_iron_small"],
        ["minecraft", "placed_feature/ore_iron_upper"],
        ["minecraft", "placed_feature/ore_lapis"],
        ["minecraft", "placed_feature/ore_lapis_buried"],
        ["minecraft", "placed_feature/ore_quartz_deltas"],
        ["minecraft", "placed_feature/ore_quartz_nether"],
        ["minecraft", "placed_feature/ore_redstone"],
        ["minecraft", "placed_feature/ore_redstone_lower"],
        ["create", "placed_feature/striated_ores_overworld"],
        ["create", "placed_feature/zinc_ore"],
        ["malum", "placed_feature/blazing_quartz_ore"],
        ["malum", "placed_feature/cthonic_gold_ore"],
        ["malum", "placed_feature/deepslate_quartz_geode"],
        ["malum", "placed_feature/ore_brilliant"],
        ["malum", "placed_feature/ore_natural_quartz"],
        ["malum", "placed_feature/ore_soulstone"],
        ["malum", "placed_feature/quartz_geode"],
        ["actuallyadditions", "placed_feature/ore_black_quartz"],
        ["elementalcraft", "placed_feature/inert_crystal_ore_middle"],

        // structures
        ["minecraft", "placed_feature/monster_room_deep"],
        ["minecraft", "placed_feature/monster_room"],
        ["minecraft", "structure_set/ancient_cities"],
        ["minecraft", "structure_set/buried_treasures"],
        ["minecraft", "structure_set/desert_pyramids"],
        ["minecraft", "structure_set/igloos"],
        ["minecraft", "structure_set/jungle_temples"],
        ["minecraft", "structure_set/mineshafts"],
        ["minecraft", "structure_set/ocean_monuments"],
        ["minecraft", "structure_set/ocean_ruins"],
        ["minecraft", "structure_set/pillager_outposts"],
        ["minecraft", "structure_set/ruined_portals"],
        ["minecraft", "structure_set/shipwrecks"],
        ["minecraft", "structure_set/strongholds"],
        ["minecraft", "structure_set/swamp_huts"],
        ["minecraft", "structure_set/trail_ruins"],
        ["minecraft", "structure_set/villages"],
        ["minecraft", "structure_set/woodland_mansions"],
        ["elementalcraft", "structure_set/source_altar"],

        // other
        ["minecraft", "placed_feature/underwater_magma"],
    ]

    CCUtils.versioned("no_worldgen", version, () => {
        let i = 0
        for (const [mod, f] of disabled_files) {
            i += 1
            let noOp = {}
            if (f.startsWith("placed_feature/")) {
                noOp = {
                    "feature": {
                        "type": "minecraft:no_op",
                        "config": {}
                    },
                    "placement": [
                        {
                            "type": "minecraft:rarity_filter",
                            "chance": 500000 + i
                        }
                    ]
                }
            } else if (f.startsWith("structure_set/")) {
                noOp = {
                    "placement": {
                        "type": "minecraft:random_spread",
                        "salt": 10000000 + i,
                        "separation": 100,
                        "spacing": 200
                    },
                    "structures": []
                }
            } else {
                throw new Error(`CC Problem: Unknown type of structure: ${f}`)
            }
            JsonIO.write(`kubejs/data/${mod}/worldgen/${f}.json`, noOp)
        }
        
        return true
    })
})
