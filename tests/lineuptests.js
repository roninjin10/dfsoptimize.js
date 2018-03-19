describe('Lineup class functionality', function() {
  let lineup;

   beforeEach(function() {
    pg1 = Player('p1','t','o','PG','5000','25');
    pg2 = Player('p2','t','o','PG','5000','25');
    sg1 = Player('p3','t','o','SG','5000','25');
    sg2 = Player('p4','t','o','SG','5000','25');
    sf1 = Player('p5','t','o','SF','5000','25');
    sf2 = Player('p6','t','o','SF','5000','25');
    pf1 = Player('p7','t','o','PF','5000','25');
    pf2 = Player('p8','t','o','PF','5000','25');
    c1 = Player('p9','t','o','C','5000','25');
    lineup = new Lineup();
   });


  it('should create a Lineup', function() {
    expect(lineup instanceof Lineup).to.equal(true);
  });

  it('should create a key', function() {

  });
});