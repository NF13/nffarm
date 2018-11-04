var home = {name: "home", x:5, y:5, type: "floor", elements:[{x:0,y:0,type:"computer", funct:"useComputer();"}, {x:0,y:3,type:"bed", funct:"bedDialog();"}], ends: [{x:3, y:4, to: "farm", type:"door"}]}
var farm = {name: "farm", funct: "buildFarmDialog();", x:135, y:50, type: "green", elements:[], ends:[{x:10, y:10, to: "home", type: "home"}, {x:2, y:0, to: "mine", type: "gate"}, {x:4, y:0, to: "wood", type: "gate"}]}
var mine = {name: "mine", x:135, y:50, type: "stone", elements:[], ends:[{x:65, y:49, to: "farm", type: "hole"}, {x:65, y:25, to: "mine", type: "hole"}, {x:67, y:47, to: "minehouse", type: "minehouse"}], afterGenerate: "generateMining()"}
var wood = {name: "wood", x:135, y:50, type: "green", elements:[], ends:[{x:65, y:49, to: "farm", type: "gate"}, {x:65, y:25, to: "wood", type: "gate"}, {x:67, y:47, to: "woodhouse", type: "woodhouse"}], afterGenerate: "generateWood()"}
var minehouse = {name: "minehouse", funct: "buildMineHouseDialog();", x:10, y:10, type: "floor", elements:[], ends: [{x:3, y:9, to: "mine", type:"door"}]}
var woodhouse = {name: "woodhouse", funct: "buildWoodHouseDialog();", x:10, y:10, type: "floor", elements:[], ends: [{x:3, y:9, to: "wood", type:"door"}]}
var emptyFarm = {name: "farm", funct: "buildFarmDialog();", x:135, y:50, type: "green", elements:[], ends:[]}
var emptyStable = {name: "stable", funct: "buildStableDialog();", x:40, y:40, type: "floor", elements:[], ends:[], initialEnd:{x:20, y:39}}
var emptyMachineroom = {name: "machineroom", funct: "buildMachineDialog();", x:40, y:40, type: "floor", elements:[], ends:[], initialEnd:{x:20, y:39}}

var buildings = [{name: "field", type: "field", group: "farm", funct: "fieldDialog();", initialAttributes: []},
				{name: "way", type: "way", group: "farm", funct: "wayDialog();", initialAttributes: []},
				{name: "gate", type: "gate", group: "doors", funct: "enterMapDynamic();", initialAttributes: [{key: "to", value: 'notdefined'}]},
				{name: "fountain", type: "fountain", group: "farm", funct: "fountainDialog();", initialAttributes: [{key: "water", value: 10}]},
				{name: "door", type: "door", group: "doors", funct: "enterMapDynamic();", initialAttributes: [{key: "to", value: 'notdefined'}]},
				{name: "stable", type: "stable", group: "doors", funct: "enterMapDynamic();", initialAttributes: [{key: "to", value: 'notdefined'}]},
				{name: "machineroom", type: "machineroom", group: "doors", funct: "enterMapDynamic();", initialAttributes: [{key: "to", value: 'notdefined'}]},
				{name: "sprinkler", type: "sprinkler", group: "farm", funct: "sprinklerDialog();", initialAttributes: []},
				{name: "feedingtrough", type: "feedingtrough", group: "stable", funct: "feedingTroughDialog();", initialAttributes: [{key: "fill", value: 10}]},
				{name: "watertrough", type: "watertrough", group: "stable", funct: "waterTroughDialog();", initialAttributes: [{key: "fill", value: 10}]},
				{name: "eiwollmilchsau", type: "eiwollmilchsau", group: "stable", funct: "eiWollMilchSauDialog();", initialAttributes: [{key: "things", value: []}]},
				{name: "harvester", type: "harvester", group: "farm", funct: "harvesterDialog();", initialAttributes: []},
				{name: "planter", type: "planter", group: "farm", funct: "planterDialog();", initialAttributes: []},
				{name: "pump", type: "pump", group: "farm", funct: "pumpDialog();", initialAttributes: [{key: "water", value: 10}, {key: "oil", value: 10}]},
				{name: "fillrobotor", type: "fillrobotor", group: "machineroom", funct: "fillrobotorDialog();", initialAttributes: []},
				{name: "emptyrobotor", type: "emptyrobotor", group: "machineroom", funct: "emptyrobotorDialog();", initialAttributes: []},
				{name: "oilpump", type: "oilpump", group: "farm", funct: "oilpumpDialog();", initialAttributes: [{key: "oil", value: 1}]},
				{name: "trash", type: "trash", group: "farm", funct: "trashDialog();", initialAttributes: []},
				{name: "minerobotor", type: "minerobotor", group: "minehouse", funct: "mineRobotorDialog();", initialAttributes: []},
				{name: "woodrobotor", type: "woodrobotor", group: "woodhouse", funct: "woodRobotorDialog();", initialAttributes: []}
				];
				
var templates = [
				{name: "fieldtemplate", template: [
					{x:-3, y:-3 , type: "field"}, {x:-3, y:-2 , type: "field"}, {x:-3, y:-1 , type: "field"}, {x:-3, y:0 , type: "field"}, {x:-3, y:1 , type: "field"}, {x:-3, y:2 , type: "field"}, {x:-3, y:3 , type: "field"},
					{x:-2, y:-3 , type: "field"}, {x:-2, y:-2 , type: "field"}, {x:-2, y:-1 , type: "field"}, {x:-2, y:0 , type: "field"}, {x:-2, y:1 , type: "field"}, {x:-2, y:2 , type: "field"}, {x:-2, y:3 , type: "field"},
					{x:-1, y:-3 , type: "field"}, {x:-1, y:-2 , type: "field"}, {x:-1, y:-1 , type: "field"}, {x:-1, y:0 , type: "field"}, {x:-1, y:1 , type: "field"}, {x:-1, y:2 , type: "field"}, {x:-1, y:3 , type: "field"},
					{x:0, y:-3 , type: "field"}, {x:0, y:-2 , type: "field"}, {x:0, y:-1 , type: "field"}, {x:0, y:0 , type: "sprinkler"}, {x:0, y:1 , type: "field"}, {x:0, y:2 , type: "field"}, {x:0, y:3 , type: "field"},
					{x:1, y:-3 , type: "field"}, {x:1, y:-2 , type: "field"}, {x:1, y:-1 , type: "field"}, {x:1, y:0 , type: "field"}, {x:1, y:1 , type: "field"}, {x:1, y:2 , type: "field"}, {x:1, y:3 , type: "field"},
					{x:2, y:-3 , type: "field"}, {x:2, y:-2 , type: "field"}, {x:2, y:-1 , type: "field"}, {x:2, y:0 , type: "field"}, {x:2, y:1 , type: "field"}, {x:2, y:2 , type: "field"}, {x:2, y:3 , type: "field"},
					{x:3, y:-3 , type: "field"}, {x:3, y:-2 , type: "field"}, {x:3, y:-1 , type: "field"}, {x:3, y:0 , type: "field"}, {x:3, y:1 , type: "field"}, {x:3, y:2 , type: "field"}, {x:3, y:3 , type: "field"}
					]
				}
];
				
var machines = [
	{name: "Ofen", type: "oven", price: 10000},
	{name: "K&auml;sepresse", type: "cheesepress", price: 15000},
	{name: "&Ouml;ldestilator", type: "oildestilation", price: 15000},
	{name: "Spritzgussmaschine", type: "injectionmolding", price: 15000},
	{name: "Schmelzofen", type: "furnace", price: 15000},
	{name: "Konzervierung", type: "conserver", price: 15000},
	{name: "Werkbank", type: "tooltable", price: 15000},
	{name: "Textilverarbeitung", type: "textiltable", price: 15000}
];

var recipients = [
	{name: "Brot", type: "bread", machine: "oven", time: 0, sell: 100, ingredients: [{type: "wheat", count: 2}]},
	{name: "K&auml;se", type: "cheese", machine: "cheesepress", time: 2, sell: 50, ingredients: [{type: "cow", count: 2}]},
	{name: "Kuchen", type: "cake", machine: "oven", time: 1, sell: 150, ingredients: [{type: "cow", count: 1}, {type: "wheat", count: 1}, {type: "chicken", count: 1}]},
	{name: "Plastik", type: "plastik", machine: "oildestilation", time: 1, sell: 200, ingredients: [{type: "oil", count: 10}]},
	{name: "Gummiente", type: "rubberduck", machine: "injectionmolding", time: 0, sell: 600, ingredients: [{type: "plastik", count: 2}]},
	{name: "Glass", type: "glass", machine: "furnace", time: 1, sell: 50, ingredients: [{type: "sand", count: 5}]},
	{name: "Eisen", type: "iron", machine: "furnace", time: 1, sell: 100, ingredients: [{type: "ironore", count: 5}]},
	{name: "Gurkenkonserven", type: "cukeconserv", machine: "conserver", time: 1, sell: 120, ingredients: [{type: "cuke", count: 1}, {type: "onion", count: 1}, {type: "water", count: 1}]},
	{name: "Karottenkonserven", type: "carrotconserv", machine: "conserver", time: 1, sell: 30, ingredients: [{type: "carrot", count: 1}, {type: "water", count: 1}]},
	{name: "Bohnenkonserven", type: "beanconserv", machine: "conserver", time: 1, sell: 100, ingredients: [{type: "bean", count: 1}, {type: "water", count: 1}]},
	{name: "Zucker", type: "sugar", machine: "oven", time: 1, sell: 160, ingredients: [{type: "beet", count: 2}]},
	{name: "Erdbeerkonfit&uuml;re", type: "strawberrymarmelade", machine: "oven", time: 1, sell: 300, ingredients: [{type: "sugar", count: 1}, {type: "strawberry", count: 1}]},
	{name: "Melonenkonfit&uuml;re", type: "melonmarmelade", machine: "oven", time: 1, sell: 260, ingredients: [{type: "sugar", count: 1}, {type: "watermelon", count: 1}]},
	{name: "Pilzsuppe", type: "pilzsoup", machine: "oven", time: 1, sell: 20, ingredients: [{type: "pilz", count: 1}, {type: "water", count: 1}]},
	{name: "Bretter", type: "woodenblank", machine: "tooltable", time: 0, sell: 20, ingredients: [{type: "wodden", count: 1}]},
	{name: "Schaukelpferd", type: "hoppy", machine: "tooltable", time: 0, sell: 50, ingredients: [{type: "woodenblank", count: 2}]},
	{name: "Pullover", type: "pullover", machine: "textiltable", time: 0, sell: 250, ingredients: [{type: "sheep", count: 2}]},
	{name: "Socken", type: "sock", machine: "textiltable", time: 0, sell: 125, ingredients: [{type: "sheep", count: 1}]}
]

