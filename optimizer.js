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

Lineup.prototype.createKey = function(currentPlayer) {

}

Lineup.prototype.mergeLineups = function(lineup) {

}

let memoize = {};

const optimize = function(playerPool, currentLineup, currentPlayer) {
  const dicKey = currentLineup.createKey(currentPlayer);

  if (memoize[dicKey] !== undefined) {
    return currentLineup.mergeLineups(memoize[dicKey]);
  }

  lineupIfPass = optimize(playerPool, currentLineup, currentPlayer + 1);

  lineupIfTake = optimize(playerPool, currentLineup.add(playerPool, currentPlayer), currentPlayer + 1);

  let out;
  if (lineupIfPass.failed || lineupIfTake.failed) {
    out = lineupIfPass.failed ? lineupIfTake : lineupIfPass;
  } else {
    out = lineupIfPass.projection > lineupIfTake.projection ? lineupIfPass : lineupIfTake;
  }

  memoize[dicKey] = out;
  return out;
};



