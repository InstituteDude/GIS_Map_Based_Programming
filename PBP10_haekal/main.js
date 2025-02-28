
//<!-- Peta Basemap -->

var mbUrlOSM_Mapnik = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
var mbAttrOSM_Mapnik =  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

var mbUrlcyle_OSM = 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
var mbAttrcyle_OSM =  '<a https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

var mburlEsri_WorldImagery ='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
var mbAttEsri_WorldImagery ='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
var mbUrlOPNVKarte = 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png',
	mbAttrOPNVKarte = 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
var mbUrlCartoDBpositron_DE = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    mbAttrCartoDBpositron_DE='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
var mbUrlOSM_DE = 'https://tile.openstreetmap.de/{z}/{x}/{y}.png',
	mbAttrOSM_DE = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

var Thunderforest_OpenCycleMap = 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png', 
		thunder_att= '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
	

//<!-- Settingan Ukuran Peta Basemap -->
var OSM_MAPNIK= L.tileLayer(mbUrlOSM_Mapnik, {maxZoom:19, attribution: mbAttrOSM_Mapnik});
var Esri_WorldImagery= L.tileLayer(mburlEsri_WorldImagery, {maxZoom:18, attribution:mbAttEsri_WorldImagery});
var CyclOSM=L.tileLayer(mbUrlcyle_OSM, {maxZoom:22, attribution:mbAttrcyle_OSM});
var OPNVKarte = L.tileLayer(mbUrlOPNVKarte, {maxZoom: 18, attribution: mbAttrOPNVKarte});
var CartoDBpositron_DE= L.tileLayer(mbUrlCartoDBpositron_DE, {maxZoom: 22, attribution: mbAttrCartoDBpositron_DE});
var OSM_DE = L.tileLayer(mbUrlOSM_DE, {maxZoom: 22, attribution: mbAttrOSM_DE});
var Thunderforest_DE = L.tileLayer(Thunderforest_OpenCycleMap, {maxZoom: 22, attribution: thunder_att});
//Layer yang akan di load ke peta WEBGIS
var southWest = L.latLng(3.242398840115905, 106.29689074963848),
    northEast = L.latLng(-1.6745146744423676, 113.43956178872507),
    bounds = L.latLngBounds(southWest, northEast);



// Titik tengah halaman web adalah Kabupaten Bengkayang
var map = L.map('map', {
	zoomsliderControl: true,
    zoomControl : false,
	maxBounds: bounds,
	    center: [0.8331906082236977, 109.46592736147343],
	    zoom: 10,
	    maxZoom: 22,
	    minZoom: 10,
	    layers: [OSM_MAPNIK]
});




//<!-- Credits -->
      var credctrl = L.controlCredits({
        position: 'bottomright',
        image: "images/gis.png",
        link: "https://stmik-amikbandung.ac.id/",
        text: "Interactive mapping<br/>by Muhamad Haekal Rizky, Jln Jakarta No. 28"
    }).addTo(map);


var custommarker = new L.LayerGroup(); 

//<--! Popup + marker bukit jamur bengkayang-->
var Icon1 = L.icon({
	iconUrl: 'svg/park-picnic-svgrepo-com.svg',
        iconSize: [20, 20],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
});
var popupbukitjamur = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popupbukitjamur.setLatLng([0.7851222421837825, 109.47595549935782]);
popupbukitjamur.setContent('<p><img src="allimages/bukitjamur.jpeg" width="150" height="150" style="vertical-align:middle"/> <b>Bukit Jamur Bengkayang</b> Disini!</p>');
var marker = L.marker([0.7851222421837825, 109.47595549935782], {icon:Icon1}).addTo(custommarker)
.bindPopup(popupbukitjamur).closePopup();

