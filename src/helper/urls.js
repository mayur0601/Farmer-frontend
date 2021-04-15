const API_ROOT = 'http://localhost:8000/api';

export const APIUrls = {
  loginFarmer: () => `${API_ROOT}/farmer/login`,
  getFarmer: () => `${API_ROOT}/farmer/farmerInfo`,
  Farmersignup:()=> `${API_ROOT}/farmer/signUp`,
  FarmerLogout:()=> `${API_ROOT}/farmer/logout`
};
