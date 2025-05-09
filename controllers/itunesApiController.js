const jwt = require('jsonwebtoken');
const axios = require('axios');

const searchItunes = async (req, res) => {
  const isFirstRequest = req.isFirstRequest;
  const { searchTerm, mediaType } = req.query; // deconstruct the searchTerm and mediaType from the req.query.

  if (isFirstRequest) {
    //create a new payload with id Date.now - just to have something to sign into the token - later we can set the token to expire after a certain amount of time, for now this works
    // Create a JWT token payload
    //--------------------------------
    const payload = {
      id: Date.now(),
    };
    // Generate the token for the first time -  sign the token with the payload
    let token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, {
      algorithm: 'HS256',
    });

    //do the request with the searchTerm and mediaType:
    //-----------------------------------------
    try {
      const itunesResponse = await axios.get('https://itunes.apple.com/search?', {
        params: { term: searchTerm, country: 'ZA', media: mediaType }, // Sending query parameters
      });
      // re‑sign using payload.id so `id` is defined, but overwrite the same `token` variable
      token = jwt.sign({ id: payload.id }, process.env.JWT_SECRET, {
        //
        algorithm: 'HS256',
      });
      //return the result and the token in the response object
      res.json({ itunesResponse: itunesResponse.data, token: token });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  } else {
    //otherwise its not the first request and should include a token with an id:
    const { id } = req.payload;
    //do the request with the searchTerm and mediaType:
    //-----------------------------------------
    try {
      const itunesResponse = await axios.get('https://itunes.apple.com/search', {
        params: { term: searchTerm, country: 'ZA', media: mediaType }, // Sending query parameters
      });

      //console.log the response for testing
      console.log({ itunesResponse: itunesResponse.data, token: token });

      //return the result and the token in the response object(removed , token: token redundant)
      res.json({ itunesResponse: itunesResponse.data });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
};

module.exports = { searchItunes };
