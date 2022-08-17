module.exports = {
  JSON_OPTIONS: [
    {
      strict: true,
      limit: '100kb',
      type: 'application/json',
    },
  ],

  API_PREFIX: '/api',
  COORDINATES_END_POINT: '/coordinates',

  PORT: 8000,

  COORDINATES_AMOUNT: 10,

  BAD_REQUEST: 400,
  SUCCESS_CODE: 200,
};
