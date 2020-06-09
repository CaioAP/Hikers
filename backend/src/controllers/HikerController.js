const axios = require('axios');
const Hiker = require('../models/Hiker');
// const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const hikers = await Hiker.find();

        return response.json(hikers);
    },

    async store(request, response) {
        // const { github_username } = request.body;
        // const gitResponse = axios.get(`https://api.github.com/users/${github_username}`);
        // const { name = login, avatar_url, bio } = gitResponse.data;
        // console.log(name, avatar_url, bio, github_username);

        const { name, email, phone, picture, latitude, longitude } = request.body;
    
        let hiker = await Hiker.findOne({ email });

        if (!hiker) {
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            // const techsArray = parseStringAsArray(techs);
        
            hiker = await Hiker.create({
                name,
                email,
                phone,
                picture,
                location,
            });
        }
    
        return response.json(hiker);
    }
};