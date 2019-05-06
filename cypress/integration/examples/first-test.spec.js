import fakeFavorite from './fakeFavorite.json';

describe('search music route', function() {
  it('visits the base url', function() {
    cy.visit('/searchmusic');

    cy.url().should('include', '/searchmusic');
  });
  it('searches for music and finds and favorites it', function() {
    cy.visit('/searchmusic');
    cy.url().should('include', '/searchmusic');
    cy.get('input').type('warriors{enter}');
    cy.contains('Imagine Dragons');
    cy.get('.Favorite-icon-322')
      .first()
      .click();
  });
});

describe('favorite music', function() {
  it('finds favorited music', function() {
    cy.visit('/favoritemusic');
    cy.url().should('include', 'favoritemusic');

    cy.window()
      .its('store')
      .invoke('dispatch', {
        type: 'FAVORITE_MUSIC_ADDED',
        payload: fakeFavorite,
      });

    cy.contains('Three Days Grace');
    cy.get('[cypressId="favoriteIcon"]')
      .first()
      .click();

    cy.contains('No favorites have been added.');
  });
});
