
//<!-- Peta Basemap -->

var mbUrlOSM_Mapnik = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
var mbAttrOSM_Mapnik =  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

var mbUrlcyle_OSM = 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
var mbAttrcyle_OSM =  '<a https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';



var mburlEsri_WorldImagery ='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
var mbAttEsri_WorldImagery ='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

//<!-- Settingan Ukuran Peta Basemap -->
var OSM_MAPNIK= L.tileLayer(mbUrlOSM_Mapnik, {maxZoom:18, attribution: mbAttrOSM_Mapnik});
var Esri_WorldImagery= L.tileLayer(mburlEsri_WorldImagery, {maxZoom:16, attribution:mbAttEsri_WorldImagery});
var CyclOSM=L.tileLayer(mbUrlcyle_OSM, {maxZoom:16, attribution:mbUrlcyle_OSM});


//Layer yang akan di load ke peta WEBGIS
var southWest = L.latLng(-6.594845681344818, 106.80218812821523),
    northEast = L.latLng(-7.698006498253109, 109.02270926955622),
    bounds = L.latLngBounds(southWest, northEast);

// Titik tengah halaman web adalah STMIK AMIK BANDUNG
var map = L.map('map', {
	maxBounds: bounds,
	    center: [-6.9567443619368055, 107.70761012388422],
	    zoom: 13,
	    maxZoom: 20,
	    minZoom: 10,
	    layers: [OSM_MAPNIK]
});
var custommarker = new L.LayerGroup(); 

var Icon = L.icon({
	iconUrl: 'downloadbatman.png',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
});
var popupstmik = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popupstmik.setLatLng([-7.697883691793332, 109.00372574423946]);
popupstmik.setContent('<p><img src="stmik.jpg" width="150" height="150" style="vertical-align:middle"/> <b>STMIK AMIK BANDUNG</b> Disini!</p>');
var marker = L.marker([-6.914499878643516, 107.63827623850933], {icon:Icon}).addTo(custommarker)
.bindPopup(popupstmik).closePopup();

var Icon = L.icon({
	iconUrl: 'building-svgrepo-com.svg',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
});
var popupsantoyusup = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popupsantoyusup.setLatLng([-6.906391916044181, 107.64299690246877]);
popupsantoyusup.setContent('<p><img src="santoyusup.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Rumah sakit santo yusup</b> Disini!</p>');
var marker2 = L.marker([-6.906391916044181, 107.64299690246877], {icon:Icon}).addTo(custommarker)
.bindPopup(popupsantoyusup).closePopup();



var Icon = L.icon({
	iconUrl: 'park-architecture-and-city-svgrepo-com.svg',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
});
var popuptamanprabuwangi= new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popuptamanprabuwangi.setLatLng([-6.90880317077467, 107.67264306766144]);
popuptamanprabuwangi.setContent('<p><img src="tamanprabuwangi.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Taman Prabuwangi</b> Disini!</p>');
var marker2 = L.marker([-6.90880317077467, 107.67264306766144], {icon:Icon}).addTo(custommarker)
.bindPopup(popuptamanprabuwangi).closePopup();


var Icon = L.icon({
	iconUrl: 'building-svgrepo-com.svg',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
});
var popuphermina = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popuphermina.setLatLng([-6.903950055366751, 107.6668807509284]);
popuphermina.setContent('<p><img src="rshermina.jpg" width="150" height="150" style="vertical-align:middle"/> <b>RSU Hermina</b> Disini!</p>');
var marker3 = L.marker([-6.903950055366751, 107.6668807509284], {icon:Icon}).addTo(custommarker)
.bindPopup(popuphermina).closePopup();
var Icon = L.icon({
	iconUrl: 'park-picnic-svgrepo-com.svg',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
});
var popupalun = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
popupalun.setLatLng([-6.920579489269665, 107.60686705877725]);
popupalun.setContent('<p><img src="alun.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Alun Alun kota bandung</b> Disini!</p>');
var marker4 = L.marker([-6.920579489269665, 107.60686705877725], {icon:Icon}).addTo(custommarker)
.bindPopup(popupalun).closePopup();
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
//<!-- Measure plugin button -->
var ctlMeasure = L.control.polylineMeasure({
	position: "bottomleft",
        measureConrolTitle: "Ukur Panjang",
        showClearControl: true,
        showUnitControl: true
}).addTo(map);

