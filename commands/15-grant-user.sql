-- Create user
CREATE ROLE new_user;

-- Grant privileges
GRANT SELECT ON some_table TO new_user;

-- Revoke privileges
REVOKE INSERT, UPDATE, DELETE ON some_table FROM new_user;
