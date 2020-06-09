const Hiker = require('../models/Hiker');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, name } = request.query;

        const hikers = await Hiker.find({
            name: name,
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        })

        return response.json({ hikers: [] })
    }
}