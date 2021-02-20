var dbInstance = require('./connection');

const ALL_QUERY = 'SELECT * FROM public.\"VEHICLES\"';
const ONE_BY_ID_QUERY = 'SELECT * FROM public.\"VEHICLES\" WHERE id=$1';
const ONE_BY_LICENSE_QUERY = 'SELECT * FROM public.\"VEHICLES\" WHERE license=$1';
const DELETE_QUERY = 'DELETE FROM public.\"VEHICLES\" WHERE id=$1';
const UPDATE_QUERY = 'UPDATE public.\"VEHICLES\" SET license=$1, owner=$2, brand=$3, latitude=$4, longitude=$5 WHERE id=$6';
const CREATE_QUERY = 'INSERT INTO public.\"VEHICLES\" (license, owner, brand, latitude, longitude) VALUES ($1, $2, $3, $4, $5)';

function getAll(req, res, next) {
    dbInstance.any(ALL_QUERY)
    .then(data => {
        res.status(200)
            .json(data);
        })
    .catch(error => {
        return next(error);
    });
}

function getOneById(req, res, next) {
    const id = req.query.id;
    dbInstance.one(ONE_BY_ID_QUERY, id)
    .then(data => {
        res.status(200)
            .json(data);
        })
    .catch(error => {
        return next(error);
    });
}

function getOneByLicense(req, res, next) {
    const license = req.query.license;
    dbInstance.one(ONE_BY_LICENSE_QUERY, license)
    .then(data => {
        res.status(200)
            .json(data);
        })
    .catch(error => {
        return next(error);
    });
}

function createOne(req, res, next) {
    let body = req.body;
    dbInstance.none(
        CREATE_QUERY,
        [body.license, body.owner, body.brand, body.latitude, body.longitude])
    .then(res.send())
    .catch(error => {
        return next(error);
    });
}

function updateOne(req, res, next) {
    let body = req.body;
    dbInstance.none(
        UPDATE_QUERY,
        [body.license, body.owner, body.brand, body.latitude, body.longitude, body.id])
    .then(res.send())
    .catch(error => {
        return next(error);
    });
}

function deleteOne(req, res, next) {
    const id = req.query.id;
    dbInstance.none(DELETE_QUERY, id)
    .then(res.send())
    .catch(error => {
        return next(error);
    });
}

module.exports = {
    getAll: getAll,
    getOneById: getOneById,
    getOneByLicense: getOneByLicense,
    createOne: createOne,
    updateOne: updateOne,
    deleteOne: deleteOne
};