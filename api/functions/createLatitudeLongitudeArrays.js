const createLongitudeLatitudeArrays = jsonData => {
  let longitudes = [];
  let latitudes = [];

  Object.values(jsonData[0]).forEach((boundary) => {
    longitudes.push(parseFloat(boundary['lng']));
    latitudes.push(parseFloat(boundary['lat']));  
  });
  return [longitudes, latitudes];
};

module.exports = createLongitudeLatitudeArrays;
