export const queryParser = (req, res, next) => {
    req.parsedQuery = req.query;
    next();
};