//<!-- Utara peta /  Utara geografis -->
var comp = new L.Control.Compass({autoActive: false, showDigit:false});
map.addControl(comp);

//<!-- Scale Bar Bottom Left -->
var options = null;
var scale = L.control.betterscale({metric:true, imperial:false}).addTo(map);

//<!-- Circle sebagai Layer Group -->	
var circle = L.layerGroup();
//<!-- Lokasi Gedung Sate dengan lingkaran -->
	 var circle1 = L.circle([-6.902367466789336, 107.61870472234507], {
		 color: '#800000',
		 fillColor: '##8403fc',
		 fillOpacity: 0.3,
		 weight: 2,
		 stroke: true,
		 radius: 110
		 }).addTo(circle)
		 .bindPopup("<b>Gedung Sate</b><br/>Disini!").closePopup();

//		 <!-- Lokasi Monumen Perjuangan Rakyat Jawa Barat dengan lingkaran -->
		 var circle2 = L.circle([-6.893317282427775, 107.6185260990546], {
			 color: '#800000',
			 fillColor: '#00FFFF',
			 fillOpacity: 0.3,
			 weight: 2,
			 stroke: true,
			 radius: 50
			 }).addTo(circle)
			 .bindPopup("<b>Monumen Perjuangan Rakyat Jawa Barat</b><br/>Disini!").closePopup();

			 //<!-- Lokasi tepikotahealing dengan lingkaran -->
			 var circle3 = L.circle([-6.910868271894322, 107.66950535232654], {
				  color: '#800000',
				  fillColor: '#00FFFF',
					 fillOpacity: 0.3,
					 weight: 2,
					 stroke: true,
					 radius: 110
			 }).addTo(circle)
			  .bindPopup("<b>tepikotahealing</b><br/>Disini!").closePopup();
		 
		 //<!-- Lokasi SPORTJABAR dengan lingkaran -->
			  var circle4 = L.circle([-6.910341276961025, 107.67495172533299], {
				   color: '#800000',
				   fillColor: '#00FFFF',
					  fillOpacity: 0.3,
					  weight: 2,
					  stroke: true,
					  radius: 110
			  }).addTo(circle)
			   .bindPopup("<b>sportjabararcamanik</b><br/>Disini!").closePopup();
		 


//<!-- Rectangle sebagai Layer Group -->	
var rectanglekotak = L.layerGroup();
//<!-- Kiara Artha Park dengan Kotak -->
	var kotak1 = [[-6.913759681637103, 107.64024530323587], [-6.918089237527255, 107.64395420402712]];
		L.rectangle(kotak1, {
		color: '#FD1C03',
		fillColor: '#ffb347',
		fillOpacity: 0.2,
		weight: 1
		}).addTo(rectanglekotak)
	.bindPopup("<b>Kiara Artha Park").closePopup();

//<!-- IBCC dengan Kotak -->  
	var kotak2 = [[-6.911015444170189, 107.64355907899147], [-6.911938213069661, 107.64509722457996]];
		L.rectangle(kotak2, {
		color: '#FD1C03',
		fillColor: '#ffb347',
		fillOpacity: 0.2,
		weight: 1
	}).addTo(rectanglekotak)
	.bindPopup("<b>Bandung Trade Mall").closePopup();


//<!-- MUSEUM GEOLOGI dengan Kotak -->
var kotak3 = [[
	-6.8999452623425555,
	107.62080497392645
	], [
		-6.901119449539635,
		107.62212495442884]];
L.rectangle(kotak3, {
color: '#FD1C03',
fillColor: '#F433FF',
fillOpacity: 0.2,
weight: 2
}).addTo(rectanglekotak)
.bindPopup("<b> MUSEUM GEOLOGOI </b><br />Disini!").closePopup();

//<!-- MESJID PUSDAI dengan Kotak -->
var kotak4 = [[
	-6.899192521688093,
	107.62480822125809
	], [
		-6.901373883308921,
		107.62705781443151]];
L.rectangle(kotak4, {
color: '#FD1C03',
fillColor: '#F433FF',
fillOpacity: 0.2,
weight: 2
}).addTo(rectanglekotak)
.bindPopup("<b> MESJID PUSDAI </b><br />Disini!").closePopup();