//Lokasi Wisata Air Terjun Riam Budi
var Icon2 = L.icon({
	iconUrl: 'svg/holiday-swimming-pool-tourism-svgrepo-com.svg',
        iconSize: [20, 20],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
});
var popupriambudi = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popupriambudi.setLatLng([0.8609887357190245, 109.44368316577223]);
popupriambudi.setContent('<p><img src="allimages/riambudi.jpeg" width="150" height="150" style="vertical-align:middle"/> <b>Wisata Air Terjun Riam Budi</b> Disini!</p>');
var marker2 = L.marker([0.8609887357190245, 109.44368316577223], {icon:Icon2}).addTo(custommarker)
.bindPopup(popupriambudi).closePopup();



var Icon3 = L.icon({
	iconUrl: 'svg/mosque-svgrepo-com.svg',
        iconSize: [20, 20],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
});
var popupmasjidilham= new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popupmasjidilham.setLatLng([0.8286118493363304, 109.21212453177353]);
popupmasjidilham.setContent('<p><img src="allimages/masjidilham.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Masjid Ilham Separong</b> Disini!</p>');
var marker2 = L.marker([0.8286118493363304, 109.21212453177353], {icon:Icon3}).addTo(custommarker)
.bindPopup(popupmasjidilham).closePopup();


var Icon = L.icon({
	iconUrl: 'svg/travel-svgrepo-com.svg',
        iconSize: [25, 25],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
});
var popupairterjunmerasap = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popupairterjunmerasap.setLatLng([1.1473838764701993, 109.7482950755518]);
popupairterjunmerasap.setContent('<p><img src="allimages/riammerasap.jpeg" width="150" height="150" style="vertical-align:middle"/> <b>Air Terjun Riam Merasap</b> Disini!</p>');
var marker3 = L.marker([1.1473838764701993, 109.7482950755518], {icon:Icon}).addTo(custommarker)
.bindPopup(popupairterjunmerasap).closePopup();


//<!-- Measure plugin button -->

//<!-- Mouse di klik Keluar koordinat -->
var popup = L.popup(); 
    function onMapClick(e) {
	popup
	.setLatLng(e.latlng)
	.setContent("Lokasi Klik -> " + e.latlng.toString())
	.openOn(map);
}
map.on ('click', onMapClick);





//<!-- Circle sebagai Layer Group -->	
var circle = L.layerGroup();
//<!-- Lokasi kecamatan bengkayang dengan lingkaran -->
var popkecamatan = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popkecamatan.setContent('<p><img src="allimages/camatbengkayang.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Kantor Kecamatan Bengkayang</b> Disini!</p>');
var circle1 = L.circle([0.8318646009953408,109.48562057427705], {
	color: '#800000',
	fillColor: '##8403fc',
	fillOpacity: 0.3,
	weight: 2,
	stroke: true,
	radius: 30
}).addTo(circle)
.bindPopup(popkecamatan).closePopup();
var popkelurahan = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popkelurahan.setContent('<p><img src="allimages/kelurahansebalo.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Kantor Kelurahan Sebalo Bengkayang</b> Disini!</p>');
//		 <!-- Kantor Kelurahan Sebalo dengan lingkaran -->
var circle2 = L.circle([0.8336423500722617,109.48925536488758], {
	color: '#800000',
	fillColor: '#00FFFF',
	fillOpacity: 0.3,
	weight: 2,
	stroke: true,
	radius: 10
}).addTo(circle)
.bindPopup(popkelurahan).closePopup();
var popkecamatanTeriak = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popkecamatanTeriak.setContent('<p><img src="allimages/kantorteriak.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Kantor Kecamatan Teriak</b> Disini!</p>');
//<!-- Lokasi Kantor Kecamatan Teriak dengan lingkaran -->
var circle3 = L.circle([0.835265, 109.490299], {
	color: '#800000',
	fillColor: '#00FFFF',
	fillOpacity: 0.3,
	weight: 2,
	stroke: true,
	radius: 25
}).addTo(circle)
.bindPopup(popkecamatanTeriak).closePopup();
var popkntrdesa = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popkntrdesa.setContent('<p><img src="allimages/imageskantor.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Kantor Desa Cipta Karya</b> Disini!</p>');
//<!-- Lokasi Gunung bawang bengkayang dengan lingkaran -->
var circle4 = L.circle([0.829823, 109.438023], {
	color: '#800000',
	fillColor: '#00FFFF',
	fillOpacity: 0.3,
	weight: 2,
	stroke: true,
	radius: 15
}).addTo(circle)
.bindPopup(popkntrdesa).closePopup();



