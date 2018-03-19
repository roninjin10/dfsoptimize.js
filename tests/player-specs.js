describe('Player class functionality', function() {
  let player;

  beforeEach(function() {
    player = new Player(playerName, team, opponent, position, salary, projection);
  });


  it('should create a player', function() {
    expect(player instanceof Player).to.equal(true);
  });

});