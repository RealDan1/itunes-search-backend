const { searchItunes } = require('../controllers/itunesApiController');
const { jwtMiddleware } = require('../middleware/jwtMiddleware');

const searchRoute = (app) => {
    app.get('/search', jwtMiddleware, searchItunes);
};

module.exports = searchRoute;