//<!-- Rectangle sebagai Layer Group -->	
var rectanglekotak = L.layerGroup();
//<!-- Lala Golden bengkayang dengan Kotak -->
var poplalagolden = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
poplalagolden.setContent('<p><img src="allimages/sukamaju.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Kantor Desa Suka maju</b> Disini!</p>');
var kotak1 = [[0.8131249053142824,109.38483971090545], [0.812888909016479,109.38496973423753]];
L.rectangle(kotak1, {
	color: '#FD1C03',
	fillColor: '#ffb347',
	fillOpacity: 0.2,
	weight: 1
}).addTo(rectanglekotak)
.bindPopup(poplalagolden).closePopup();

//<!-- SDN 09 Rangkang dengan Kotak -->  
var popsdrangkang = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popsdrangkang.setContent('<p><img src="allimages/sdrangkang.jpg" width="150" height="150" style="vertical-align:middle"/> <b>SDN 09 Rangkang Bengkayang</b> Disini!</p>');
var kotak2 = [[0.8489615515320708, 109.50018698600468], [0.8490669361732301,109.50043905826266]];
L.rectangle(kotak2, {
	color: '#FD1C03',
	fillColor: '#ffb347',
	fillOpacity: 0.2,
	weight: 0.5
}).addTo(rectanglekotak)
.bindPopup(popsdrangkang).closePopup();

var popharryhadisoemantri = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popharryhadisoemantri.setContent('<p><img src="allimages/hadisomantri.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Pangkalan udara harry hadisoemantri</b> Disini!</p>');
//<!-- Pangkalan Udara Harry Hadisoemantri dengan Kotak -->
var kotak3 = [[
	1.0879348275035454,
	109.68938264128059
], [
	1.0777710079838272,
	109.6977299684807]];
	L.rectangle(kotak3, {
		color: '#FD1C03',
		fillColor: '#F433FF',
		fillOpacity: 0.2,
		weight: 2
	}).addTo(rectanglekotak)
	.bindPopup(popharryhadisoemantri).closePopup();
	
	var popsdketiat = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
	popsdketiat.setContent('<p><img src="allimages/sdketiat.jpg" width="150" height="150" style="vertical-align:middle"/> <b>SDN 01 Ketiat</b> Disini!</p>');
	//<!-- Gunung upu dengan Kotak -->
	var kotak4 = [[
		0.8296690508454105,
		109.43501566531114
	], [
		0.8294192507595426,
		109.43519962829197]];
		L.rectangle(kotak4, {
			color: '#FD1C03',
			fillColor: '#F433FF',
			fillOpacity: 0.2,
			weight: 2
		}).addTo(rectanglekotak)
		.bindPopup(popsdketiat).closePopup();
		
		var popbumiemas=new L.Popup({maxwidth :135, closeOnClick:false, autoClose:true});
		popbumiemas.setContent('<p><img src="allimages/bumiemas.jpeg" width="100" height="105" style="vertical-align:middle"/> <b>Kantor kelurahan Bumi emas</b></p>');
		
		var polygon = L.layerGroup();
		
		//<!-- Lokasi kantor kelurahan bumi emas dengan polygon-->
		var polygon1 = L.polygon([
			[
				0.8196506338141489,
				109.48159205452515
			],
			[
				0.8196320026140143,
				109.48157963245302
			],
			[
				0.8196056084124592,
				109.4815609993471
			],
			[
				0.8195869772121114,
				109.48158894900752
			],
			[
				0.8195279784097806,
				109.48155013003378
			],
			[
				0.8194736374058635,
				109.48162155694439
			],
			[
				0.819585424612157,
				109.4816883255786
			],
			[
				0.8196506338141489,
		109.48159205452515
	  ]
	], {
		color: "#306754",
		fillColor: '#FF5F1F',
		fillOpacity: 0.3,
		weight: 2
	}).addTo(polygon)
	.bindPopup(popbumiemas).closePopup(); 
	
	var popsd=new L.Popup({maxWidth :135, closeOnClick:false, autoClose:true});
	popsd.setContent('<p><img src="allimages/sdn04bengkayang.jpeg" width="135" height="105" style="vertical-align:middle"/> <b>SDN 04 Bengkayang</b></p>');
	var polygon2 = L.polygon([[
		0.8168901595586107,
		109.48342979760878
	],
	[
		0.8168050527547166,
		109.48354179162612
	],
	[
		0.8167468217831271,
		109.48368066420835
	],
	[
		0.8164287910762482,
		109.48351939282406
	],
	[
		0.8163795187117131,
		109.48360450827664
	],
	[
		0.8168005734495125,
		109.48385089511356
	],
	[
		0.8169528698332016,
		109.48347011545485
	],
	[
		0.8168901595586107,
		109.48342979760878
	] 
      ], {
	color: "#306754",
	fillColor: '#FF5F1F',
	fillOpacity: 0.3,
	weight: 2
        }).addTo(polygon)
        .bindPopup(popsd).closePopup(); 

