const getRandomCoordinates = require('../getRandomCoordinates');

const coordinateAmount = 10;
const latitudeBoundaries = [-73.9876, -73.9397];
const longitudeBoundaries = [40.7661, 40.8002];

const NAME = 'coordinate';
const LATITUDE_INDEX = 0;
const LONGITUDE_INDEX = 1;
const NORTH_BOUND = 0;
const SOUTH_BOUND = 1;
const EAST_BOUND = 1;
const WEST_BOUND = 0;
const coordinates = getRandomCoordinates(
  coordinateAmount,
  latitudeBoundaries,
  longitudeBoundaries
);

describe('getRandomCoordinates', () => {
  it('asserts data types are correct within coordinates: array of named string arrays. Expect [], object, [], string', () => {
    expect(typeof coordinates).toBe(typeof []);
    for (let i = 0; i < coordinates.length; i++) {
      const key = NAME + i;

      expect(typeof coordinates[i]).toBe('object');
      expect(typeof coordinates[i][key]).toBe(typeof []);
      expect(typeof coordinates[i][key][LATITUDE_INDEX]).toBe('string');
      expect(typeof coordinates[i][key][LONGITUDE_INDEX]).toBe('string');
    }
  });
  it('asserts latitude/longitude coordinate values are within the given boundaries', () => {
    for (let i = 0; i < coordinates.length; i++) {
      const key = NAME + i;

      const latitude = parseFloat(coordinates[i][key][LATITUDE_INDEX]);
      const longitude = parseFloat(coordinates[i][key][LONGITUDE_INDEX]);

      expect(latitude).toBeGreaterThan(latitudeBoundaries[NORTH_BOUND]);
      expect(latitude).toBeLessThan(latitudeBoundaries[SOUTH_BOUND]);

      expect(longitude).toBeLessThan(longitudeBoundaries[EAST_BOUND]);
      expect(longitude).toBeGreaterThan(longitudeBoundaries[WEST_BOUND]);
    }
  });
});
