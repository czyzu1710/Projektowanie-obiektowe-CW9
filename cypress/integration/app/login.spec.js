// login.spec.js created with Cypress

context('Login', () => {
	beforeEach(() => {
		cy.visit('/login');
	});

	it('should fill login form and redirect to homepage', () => {

		cy.get('[data-cy="username"]')
			.type('Sample')
			.should('have.value', 'Sample');

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'Qwerty123$');

		cy.get('login-form').submit();
		cy.location('pathname', { timeout: 10000 }).should('eq', '/');
		cy.title().should('eq', 'Home');

	});

	it('should fill login form show info that credentials are incorrect', () => {

		cy.get('[data-cy="username"]')
			.type('Sample')
			.should('have.value', 'Sample');

		cy.get('[data-cy="password"]')
			.type('TopSecret')
			.should('have.value', 'TopSecret');

		cy.get('login-form').submit();

		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Provided credentials are incorrect.")

		cy.location('pathname', { timeout: 10000 }).should('eq', '/login');
		cy.title().should('eq', 'Login');

	});

	it('should fill login form show info that account have not been confirmed yet', () => {

		cy.get('[data-cy="username"]')
			.type('Sample')
			.should('have.value', 'SampleNotConfirmed');

		cy.get('[data-cy="password"]')
			.type('TopSecret')
			.should('have.value', 'Qwerty123$');

		cy.get('login-form').submit();

		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Your account has not been confirmed yet. Please check your e-mail and click confirm button.")

		cy.location('pathname', { timeout: 10000 }).should('eq', '/login');
		cy.title().should('eq', 'Login');

	});

	it('should fill login form show info that account has been blocked', () => {

		cy.get('[data-cy="username"]')
			.type('Sample')
			.should('have.value', 'SampleBlocked');

		cy.get('[data-cy="password"]')
			.type('TopSecret')
			.should('have.value', 'Qwerty123$');

		cy.get('login-form').submit();

		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Your account has been blocked due to abuses. Please contact with our support.")

		cy.location('pathname', { timeout: 10000 }).should('eq', '/login');
		cy.title().should('eq', 'Login');

	});

	it('should fill login form show info that there was too many login attempts', () => {

		cy.get('[data-cy="username"]')
			.type('Sample')
			.should('have.value', 'Sample');

		cy.get('[data-cy="password"]')
			.type('TopSecret1')
			.should('have.value', 'TopSecret1');
		cy.get('login-form').submit();

		cy.get('[data-cy="username"]')
			.type('Sample')
			.should('have.value', 'Sample');

		cy.get('[data-cy="password"]')
			.type('TopSecret2')
			.should('have.value', 'TopSecret2');
		cy.get('login-form').submit();

		cy.get('[data-cy="username"]')
			.type('Sample')
			.should('have.value', 'Sample');

		cy.get('[data-cy="password"]')
			.type('TopSecret3')
			.should('have.value', 'TopSecret3');
		cy.get('login-form').submit();

		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"You exceeded the number of possible attempts. Please try again in 5 minutes.")

		cy.location('pathname', { timeout: 10000 }).should('eq', '/login');
		cy.title().should('eq', 'Login');

	});
});
