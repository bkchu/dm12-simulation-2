SELECT * FROM property p
JOIN users u ON u.id = p.userid
WHERE u.id = $1 AND p.desired_rent > $2