var dialogActive;

var emails = [];

var buildedBuildings = [];

var plantedFields = [];

var addedWorlds = [];

var moveTimeout = null;

function startGame()
{
	generateWorld(home);
	var cell = $('#'+2+"-"+2);
	cell.addClass('me');
	$('#money').text(1000);
	$('#carrot').text(0);
	$('#carrotseed').text(10);
	$('#water').text(10);
	$('#oil').text(0);
	emails.push({title: 'Hallo!', body: 'Sch&ouml;n dass du mein Spiel entdeckt hast, ich habe die Steurung so intuitiv wie m&ouml;glich gestaltet, wenn du Gl&uuml;ck hast habe ich trotzdem schon F1 eingebaut.'});
	$.each($('.animal'), function( index, value ) {
		var animal = {};
		animal.name = $(value).attr('id');
		animal.type = $(value).attr('id');
		animal.group = "animal";
		animal.funct = "animalDialog();";
		animal.initialAttributes = [];
		var pregnant = {};
		pregnant.key = "pregnant";
		pregnant.value = eval($(value).attr('pregnant'));
		animal.initialAttributes.push(pregnant);
		var spendtime = {};
		spendtime.key = "spendtime";
		spendtime.value = eval($(value).attr('spendtime'));
		animal.initialAttributes.push(spendtime);
		animal.initialAttributes.push({key: "feeded", value: false});
		animal.initialAttributes.push({key: "watered", value: false});
		animal.initialAttributes.push({key: "type", value: $(value).attr('id')});
		buildings.push(animal);
	});
	$.each(machines, function( index, value ) {
		var machine = {};
		machine.name = value.type;
		machine.type = value.type;
		machine.group = "machine";
		machine.funct = "machineDialog();";
		machine.initialAttributes = [];
		machine.initialAttributes.push({key: "timeneeded", value: 0});
		machine.initialAttributes.push({key: "type", value: value.type});
		machine.initialAttributes.push({key: "recipient", value: "none"});
		buildings.push(machine);
	});

}

function generateWorld(world)
{
	var table = $('<table></table>');
	for(var cellY = 0; cellY < world.y; cellY++)
	{
		var tr = $('<tr></tr>');
		table.append(tr);
		for(var cellX = 0; cellX < world.x; cellX++)
		{
			var td = $('<td id="'+cellY+'-'+cellX+'" x="'+cellX+'" y="'+cellY+'" onclick="moveToAndExec('+cellX+','+cellY+');"></td>');
			td.addClass(world.type);
			if(world.funct)
			{
				td.attr("funct", world.funct);
			}
			tr.append(td);
		}
	}
	$('#world').html(table);
	$('#world').attr("name", world.name);
	$.each(world.elements, function( index, value ) {
		var cell = $('#'+value.y+"-"+value.x);
		cell.removeClass(world.type);
		cell.addClass(value.type);
		if(value.funct)
		{
			cell.attr("funct", value.funct);
		}
	});
	$.each(world.ends, function( index, value ) {
		var cell = $('#'+value.y+"-"+value.x);
		cell.removeClass(world.type);
		cell.addClass(value.type);
		cell.attr("funct", "enterMap('"+world.name+"', '"+value.to+"')");
	});
	$.each(buildedBuildings, function( index, value ) {
		if(value.map == world.name)
		{
			var cell = $('#'+value.y+"-"+value.x);
			cell.attr('arrayIndex', index);
			$.each(buildings, function( index, building ) {
				if(building.name == value.name)
				{
					cell.removeClass(world.type);
					cell.addClass(building.type);
					if(building.funct)
					{
						cell.attr("funct", building.funct);
					}
				}
			});
			$.each(value.attributes, function( index, attribute ) {
				cell.attr(attribute.key, attribute.value);
			});
		}
	});
	$.each(plantedFields, function( index, value ) {
		if(value.map == world.name)
		{
			var cell = $('#'+value.y+"-"+value.x);
			cell.addClass(value.type);
			if(value.watered)
			{
				cell.addClass('watered');
			}
			cell.attr('step', value.step);
			cell.attr('fieldType', value.type);
			cell.attr('fieldArrayIndex', index);
			cell.attr('name', value.name);
		}
	});
	if(world.afterGenerate)
	{
		eval(world.afterGenerate);
	}
}

function generateMining()
{
	var i = 0;
	do
	{
		var x = Math.floor(Math.random() * 135);
		var y = Math.floor(Math.random() * 50);
		var random = Math.floor(Math.random() * $('.mine').length);
		var cell = $('#'+y+"-"+x);
		if(cell.hasClass("stone"))
		{
			cell.removeClass("stone");
			cell.addClass($($(".mine")[random]).attr('id'));
			cell.attr('type', $($(".mine")[random]).attr('id'))
			cell.attr("funct", "getOre();");
		}
		i++;
	}while (i<250);	
}

function generateWood()
{
	var i = 0;
	do
	{
		var x = Math.floor(Math.random() * 135);
		var y = Math.floor(Math.random() * 50);
		var random = Math.floor(Math.random() * $('.wood').length);
		var cell = $('#'+y+"-"+x);
		if(cell.hasClass("green"))
		{
			cell.removeClass("green");
			cell.addClass($($(".wood")[random]).attr('id'));
			cell.attr('type', $($(".wood")[random]).attr('id'))
			cell.attr("funct", "getWoodType();");
		}
		i++;
	}while (i<250);	
}

function getOre()
{
	var cell = $('.me');
	var type = cell.attr('type');
	$('#'+type).text(eval($('#'+type).text())+1);
	cell.removeClass(type);
	cell.addClass("stone");
	cell.removeAttr('type')
	cell.removeAttr("funct", "getOre();");
}

function getWoodType()
{
	var cell = $('.me');
	var type = cell.attr('type');
	$('#'+type).text(eval($('#'+type).text())+1);
	cell.removeClass(type);
	cell.addClass("green");
	cell.removeAttr('type')
	cell.removeAttr("funct", "getOre();");
}

function addWorld(worldType, doorTypeFrom, doorTypeTo, neededMoney)
{
	var buildedBuilding = buildBuilding(doorTypeFrom, neededMoney);
	if(buildedBuilding.map)
	{
		var oldWorld = getWorld($('#world').attr("name"));
		var world = $.extend({}, eval(worldType));
		world.name = world.name + addedWorlds.length;
		var addedWorld = {};
		addedWorld.name = world.name;
		addedWorld.worldType = worldType;
		addedWorlds.push(addedWorld);
		var cell = $('.me');
		$.each(buildedBuilding.attributes, function( index, attribute ) {
			if(attribute.key == 'to')
			{
				attribute.value = world.name;
				cell.attr(attribute.key, attribute.value);
			}
		});
		var x = cell.attr('x');
		var y = cell.attr('y');
		if(x == 0)
		{
			x = world.x-1;
		}
		else if (y == 0)
		{
			y = world.y-1;
		}
		else if (x == oldWorld.x-1)
		{
			x = 0;
		}
		else
		{
			y = 0;
		}
		if(world.initialEnd)
		{
			x = world.initialEnd.x;
			y = world.initialEnd.y;
		}
		generateWorld(world);
		var cell = $('#'+y+"-"+x);
		cell.addClass('me');
		buildedBuilding = buildBuilding(doorTypeTo, 0);
		$.each(buildedBuilding.attributes, function( index, attribute ) {
			if(attribute.key == 'to')
			{
				attribute.value = oldWorld.name;
				cell.attr(attribute.key, attribute.value);
			}
		});
	}
}

function getWorld(worldName)
{
	var newWorld;
	$.each(addedWorlds, function( index, value ) {
		if(value.name == worldName)
		{
			newWorld = $.extend({}, eval(value.worldType));
			newWorld.name = value.name;
		}
	});
	if(!newWorld)
	{
		newWorld = eval(worldName);
	}
	return newWorld;
}

