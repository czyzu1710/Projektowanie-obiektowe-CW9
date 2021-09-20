// product-search.spec.js created with Cypress

context('Product Search', () => {
	beforeEach(() => {
		cy.visit('/product-search');
	});

	it('should fill search input and show list of available products', () => {

		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');
		
		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 2)

		cy.get('li:contains("Nice T-shirt")').should('exist')
		cy.get('li:contains("Amazing T-shirt")').should('exist')
		
		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');
		
	});

	it('should fill search input and show info that nothing found', () => {

		cy.get('[data-cy="search"]')
			.type('Lexus LFA')
			.should('have.value', 'Lexus LFA');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 0)

		cy.get("div[data-cy=info]").should('be.visible');
		cy.get("div[data-cy=info]").should('have.text',"No products matching this phrase.")

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});

	it('should fill search input and show  product which info that it is no longer available', () => {

		cy.get('[data-cy="search"]')
			.type('Mug')
			.should('have.value', 'Mug');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 1)

		cy.get('li:contains("Nice Mug")').should('exist')
		cy.get('div:contains("Sold out")').should('exist')

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});

	it('should fill search input and show existing seller', () => {

		cy.get('[type="seller-checkbox"]').check()
		cy.get('[data-cy="search"]')
			.type('NiceSeller')
			.should('have.value', 'NiceSeller');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 1)

		cy.get('li:contains("NiceSeller")').should('exist')

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});

	it('should fill search input and show info that seller cannot be found', () => {

		cy.get('[type="seller-checkbox"]').check()
		cy.get('[data-cy="search"]')
			.type('AmazingSeller')
			.should('have.value', 'AmazingSeller');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 0)

		cy.get("div[data-cy=info]").should('be.visible');
		cy.get("div[data-cy=info]").should('have.text',"No sellers matching this phrase.")

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});
});
