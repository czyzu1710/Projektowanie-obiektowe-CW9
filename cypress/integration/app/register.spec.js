// register.spec.js created with Cypress

context('Register', () => {
	beforeEach(() => {
		cy.visit('/register');
	});

	it('should fill register form and redirect to homepage', () => {

		cy.get('[data-cy="email"]')
			.type(`sample${Math.ceil(Math.random())}@user.com`)
			.should('have.value', `sample${Math.ceil(Math.random())}@user.com`);
		
		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'Qwerty123$');

		cy.get('register-form').submit();
		cy.location('pathname', { timeout: 10000 }).should('eq', '/');
		cy.title().should('eq', 'Home');

	});

	it('should fill register form and show info that email is already taken', () => {

		cy.get('[data-cy="email"]')
			.type('sample@user.com')
			.should('have.value', 'sample@user.com');

		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'Qwerty123$');

		cy.get('register-form').submit();
		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Provided email is already in usage.")
		
		cy.location('pathname', { timeout: 10000 }).should('eq', '/register');
		cy.title().should('eq', 'Register');

	});

	it('should fill register form and show info that email, username or password is too short/long', () => {

		// email too short
		cy.get('[data-cy="email"]')
			.type('s')
			.should('have.value', 's');

		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'Qwerty123$');

		cy.get('register-form').submit();
		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Provided email is too short, should have min. 4 characters length.")

		
		// email too long
		cy.get('[data-cy="email"]')
			.type('samplesamplesamplesamplesamplesamplesample@user.com')
			.should('have.value', 'samplesamplesamplesamplesamplesamplesample@user.com');
		
		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'Qwerty123$');

		cy.get('register-form').submit();
		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Provided email is too long, should have max. 24 characters length.")

		cy.location('pathname', { timeout: 10000 }).should('eq', '/register');
		cy.title().should('eq', 'Register');

	});

	it('should fill register form and show info about too weak password', () => {

		cy.get('[data-cy="email"]')
			.type(`sample${Math.ceil(Math.random())}@user.com`)
			.should('have.value', `sample${Math.ceil(Math.random())}@user.com`);

		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'Qwerty')
		  .should('match', /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

		cy.get('register-form').submit();
		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Password should have min. 8 characters, at least one letter and one number.")

		cy.get('[data-cy="email"]')
			.type(`sample${Math.ceil(Math.random())}@user.com`)
			.should('have.value', `sample${Math.ceil(Math.random())}@user.com`);

		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'Qwerty')
			.should('match', /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

		cy.get('register-form').submit();
		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Password should have min. 8 characters, at least one letter and one number.")

		cy.get('[data-cy="email"]')
			.type(`sample${Math.ceil(Math.random())}@user.com`)
			.should('have.value', `sample${Math.ceil(Math.random())}@user.com`);

		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', '123456789')
			.should('match', /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

		cy.get('register-form').submit();
		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Password should have min. 8 characters, at least one letter and one number.")

		cy.get('[data-cy="email"]')
			.type(`sample${Math.ceil(Math.random())}@user.com`)
			.should('have.value', `sample${Math.ceil(Math.random())}@user.com`);

		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'QwertyQwerty')
			.should('match', /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

		cy.get('register-form').submit();
		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Password should have min. 8 characters, at least one letter and one number.")

		cy.location('pathname', { timeout: 10000 }).should('eq', '/');
		cy.title().should('eq', 'Home');

	});

	it('should fill register form and show info that maximum number of accounts have been exceeded', () => {

		// create first account
		cy.get('[data-cy="email"]')
			.type(`sample${Math.ceil(Math.random())}@user.com`)
			.should('have.value', `sample${Math.ceil(Math.random())}@user.com`);

		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'Qwerty123$');

		cy.get('register-form').submit();
		cy.location('pathname', { timeout: 10000 }).should('eq', '/');
		cy.title().should('eq', 'Home');
		cy.visit('/logout');

		// create second account
		cy.visit('/register');
		cy.get('[data-cy="email"]')
			.type(`sample${Math.ceil(Math.random())}@user.com`)
			.should('have.value', `sample${Math.ceil(Math.random())}@user.com`);

		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'Qwerty123$');

		cy.get('register-form').submit();
		cy.location('pathname', { timeout: 10000 }).should('eq', '/');
		cy.title().should('eq', 'Home');
		cy.visit('/logout');

		// try to create third
		cy.visit('/register');
		cy.get('[data-cy="email"]')
			.type(`sample${Math.ceil(Math.random())}@user.com`)
			.should('have.value', `sample${Math.ceil(Math.random())}@user.com`);

		cy.get('[data-cy="username"]')
			.type(`sample${Math.ceil(Math.random())}`)
			.should('have.value', `sample${Math.ceil(Math.random())}`);

		cy.get('[data-cy="password"]')
			.type('Qwerty123$')
			.should('have.value', 'Qwerty123$');

		cy.get('register-form').submit();
		cy.get("div[data-cy=error]").should('be.visible');
		cy.get("div[data-cy=error]").should('have.text',"Maximum number of allowed accounts has been exceeded (2)")

		cy.location('pathname', { timeout: 10000 }).should('eq', '/');
		cy.title().should('eq', 'Home');
		cy.visit('/logout');

	});
});