//<!-- Lokasi PopSD03 dengan lingkaran polygon-->

var popsd03 = new L.Popup({maxWidth : 150, closeOnClick: false, autoClose: true});
popsd03.setContent('<p><img src="allimages/sd03.jpeg" width="150" height="130" style="vertical-align:middle"/> <b>SDN 03 Bengkayang</b> Disini!</p>');

	var polygon3 = L.polygon([
		[
			[
				0.8139434222510147,
				109.47553000059253
            ],
            [
				0.8137197675574441,
				109.47546538271843
            ],
            [
				0.8135309035845921,
				109.47538585302686
            ],
            [
				0.8134215612807765,
				109.47546538271843
            ],
            [
				0.8132376673999886,
				109.47576858966596
            ],
            [
				0.8138241397491441,
				109.475947531472
            ],
            [
				0.8139434222510147,
				109.47553000059253
            ]
		]
	], {
		color: "#306754",
		fillColor: '#FF5F1F',
		fillOpacity: 0.3,
		weight: 2
	}).addTo(polygon)
	.bindPopup(popsd03).closePopup()
	
	

		//<!-- Lokasi Stadion Siliwangi dengan lingkaran -->

		var popsd02 = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
		popsd02.setContent('<p><img src="allimages/sdn02bengkayang.jpeg" width="150" height="150" style="vertical-align:middle"/> <b>SDN 02 Bengkayang</b> Disini!</p>');
		 var polygon4 = L.polygon([
	
			[
				[
					0.8288858478719732,
				  109.48460634598075
				],
				[
					0.8285952814643309,
				  109.48457885709342
				],
				[
					0.8281044597828924,
				  109.48447675551341
				],
				[
					0.8279788094221061,
				  109.48484589199535
				],
				[
					0.828771977255343,
				  109.48505009515543
				],
				[
					0.8288858478719732,
				  109.48460634598075
				]
			  ]
			], {
			color: "#306754",
			fillColor: '#FF5F1F',
			fillOpacity: 0.3,
			weight: 2
			}).addTo(polygon)
			.bindPopup(popsd02).closePopup();

			//<!-- World Mini Map PLugin -->>