function enterMap(oldMap, newMap)
{
	$('.loader').show();
	setTimeout(function() {
		enterMapWithoutLoading(oldMap, newMap);
		$('.loader').hide();
	}, 1);
}

function enterMapWithoutLoading(oldMap, newMap)
{
	var newWorld = getWorld(newMap);
	generateWorld(newWorld);
	var found = false;
	$.each(newWorld.ends, function( index, value ) {
		if(value.to == oldMap)
		{
			var cell = $('#'+value.y+"-"+value.x);
			cell.addClass('me');
			found = true;
		}
	});
	if(!found)
	{
		$.each(buildedBuildings, function( index, value ) {
			if(value.map == newMap)
			{
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'to' && attribute.value == oldMap)
					{
						var cell = $('#'+value.y+"-"+value.x);
						cell.addClass('me');
						found = true;
					}
				});
			}
		});
	}
}

function enterMapDynamic()
{
	var cell = $('.me');
	var newMap = cell.attr('to');
	var oldMap = $('#world').attr("name");
	enterMap(oldMap, newMap);
}

function keydown(key)
{
	if(moveTimeout != null)
	{
		clearTimeout(moveTimeout);
		moveTimeout = null;
	}
	var result = false;
	var code = key.keyCode || key.which;
	if(dialogActive)
	{
		if(code == 13  || code == 32 || code == 69)
		{
			var funct = $('.activedialogoption').attr('funct');
			if(funct)
			{
				eval(funct);
			}
		}
		else if(code == 38 || code == 87)
		{
			var dialogoption = $('.activedialogoption');
			var nextDialogOption = dialogoption.prev('.dialogoption');
			if(nextDialogOption.size()>0)
			{
				dialogoption.removeClass('activedialogoption');
				nextDialogOption.addClass('activedialogoption');
			}
		}
		else if(code == 40 || code == 83)
		{
			var dialogoption = $('.activedialogoption');
			var nextDialogOption = dialogoption.next('.dialogoption');
			if(nextDialogOption.size()>0)
			{
				dialogoption.removeClass('activedialogoption');
				nextDialogOption.addClass('activedialogoption');
			}
		}
		else if(code == 27)
		{
			closeDialog();
		}
		else
		{
			result = true;
		}
	}
	else
	{
		if(code == 13 || code == 32 || code == 69)
		{
			var funct = $('.me').attr('funct');
			if(funct)
			{
				eval(funct);
			}
		}
		else if(code == 37 || code == 65)
		{
			move(-1, 0);
		}
		else if(code == 38 || code == 87)
		{
			move(0, -1);
		}
		else if(code == 39 || code == 68)
		{
			move(1, 0);
		}
		else if(code == 40 || code == 83)
		{
			move(0, 1);
		}
		else if(code == 27)
		{
			menu();
		}
		else if(code == 112)
		{
			showHelp();
		}
		else if(code == 116)
		{
			saveGame();
		}
		else if(code == 117)
		{
			loadGameDialog();
		}
		else if(code == 73)
		{
			$('#inventory').toggle();
		}
		else{
			alert(code);
		}
	}
	return result;
}

function menu()
{
	addDialog({speaker: 'speaker-me', text: 'Das ist ein Men&uuml;! Was m&ouml;chtest du tun?', options: [{text: 'Speichern', funct: 'saveGame();'}, {text: 'Laden', funct: 'loadGameDialog();'}, {text: 'Hilfe', funct: 'showHelp();'}, {text: 'Inventar ein/ausblenden', funct: '$(\'#inventory\').toggle();'}, {text: 'Nichts', funct: 'closeDialog()'}]});
}

function showHelp()
{
	addDialog({speaker: 'speaker-me', text: 'Du brauchst Hilfe? Hier eine kurze &Uuml;bersicht: Mit den Pfeiltaste oder WASD kannst du dich bewegen. Im Startraum steht ein Bett und ein Computer den du mit Leertaste oder Enter verwenden kannst. Au&szlig;erdem kommst du &uuml;ber die T&uuml;r nach drau&szlig;en, dort kannst du alle leeren Felder bebauen. Mit ESC rufst du das Men&uuml auf, den Rest findest du schon selbst heraus.', options: [{text: 'Danke!', funct: 'closeDialog()'}]});
}

function loadGameDialog()
{
	addDialog({speaker: 'speaker-me', text: 'Gib deinen Code ein: <input type="text" id="saveFile"/>', options: [{text: 'Erledigt', funct: 'loadGame()'}, {text: 'Abbrechen', funct: 'closeDialog()'}]});
	$('#saveFile').select();
}

function loadGame()
{
	$('.loader').show();
	setTimeout(function() {
		try
		{
			var saveFile = JSON.parse($('#saveFile').val());
			emails = saveFile.emails;
			buildedBuildings = saveFile.buildedBuildings;
			plantedFields = saveFile.plantedFields;
			addedWorlds = saveFile.addedWorlds;
			$('#money').text(saveFile.money);
			$.each(saveFile.things, function( index, value ) {
				$('#'+value.id).text(value.value);
			});
			$.each(saveFile.seeds, function( index, value ) {
				$('#'+value.id+'seed').text(value.value);
			});
			$('#water').text(saveFile.water);
			$('#oil').text(saveFile.oil);
			generateWorld(getWorld(saveFile.map));
			var cell = $('#'+saveFile.y+"-"+saveFile.x);
			cell.addClass('me');
			closeDialog();
		}
		catch(e)
		{
			addDialog({speaker: 'speaker-me', text: 'Dein SaveGame ist anscheinend veraltet und kann nicht mehr importiert werden.', options: [{text: 'OK', funct: 'closeDialog()'}]});
		}
		$('.loader').hide();
	}, 1);
}

function saveGame()
{
	$('.loader').show();
	setTimeout(function() {
		var saveFile = {};
		saveFile.map = $('#world').attr("name");
		saveFile.x = $('.me').attr("x");
		saveFile.y = $('.me').attr("y");
		saveFile.emails = emails;
		saveFile.buildedBuildings = buildedBuildings;
		saveFile.plantedFields = plantedFields;
		saveFile.addedWorlds = addedWorlds;
		saveFile.money = $('#money').text();
		saveFile.things=[];
		saveFile.seeds=[];
		$.each($('.plants'), function( index, value ) {
			var plantId= $(value).attr('id');
			var plant = {};
			plant.id=plantId;
			plant.value=$('#'+plantId).text();
			saveFile.things.push(plant);
			var seed = {};
			seed.id=plantId;
			seed.value=$('#'+plantId+'seed').text();
			saveFile.seeds.push(seed);
		});
		$.each($('.animal'), function( index, value ) {
			var animalId= $(value).attr('id');
			var animal = {};
			animal.id=animalId;
			animal.value=$('#'+animalId).text();
			saveFile.things.push(animal);
		});
		$.each(recipients, function( index, value ) {
			var recipientId= value.type;
			var recipient = {};
			recipient.id=recipientId;
			recipient.value=$('#'+recipientId).text();
			saveFile.things.push(recipient);
		});
		$.each($('.mine'), function( index, value ) {
			var recipientId= $(value).attr('id');
			var recipient = {};
			recipient.id=recipientId;
			recipient.value=$('#'+recipientId).text();
			saveFile.things.push(recipient);
		});
		$.each($('.wood'), function( index, value ) {
			var recipientId= $(value).attr('id');
			var recipient = {};
			recipient.id=recipientId;
			recipient.value=$('#'+recipientId).text();
			saveFile.things.push(recipient);
		});
		saveFile.water = $('#water').text();
		saveFile.oil = $('#oil').text();
		addDialog({speaker: 'speaker-me', text: 'Das ist dein Code, bitte kopieren und speichern: <input type="text"  id="saveFile"/>', options: [{text: 'Erledigt', funct: 'closeDialog()'}]});
		$('#saveFile').val(JSON.stringify(saveFile));
		$('#saveFile').select();
		document.execCommand('copy');
		$('.loader').hide();
	}, 1);
}

function moveToAndExec(x, y)
{
	if(moveTimeout != null)
	{
		clearTimeout(moveTimeout);
		moveTimeout = null;
	}
	if(!dialogActive)
	{
		var me = $('.me');
		var positionX = eval(me.attr('x'));
		var positionY = eval(me.attr('y'));
		if(positionX != x)
		{
			if(positionX - x < 0)
			{
				move(1, 0)
			}
			else
			{
				move(-1, 0)
			}
			moveTimeout = setTimeout(function(){ moveToAndExec(x, y) }, 50);
		}
		else if (positionY != y)
		{
			if(positionY - y < 0)
			{
				move(0, 1)
			}
			else
			{
				move(0, -1)
			}
			moveTimeout = setTimeout(function(){ moveToAndExec(x, y) }, 50);
		}
		else
		{
			if(me.attr('funct'))
			{
				eval(me.attr('funct'))
			}
			moveTimeout = null;
		}
	}
}

function move(x, y)
{
	var me = $('.me');
	var positionX = eval(me.attr('x')) + x;
	var positionY = eval(me.attr('y')) + y;
	var newCell = $('#'+positionY+"-"+positionX);
	if(newCell.size() > 0)
	{
		newCell.addClass('me');
		me.removeClass('me');
	}
}

