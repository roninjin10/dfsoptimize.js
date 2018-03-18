// fanduel optimizer

const Player = function(playerName, team, opponent, position, salary, projection) {
  this.playerName = playerName;
  this.team = team;
  this.opponent = opponent;
  this.position = position;
  this.salary = salary;
  this.projection = projection;
}

const Lineup = function() {
  this.roster = {};
  this.salary = 0;
  this.projection = projection;
  this.failed = false;
}

const fdRoster = ['pg1', 'pg2', 'sg1', 'sg2', 'sf1', 'sf2', 'pf1', 'pf2', 'c'];

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

let memoize = {};

const optimize = function(playerPool, currentLineup, currentPlayer) {
  const dicKey = currentLineup.createKey(currentPlayer);

  if (memoize[dicKey] !== undefined) {
    return currentLineup.mergeLineups(memoize[dicKey]);
  }

  const lineupIfPass = optimize(playerPool, currentLineup, currentPlayer + 1);
  const lineupIfTake = optimize(playerPool, currentLineup.addPlayer(playerPool, currentPlayer), currentPlayer + 1);

  const out;
  if (lineupIfPass.failed || lineupIfTake.failed) {
    out = lineupIfPass.failed ? lineupIfTake : lineupIfPass;
  } else {
    out = lineupIfPass.projection > lineupIfTake.projection ? lineupIfPass : lineupIfTake;
  }

  memoize[dicKey] = out;
  return out;

};



