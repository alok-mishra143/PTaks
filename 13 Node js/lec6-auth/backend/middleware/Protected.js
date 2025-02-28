function authMiddleware(req, res, next) {
  const token = req.cookies?.Token;
  const publicRoutes = ["/users/register", "/users/login"];
  const isPublicRoute = publicRoutes.includes(req.originalUrl);

  if (token && isPublicRoute) {
    return res.status(400).json({ error: "User already logged in" });
  }

  if (!token && !isPublicRoute) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
}

module.exports = authMiddleware;
