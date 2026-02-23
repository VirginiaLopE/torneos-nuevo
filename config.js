
const config = {
    style: 'style.json',
    accessToken: '3IIa8UU7dOJxyoGfLZ4Q3IIa8UU7dOJxyoGfLZ4Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: 'Torneos de tenis de Carlos Alcaraz',
    subtitle: 'Ruta el circuito ATP 2025',
    byline: 'By Virginia López',
    footer: 'Fuente: ATP',
    chapters: [
        
        {
            id: 'australian-open',
            alignment: 'left',
            hidden: false,
            title: 'Australian Open',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Melbourne_Park_-_Tennis.jpg',
            description: 'Ubicación: Melbourne Park, Melbourne',
            location: {
                center: [144.9785, -37.8226],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'atp-500-rotterdam',
            alignment: 'right',
            hidden: false,
            title: 'ATP 500 Róterdam',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/ABN_AMRO_Open_foto_van_arena_voor_een_wedstrijd.jpg/960px-ABN_AMRO_Open_foto_van_arena_voor_een_wedstrijd.jpg',
            description: 'Ubicación: Rotterdam Ahoy, Róterdam',
            location: {
                center: [4.4833, 51.8833],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'atp-500-doha',
            alignment: 'left',
            hidden: false,
            title: 'ATP 500 Doha',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Khalifa_Tennis_and_Squash_Complex_in_Lekhwair.jpg/330px-Khalifa_Tennis_and_Squash_Complex_in_Lekhwair.jpg',
            description: 'Ubicación: Khalifa International Tennis Complex, Doha',
            location: {
                center: [51.5127, 25.3117],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'masters-1000-indian-wells',
            alignment: 'right',
            hidden: false,
            title: 'Masters 1.000 Indian Wells',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/2143-0029_the-venue.jpg',
            description: 'Ubicación: Indian Wells Tennis Garden, California',
            location: {
                center: [-116.3050, 33.7244],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'masters-1000-miami',
            alignment: 'left',
            hidden: false,
            title: 'Masters 1.000 Miami',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Serena_Williams-Carla_Su%C3%A1rez_Navarro_2015_Miami_Open.JPG/960px-Serena_Williams-Carla_Su%C3%A1rez_Navarro_2015_Miami_Open.JPG',
            description: 'Ubicación: Hard Rock Stadium, Miami',
            location: {
                center: [-80.2389, 25.9581],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'masters-1000-montecarlo',
            alignment: 'right',
            hidden: false,
            title: 'Masters 1.000 Montecarlo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2018_Monte-Carlo_Masters_IMG_2719_%2841694885952%29.jpg/960px-2018_Monte-Carlo_Masters_IMG_2719_%2841694885952%29.jpg',
            description: 'Ubicación: Monte-Carlo Country Club, Roquebrune-Cap-Martin',
            location: {
                center: [7.4397, 43.7486],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'atp-500-barcelona',
            alignment: 'left',
            hidden: false,
            title: 'ATP 500 Barcelona',
            image: 'https://www.rfet.es/media/image/noticias/14971_Foto.1764080636.jpg',
            description: 'Ubicación: Real Club de Tenis Barcelona, Barcelona',
            location: {
                center: [2.1150, 41.3931],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'masters-1000-roma',
            alignment: 'right',
            hidden: false,
            title: 'Masters 1.000 Roma',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Il_Centrale_%28108607831%29.jpeg/960px-Il_Centrale_%28108607831%29.jpeg',
            description: 'Ubicación: Foro Itálico, Roma',
            location: {
                center: [12.4542, 41.9289],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'roland-garros',
            alignment: 'left',
            hidden: false,
            title: 'Roland Garros',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Roland_Garros_02.JPG',
            description: 'Ubicación: Stade Roland Garros, París',
            location: {
                center: [2.2492, 48.8475],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'atp-500-queens-club',
            alignment: 'right',
            hidden: false,
            title: "ATP 500 Queen's Club",
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/2025_Queens_Tennis.jpg/960px-2025_Queens_Tennis.jpg',
            description: "Ubicación: Queen's Club, Londres",
            location: {
                center: [-0.2117, 51.4883],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'wimbledon',
            alignment: 'left',
            hidden: false,
            title: 'Wimbledon',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Centre_Court.jpg',
            description: 'Ubicación: All England Lawn Tennis Club, Londres',
            location: {
                center: [-0.2144, 51.4344],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'masters-1000-cincinnati',
            alignment: 'right',
            hidden: false,
            title: 'Masters 1.000 Cincinnati',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lindner_Family_Tennis_Center_2025.jpg/960px-Lindner_Family_Tennis_Center_2025.jpg',
            description: 'Ubicación: Lindner Family Tennis Center, Mason',
            location: {
                center: [-84.2725, 39.3522],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'us-open',
            alignment: 'left',
            hidden: false,
            title: 'US Open',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/US_OPEN_2019_%2848667665777%29.jpg/1280px-US_OPEN_2019_%2848667665777%29.jpg',
            description: 'Ubicación: USTA Billie Jean King National Tennis Center, Nueva York',
            location: {
                center: [-73.8467, 40.7500],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'atp-500-tokio',
            alignment: 'right',
            hidden: false,
            title: 'ATP 500 Tokio',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ariake_tennis_park.jpg/1280px-Ariake_tennis_park.jpg',
            description: 'Ubicación: Ariake Coliseum, Tokio',
            location: {
                center: [139.7892, 35.6369],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'masters-1000-paris',
            alignment: 'left',
            hidden: false,
            title: 'Masters 1.000 París',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Match_entre_Jack_Sock_et_Lucas_Pouille_au_Rolex_Paris_Masters_2017.jpg/1280px-Match_entre_Jack_Sock_et_Lucas_Pouille_au_Rolex_Paris_Masters_2017.jpg',
            description: 'Ubicación: Accor Arena / La Défense Arena, París',
            location: {
                center: [2.3783, 48.8386],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'atp-finals',
            alignment: 'right',
            hidden: false,
            title: 'ATP Finals',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Pala-alpitour-illus.jpg',
            description: 'Ubicación: Inalpi Arena, Turín',
            location: {
                center: [7.6511, 45.0419],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'davis-cup-finals',
            alignment: 'left',
            hidden: false,
            title: 'Davis Cup Finals',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Coupe_Davis_Finale_2018.jpg/960px-Coupe_Davis_Finale_2018.jpg',
            description: 'Ubicación: Unipol Arena, Bolonia',
            location: {
                center: [11.2461, 44.4822],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};