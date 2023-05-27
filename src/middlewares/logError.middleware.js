
// La duncion de este middleware es mostrar el error en consola y pasar al siguiente middleware.
const logError =  (err, req, res, next) => {
    console.log(err)
    next(err);
}

module.exports = logError;
