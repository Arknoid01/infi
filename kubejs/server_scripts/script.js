// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

event.remove({ output: 'mysticalagriculture:infusion_altar' })
event.remove({ output: 'powah:dielectric_casing' })
event.remove({ output: 'minecolonies:blockhutdeliveryman' })
event.remove({ output: 'minecolonies:blockhutwarehouse' })
event.remove({ output: 'minecolonies:blockhutlumberjack' })
event.remove({ output: 'minecolonies:blockhutminer' })
event.remove({ output: 'thermal:machine_frame' })
event.remove({ output: 'refinedstorage:machine_casing' })
event.remove({ output: 'industrialforegoing:machine_frame_pity' })
event.remove({ output: 'deepresonance:machine_frame' })
event.remove({ output: 'silents_mechanisms:stone_machine_frame' })
event.remove({ output: 'mekanism:steel_casing' })
event.remove({ output: 'rftoolsbase:machine_frame' })
event.remove({ output: Item.of('immersiveengineering:hammer', '{Damage:0}') })
event.remove({ output: 'storagenetwork:master' })
event.remove({ output: 'minecolonies:blockhuttownhall' })
event.remove({ output: 'minecolonies:blockhuttavern' })
event.remove({ output: 'minecolonies:blockhutcitizen' })

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})