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
  isUploadPhoto: false,
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
  return state;
};

export const photoReducer = (state = initialStatePhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.value.uri,
      name: action.value.name,
    };
  }
  if (action.type === 'SET_UPLOAD_PHOTO') {
    return {
      ...state,
      isUploadPhoto: action.value.isUploadPhoto,
    };
  }
  return state;
};
