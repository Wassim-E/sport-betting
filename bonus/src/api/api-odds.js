import api, { handleAPIError } from '@/api/api-global';

export const getOdds = () => {
  return handleAPIError(() => api.get('odds/parionssportbets/'));
};