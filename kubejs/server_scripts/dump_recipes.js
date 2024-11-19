// priority: 4

ServerEvents.recipes(event => {
    const recipes = {}
    const dump_recipes = !JsonIO.readJson("kubejs/dumps/all_recipes.json")
    if (dump_recipes) {
        event.forEachRecipe({}, r => {
            recipes[r.getPath()] = JSON.parse(r.json.toString())
        })
        JsonIO.write("kubejs/dumps/all_recipes.json", recipes)
    }
    event.remove({})
})