function addDialog(dialog)
{
	$('#speaker').addClass(dialog.speaker);
	$('#dialogtext').html(dialog.text);
	$.each(dialog.options, function( index, value ) {
		$('#dialogtext').html($('#dialogtext').html()+'<div class="dialogoption" funct="'+value.funct+'" onclick="eval($(this).attr(\'funct\'));" onmouseover="selectOption($(this))">'+value.text+'</div>')
	});
	$('.dialogoption').first().addClass('activedialogoption');
	dialogActive = true;
}

function selectOption(option)
{
	var dialogoption = $('.activedialogoption');
	var nextDialogOption = option;
	if(nextDialogOption.size()>0)
	{
		dialogoption.removeClass('activedialogoption');
		nextDialogOption.addClass('activedialogoption');
	}
}

function closeDialog()
{
	$("#speaker").removeClass();
	$("#dialogtext").text('');
	dialogActive = false;
}

function bedDialog()
{
	addDialog({speaker: 'speaker-me', text: 'Mein sch&ouml;nes weiches Bed, wie man sieht. Soll ich f&uuml;r heute Feierabend machen?', options: [{text: 'Schlafen', funct: 'sleep();'}, {text: 'Nichts', funct: 'closeDialog()'}]});
}

function sleep()
{
	$("#world td" ).addClass( "black", 1000 );
	$('.loader').show();
	setTimeout(function() {
        $("#world td").removeClass("black", 1000);
    }, 1000 );
	setTimeout(function() {
		$.each(buildedBuildings, function( index, value ) {
			if(value.name == 'fountain')
			{
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'water')
					{
						attribute.value = 10;
					}
				});
			}
			else if(value.name == 'oilpump')
			{
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'oil')
					{
						attribute.value = attribute.value + 1;
					}
				});
			}
			else if(value.group == "animal")
			{
				var feeded = false;
				var watered = false;
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'feeded')
					{
						feeded = attribute.value;
						attribute.value = false;
					}
					else if(attribute.key == 'watered')
					{
						watered = attribute.value;
						attribute.value = false;
					}
				});
				if(feeded && watered)
				{
					$.each(value.attributes, function( index, attribute ) {
						if(attribute.key == 'pregnant' && attribute.value > 0)
						{
							attribute.value = attribute.value - 1;
						}
						else if(attribute.key == 'spendtime' && attribute.value > 0)
						{
							attribute.value = attribute.value - 1;
						}
					});
				}
			}
			else if(value.group == "machine")
			{
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'timeneeded' && attribute.value > 0)
					{
						attribute.value = attribute.value - 1;
					}
				});
			}
		});
		$.each(plantedFields, function( index, value ) {
			if(value.step > 0 && value.watered)
			{
				value.watered = false;
				value.step = value.step - 1;
			}
		});
		$.each(buildedBuildings, function( index, value ) {
			if(value.name == 'sprinkler')
			{
				var x = eval(value.x);
				var y = eval(value.y);
				var map = value.map;
				useSprinkler(x, y, map);
			}
			else if(value.name == 'feedingtrough')
			{
				var fill = 0;
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'fill')
					{
						fill = attribute.value;
					}
				});
				$.each(buildedBuildings, function( index, animal ) {
					if(animal.group == "animal" && animal.map == value.map && fill > 0)
					{
						$.each(animal.attributes, function( index, attribute ) {
							if(attribute.key == 'feeded' && !attribute.value)
							{
								attribute.value = true;
								fill = fill - 1;
							}
						});
					}
				});
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'fill')
					{
						attribute.value = fill;
					}
				});
			}
			else if(value.name == 'watertrough')
			{
				var fill = 0;
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'fill')
					{
						fill = attribute.value;
					}
				});
				$.each(buildedBuildings, function( index, animal ) {
					if(animal.group == "animal" && animal.map == value.map && fill > 0)
					{
						$.each(animal.attributes, function( index, attribute ) {
							if(attribute.key == 'watered' && !attribute.value)
							{
								attribute.value = true;
								fill = fill - 1;
							}
						});
					}
				});
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'fill')
					{
						attribute.value = fill;
					}
				});
			}
			else if(value.name == 'eiwollmilchsau')
			{
				var things;
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'things')
					{
						things = attribute.value;
					}
				});
				$.each(buildedBuildings, function( index, animal ) {
					if(animal.group == "animal" && animal.map == value.map)
					{
						var ok = true;
						$.each(animal.attributes, function( index, attribute ) {
							if(attribute.key == 'pregnant' && attribute.value > 0)
							{
								ok = false;
							}
							else if(attribute.key == 'spendtime' && attribute.value > 0)
							{
								ok = false;
							}
						});
						if(ok)
						{
							$.each(animal.attributes, function( index, attribute ) {
								if(attribute.key == 'spendtime')
								{
									attribute.value = eval($('#'+animal.name).attr('spendtime'));
								}
							});
							things.push(animal.name);
						}
					}
				});
			}
			else if(value.name == 'pump')
			{
				var addedWater = 0;
				$.each(buildedBuildings, function( index, fountain ) {
					if(fountain.name == 'fountain' && fountain.map == value.map)
					{
						$.each(fountain.attributes, function( index, attribute ) {
							if(attribute.key == 'water')
							{
								addedWater = addedWater + attribute.value;
								attribute.value = 0;
							}
						});
					}
				});
				var addedOil = 0;
				$.each(buildedBuildings, function( index, fountain ) {
					if(fountain.name == 'oilpump' && fountain.map == value.map)
					{
						$.each(fountain.attributes, function( index, attribute ) {
							if(attribute.key == 'oil')
							{
								addedOil = addedOil + attribute.value;
								attribute.value = 0;
							}
						});
					}
				});
				$.each(value.attributes, function( index, attribute ) {
					if(attribute.key == 'water')
					{
						attribute.value = attribute.value + addedWater;
					}
					else if(attribute.key == 'oil')
					{
						attribute.value = attribute.value + addedOil;
					}
				});
			}
		});
		$('.loader').hide();
		addDialog({speaker: 'speaker-me', text: 'G&auml;&auml;hhnn, genug geschlafen ran an die Arbeit!', options: [{text: 'Arbeit, Arbeit', funct: 'closeDialog()'}]});
	}, 1);
}

function useSprinkler(x, y, map)
{
	var currentMap = $('#world').attr("name");
	$.each(plantedFields, function( index, plant ) {
		if(plant.map == map && eval(plant.x) >= x-3 && eval(plant.x) <= x+3 && eval(plant.y) >= y-3 && eval(plant.y) <= y+3)
		{
			plant.watered = true;
			if(currentMap == map)
			{
				$('#'+plant.y+"-"+plant.x).addClass('watered');
			}
		}
	});
}

function useComputer()
{
	addDialog({speaker: 'speaker-me', text: 'Das ist ein Computer, was soll ich tun?', options: [{text: 'E-Mails', funct: 'checkMails()'},{text: 'Online-Shop', funct: 'buySellDialog()'}, {text: 'Nichts', funct: 'closeDialog()'}]});
}

function buySellDialog()
{
	addDialog({speaker: 'speaker-me', text: 'Soll ich etwas kaufen oder verkaufen?', options: [{text: 'Kaufen', funct: 'buyDialog()'}, {text: 'Verkaufen', funct: 'sellDialog()'}, {text: 'Nichts', funct: 'useComputer()'}]});
}

function buyDialog()
{
	var options = [];
	$.each($('.plants'), function( index, value ) {
		var plantId= $(value).attr('id');
		var name = $(value).attr('name');
		var buy = $(value).attr('buy');
		var option = {};
		option.text=name+ "("+buy+" Euro)";
		option.funct="buyPlant('"+plantId+"', "+buy+");";
		options.push(option);
	});
	options.push({text: 'Nichts', funct: 'buySellDialog()'});
	addDialog({speaker: 'speaker-me', text: 'Was soll ich kaufen?', options: options});
}

function buyPlant(plantId, neededMoney)
{
	if(getMoney()>=neededMoney)
	{
		addMoney(neededMoney*-1);
		$('#'+plantId+'seed').text(eval($('#'+plantId+'seed').text())+1);
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Vielleicht sollten wir erst mal wieder Geld verdienen, ich kann nat&uuml;rlich auch mal schauen ob jemand Geld auf dem Weg verloren hat!', options: [{text: 'OK', funct: 'buyDialog()'}]});
	}
}

function sellDialog()
{
	var options = [];
	$.each($('.plants'), function( index, value ) {
		var plantId= $(value).attr('id');
		var name = $(value).attr('name');
		var sell = $(value).attr('sell');
		var option = {};
		option.text=name+ "("+sell+" Euro)";
		option.funct="sell('"+plantId+"', "+sell+");";
		options.push(option);
	});
	$.each($('.animal'), function( index, value ) {
		var amimalId= $(value).attr('id');
		var name = $(value).attr('name');
		var sell = $(value).attr('sell');
		var option = {};
		option.text=name+ "("+sell+" Euro)";
		option.funct="sell('"+amimalId+"', "+sell+");";
		options.push(option);
	});
	$.each(recipients, function( index, value ) {
		var option = {};
		option.text=value.name+ "("+value.sell+" Euro)";
		option.funct="sell('"+value.type+"', "+value.sell+");";
		options.push(option);
	});	
	options.push({text: 'Nichts', funct: 'buySellDialog()'});
	addDialog({speaker: 'speaker-me', text: 'Was soll ich kaufen?', options: options});
}

