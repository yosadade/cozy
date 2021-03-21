const initialStateFavourite = {
  address: '',
  facilities: {
    bedroom: '',
    big_lemari: '',
    kitchen: '',
  },
  image: {
    image_1: '',
    image_2: '',
    image_3: '',
    image_4: '',
  },
  map_url: '',
  name: '',
  phone_url: '',
  price: '',
  rating: '',
  region: '',
};

export const registerReducer = (state = initialStateFavourite, action) => {
  if (action.type === 'SET_FAVOURITE') {
    return {
      ...state,
      address: action.value.address,
      facilities: action.value.facilities,
      image: action.value.image,
      map_url: action.value.map_url,
      name: action.value.name,
      phone_url: action.value.phone_url,
      price: action.value.price,
      rating: action.value.rating,
      region: action.value.region,
    };
  }
  if (action.type === 'REMOVE_FAVOURITE') {
    return {
      ...state,
      [action.payload.key]: action.payload.value,
    };
  }
  if (action.type === 'RESTORE_FAVOURITE') {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};
