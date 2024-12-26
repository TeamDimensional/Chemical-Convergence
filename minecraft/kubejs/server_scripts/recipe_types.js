// priority: 2

const CCRecipes = {};

(() => {
    const decompose = it => {
        const r = it.split(" ")
        if (r.length === 2) {
            return { count: parseInt(r[0].slice(0, -1)), id: r[1] }
        } else if (r.length === 1) {
            return { count: 1, id: it }
        } else {
            throw new Error(`CC Problem: Unknown item notation: ${it}`)
        }
    }

    const makeIngredient = (it, params) => {
        const { count, id } = decompose(it)
        if (id[0] === "$") {
            return { amount: count, fluid: id.slice(1) }
        }
        if (params && params.fluid) {
            if (params.key) {
                const out = { amount: count }
                out[params.key] = id
                return out
            }
            return { amount: count, fluid: id }
        }
        if (id[0] === "#") {
            return { count: count, tag: id.slice(1) }
        }
        if (params && params.stackedItem) {
            return { count: count, item: id, type: "pneumaticcraft:stacked_item" }
        }
        return { count: count, item: id }
    }

    const makeSpirit = it => {
        const { count, id } = decompose(it)
        return { type: id, count: count }
    }

    CCRecipes.crushing = (e, outputs, input) => {
        /*
        AA recipes don't work - see: https://github.com/MelnCat/ActuallyAdditions/issues/16
        e.custom({
            "type": "actuallyadditions:crushing",
            "ingredient": { "item": input },
            "result": Object.entries(outputs).map(([it, chance]) => {
                const { count, id } = decompose(it)
                return { chance: chance, result: { Count: count, id: id } }
            })
        })
            */

        e.custom({
            "type": "create:crushing",
            "ingredients": [{ item: input }],
            "processingTime": 160,
            "results": Object.entries(outputs).map(([it, chance]) => {
                const { count, id } = decompose(it)
                return { chance: chance, count: count, item: id }
            })
        })
    }

    CCRecipes.milling = (e, outputs, input) => {
        e.custom({
            "type": "create:milling",
            "ingredients": [{ item: input }],
            "processingTime": 160,
            "results": Object.entries(outputs).map(([it, chance]) => {
                const { count, id } = decompose(it)
                return { chance: chance, count: count, item: id }
            })
        })
    }

    CCRecipes.application = (e, output, inputs) => {
        e.custom({
            "type": "create:item_application",
            "ingredients": inputs.map(makeIngredient),
            "results": [makeIngredient(output)]
        })
    }

    CCRecipes.inscriber = (e, output, inputs) => {
        const ingredients = {}
        if (inputs.length !== 2 && inputs.length !== 3) {
            throw new Error(`CC Problem: Expected 2 or 3 inputs for Inscriber, got ${inputs.length}`)
        }

        ingredients.top = makeIngredient(inputs[0])
        ingredients.middle = makeIngredient(inputs[1])
        if (inputs.length === 3)
            ingredients.bottom = makeIngredient(inputs[2])
        e.custom({
            "type": "ae2:inscriber",
            "ingredients": ingredients,
            "mode": "press",
            "result": makeIngredient(output)
        })
    }

    CCRecipes.elementBinding = (e, output, amount, element, inputs) => {
        e.custom({
            "type": "elementalcraft:binding",
            "element_amount": amount,
            "element_type": element,
            "ingredients": inputs.map(makeIngredient),
            "output": makeIngredient(output)
        })
    }

    CCRecipes.elementInfusion = (e, output, amount, element, input) => {
        e.custom({
            "type": "elementalcraft:infusion",
            "element_amount": amount,
            "element_type": element,
            "input": makeIngredient(input),
            "output": makeIngredient(output)
        })
    }

    CCRecipes.elementSawing = (e, output, amount, fortune, input) => {
        e.custom({
            "type": "elementalcraft:sawing",
            "element_amount": amount,
            "input": makeIngredient(input),
            "luck_ratio": fortune,
            "output": makeIngredient(output)
        })
    }

    CCRecipes.elementCrystallization = (e, outputs, amount, element, inputs) => {
        if (inputs.length !== 3) throw new Error(`CC Problem: expected 3 inputs for Element Crystallization`)
        e.custom({
            "type": "elementalcraft:crystallization",
            "element_amount": amount,
            "element_type": element,
            "ingredients": {
                "crystal": makeIngredient(inputs[0]),
                "gem": makeIngredient(inputs[1]),
                "shard": makeIngredient(inputs[2])
            },
            "outputs": outputs.map(x => {
                const { quality, weight, item } = x
                const { count, id } = decompose(item)
                return { quality: quality || 0, weight: weight, result: { Count: count, id: id } }
            })
        })
    }

    CCRecipes.pressing = (e, output, input) => {
        e.custom({
            "type": "create:pressing",
            "ingredients": [makeIngredient(input)],
            "results": [makeIngredient(output)]
        })
    }

    CCRecipes.mixing = (e, output, heat, inputs) => {
        e.custom({
            "type": "create:mixing",
            "heatRequirement": heat,
            "ingredients": inputs.map(makeIngredient),
            "results": [makeIngredient(output)]
        })
    }

    CCRecipes.manaInfusion = (e, output, cost, input) => {
        e.custom({
            "type": "botania:mana_infusion",
            "input": makeIngredient(input),
            "mana": cost,
            "output": makeIngredient(output)
        })
    }

    CCRecipes.runicAltar = (e, output, cost, inputs) => {
        e.custom({
            "type": "botania:runic_altar",
            "ingredients": inputs.map(makeIngredient),
            "mana": cost,
            "output": makeIngredient(output)
        })
    }

    CCRecipes.pureDaisy = (e, output, input) => {
        e.custom({
            "type": "botania:pure_daisy",
            "input": {
                "type": "block",
                "block": input
            },
            "output": {
                "name": output
            }
        })
    }

    CCRecipes.spiritFocusing = (e, output, time, impetus, spirits) => {
        e.custom({
            "type": "malum:spirit_focusing",
            "durabilityCost": 1,
            "input": makeIngredient(impetus),
            "spirits": spirits.map(makeSpirit),
            "time": time,
            "output": makeIngredient(output)
        })
    }

    CCRecipes.melting = (e, output, input) => {
        e.custom({
            "type": "embers:melting",
            "input": makeIngredient(input),
            "output": makeIngredient(output, { fluid: true })
        })
    }

    CCRecipes.centrifugeMixing = (e, output, inputs) => {
        e.custom({
            "type": "embers:mixing",
            "inputs": inputs.map(input => makeIngredient(input, { key: "name", fluid: true })),
            "output": makeIngredient(output, { fluid: true })
        })
    }

    CCRecipes.stamping = (e, output, stamp, input) => {
        e.custom({
            "type": "embers:stamping",
            "fluid": makeIngredient(input, { key: "name", fluid: true }),
            "output": makeIngredient(output),
            "stamp": makeIngredient(stamp),
        })
    }

    // temp until multiblocks are added
    const tempRecipe = (e, outputs, inputs) => {
        if (!inputs.map) inputs = [inputs]
        if (!outputs.map) outputs = [outputs]
        e.custom({
            "type": "create:mixing",
            "ingredients": inputs.map(makeIngredient)
                .map(x => Array(x.count || 1).fill(x))
                .reduce((a, b) => a.concat(b), []),
            "results": outputs.map(makeIngredient)
        })
    }

    CCRecipes.alchMetalCasting = tempRecipe
    CCRecipes.sintering = tempRecipe
    CCRecipes.dissolving = tempRecipe
    CCRecipes.heatDecomposing = tempRecipe
    CCRecipes.chemicalReduction = tempRecipe
    CCRecipes.chemicalCrystallization = tempRecipe
    CCRecipes.electrolyzing = tempRecipe

    CCRecipes.pressureChamber = (e, outputs, pressure, inputs) => {
        e.custom({
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": inputs.map(input => makeIngredient(input, { stackedItem: true })),
            "pressure": pressure,
            "results": outputs.map(makeIngredient)
        })
    }

    CCRecipes.naturalAltar = (e, output, cost, time, input) => {
        e.custom({
            "type": "naturesaura:altar",
            "input": makeIngredient(input),
            "output": makeIngredient(output),
            "aura": cost,
            "time": time
        })
    }

    CCRecipes.reconstructor = (e, output, cost, input) => {
        e.custom({
            "type": "actuallyadditions:laser",
            "energy": cost,
            "ingredient": makeIngredient(input),
            "result": makeIngredient(output)
        })
    }
})()
