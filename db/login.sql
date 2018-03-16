SELECT * FROM users u
WHERE u.username = $1 AND u.password = $2;