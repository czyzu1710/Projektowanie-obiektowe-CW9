// product-filter.spec.js created with Cypress

context('Filter Sort', () => {
	beforeEach(() => {
		cy.visit('/product-search');
	});

	it('should filter products and display only products that matches selected category', () => {

		cy.get('[type="seller-checkbox-clothes"]').check()
		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 2)

		cy.get('li:contains("Nice T-shirt")').should('exist')
		cy.get('li:contains("Amazing T-shirt")').should('exist')

		cy.get('li:contains("T-shirt Photo")').should('not.exist')

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});

	it('should filter products and display only products that matches selected category and subcategory', () => {

		cy.get('[type="seller-checkbox-clothes"]').check()
		cy.get('[type="seller-checkbox-shirts"]').check()
		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 2)

		cy.get('li:contains("Nice T-shirt")').should('exist')
		cy.get('li:contains("Amazing T-shirt")').should('exist')

		cy.get('li:contains("T-shirt with pants (set)")').should('not.exist')
		cy.get('li:contains("T-shirt Photo")').should('not.exist')

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});

	it('should filter products and display only products that matches selected price range', () => {

		cy.get('[data-cy="price-min"]')
			.type('10')
			.should('have.value', '1');

		cy.get('[data-cy="price-max"]')
			.type('100')
			.should('have.value', '100');

		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 1)

		cy.get('li:contains("Nice T-shirt")').should('exist')
		cy.get('li:contains("Amazing T-shirt")').should('not.exist')

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});

	it('should filter products and display only products with free shipment', () => {

		cy.get('[type="free-shipment"]').check()
		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 1)

		cy.get('li:contains("Nice T-shirt")').should('not.exist')
		cy.get('li:contains("Amazing T-shirt")').should('exist')

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});

	it('should filter products and display only products personal pickup', () => {

		cy.get('[type="personal-pickup"]').check()
		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 1)

		cy.get('li:contains("Nice T-shirt")').should('exist')
		cy.get('li:contains("Amazing T-shirt")').should('not.exist')

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});
});
