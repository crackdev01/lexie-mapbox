require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {
  body,
  validationResult
} = require('express-validator');
const createLatitudeLongitudeArrays = require('./functions/createLatitudeLongitudeArrays');
const getRandomCoordinates = require('./functions/getRandomCoordinates');
const config = require('./config');

const app = express();
const port = process.env.API_PORT || config.PORT;

app.use(express.json(config.JSON_OPTIONS));
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

app.post(
  config.API_PREFIX + config.COORDINATES_END_POINT,
  body().isJSON(),
  (req, res) => {
    // handle validation errors from request
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(config.BAD_REQUEST).json({
        errors: errors.array()
      });
    }

    // create longitude and latitude boundaries
    const [longitudeBoundaries, latitudeBoundaries] =
    createLatitudeLongitudeArrays(req.body);

    // get random coordinates between latitude/longitude boundaries
    const coordinates = getRandomCoordinates(
      config.COORDINATES_AMOUNT,
      longitudeBoundaries,
      latitudeBoundaries
    );

    res.send(coordinates);
  }
);

app.listen(port, () => console.log(`Listening on port ${port}...`));