function sell(id, money)
{
	if(eval($('#'+id).text())>=1)
	{
		addMoney(money);
		$('#'+id).text(eval($('#'+id).text())-1);
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Ich hab nicht genug davon um es zu verkaufen!', options: [{text: 'OK', funct: 'sellDialog()'}]});
	}
}

function checkMails()
{
	if(emails.length == 0)
	{
		addDialog({speaker: 'speaker-me', text: 'Zurzeit habe ich keine Mails', options: [{text: 'zur&uuml;ck', funct: 'useComputer()'}]});
	}
	else
	{
		var options = [];
		$.each(emails, function( index, value ) {
			options.push({text: value.title, funct: 'readMail('+index+')'});
		});
		options.push({text: 'zur&uuml;ck', funct: 'useComputer()'});
		addDialog({speaker: 'speaker-me', text: 'Zurzeit habe ich folgende Mails', options: options});
	}
}

function readMail(index)
{
	addDialog({speaker: 'speaker-me', text: 'In der Email steht: '+emails[index].body, options: [{text: 'l&ouml;schen', funct: 'deleteMail('+index+')'}, {text: 'zur&uuml;ck', funct: 'checkMails()'}]});
}

function deleteMail(index)
{
	emails.splice(index, 1);
	checkMails();
}

function buildMachineDialog()
{
	var options = [];
	$.each(machines, function( index, value ) {
		options.push({text: value.name+' ('+value.price+' Euro)', funct: 'buildBuilding(\''+value.type+'\', '+value.price+');'});
	});
	options.push({text: 'F&uuml;llrobotor (25000 Euro)', funct: 'buildBuilding(\'fillrobotor\', 25000);'});
	options.push({text: 'Leerungsrobotor (25000 Euro)', funct: 'buildBuilding(\'emptyrobotor\', 25000);'});
	options.push({text: 'Nichts', funct: 'closeDialog()'});	
	addDialog({speaker: 'speaker-me', text: 'Welche Machine soll ich anschaffen?', options: options});
}

function buildMineHouseDialog()
{
	var options = [];
	options.push({text: 'Bergbaurobotor (25000 Euro)', funct: 'buildBuilding(\'minerobotor\', 25000);'});
	options.push({text: 'Nichts', funct: 'closeDialog()'});	
	addDialog({speaker: 'speaker-me', text: 'Was soll ich kaufen?', options: options});
}

function buildWoodHouseDialog()
{
	var options = [];
	options.push({text: 'Waldrobotor (25000 Euro)', funct: 'buildBuilding(\'woodrobotor\', 25000);'});
	options.push({text: 'Nichts', funct: 'closeDialog()'});	
	addDialog({speaker: 'speaker-me', text: 'Was soll ich kaufen?', options: options});
}

function machineDialog()
{
	var cell = $('.me');
	if(eval(cell.attr('timeneeded')) == 0)
	{
		if(cell.attr('recipient')=="none")
		{
			var options = [];
			$.each(recipients, function( index, value ) {
				if(value.machine == cell.attr('type'))
				{
					var ingredients = "";
					$.each(value.ingredients, function( index, ingredient ) {
						ingredients = ingredients + " "+ingredient.count+ "x "+$('#'+ingredient.type).attr('name');
					});
					options.push({text: value.name+' ('+ingredients+' )', funct: 'makeRecipient(\''+value.type+'\');'});
				}
			});
			options.push({text: 'Nichts', funct: 'closeDialog()'});
			options.push({text: 'Maschine vernichten', funct: 'destroyBuilding()'});
			addDialog({speaker: 'speaker-me', text: 'Was soll ich zubereiten?', options: options});
		}
		else
		{
			addDialog({speaker: 'speaker-me', text: 'Das Rezept '+$('#'+cell.attr('recipient')).attr('name')+' ist fertig', options: [{text: 'rausholen', funct: 'getRecipient()'}, {text: 'Nichts', funct: 'closeDialog()'}, {text: 'Maschine vernichten', funct: 'destroyBuilding()'}]});
		}
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Das Rezept '+$('#'+cell.attr('recipient')).attr('name')+' ben&ouml;tigt noch '+cell.attr('timeneeded')+ ' Tage', options: [{text: 'OK', funct: 'closeDialog()'}, {text: 'Maschine vernichten', funct: 'destroyBuilding()'}]});
	}
}

function mineRobotorDialog()
{
	addDialog({speaker: 'speaker-me', text: 'Soll ich mit der Machine 10 Minensch&auml;chte abarbeiten?', options: [{text: 'Ja', funct: 'getTenMineFloors()'}, {text: 'Nein', funct: 'closeDialog()'}, {text: 'Robotor vernichten', funct: 'destroyBuilding()'}]});
}

function getTenMineFloors()
{
	$('.loader').show();
	setTimeout(function() {
		var i = 0;
		do
		{
			var cell = $('.me');
			var newMap = 'mine';
			var oldMap = $('#world').attr("name");
			enterMapWithoutLoading(oldMap, newMap);
			$.each($("[funct^='getOre']"), function( i, value ) {
				var me = $(".me");
				$(value).addClass('me');
				me.removeClass('me');
				getOre();
			});
			i++;
		}while(i<10)
		enterMapWithoutLoading('mine', 'minehouse');
		$('.loader').hide();
	}, 1);
}

function woodRobotorDialog()
{
	addDialog({speaker: 'speaker-me', text: 'Soll ich mit der Machine 10 Waldst&uuml;cke abarbeiten?', options: [{text: 'Ja', funct: 'getTenWoods()'}, {text: 'Nein', funct: 'closeDialog()'}, {text: 'Robotor vernichten', funct: 'destroyBuilding()'}]});
}

function getTenWoods()
{
	$('.loader').show();
	setTimeout(function() {
		var i = 0;
		do
		{
			var cell = $('.me');
			var newMap = 'wood';
			var oldMap = $('#world').attr("name");
			enterMapWithoutLoading(oldMap, newMap);
			$.each($("[funct^='getWoodType']"), function( i, value ) {
				var me = $(".me");
				$(value).addClass('me');
				me.removeClass('me');
				getWoodType();
			});
			i++;
		}while(i<10)
		enterMapWithoutLoading('wood', 'woodhouse');
		$('.loader').hide();
	}, 1);
}

function emptyrobotorDialog()
{
	addDialog({speaker: 'speaker-me', text: 'Soll ich den Robotor los schicken um alle fertigen Maschinen zu entleeren', options: [{text: 'Ja', funct: 'getAllRecipient()'}, {text: 'Nein', funct: 'closeDialog()'}, {text: 'Robotor vernichten', funct: 'destroyBuilding()'}]});
}

function fillrobotorDialog()
{
	var options = [];
	$.each(recipients, function( index, value ) {
		var ingredients = "";
		$.each(value.ingredients, function( index, ingredient ) {
			ingredients = ingredients + " "+ingredient.count+ "x "+$('#'+ingredient.type).attr('name');
		});
		var machine;
		$.each(machines, function( index, tempMachine ) {
			if(tempMachine.type == value.machine)
			{
				machine = tempMachine;
			}
		});
		options.push({text: value.name+' ('+ingredients+' ) Maschine '+machine.name, funct: 'makeAllRecipient(\''+value.type+'\');'});
	});
	options.push({text: 'Nichts', funct: 'closeDialog()'});
	options.push({text: 'Robotor vernichten', funct: 'destroyBuilding()'});
	addDialog({speaker: 'speaker-me', text: 'Welches Rezept soll ich den Robotor herstellen lassen.', options: options});
}

function makeAllRecipient(type)
{
	var recipient;
	$.each(recipients, function( recipientIndex, value ) {
		if(value.type == type)
		{
			recipient = value;
		}
	});
	var startCell = $(".me");
	$.each($("."+recipient.machine+"[recipient='none']"), function( i, value ) {
		if(checkIngredient(recipient))
		{
			var me = $(".me");
			$(value).addClass('me');
			me.removeClass('me');
			makeOnlyRecipient(recipient);
		}
	});
	$(".me").removeClass('me');
	startCell.addClass('me');
	addDialog({speaker: 'speaker-me', text: 'Alles erledigt!', options: [{text: 'OK', funct: 'closeDialog()'}]});
}

function checkIngredient(recipient)
{
	var ingredientCheck = true;
	$.each(recipient.ingredients, function( ingredientIndex, ingredient ) {
		if(eval($('#'+ingredient.type).text()) < ingredient.count)
		{
			ingredientCheck = false;
		}
	});
	return ingredientCheck;
}

function makeOnlyRecipient(recipient)
{
	$.each(recipient.ingredients, function( ingredientIndex, ingredient ) {
		$('#'+ingredient.type).text(eval($('#'+ingredient.type).text())-ingredient.count)
	});
	var cell = $('.me');
	var index = cell.attr('arrayIndex');
	$.each(buildedBuildings[index].attributes, function( attributeIndex, attribute ) {
		if(attribute.key == 'recipient')
		{
			attribute.value = recipient.type;
		}
		else if(attribute.key == 'timeneeded')
		{
			attribute.value = recipient.time;
		}
	});
	cell.attr("recipient", recipient.type);
	cell.attr("timeneeded", recipient.time);
}