var popgbla=new L.Popup({maxwidth :135, closeOnClick:false, autoClose:true});
popgbla.setContent('<p><img src="GBLA.JPG" width="100" height="105" style="vertical-align:middle"/> <b>Gelora Bandung Lautan api</b></p>');

var polygon = L.layerGroup();

//<!-- Lokasi gbla dengan polygon-->
    var polygon1 = L.polygon([
	[
		-6.9571796817299685,
		107.71098059390732
	],
	  [
		  -6.9577654225182215,
		  107.71092694972788
		],
		[
			-6.958340512762064,
			107.71102350925224
		],
		[
			-6.958894302701864,
			107.71153849338253
		],
		[
		  -6.959032750085129,
		  107.71221441005434
		],
		[
			-6.958734555670972,
			107.7127401230224
		],
		[
			-6.958223364806329,
			107.71310490344723
		],
		[
			-6.95675368797103,
			107.71307271694025
		],
		[
			-6.95675368797103,
			107.71294397090725
		],
		[
			-6.956317043966905,
			107.71268647884136
		],
		[
			-6.956135996333657,
			107.71181744312088
		],
		[
		  -6.956444842253504,
		  107.7113775608425
	  ],
	  [
		  -6.956743038121957,
		  107.71116298412142
		],
		[
			-6.956785637516006,
			107.71106642459705
		],
		[
			-6.9571796817299685,
			107.71098059390732
		]
	], {
		color: "#306754",
		fillColor: '#FF5F1F',
		fillOpacity: 0.3,
		weight: 2
	}).addTo(polygon)
	.bindPopup(popgbla).closePopup(); 
	
	var popJabbar=new L.Popup({maxWidth :135, closeOnClick:false, autoClose:true});
	popJabbar.setContent('<p><img src="Aljabbar.jpg" width="135" height="105" style="vertical-align:middle"/> <b>Masjid Al-Jabbar</b></p>');
	var polygon2 = L.polygon([[
		-6.945644655799583,
		107.70161481360054
	],
	[
		-6.94562133539128,
		107.70127025233415
	],
	[
		-6.9460333290947744,
		107.70110580263895
	],
	[
		-6.946173251402186,
	107.70121543576835
],
[
	-6.946282079835342,
	107.70116845014036
],
[
	-6.9462509859995265,
	107.70104315513504
],
[
	-6.946771807471293,
	107.70104315513504
],
[
	-6.946779580921813,
	107.7009648457576
],
[
	-6.947735714343963,
	107.70093352200564
],
[
	-6.947759034646253,
	107.70108230982493
],
[
	-6.949818990188618,
	107.70086304356386
],
  [
	  -6.95012215269476,
	  107.70443395123152
	],
	[
		-6.950650743264461,
		107.70538932565108
	],
	[
		-6.951824523137105,
		107.70583568911138
	],
	[
		-6.950650743264461,
		107.70607061724604
	],
	[
		-6.950736250506637,
		107.70579653442144
	],
	[
		-6.950440861785452,
		107.70567123941612
	],
	[
		-6.9503242609243046,
		107.70600013880659
	],
	[
	  -6.950161019669181,
	107.70609411006001
],
[
	-6.949741256181156,
	107.70602363161817
],
[
	-6.949438093429407,
	107.70604712443213
],
[
	-6.948676298983827,
	107.70553811347037
],
[
	-6.948178799904241,
	107.70541281846499
],
[
	-6.9468728623158995,
	107.70558509909824
],
  [
	  -6.945590241511752,
	  107.70181841798342
	],
	[
		-6.945644655799583,
		107.70161481360054
	]
	      
      ], {
	color: "#306754",
	fillColor: '#FF5F1F',
	fillOpacity: 0.3,
            weight: 2
        }).addTo(polygon)
        .bindPopup(popJabbar).closePopup(); 

