// product-sort.spec.js created with Cypress

context('Product Sort', () => {
	beforeEach(() => {
		cy.visit('/product-search');
	});

	it('should select sort by price from lowest to highest and show list of available products', () => {

		cy.get('select-filter').select('price-lowest-highest')

		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');
		
		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 2)

		cy.get('ul > li > .price')
			.then($items => {
				return $items.map((index, html) => {
					let priceStr = Cypress.$(html).text()
					return parseFloat(priceStr)
				}).get()
			})
			.should('deep.eq', [10.00, 119.99])

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');
		
	});

	it('should select sort by price from highest to lowest and show list of available products', () => {

		cy.get('select-filter').select('price-highest-lowest')

		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 2)

		cy.get('ul > li > .price')
			.then($items => {
				return $items.map((index, html) => {
					let priceStr = Cypress.$(html).text()
					return parseFloat(priceStr)
				}).get()
			})
			.should('deep.eq', [119.99, 10.00])

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});

	it('should select sort by number of sold products from highest to lowest and show list of available products', () => {

		cy.get('select-filter').select('sold-highest-lowest')

		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 2)

		cy.get('ul > li > .sold')
			.then($items => {
				return $items.map((index, html) => {
					let soldStr = Cypress.$(html).text()
					return parseInt(soldStr)
				}).get()
			})
			.should('deep.eq', [10, 2])

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});

	it('should select sort by number of views from highest to lowest and show list of available products', () => {

		cy.get('select-filter').select('viewed-highest-lowest')

		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 2)

		cy.get('ul > li > .views')
			.then($items => {
				return $items.map((index, html) => {
					let viewsStr = Cypress.$(html).text()
					return parseInt(viewsStr)
				}).get()
			})
			.should('deep.eq', [1000, 222])

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});

	it('should select sort by number of available products from highest to lowest and show list of available products', () => {

		cy.get('select-filter').select('stock-highest-lowest')

		cy.get('[data-cy="search"]')
			.type('T-shirt')
			.should('have.value', 'T-shirt');

		cy.get('search-form').submit();

		cy.get('ul').should('have.length', 2)

		cy.get('ul > li > .stock')
			.then($items => {
				return $items.map((index, html) => {
					let stockStr = Cypress.$(html).text()
					return parseInt(stockStr)
				}).get()
			})
			.should('deep.eq', [100, 25])

		cy.location('pathname', { timeout: 10000 }).should('eq', '/results');
		cy.title().should('eq', 'Results');

	});
});
