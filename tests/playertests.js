describe('Player class functionality', function() {

  beforeEach(function() {
    const playerName = 'playerName';
    const team = 'team';
    const opponent = 'opponent';
    const position = 'PG';
    const salary = '9000';
    const projection = '40';
    player = new Player(playerName, team, opponent, position, salary, projection);
  });


  it('should create a player', function() {
    expect(player instanceof Player).to.equal(true);
  });

});