// create WorldMiniMap with some options and add to map
var worldMiniMap = L.control.worldMiniMap({position: 'bottomright', lineColor: 'red', circleColor: 'red', style: {opacity: 0.9, borderRadius: '0px', backgroundColor: 'lightblue'}}).addTo(map);
var tpoUrl='https://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web/default/WEBMERCATOR/{z}/{y}/{x}.png';
var tpoAttrib='<a href="https://www.bkg.bund.de/" target="_blank">Bundesamt für Kartographie und Geodäsie</a>';
var tpo = new L.TileLayer(tpoUrl, {minZoom: 0, maxZoom: 19, attribution: tpoAttrib});

			//<!-- Minimap -->
			var ThunderForestOpenCycleMap2 = new L.TileLayer(
				'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=1d5650cfc20f4b96961bb1bd8af3283b',
				{
					minZoom: 0, 
					maxZoom: 13, 
					attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				}
			); 
var miniMap = new L.Control.MiniMap(ThunderForestOpenCycleMap2, 
        { 
	toggleDisplay: true,
	minimized: true
    }).addTo(map);


//<!-- Zoom Level Plugin -->>
new L.zoompanel({
	labels : [
		{
			zoom: 10,
			label: "X10"
		},
		{
			zoom: 12,
			label: "X12"
		},
		{
			zoom: 14,
			label: "X14"
        },
        {
	zoom: 16,
            label: "X16"
        },
        {
	zoom: 18,
	label: "X18"
        },
        {
	zoom: 20,
	label: "X20"
        }
    ]
    }).addTo(map);

var polyline=L.layerGroup();
//<!-- Lokasi jl Raya sanggau Ledo -->
    var polyline1 = L.polyline([
	[
		0.8290356785467026,
		109.48456093941309
	  ],
	  [
		  0.8286893354092228,
		109.48452822476247
	  ],
	  [
		  0.8281607087182863,
		109.4844145347364
	  ]
    ],{
	color : "#800080",
	weight : 3
    }).addTo(polyline)
    .bindPopup("<b>Jln. Raya Sanggau Ledo</b><br/>GBLA")

//<!-- Lokasi Jl Bhakti  -->
    var polyline2 = L.polyline([
	[
		0.819908721021605,
		109.48133996871672
	  ],
	  [
		  0.819564197320986,
		109.48182850626904
	  ]
	],{
		color : "#800080",
		weight : 3
	}).addTo(polyline)
	.bindPopup("<b>Jln. Bhakti</b><br/>Bengkayang")

	//<!-- Lokasi jl Malo Jelayan dengan polyline -->
	var polyline3 = L.polyline([
	
		[
            0.8170228807060198,
            109.48345310256377
          ],
          [
			  0.8168232152209498,
            109.48387695617362
          ],
          [
			  0.8167540011463217,
            109.48388989340737
          ],
          [
			  0.8165565071030301,
            109.48378316690088
          ],
          [
			  0.8159562574241193,
            109.48327678242242
          ],

	], {
	color: "#306754",
	weight: 3
	}).addTo(polyline)
	.bindPopup("<b>Jln. Malo Jelayan</b><br/>Bengkayang")

	//<!-- Jln. Masjid jami dengan polyline -->
	var polyline4 = L.polyline([
		
		[
            0.8127772650179281,
            109.47474778074894
          ],
          [
			  0.8128983307804134,
            109.47486535650239
          ],
          [
			  0.8134787433349686,
            109.47532248767732
          ],
          [
			  0.8137156302987592,
            109.47543515606208
          ],
          [
			  0.8139731017868002,
            109.47549529180816
          ],
		
	], {
		color: "#306754",
		weight: 3
	}).addTo(polyline)
	.bindPopup("<b>Jln. Masjid jami</b><br/>Bengkayang")
	
	//<!-- Posisi di WEBGIS untuk pencaharian -->
	//<!-- Posisi di WEBGIS untuk pencaharian -->
	var data = [
		{"loc":[0.8318646009953408,109.48562057427705], "title":"Kantor Kecamatan Bengkayang"},
		{"loc":[0.8336932954159717,109.4893265216038], "title":"Kantor Kelurahan Sebalo"},
		{"loc":[0.835309491540643,109.49032073369047], "title":"Kantor Kecamatan Teriak"},
		{"loc":[0.829823, 109.438023], "title":"Kantor Desa Cipta Karya"},
		{"loc":[0.8131249053142824,109.38483971090545], "title":"Kantor Desa Suka maju"},
		{"loc":[0.848997, 109.500304], "title":"SDN 09 Rangkang"},
		{"loc":[1.083256, 109.693877], "title":"Pangkalan Udara Harry Hadisoemantri"},
		{"loc":[0.829485, 109.43504], "title":"SDN 01 Ketiat"},
		{"loc":[0.819541, 109.481622], "title":"Kantor Kelurahan Bumi Emas"},
		{"loc":[0.816553, 109.483653], "title":"SDN 04 Bengkayang"},
		{"loc":[0.813563, 109.475698], "title":"SDN 03 Bengkayang"},
		{"loc":[0.828555, 109.484624], "title":"SDN 02 Bengkayang"},
		{"loc":[0.7851222421837825, 109.47595549935782], "title":"Bukit Jamur Bengkayang"},
		{"loc":[0.8609887357190245, 109.44368316577223], "title":"Wisata Air Terjun Riam Budi"},
		{"loc":[0.8286118493363304, 109.21212453177353], "title":"Masjid Ilham Separong"},
		{"loc":[1.1473838764701993, 109.7482950755518], "title":"Air Terjun Riam Merasap"}
	];
	
	//<!-- Full screen plugin  -->