function makeRecipient(type)
{
	$.each(recipients, function( recipientIndex, value ) {
		if(value.type == type)
		{
			if(checkIngredient(value))
			{
				makeOnlyRecipient(value);
				machineDialog();
			}
			else
			{
				addDialog({speaker: 'speaker-me', text: 'Daf&uuml;r habe ich leider nicht alle ben&ouml;tigten Zutaten!', options: [{text: 'OK', funct: 'machineDialog()'}]});
			}
		}
	});
}

function getAllRecipient()
{
	var startCell = $(".me");
	$.each($( "[timeneeded='0']" ).not( "[recipient='none']" ), function( i, value ) {
		var me = $(".me");
		$(value).addClass('me');
		me.removeClass('me');
		getOnlyRecipient();
	});
	$(".me").removeClass('me');
	startCell.addClass('me');
	addDialog({speaker: 'speaker-me', text: 'Alles erledigt!', options: [{text: 'OK', funct: 'closeDialog()'}]});
}

function getOnlyRecipient()
{
	var cell = $('.me');
	var id = cell.attr('recipient');
	$('#'+id).text(eval($('#'+id).text()) + 1);
	var index = cell.attr('arrayIndex');
	$.each(buildedBuildings[index].attributes, function( index, attribute ) {
		if(attribute.key == 'recipient')
		{
			attribute.value = "none";
		}
	});
	cell.attr("recipient", "none");
}

function getRecipient()
{
	getOnlyRecipient();
	machineDialog();
}

function feedingTroughDialog()
{
	var cell = $('.me');
	var options = [];
	options.push({text: '10 Weizen hinzuf&uuml;gen', funct: 'fillFeedingThrough(\'wheat\', 10, \'feedingTroughDialog()\')'});
	options.push({text: 'Nichts', funct: 'closeDialog()'});
	options.push({text: 'Zerst&ouml;ren', funct: 'destroyBuilding()'});		
	addDialog({speaker: 'speaker-me', text: 'Im Futtertrog sind noch '+cell.attr("fill")+ " Einheiten was soll ich tun?", options: options});
}

function waterTroughDialog()
{
	var cell = $('.me');
	var options = [];
	options.push({text: '10 Wasser hinzuf&uuml;gen', funct: 'fillFeedingThrough(\'water\', 10, \'waterTroughDialog()\')'});
	options.push({text: 'Nichts', funct: 'closeDialog()'});
	options.push({text: 'Zerst&ouml;ren', funct: 'destroyBuilding()'});		
	addDialog({speaker: 'speaker-me', text: 'Im Wassertrog sind noch '+cell.attr("fill")+ " Einheiten was soll ich tun?", options: options});
}

function fillFeedingThrough(type, count, funct)
{
	var cell = $('.me');
	var need = eval($('#'+type).text());
	if(need >= count)
	{
		var fill = eval(cell.attr("fill"));
		var index = cell.attr('arrayIndex');
		$.each(buildedBuildings[index].attributes, function( index, attribute ) {
			if(attribute.key == 'fill')
			{
				attribute.value = fill + count;
			}
		});
		cell.attr('fill', fill + count);
		$('#'+type).text(need - count);
		eval(funct);
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Daf&uuml;r habe ich leider nicht mehr genug davon!', options: [{text: 'OK', funct: funct}]});
	}
}

function buildStableDialog()
{
	var options = [];
	$.each($('.animal'), function( index, value ) {
		options.push({text: 'Baby-'+$(value).attr('animalname')+' ('+$(value).attr('buy')+' Euro)', funct: 'buildBuilding(\''+$(value).attr('id')+'\', '+$(value).attr('buy')+');'});
	});
	options.push({text: 'Futtertrog (2000 Euro)', funct: 'buildBuilding(\'feedingtrough\', 2000)'});
	options.push({text: 'Wassertrog (2000 Euro)', funct: 'buildBuilding(\'watertrough\', 2000)'});
	options.push({text: 'EiWollMilchSau (10000 Euro)', funct: 'buildBuilding(\'eiwollmilchsau\', 10000)'});
	options.push({text: 'Nichts', funct: 'closeDialog()'});	
	addDialog({speaker: 'speaker-me', text: 'Welches Tier soll ich kaufen?', options: options});
} 

function animalDialog()
{
	var cell = $('.me');
	var text = "";
	var options = [];
	if(eval(cell.attr('pregnant')) == 0)
	{
		if(eval(cell.attr('spendtime')) == 0)
		{
			text = "Soll ich die Produkte die mein Tier erzeugt hat nun nehmen?";
			options.push({text: 'Produkte nehmen', funct: 'farmAnimal()'});
		}
		else
		{
			if(eval(cell.attr('watered'))&&eval(cell.attr('feeded')))
			{
				text = "Mein Tier braucht noch "+cell.attr('spendtime')+" Tage bis es die Produkte erzeugt hat.";
			}
			else
			{
				if(!eval(cell.attr('feeded')))
				{
					options.push({text: 'F&uuml;ttern', funct: 'feedAnimal()'});	
				}
				if(!eval(cell.attr('watered')))
				{
					options.push({text: 'Drinken lassen', funct: 'waterAnimal()'});	
				}
				text = "Ich sollte mein Tier f&uuml;ttern und drinken lassen, damit es seine Produkte erzeugt.";
			}
		}
	}
	else
	{
		if(eval(cell.attr('watered'))&&eval(cell.attr('feeded')))
		{
			text = "Mein Tier braucht noch "+cell.attr('pregnant')+" Tage bis es erwachsen ist.";
		}
		else
		{
			if(!eval(cell.attr('feeded')))
			{
				options.push({text: 'F&uuml;ttern', funct: 'feedAnimal()'});	
			}
			if(!eval(cell.attr('watered')))
			{
				options.push({text: 'Drinken lassen', funct: 'waterAnimal()'});	
			}
			text = "Ich sollte mein Tier f&uuml;ttern und drinken lassen, damit es erwachsen wird.";
		}
	}
	options.push({text: 'Nichts', funct: 'closeDialog()'});	
	options.push({text: 'Tier vernichten', funct: 'destroyBuilding()'});	
	addDialog({speaker: 'speaker-me', text: text, options: options});
}

function eiWollMilchSauDialog()
{
	var cell = $('.me');
	var options = [];
	var index = cell.attr('arrayIndex');
	var things = [];
	$.each(buildedBuildings[index].attributes, function( index, attribute ) {
		if(attribute.key == 'things')
		{
			things = attribute.value;
		}
	});
	if(things.length>0)
	{
		options.push({text: 'Leeren', funct: 'emptyEiWollMilchSau()'});
	}
	options.push({text: 'Nichts', funct: 'closeDialog()'});	
	options.push({text: 'Zerst&oumlren', funct: 'destroyBuilding()'});	
	addDialog({speaker: 'speaker-me', text: "Die EiWollMilchSau sammelt alle Tierprodukte dieses Stalls f&uuml;r dich! Inventar: "+things.length+"  Produkte.", options: options});
}

function emptyEiWollMilchSau()
{
	var cell = $('.me');
	var index = cell.attr('arrayIndex');
	$.each(buildedBuildings[index].attributes, function( index, attribute ) {
		if(attribute.key == 'things')
		{
			$.each(attribute.value, function( index, thing ) {
				$('#'+thing).text(eval($('#'+thing).text())+1);
			});
			attribute.value = [];
		}
	});
	eiWollMilchSauDialog();
}

function waterAnimal()
{
	var cell = $('.me');
	var water = eval($('#water').text());
	if(water > 0)
	{
		var index = cell.attr('arrayIndex');
		$.each(buildedBuildings[index].attributes, function( index, attribute ) {
			if(attribute.key == 'watered')
			{
				attribute.value = true;
			}
		});
		cell.attr('watered', true);
		$('#water').text(water - 1);
		animalDialog();
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Daf&uuml;r habe ich leider nicht mehr genug Wasser, ich sollte einen Brunnen bauen oder aus einem bestehenden Wasser holen!', options: [{text: 'OK', funct: 'animalDialog()'}]});
	}
}

function feedAnimal()
{
	var cell = $('.me');
	var wheat = eval($('#wheat').text());
	if(wheat > 0)
	{
		var index = cell.attr('arrayIndex');
		$.each(buildedBuildings[index].attributes, function( index, attribute ) {
			if(attribute.key == 'feeded')
			{
				attribute.value = true;
			}
		});
		cell.attr('feeded', true);
		$('#wheat').text(wheat - 1);
		animalDialog();
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Daf&uuml;r habe ich leider nicht mehr genug Weizen, ich sollte neuen anbauen!', options: [{text: 'OK', funct: 'animalDialog()'}]});
	}
}

function farmAnimal()
{
	var cell = $('.me');
	var animalId = cell.attr('type');
	var newspendtime = $('#'+animalId).attr('spendtime');
	var index = cell.attr('arrayIndex');
	$.each(buildedBuildings[index].attributes, function( index, attribute ) {
		if(attribute.key == 'spendtime')
		{
			attribute.value = newspendtime;
		}
	});
	cell.attr('spendtime', newspendtime);
	$('#'+animalId).text(eval($('#'+animalId).text()) + 1);
	animalDialog();
}

