const createLatitudeLongitudeArrays = require("../createLatitudeLongitudeArrays");

const jsonData = {
  "coordinate0": {
    "lng": "-73.9876",
    "lat": "40.7661"
  }
}

const arrays = [];
const [latitudeArray, longitudeArray] = createLatitudeLongitudeArrays(jsonData);
arrays.push(latitudeArray);
arrays.push(longitudeArray);

describe("createLatitudeLongitudeArrays", () => {
  it("asserts data types and length of return arrays are equal to amount of coordinates from given param", () => {
    const jsonDataLength = Object.keys(jsonData).length;
    for (let i = 0; i < arrays.length; i++) {
      expect(typeof arrays[i]).toBe(typeof []);
      expect(typeof arrays[i][0]).toBe("number");
      expect(arrays[i].length).toEqual(jsonDataLength);
    }
  });
  it("asserts the latitude, longitude values from JSON data are being split correctly into the return arrays respectively", () => {
    const latitudeString = latitudeArray[0].toString();
    const longitudeString = longitudeArray[0].toString();

    expect(jsonData['coordinate0']['lng'] === latitudeString).toBeTruthy();
    expect(jsonData['coordinate0']['lat'] === longitudeString).toBeTruthy();
  });
});
