const getRandomCoordinates = (
  coordinateAmount,
  longitudeBoundaries,
  latitudeBoundaries
) => {
  const coordinates = {};
  const DECIMAL_PLACES = 4;

  // Create random coordinates
  for (let i = 0; i < coordinateAmount; i++) {
    const longitude = calculateRandomFloatFromArray(
      longitudeBoundaries[0],
      longitudeBoundaries[1]
    );
    const latitude = calculateRandomFloatFromArray(
      latitudeBoundaries[1],
      latitudeBoundaries[0]
    );

    const coordinate = {
      lng: longitude.toFixed(DECIMAL_PLACES),
      lat: latitude.toFixed(DECIMAL_PLACES),
    };

    coordinates[i] = coordinate;
  }
  return coordinates;
};

const calculateRandomFloatFromArray = (min, max) =>
  Math.random() * (max - min) + min;

module.exports = getRandomCoordinates;
