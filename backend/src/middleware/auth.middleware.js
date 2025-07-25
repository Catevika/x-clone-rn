export const protectRoute = (req, res, next) => {
	if (!req.auth().isAuthenticated)
		res.status(401).json({error: 'Unauthorized. You must be logged in'});
	next();
};
