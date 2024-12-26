ServerEvents.recipes(e => {
    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { item: "industrialforegoing:machine_frame_pity" },
        "results": [{ chance: 100, item: "industrialforegoing:machine_frame_simple" }],
        "loops": 1,
        "sequence": [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "industrialforegoing:machine_frame_pity" },
                    { item: "elementalcraft:drenched_iron_ingot" },
                ],
                results: [{ item: "industrialforegoing:machine_frame_pity" }]
            },
            {
                type: "create:filling",
                ingredients: [
                    { item: "industrialforegoing:machine_frame_pity" },
                    { amount: 300, fluid: "kubejs:molten_redstone" },
                ],
                results: [{ item: "industrialforegoing:machine_frame_pity" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "industrialforegoing:machine_frame_pity" },
                    { item: "elementalcraft:drenched_iron_ingot" },
                ],
                results: [{ item: "industrialforegoing:machine_frame_pity" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "industrialforegoing:machine_frame_pity" }],
                results: [{ item: "industrialforegoing:machine_frame_pity" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "industrialforegoing:machine_frame_pity" },
                    { item: "botania:rune_air" },
                ],
                results: [{ item: "industrialforegoing:machine_frame_pity" }]
            }
        ],
        transitionalItem: { item: "industrialforegoing:machine_frame_pity" }
    })

    e.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { item: "create:brass_casing" },
        "results": [{ chance: 100, item: "industrialforegoing:machine_frame_pity" }],
        "loops": 1,
        "sequence": [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create:brass_casing" },
                    { item: "kubejs:sturdy_ember_plate" },
                ],
                results: [{ item: "create:brass_casing" }]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create:brass_casing" },
                    { item: "naturesaura:ancient_planks" },
                ],
                results: [{ item: "create:brass_casing" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "create:brass_casing" }],
                results: [{ item: "create:brass_casing" }]
            },
            {
                type: "create:pressing",
                ingredients: [{ item: "create:brass_casing" }],
                results: [{ item: "create:brass_casing" }]
            },
        ],
        transitionalItem: { item: "create:brass_casing" }
    })
})