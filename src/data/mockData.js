// Mock bus routes data with Pune routes
export const mockBusRoutes = [
  {
    id: 1,
    number: '101',
    name: 'Katraj - Hadapsar',
    startPoint: 'Katraj Bus Stand',
    endPoint: 'Hadapsar Bus Stand',
    coordinates: [
      [18.4575, 73.8677], // Katraj
      [18.4676, 73.8854], // Swargate
      [18.4783, 73.9007], // Pune Station
      [18.5089, 73.9260]  // Hadapsar
    ]
  },
  {
    id: 2,
    number: '102',
    name: 'Hinjewadi - Shivajinagar',
    startPoint: 'Hinjewadi Phase 1',
    endPoint: 'Shivajinagar Bus Stand',
    coordinates: [
      [18.5913, 73.7389], // Hinjewadi
      [18.5829, 73.7739], // Wakad
      [18.5677, 73.8090], // Aundh
      [18.5314, 73.8446]  // Shivajinagar
    ]
  },
  {
    id: 3,
    number: '103',
    name: 'Kothrud - Viman Nagar',
    startPoint: 'Kothrud Depot',
    endPoint: 'Viman Nagar',
    coordinates: [
      [18.5041, 73.8124], // Kothrud
      [18.5204, 73.8567], // Deccan
      [18.5483, 73.8736], // Koregaon Park
      [18.5679, 73.9147]  // Viman Nagar
    ]
  },
  {
    id: 4,
    number: '104',
    name: 'Warje - Pune Station',
    startPoint: 'Warje Depot',
    endPoint: 'Pune Station',
    coordinates: [
      [18.4872, 73.7999], // Warje
      [18.5041, 73.8124], // Kothrud
      [18.5204, 73.8567], // Deccan
      [18.4783, 73.9007]  // Pune Station
    ]
  },
  {
    id: 5,
    number: '105',
    name: 'Nigdi - Swargate',
    startPoint: 'Nigdi',
    endPoint: 'Swargate',
    coordinates: [
      [18.6501, 73.7714], // Nigdi
      [18.6275, 73.7989], // Chinchwad
      [18.5889, 73.8147], // Pimpri
      [18.4676, 73.8854]  // Swargate
    ]
  }
];

// Mock bus stops data
export const mockBusStops = [
  {
    id: 1,
    name: 'Katraj Bus Stand',
    area: 'Katraj',
    latitude: 18.4575,
    longitude: 73.8677
  },
  {
    id: 2,
    name: 'Swargate',
    area: 'Swargate',
    latitude: 18.4676,
    longitude: 73.8854
  },
  {
    id: 3,
    name: 'Pune Station',
    area: 'Sadhu Vaswani Circle',
    latitude: 18.4783,
    longitude: 73.9007
  },
  {
    id: 4,
    name: 'Shivajinagar Bus Stand',
    area: 'Shivajinagar',
    latitude: 18.5314,
    longitude: 73.8446
  },
  {
    id: 5,
    name: 'Hinjewadi Phase 1',
    area: 'Hinjewadi',
    latitude: 18.5913,
    longitude: 73.7389
  },
  {
    id: 6,
    name: 'Kothrud Depot',
    area: 'Kothrud',
    latitude: 18.5041,
    longitude: 73.8124
  },
  {
    id: 7,
    name: 'Viman Nagar',
    area: 'Viman Nagar',
    latitude: 18.5679,
    longitude: 73.9147
  },
  {
    id: 8,
    name: 'Deccan Gymkhana',
    area: 'Deccan',
    latitude: 18.5204,
    longitude: 73.8567
  },
  {
    id: 9,
    name: 'Koregaon Park',
    area: 'Koregaon Park',
    latitude: 18.5483,
    longitude: 73.8736
  },
  {
    id: 10,
    name: 'Nigdi',
    area: 'Nigdi',
    latitude: 18.6501,
    longitude: 73.7714
  }
];