function buildFarmDialog()
{
	var options = [
		{text: 'Weg (0 Euro)', funct: 'buildBuilding(\'way\', 0);'},
		{text: 'Feld (100 Euro)', funct: 'buildBuilding(\'field\', 100);'},
		{text: 'Brunnen (200 Euro)', funct: 'buildBuilding(\'fountain\', 200);'},
		{text: 'Sprinkler (1000 Euro)', funct: 'buildBuilding(\'sprinkler\', 1000);'},
		{text: '&Ouml;lpumpe (5000 Euro)', funct: 'buildBuilding(\'oilpump\', 5000);'},
		{text: 'Erntemaschine (10000 Euro)', funct: 'buildBuilding(\'harvester\', 10000);'},
		{text: 'Pflanzmaschine (10000 Euro)', funct: 'buildBuilding(\'planter\', 10000);'},
		{text: 'Pumpe (10000 Euro)', funct: 'buildBuilding(\'pump\', 10000);'},
		{text: 'M&uuml;lleimer (10 Euro)', funct: 'buildBuilding(\'trash\', 10);'},
		{text: 'Felder mit Sprinkler (6000 Euro)', funct: 'buildTemplate(\'fieldtemplate\', 6000, \'green\');'}
	];
	var cell = $('.me');
	var x = cell.attr('x');
	var y = cell.attr('y');
	var world = getWorld($('#world').attr("name"));
	if(x == 0 || y == 0 || x == world.x-1 || y == world.y-1)
	{
		options.push({text: 'Neuer Farmabschnitt (100000 Euro)', funct: 'addWorld(\'emptyFarm\', \'gate\', \'gate\', 100000);'});	
	}
	else
	{
		options.push({text: 'Neue Scheune (50000 Euro)', funct: 'addWorld(\'emptyStable\', \'stable\', \'door\', 50000);'});
		options.push({text: 'Neuer Maschinenraum (50000 Euro)', funct: 'addWorld(\'emptyMachineroom\', \'machineroom\', \'door\', 50000);'});
	}
	options.push({text: 'Nichts', funct: 'closeDialog()'});	
	addDialog({speaker: 'speaker-me', text: 'Was soll ich hier bauen?', options: options});
}

function harvesterDialog()
{
	addDialog({speaker: 'speaker-me', text: 'Soll ich alle fertigen Felder ernten?', options: [{text: 'Ja', funct: 'harvestAllFields()'}, {text: 'Nein', funct: 'closeDialog()'}, {text: 'Abrei&szlig;en', funct: 'destroyBuilding()'}]});
}

function planterDialog()
{
	var options = [];
	$.each($('.plants'), function( index, value ) {
		var plantId= $(value).attr('id');
		var name = $(value).attr('name');
		var step = $(value).attr('step');
		var option = {};
		option.text=name;
		option.funct="plantAllFields('"+plantId+"', '"+name+"', "+step+");";
		options.push(option);
	});
	options.push({text: 'Nichts', funct: 'closeDialog()'});
	options.push({text: 'Abrei&szlig;en', funct: 'destroyBuilding()'});
	addDialog({speaker: 'speaker-me', text: 'Was soll ich auf den freien Felder pflanzen?', options: options});
}

function buildTemplate(name, neededMoney, neededClass)
{
	var cell = $('.me');
	var x = eval(cell.attr('x'));
	var y = eval(cell.attr('y'));
	var template = undefined;
	$.each(templates, function( index, temp ) {
		if(temp.name == name)
		{
			template=temp;
		}
	});
	var checkClass = true;
	$.each(template.template, function( index, templateCell ) {
		if($('#'+(y+templateCell.y)+"-"+(x+templateCell.x)).length == 0 || !$('#'+(y+templateCell.y)+"-"+(x+templateCell.x)).hasClass(neededClass))
		{
			checkClass = false;
		}
	});
	if(checkClass)
	{
		if(getMoney()>=neededMoney)
		{
			addMoney(neededMoney*-1);
			cell.removeClass('me');
			$.each(template.template, function( index, templateCell ) {
				$('#'+(y+templateCell.y)+"-"+(x+templateCell.x)).addClass('me');
				buildBuilding(templateCell.type, 0);
				$('#'+(y+templateCell.y)+"-"+(x+templateCell.x)).removeClass('me');
			});
			cell.addClass('me');
		}
		else
		{
			addDialog({speaker: 'speaker-me', text: 'Vielleicht sollten wir erst mal wieder Geld verdienen, ich kann nat&uuml;rlich auch mal schauen ob jemand Geld auf dem Weg verloren hat!', options: [{text: 'OK', funct: 'closeDialog()'}]});
		}
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Hier ist kein Platz, ich sollte einen anderen Platz w&auml;hlen!', options: [{text: 'OK', funct: 'closeDialog()'}]});
	}
}

function buildBuilding(name, neededMoney)
{
	var buildedBuilding = {};
	if(getMoney()>=neededMoney)
	{
		addMoney(neededMoney*-1);
		var cell = $('.me');
		buildedBuilding.name = name;
		buildedBuilding.x = cell.attr('x');
		buildedBuilding.y = cell.attr('y');
		buildedBuilding.map = $('#world').attr("name");
		var index = buildedBuildings.push(buildedBuilding) - 1;
		cell.attr('arrayIndex', index);
		$.each(buildings, function( index, building ) {
			if(building.name == name)
			{
				cell.removeClass();
				cell.addClass(building.type);
				cell.addClass('me');
				if(building.funct)
				{
					cell.attr("funct", building.funct);
				}
				buildedBuilding.group = building.group;
				buildedBuilding.attributes = [];
				$.each(building.initialAttributes, function( index, attribute ) {
					cell.attr(attribute.key, attribute.value);
					buildedBuilding.attributes.push($.extend({}, attribute));
				});
			}
		});
		closeDialog();
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Vielleicht sollten wir erst mal wieder Geld verdienen, ich kann nat&uuml;rlich auch mal schauen ob jemand Geld auf dem Weg verloren hat!', options: [{text: 'OK', funct: 'closeDialog()'}]});
	}
	return buildedBuilding;
}

function destroyBuilding()
{
	var cell = $('.me');
	var map = getWorld($('#world').attr("name"));
	var index = cell.attr('arrayIndex');
	buildedBuildings.splice(index, 1);
	cell.removeClass();
	cell.addClass(map.type);
	cell.addClass('me');
	if(map.funct)
	{
		cell.attr("funct", map.funct);
	}
	$.each($('td'), function( i, value ) {
		if($(value).attr('arrayIndex'))
		{
			var arrayIndex = eval($(value).attr('arrayIndex'));
			if(arrayIndex >= index)
			{
				$(value).attr('arrayIndex', arrayIndex - 1);
			}
		}
	});
	closeDialog();
}

function fieldDialog()
{
	var cell = $('.me');
	if(cell.attr('fieldType'))
	{
		if(cell.attr('step') == 0)
		{
			addDialog({speaker: 'speaker-me', text: 'Die '+cell.attr('name')+' sind fertig, was soll ich tun?', options: [{text: 'Ernten', funct: 'harvestField();closeDialog();'}, {text: 'Nichts', funct: 'closeDialog()'}]});
		}
		else
		{
			if(!cell.hasClass('watered'))
			{
				addDialog({speaker: 'speaker-me', text: 'Die '+cell.attr('name')+' brauchen etwas Wasser um weiter zu wachsen, was soll ich tun?', options: [{text: 'Bew&auml;ssern', funct: 'waterField();'}, {text: 'Nichts', funct: 'closeDialog()'}, {text: 'Abrei&szligen', funct: 'destroyPlant();closeDialog();'}]});
			}
			else
			{
				addDialog({speaker: 'speaker-me', text: 'Die '+cell.attr('name')+' sind soweit versorgt und brauchen noch '+cell.attr('step')+' Tage, was soll ich tun?', options: [{text: 'Nichts', funct: 'closeDialog()'}, {text: 'Abrei&szligen', funct: 'destroyPlant();closeDialog();'}]});
			}
		}
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Ein sch&ouml;nes leeres Feld, was soll ich tun?', options: [{text: 'Anplanzen', funct: 'plantFieldDialog();'}, {text: 'Nichts', funct: 'closeDialog()'}, {text: 'Abrei&szlig;en', funct: 'destroyBuilding()'}]});
	}
}

function waterField()
{
	var water = eval($('#water').text());
	if(water > 0)
	{
		$('#water').text(water - 1);
		var cell = $('.me');
		var index = eval(cell.attr('fieldArrayIndex'));
		plantedFields[index].watered = true;
		cell.addClass('watered');
		closeDialog();
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Daf&uuml;r habe ich leider nicht mehr genug Wasser, ich sollte einen Brunnen bauen oder aus einem bestehenden Wasser holen!', options: [{text: 'OK', funct: 'fieldDialog()'}]});
	}
}

function harvestAllFields()
{
	$('.loader').show();
	setTimeout(function() {
		var startCell = $(".me");
		$.each($('.field[step="0"]'), function( i, value ) {
			var me = $(".me");
			$(value).addClass('me');
			me.removeClass('me');
			harvestField();
		});
		$(".me").removeClass('me');
		startCell.addClass('me');
		addDialog({speaker: 'speaker-me', text: 'Alles erledigt!', options: [{text: 'OK', funct: 'closeDialog()'}]});
		$('.loader').hide();
	}, 1);
}

