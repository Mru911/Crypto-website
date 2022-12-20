// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'aabb12d407msha73e29c3eaddf8bp17ddb0jsnf1c9d10918e3',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders={
  'X-RapidAPI-Key': 'aabb12d407msha73e29c3eaddf8bp17ddb0jsnf1c9d10918e3',
   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl='https://coinranking1.p.rapidapi.com/coins'
export const cryptoApi=createApi({
  reducerPath: 'cryptoApi',
  baseQuery:fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coin?limit=${count}`),

    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    // // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;