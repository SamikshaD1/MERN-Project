const errormiddleware = (err, req, res, next) => {
    const status = err.status | 500;
    const message = err.massage | 'BACKEND ERROR';
    const extraDetails = err.extraDetails | "Error from Backed";

    return res.status(status).json({ message, extraDetails });
}

module.exports = errormiddleware;