SELECT p.id, p.property_name, p.description, p.loan, p.mortgage, p.recommended_rent, p.desired_rent, p.address, p.city, p.state, p.zip, p.picture_url FROM property p
JOIN users u ON u.id = p.userid
WHERE u.id = $1 AND p.desired_rent > $2;