// create a fullscreen button and add it to the map
L.control.fullscreen({
	position: 'topcenter', // change the position of the button
	title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
	titleCancel: ' ', // change the title of the button when fullscreen is on, default Exit Full Screen
	content: 'FS', // change the content of the button, can be HTML, default null
	forceSeparateButton: true, // force separate button to detach from zoom buttons, default false
	forcePseudoFullscreen: false, // force use of pseudo full screen even if full screen API is available, default false
	fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
})
.addTo(map);

// events are fired when entering or exiting fullscreen.
map.on('enterFullscreen', function () {
console.log('entered fullscreen');
});

map.on('exitFullscreen', function () {
console.log('exited fullscreen');
});

// you can also toggle fullscreen from map object
map.toggleFullscreen();

	
	//<!-- Layer yang mengandung element yang dicari -->
var markersLayer = new L.LayerGroup();  //layer contain searched elements
 map.addLayer(markersLayer);
var controlSearch = new L.Control.Search({
position:'topcenter',
collapsed:false,
layer: markersLayer,
initial: false,
zoom: 17,
marker: false
});
map.addControl(controlSearch);
//<!-- Populasikan peta dengan marker dari data pencaharian -->
for(i in data) {
var title = data[i].title,//value searched
loc = data[i].loc,//position found
marker = new L.circle(new L.latLng(loc), {
title: title,
fillOpacity: 0,
weight: 0,
radius: 1
});
marker.bindPopup('title: '+ title );
markersLayer.addLayer(marker);
};
	//<!-- Layer yang akan di load
	var baseLayers = {
		"CylOSM":CyclOSM,
		"OSM.MAPNIK" :OSM_MAPNIK,
		"Esri_worldImagery": Esri_WorldImagery,
		"OPNVKarte" :OPNVKarte,
		"CartoDB.positron_DE" : CartoDBpositron_DE,
		"Open Street Map DE" : OSM_DE,
		"Thunderforest" : Thunderforest_DE
	};
	//<!-- Overlay Control Peta WEBGIS -->
	var overlays ={
		"Marker": custommarker,
		"Circle": circle,
		"Kotak" :rectanglekotak,
		"Polygon":polygon,
		"Polyline":polyline
	};
	//layer control peta webgis
	L.control.layers(baseLayers, overlays, {
		position:'topright',
		collapsed:true
	}).addTo(map);
	//<!-- Measure plugin button -->
	var ctlMeasure = L.control.polylineMeasure({
		position: "topright",
		    measureConrolTitle: "Ukur Panjang",
		    showClearControl: true,
		    showUnitControl: true
	}).addTo(map);
	
	//<!-- Pan Control -->
