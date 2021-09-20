## Considered test-cases:

### Login:

- user tries login with correct credentials
- user tries login with incorrect credentials
- user tries login with inactive account
- user tries login with blocked account
- user exceeded number of allowed login attempts (2 attempts allowed)


### Register:

- user tries to register with correct email, username and password
- user tries to register with too short/long email
- user tries to register with already taken email
- user tries to register with too weak password
- user exceeded number of allowed accounts per IP (2 attempts allowed)

### Product Search:

- user tries to search existing product
- user tries to search not-existing product
- user tries to search product which exists but is no longer available 
- user tries to search existing seller
- user tries to search not-existing seller

### Product Sort:

- user tries to sort products by price from lowest to highest
- user tries to sort products by price from highest to lowest
- user tries to sort products by number of sold products from highest to lowest
- user tries to sort products by number of views from highest to lowest
- user tries to sort products by number of available products from highest to lowest

### Product Filter:

- user tries to filter products by category
- user tries to filter products by category and subcategory
- user tries to filter products by price range
- user tries to filter products with free shipment
- user tires to filter products with personal pickup

To run test please use following commands:

install dependencies: *npm install*

run tests: *./node_modules/.bin/cypress open*
