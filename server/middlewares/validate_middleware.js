const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next()
    } catch (err) {
        const massage = err.issues[0].message;
        console.log(err);
        res.status(400).json({ msg: massage });
        next(err)
    }
}

module.exports = validate;