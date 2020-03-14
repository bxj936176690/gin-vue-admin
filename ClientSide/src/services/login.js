import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/login', {
    method: 'POST',
    data: params,
  });
}
export async function getFakeCaptcha(mobile) {
  return request('/login', {
    method: 'POST',
    data: mobile,
  });
}