var ctrlPan=L.control.pan().addTo(map);
	//<!-- Overlay Control Peta WEBGIS dalam kondisi Default On -->

	map.addLayer(custommarker);
	map.addLayer(circle);
	map.addLayer(rectanglekotak);
	map.addLayer(polygon);
	map.addLayer(polyline);


	//<!-- Scale Bar Bottom Left -->
	var options = null;
	var scale = L.control.betterscale({metric:true, imperial:false, position: 'bottomcenter'}).addTo(map);
	//<!-- Scale Factor / Skala Angka -->
L.control.scalefactor({position:'bottomcenter'}).addTo(map);
	
	//<!-- Cursor Mouse Position -->
	var ctrlCurMosPos=L.control.mousePosition({position: 'bottomcenter'}).addTo(map);
	
	//<!-- Utara peta /  Utara geografis -->
	var comp = new L.Control.Compass({autoActive: false, showDigit:false, position: 'bottomcenter'});
	map.addControl(comp);

	//!-- Draw Editor -->
var drawnItems = new L.FeatureGroup();
       map.addLayer(drawnItems);

var customIcon3 = L.Icon.extend({
       options: {
       iconSize: [35, 35],
       iconAnchor: [15, 25],
       shadowSize: [65, 35],
       iconUrl: 'map-marker.png',
       shadowUrl: 'marker-shadow.png',
       }
  });

  var drawControl = new L.Control.Draw({
	position: 'topleft',
	draw: {
			 marker: {
					   icon: new customIcon3()
						},
			 polyline: {
					   hapeOptions: {
	color: '#f357a1',
	weight: 10
   }
						 },
						 polygon: {
							allowIntersection: false,
							drawError: {
							color: '#e1e100',
							message: '<strong>Tidak boleh saling tumpang tindih</strong>' 
					   },
										  shapeOptions: {
												 color: '#bada55'
										  }
									   },
				  circlemarker: false, 
				  rectangle: {
										   shapeOptions: {
									clickable: false
										  }
									   },
									},
									edit: {
										 featureGroup: drawnItems
									 }
								  });
								  map.addControl(drawControl);
				 


// event draw
map.on(L.Draw.Event.CREATED, function (event) {
	var layer = event.layer;
	 drawnItems.addLayer(layer);
  });
  
map.on('draw:created', function (e) {
	 console.log('===================');
	 drawnItems.eachLayer(function (layer) { 
	  var vector_geojson = layer.toGeoJSON();
	  //console.log(vector_geojson);
	  var vector_string = JSON.stringify(vector_geojson);
	  console.log(vector_string);
  });
});
  
map.on('draw:edited', function (e) {
console.log('===================');
drawnItems.eachLayer(function (layer) { 
	   var vector_geojson = layer.toGeoJSON();
	   //console.log(vector_geojson);
	   var vector_string = JSON.stringify(vector_geojson);
	   console.log(vector_string);
   });
});




//<!-- Sidebar Content -->
var ctSidebar=L.control.sidebar('sidebar_div', {
  autopan: false,
  closeButton: true,
  position: 'left'
}).addTo(map);

var ctBtnSidebar=L.easyButton('<img src="info.svg" style="width:14px"><span >&start;</span>',
function() {
  ctSidebar.toggle();
}).setPosition('topcenter').addTo(map);


