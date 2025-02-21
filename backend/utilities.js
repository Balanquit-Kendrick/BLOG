import jwt from 'jsonwebtoken'

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const accessToken = authHeader && authHeader.split(" ") [1];

  if(!accessToken) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  };

  try{
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
      if(err) return res.sendStatus(401);
      req.user = user;
      next();
    })
  } catch (err) {
    res.status(403).json({ error: "Invalid or expired token" });
  }

}