//<!-- Lokasi Taman Lalulintas dengan lingkaran NIZAR-->

	var popuptamlun = new L.Popup({maxWidth : 150, closeOnClick: false, autoClose: true});
		popuptamlun.setContent('<p><img src="tamlun.jpg" width="150" height="130" style="vertical-align:middle"/> <b>tamlun</b> Disini!</p>');
	
	var polygon3 = L.polygon([

		[
			
			-6.910001273551501,
			107.61249827252323
			  ],
			  [
				  -6.9113864209349885,
				  107.61261877434657
			  ],
			  [
				  -6.911739003257182,
				  107.61275196057096
			  ],
			  [
				  -6.912607865713781,
				  107.61308175503189
			  ],
			  [
				  -6.9126141618131385,
				  107.6131388348432
			  ],
			  [
				  -6.9125826813175735,
				  107.61321494125627
			  ],
			  [
				  -6.9121545463697345,
				  107.61439459067651
			  ],
			  [
				  -6.9107253283719245,
				  107.61387453017988
			  ],
			  [
				  -6.910429410448671,
				  107.61374768615605
			  ],
			  [
				  -6.909887943131054,
				  107.61259974774276
			  ],
			  [
				  -6.910001273551501,
				  107.61249827252323
			  ]
		], {
		color: "#306754",
		fillColor: '#FF5F1F',
		fillOpacity: 0.3,
		weight: 2
		}).addTo(polygon)
		.bindPopup(popuptamlun).closePopup()


		//<!-- Lokasi Stadion Siliwangi dengan lingkaran -->

		var popupsilwang = new L.Popup({maxWidth : 135, closeOnClick: false, autoClose: true});
		popupsilwang.setContent('<p><img src="siliwangi.jpg" width="150" height="150" style="vertical-align:middle"/> <b>Stadion Siliwangi</b> Disini!</p>');
		 var polygon4 = L.polygon([
	
			[
				
					-6.911466805633609,
					107.61839261168205
				],
				[
					-6.911882286593041,
					107.62004107757139
				],
				[
					-6.911835650993723,
					107.62007097203036
				],
				[
					-6.911763577785166,
					107.62008805457822
				],
				[
					-6.911606712528382,
					107.62020763241577
				],
				[
					-6.911547358092207,
					107.62026742133378
				],
				[
					-6.911496482857004,
					107.62032721025196
				],
				[
					-6.911441368011694,
					107.62042543490361
				],
				[
					-6.911415930388344,
					107.62049376509628
				],
				[
					-6.911382013556079,
					107.62056209528765
				],
				[
					-6.911377773952182,
					107.62060907229454
				],
				[
					-6.909389395358545,
					107.62107030109274
				],
				[
					-6.909257967054785,
					107.62046387063594
				],
				[
					-6.908927276321904,
					107.61901185405003
				],
				[
					-6.910525612721287,
					107.61864457926697
				],
				[
					-6.910741832880191,
					107.61859333162204
				],
				[
					-6.911203950144582,
					107.61847802442253
				],
				[
					-6.911466805633609,
					107.61839261168205
				]
			], {
			color: "#306754",
			fillColor: '#FF5F1F',
			fillOpacity: 0.3,
			weight: 2
			}).addTo(polygon)
			.bindPopup(popupsilwang).closePopup();

			
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
	minimized: false
    }).addTo(map);


//<!-- Zoom Level Plugin -->>
new L.zoompanel({
	labels : [
		{
			zoom: 2,
			label: "X2"
		},
		{
			zoom: 6,
			label: "X6"
		},
		{
			zoom: 10,
			label: "X10"
        },
        {
	zoom: 12,
            label: "X12"
        },
        {
	zoom: 16,
	label: "X14"
        },
        {
	zoom: 17,
	label: "X17"
        }
    ]
    }).addTo(map);

var polyline=L.layerGroup();
//<!-- Lokasi Bandara Non Aktif Husein dengan Polyline sebagai nama jalan -->
    var polyline1 = L.polyline([
	[
		-6.949258994027119,
		107.71104816551843
	],
	[
		-6.951951706109909,
		107.7110272492576
	],
	[
		-6.957969174526937,
		107.71057205028467
	],
	[
		-6.964434473169021,
		107.70953664455317
	]
    ],{
	color : "#800080",
	weight : 3
    }).addTo(polyline)
    .bindPopup("<b>Jln. Ali bin abi thalib</b><br/>GBLA")

