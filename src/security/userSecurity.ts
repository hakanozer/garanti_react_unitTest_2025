export const jwtControl = (): boolean => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }

  const payload = token.split('.')[1];
  if (!payload) {
    return false;
  }

  try {
    const decodedPayload = JSON.parse(atob(payload));
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedPayload.exp > currentTime;
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return false;
  }
}