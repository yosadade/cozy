const initialStateFavourite = {
  image: '',
  name: '',
  price: '',
  rating: '',
  facilities: {
    kitchen: '',
    bedroom: '',
    bigLemari: '',
  },
  location: {
    latitude: -7.9311342,
    longitude: 110.4314679,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
    province: 'Yogyakarta',
    regency: 'Bantul',
    district: 'Mangunan',
    detail_address: 'Jalan Mangunan, Sukorame, Mangunan',
    notes: '',
  },
  map: '',
  phoneNumber: '',
};

export const registerReducer = (state = initialStateFavourite, action) => {
  if (action.type === 'SET_FAVOURITE') {
    return {
      ...state,
      image: action.value.image,
      name: action.value.name,
      price: action.value.price,
      rating: action.value.rating,
      facilities: action.value.facilities,
      location: action.value.location,
      map: action.value.map,
      phoneNumber: action.value.phoneNumber,
    };
  }
  return state;
};
