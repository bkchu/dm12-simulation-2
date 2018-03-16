INSERT INTO property (userid, property_name, description, loan, mortgage, recommended_rent, desired_rent, address, city, state, zip, picture_url)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
SELECT * FROM property p
JOIN users u ON u.id = p.userid
WHERE u.id = $1;