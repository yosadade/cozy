const initialStateRegister = {
  name: '',
  email: '',
  phoneNumber: '',
  password: '',
  password_confirmation: '',
};

const initialStatePhoto = {
  uri: '',
  name: '',
  isUploadPhoto: '',
};

export const registerReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      phoneNumber: action.value.phoneNumber,
      password: action.value.password,
      password_confirmation: action.value.password_confirmation,
    };
  }
  if (action.type === 'SET_ADDRESS') {
    return {
      ...state,
      address: action.value.address,
      city: action.value.city,
      houseNumber: action.value.houseNumber,
    };
  }
  return state;
};
