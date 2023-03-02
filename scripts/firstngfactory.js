angular
	.module('FirstNgApp')
	.factory('firstNgFactory', function() {

		var firstNgData = [
				{
				  "type": "TRASOLA",
				  "oil": "brown",
				  "price": 23,
				  "lye": "NaOH",
				  "image": "img9",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "EXOZENT",
				  "oil": "blue",
				  "price": 21,
				  "lye": "NaOH",
				  "image": "img5",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "COMVEYER",
				  "oil": "green",
				  "price": 28,
				  "lye": "NaOH",
				  "image": "img1",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "FIREWAX",
				  "oil": "brown",
				  "price": 24,
				  "lye": "NaOH",
				  "image": "img4",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "TERRAGO",
				  "oil": "blue",
				  "price": 39,
				  "lye": "NaOH",
				  "image": "img8",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "IDEALIS",
				  "oil": "brown",
				  "price": 38,
				  "lye": "NaOH",
				  "image": "img9",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "PHUEL",
				  "oil": "brown",
				  "price": 40,
				  "lye": "NaOH",
				  "image": "img7",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "CENTURIA",
				  "oil": "green",
				  "price": 21,
				  "lye": "NaOH",
				  "image": "img3",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "MOREGANIC",
				  "oil": "green",
				  "price": 22,
				  "lye": "NaOH",
				  "image": "img5",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "DANCERITY",
				  "oil": "brown",
				  "price": 40,
				  "lye": "NaOH",
				  "image": "img3",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "NETERIA",
				  "oil": "green",
				  "price": 21,
				  "lye": "NaOH",
				  "image": "img2",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "SURETECH",
				  "oil": "green",
				  "price": 21,
				  "lye": "NaOH",
				  "image": "img7",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "PHOLIO",
				  "oil": "blue",
				  "price": 36,
				  "lye": "NaOH",
				  "image": "img6",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "MARKETOID",
				  "oil": "green",
				  "price": 20,
				  "lye": "NaOH",
				  "image": "img1",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "PETIGEMS",
				  "oil": "green",
				  "price": 39,
				  "lye": "NaOH",
				  "image": "img8",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "MEDESIGN",
				  "oil": "brown",
				  "price": 40,
				  "lye": "NaOH",
				  "image": "img1",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "TELEQUIET",
				  "oil": "brown",
				  "price": 24,
				  "lye": "NaOH",
				  "image": "img5",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "LUXURIA",
				  "oil": "green",
				  "price": 38,
				  "lye": "NaOH",
				  "image": "img2",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "ISODRIVE",
				  "oil": "blue",
				  "price": 35,
				  "lye": "NaOH",
				  "image": "img4",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				},
				{
				  "type": "GENMOM",
				  "oil": "blue",
				  "price": 33,
				  "lye": "NaOH",
				  "image": "img6",
				  "instruction": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
				}
			  
	  	];

	  	function getFirstNg() {
	  		return firstNgData;
	  	}

	  	return {
	  		getFirstNg: getFirstNg
	  	}

	});