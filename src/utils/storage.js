export const getAdminToken = () => {
  return JSON.parse(localStorage.nitpik).token || undefined;
};