function harvestField()
{
	var cell = $('.me');
	var type = cell.attr('fieldType');
	var plants = eval($('#'+type).text());
	var seeds = eval($('#'+type+'seed').text());
	$('#'+type).text(plants + 5);
	$('#'+type+'seed').text(seeds + 2);
	destroyPlant();
}

function destroyPlant()
{
	var cell = $('.me');
	var type = cell.attr('fieldType');
	var index = eval(cell.attr('fieldArrayIndex'));
	plantedFields.splice(index, 1);
	cell.removeClass(type);
	cell.removeClass('watered');
	cell.removeAttr('step');
	cell.removeAttr('fieldType');
	cell.removeAttr('fieldArrayIndex');
	cell.removeAttr('name');
	$.each($('.field'), function( i, value ) {
		if($(value).attr('fieldArrayIndex'))
		{
			var fieldIndex = eval($(value).attr('fieldArrayIndex'));
			if(fieldIndex >= index)
			{
				$(value).attr('fieldArrayIndex', fieldIndex - 1);
			}
		}
	});
}

function plantFieldDialog()
{
	var options = [];
	$.each($('.plants'), function( index, value ) {
		var plantId= $(value).attr('id');
		var name = $(value).attr('name');
		var step = $(value).attr('step');
		var option = {};
		option.text=name;
		option.funct="plantField('"+plantId+"', '"+name+"', "+step+");";
		options.push(option);
	});
	options.push({text: 'Nichts', funct: 'fieldDialog()'});
	addDialog({speaker: 'speaker-me', text: 'Was soll ich pflanzen?', options: options});
}

function plantAllFields(type, name, step)
{
	$('.loader').show();
	setTimeout(function() {
		var startCell = $(".me");
		$.each($('.field'), function( i, value ) {
			var seeds = eval($('#'+type+'seed').text());
			if(seeds > 0 && !$(value).attr('fieldType'))
			{
				var me = $(".me");
				$(value).addClass('me');
				me.removeClass('me');
				plantField(type, name, step);
			}
		});
		$(".me").removeClass('me');
		startCell.addClass('me');
		addDialog({speaker: 'speaker-me', text: 'Alles erledigt!', options: [{text: 'OK', funct: 'closeDialog()'}]});
		$('.loader').hide();
	}, 1);
}

function plantField(type, name, step)
{
	var seeds = eval($('#'+type+'seed').text());
	if(seeds > 0)
	{
		$('#'+type+'seed').text(seeds - 1);
		var cell = $('.me');
		var plantedField = {};
		plantedField.type = type;
		plantedField.x = cell.attr('x');
		plantedField.y = cell.attr('y');
		plantedField.map = $('#world').attr("name");
		plantedField.watered = false;
		plantedField.step = step;
		plantedField.name = name;
		var index = plantedFields.push(plantedField)-1;
		cell.addClass(type);
		cell.attr('step', plantedField.step);
		cell.attr('fieldType', plantedField.type);
		cell.attr('fieldArrayIndex', index);
		cell.attr('name', plantedField.name);
		closeDialog();
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Daf&uuml;r habe ich leider nicht mehr genug Samen!', options: [{text: 'OK', funct: 'plantFieldDialog()'}]});
	}
}

function sprinklerDialog()
{
	addDialog({speaker: 'speaker-me', text: 'Das ist ein Sprinkler der 3x3 Felder nachts versorgt', options: [{text: 'jetzt anschalten', funct: 'useSprinklerNow()'}, {text: 'Nichts', funct: 'closeDialog()'}, {text: 'Abrei&szlig;en', funct: 'destroyBuilding()'}]});
}

function useSprinklerNow()
{
	var cell = $('.me');
	var x = eval(cell.attr('x'));
	var y = eval(cell.attr('y'));
	var map = $('#world').attr("name");
	useSprinkler(x, y, map);
	closeDialog();
}

function oilpumpDialog()
{
	var cell = $('.me');
	if(eval(cell.attr('oil'))>0)
	{
		addDialog({speaker: 'speaker-me', text: 'Die Pumpe scheint &Ouml;l zu beinhalten, ich sollte es sch&ouml;pfen.', options: [{text: 'Sch&oumlpfen', funct: 'getOil();closeDialog();'}, {text: 'Nichts', funct: 'closeDialog()'},{text: 'Abrei&szlig;en', funct: 'destroyBuilding()'}]});
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Der Pumpe ist leer, ich sollte bis morgen warten.', options: [{text: 'Nichts', funct: 'closeDialog()'}, {text: 'Abrei&szlig;en', funct: 'destroyBuilding()'}]});
	}
}

function fountainDialog()
{
	var cell = $('.me');
	if(eval(cell.attr('water'))>0)
	{
		addDialog({speaker: 'speaker-me', text: 'Der Brunnen scheint Wasser zu beinhalten, ich sollte mir Wasser sch&ouml;pfen.', options: [{text: 'Wasser sch&oumlpfen', funct: 'getWater();closeDialog();'}, {text: 'Nichts', funct: 'closeDialog()'},{text: 'Abrei&szlig;en', funct: 'destroyBuilding()'}]});
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Der Brunnen ist leer, ich sollte bis morgen warten.', options: [{text: 'Nichts', funct: 'closeDialog()'}, {text: 'Abrei&szlig;en', funct: 'destroyBuilding()'}]});
	}
}

function pumpDialog()
{
	var cell = $('.me');
	if(eval(cell.attr('water'))>0||eval(cell.attr('oil'))>0)
	{
		addDialog({speaker: 'speaker-me', text: 'Die Pumpe hat Wasser von meinen Brunnen und &Ouml;l von meinen &Ouml;lpumpen gesammelt, ich sollte es sch&ouml;pfen', options: [{text: 'Sch&oumlpfen', funct: 'pump();closeDialog();'}, {text: 'Nichts', funct: 'closeDialog()'},{text: 'Abrei&szlig;en', funct: 'destroyBuilding()'}]});
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Die Pumpe hat kein Wasser aus meinen Brunnen oder &Ouml;l von &Ouml;lpumpe gesammelt, ich sollte bis morgen warten.', options: [{text: 'Nichts', funct: 'closeDialog()'}, {text: 'Abrei&szlig;en', funct: 'destroyBuilding()'}]});
	}
}

function getOil()
{
	var cell = $('.me');
	var oil = eval($('#oil').text());
	var pumpOil = eval(cell.attr('oil'));
	$('#oil').text(oil + pumpOil);
	cell.attr('oil', 0);
	var index = cell.attr('arrayIndex');
	$.each(buildedBuildings[index].attributes, function( index, attribute ) {
		if(attribute.key == 'oil')
		{
			attribute.value = 0;
		}
	});
}

function getWater()
{
	var cell = $('.me');
	var water = eval($('#water').text());
	var fountainWater = eval(cell.attr('water'));
	$('#water').text(water + fountainWater);
	cell.attr('water', 0);
	var index = cell.attr('arrayIndex');
	$.each(buildedBuildings[index].attributes, function( index, attribute ) {
		if(attribute.key == 'water')
		{
			attribute.value = 0;
		}
	});
}

function pump()
{
	getWater();
	getOil();
}

function wayDialog()
{
	addDialog({speaker: 'speaker-me', text: 'Das ist ein Weg hier kann man nichts weiter machen, oder sollte ich ihn s&auml;bern?', options: [{text: 'S&auml;ubern', funct: 'cleanWay();'}, {text: 'Nichts', funct: 'closeDialog()'}, {text: 'Abrei&szlig;en', funct: 'destroyBuilding()'}]});
}

function getMoney()
{
	return eval($('#money').text());
}

function addMoney(money)
{
	$('#money').text(getMoney()+money);
}

function cleanWay()
{
	if(Math.random() < 0.1)
	{
		addMoney(1);
		addDialog({speaker: 'speaker-me', text: 'Der Weg ist wieder sauber, au&zslig;erdem hab ich einen Euro gefunden!', options: [{text: 'OK', funct: 'closeDialog()'}]});
	}
	else
	{
		addDialog({speaker: 'speaker-me', text: 'Der Weg ist wieder sauber, Ordnung muss ja auch sein!', options: [{text: 'OK', funct: 'closeDialog()'}]});
	}
}

function trashDialog()
{
	var options = [];
	$.each($('.plants'), function( index, value ) {
		var plantId= $(value).attr('id');
		var seeds = eval($('#'+plantId+'seed').text());
		if(seeds >0)
		{
			var name = $(value).attr('name');
			var option = {};
			option.text=name;
			option.funct="trash('"+plantId+"', '"+name+"');";
			options.push(option);
		}
	});
	options.push({text: 'Nichts', funct: 'closeDialog()'});
	addDialog({speaker: 'speaker-me', text: 'Welche Samen soll ich entsorgen?', options: options});
}

function trash(type, name)
{
	var seeds = eval($('#'+type+'seed').text());
	$('#'+type+'seed').text("0");
	addDialog({speaker: 'speaker-me', text: 'Ich habe'+seeds+' '+name+' entsorgt!', options: [{text: 'OK', funct: 'trashDialog()'}]});
}

$( document ).ready(function() {
	startGame();
	$(document).bind('keydown', keydown);
});