/**
<!--Code By Abiola I.B {Emeritusmighty@gmail.com} ( https://wa.me/+2348105799668 )-->
<!--Code By Abiola I.B {Emeritusmighty@gmail.com} ( https://wa.me/+2348105799668 )-->
**/

LInit(30, "mylegend", 400, 600, main);

var dataList = {};

function main () {
	LGlobal.aspectRatio = PORTRAIT;
	
	LGlobal.setDebug(false);

	var b = document.body;
	b.style.margin = "0px";
	b.style.padding = "0px";
	b.style.backgroundColor = "black";

	if (LGlobal.mobile) {
		LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
	}
	LGlobal.screen(LGlobal.FULL_SCREEN);

	loadGame();
}

function loadGame () {
	var loadData = [
		[
			{path : "ytPreloader.js"},

			{name : "preloader_bar", path : "preloader_bar.jpg"},
			{name : "preloader_bar_background", path : "preloader_bar_background.jpg"},
			{name : "preloader_background", path : "preloader_background.jpg"}
		],
		[
			{path : "ytButton.js"},
			{path : "ytMenuLayer.js"},
			{path : "ytOptionLayer.js"},
			{path : "ytGameLayer.js"},
			{path : "ytBackground.js"},
			{path : "ytStreetView.js"},
			{path : "ytCar.js"},
			{path : "ytCarLayer.js"},
			{path : "ytExplosion.js"},
			{path : "ytPoint.js"},
			{path : "ytResultBox.js"},
			{path : "ytHelpLayer.js"},
			{path : "ytAboutLayer.js"},

			{name : "button_sheet", path : "button_sheet.jpg"},
			{name : "menu_car_icons", path : "menu_car_icons.png"},
			{name : "explosion", path : "explosion.png"},
			{name : "cars_atlas", path : "cars_atlas.png"},
			{name : "button_pause_sheet", path : "button_pause_sheet.png"},
			{name : "default_menu_background", path : "default_menu_background.jpg"},
			{name : "misc_atlas", path : "misc_atlas.png"},
			{name : "numbers", path : "numbers.png"},
			{name : "street_canyon", path : "street_canyon.jpg"},
			{name : "street_city", path : "street_city.jpg"},
			{name : "street_desert", path : "street_desert.jpg"},
			{name : "street_grass", path : "street_grass.jpg"},
			{name : "street_snow", path : "street_snow.jpg"},
			{name : "street_water", path : "street_water.jpg"},
			{name : "help", path : "help.jpg"}
		]
	];

	LLoadManage.load(
		loadData[0],
		null,
		function (r) {
			updateDataList(r);

			var preloader = new ytPreloader();
			addChild(preloader);

			LLoadManage.load(
				loadData[1],
				function (p) {
					preloader.setProgress(p);
				},
				function (r) {
					updateDataList(r);

					preloader.remove();

					addMenuInterface();
				}
			);
		}
	);
}

function updateDataList (r) {
	for (var k in r) {
		var o = r[k];

		if (o instanceof Image) {
			dataList[k] = new LBitmapData(o);
		} else {
			dataList[k] = o;
		}
	}
}

function addMenuInterface () {
	var menuInterface = new ytMenuLayer();
	addChild(menuInterface);
}

function addOptionInterface() {
	var optionInterface = new ytOptionLayer();
	addChild(optionInterface);
}

function addGameInterface (car, place) {
	var gameInterface = new ytGameLayer(car, place);
	addChild(gameInterface);
}

function addHelpInterface() {
	var helpInterface = new ytHelpLayer();
	addChild(helpInterface);
}

function addAboutInterface() {
	var aboutInterface = new ytAboutLayer();
	addChild(aboutInterface);
}
/**
<!--Code By Abiola I.B {Emeritusmighty@gmail.com} ( https://wa.me/+2348105799668 )-->
<!--Code By Abiola I.B {Emeritusmighty@gmail.com} ( https://wa.me/+2348105799668 )-->
**/