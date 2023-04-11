describe('Login test', () => {

  const incorrectEmailDataSet = [
    {
      userName: 'abc-@mail.com',
      userPass: 'simpleString',
    },
    {
      userName: 'abc..def@mail.com',
      userPass: 'simpleString',
    },
    {
      userName: '.abc@mail.com',
      userPass: 'simpleString',
    },
  ]

  const correctEmailIncorrectPasswordDataSet = [
    {
      userName: 'abc-d@mail.com',
      userPass: 'simpleString',
    },
    {
      userName: 'abc.def@mail.com',
      userPass: 'simpleString',
    },
    {
      userName: 'abc@mail.com',
      userPass: 'simpleString',
    },
  ]



  //Incorrect email
  incorrectEmailDataSet.forEach((loginEmailDataSet) => {
    it('As user I want to login with incorrectly formated email '+loginEmailDataSet.userName,() => {
      cy.visit('https://app2.abtasty.com/login')
      cy.login(loginEmailDataSet.userName,loginEmailDataSet.userPass)
      cy.contains("Please enter a valid email").should('be.visible')

  })

  })

  //Correct email incorrect password
  correctEmailIncorrectPasswordDataSet.forEach((loginEmailDataSet) => {
    it('As user I want to login with correctly formated email '+loginEmailDataSet.userName,() => {
      cy.visit('https://app2.abtasty.com/login')
      cy.login(loginEmailDataSet.userName,loginEmailDataSet.userPass)
      cy.contains("Please enter a valid email").should('not.exist')
      cy.contains("Please enter a valid email or password").should('exist')
    })
  })


})