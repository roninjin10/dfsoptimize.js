const Lineup = function() {
  this.roster = {};
  this.salary = 0;
  this.projection = projection;
  this.failed = false;
}

Lineup.prototype.createKey = function(currentPlayer) {
  return JSON.stringify(fdRoster.map(pos => this.roster[pos].length)) + currentPlayer;
}

Lineup.prototype.mergeLineups = function(lineup) {
  Object.keys(lineup).forEach(pos => {
    if (!this.roster[pos]) {
      this.roster[pos] = lineup.roster[pos];
    }
  })
  return this;
};

Lineup.prototype.addPlayer = function(player) {
  const addPosition = {
    'pg': ['pg1', 'pg2'],
    'sg': ['sg1', 'sg2'],
    'sf': ['sf1', 'sf2'],
    'pf': ['pf1', 'pf2'],
    'c': ['c']
  }

  addPosition[player.position].forEach(pos => {
    if (!this.roster[pos]) {
      this.roster[pos] = player;
    }
  });
  this.salary += player.salary;
  this.projection += player.projection;

  return this;
};