//<!-- Lokasi  -->
    var polyline2 = L.polyline([
	[
		-6.951163847593662,
		107.70593084976514
	],
	[
		-6.950317221417848,
		107.70625738309832
	],
	[
		-6.9493217136197245,
		107.70613796473361
	],
	[
		-6.948508734653004,
		107.7055798854729
	],
	[
		-6.9467428867186385,
		107.70576660922018
	],
	[
		-6.942577299505402,
		107.70679464122378
	],
	[
		-6.94195814000004,
		107.70693559708656
	  ],
	  [
		  -6.9414707968678755,
		  107.70655166023676
		],
		[
			-6.936338570702333,
			107.70671665357128
		]
	],{
		color : "#800080",
		weight : 3
	}).addTo(polyline)
	.bindPopup("<b>Jln. Rancanumpang</b><br/>Masjid Al Jabbar")

	//<!-- Lokasi stadion siliwangi dengan polyline -->
	var polyline3 = L.polyline([
	
		[
			-6.909831735206637,
            107.62378440676906
          ],
          [
			  -6.9091894614815885,
			  107.62117255508241
          ],
          [
			  -6.9094035528202085,
			  107.62107670731353
          ],
          [
			  -6.908880218265168,
			  107.61899201835104
          ],
          [
			  -6.909998250475056,
			  107.61868051310455
          
        ],

	], {
	color: "#306754",
	weight: 3
	}).addTo(polyline)
	.bindPopup("<b>Jln. Bandung Wetan</b><br/>Kota Bandung")

	//<!-- Jln. Raya Pati Tayu dengan polyline -->
	var polyline4 = L.polyline([
		
		[
			-6.909164170498698,
			107.61741372864549
		],
		[
			-6.9098004470573215,
			107.61547785434118
		],
		[
			-6.910423737549991,
			107.61386898583385
		],
		[
			-6.912163752491381,
			107.61448375672586
		],
		[
			-6.9124364408197465,
			107.61376434397908
			
			
		],
		
	], {
		color: "#306754",
		weight: 3
	}).addTo(polyline)
	.bindPopup("<b>Jln. Pati Tayu</b><br/>Kota Bandung")
	
	//<!-- Posisi di WEBGIS untuk pencaharian -->
	//<!-- Posisi di WEBGIS untuk pencaharian -->
	var data = [
		{"loc":[-6.915182410624682, 107.63834327459335], "title":"stmik-amikbandung"},
		{"loc":[-6.9004441518215165, 107.62152314186096], "title":"museum geologi"},
		{"loc":[-6.893341, 107.584997], "title":"bandung trade center (BTC)"},
		{"loc":[-6.902659275978946, 107.61876583809365], "title":"gedung sate"},
		{"loc":[-6.91620222556859, 107.63428947908385], "title":"kiara artha park"},
		{"loc":[-6.934869995426225, 107.60481834411621], "title":"lapangan tegallega"},
		{"loc":[-6.89438325313212, 107.61853113770844], "title":"monumen perjuangan rakyat jawa barat"},
		{"loc":[-6.898053180251054, 107.6103115081787], "title":"institut teknologi bandung"},
		{"loc":[-6.925826385638654, 107.63652741900927], "title":"trans studio mall (tsm)"},
		{"loc":[-6.890511877563395, 107.6359963417531], "title":"taman makam pahlawan"},
		{"loc":[-6.900115, 107.625981], "title":"mesjid pusdai"},
		{"loc":[-6.915394, 107.594191], "title":"paskal hyper square"},
		{"loc":[-6.886544235080148, 107.58065881020355], "title":"universitas maranatha"},
		{"loc":[-6.90886707636475, 107.67263233882564], "title":"Taman Prabuwangi"},
		{"loc":[-6.904079402619763, 107.66717315492156], "title":"RSU Hermina"},
		{"loc":[-6.906391916044181, 107.64299690246877], "title":"Rumah Sakit santo yusup"},
		{"loc":[-6.920579489269665, 107.60686705877725], "title":"Alun - Alun Kota bandung"},

	];
	
	
	
	//<!-- Layer yang mengandung element yang dicari -->
var markersLayer = new L.LayerGroup();  //layer contain searched elements
 map.addLayer(markersLayer);
var controlSearch = new L.Control.Search({
position:'topleft',
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
		"Esri_worldImagery": Esri_WorldImagery
	};
	
	//<!-- Overlay Control Peta WEBGIS dalam kondisi Default On -->

	map.addLayer(custommarker);
	map.addLayer(circle);
	map.addLayer(rectanglekotak);
	map.addLayer(polygon);
	map.addLayer(polyline);


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
		position:'topleft',
		collapsed:false
	}).addTo(map);
	
	