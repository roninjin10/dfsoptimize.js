const Optimizer = function() {
  this.memoized = {};
};

Optimizer.prototype.optimize = function(playerPool, currentLineup, currentPlayer) {
  const dicKey = currentLineup.createKey(currentPlayer);

  if (memoize[dicKey] !== undefined) {
    return currentLineup.mergeLineups(memoize[dicKey]);
  }

  const lineupIfPass = optimize(playerPool, currentLineup, currentPlayer + 1);
  const lineupIfTake = optimize(playerPool, currentLineup.addPlayer(playerPool, currentPlayer), currentPlayer + 1);

  let out;
  if (lineupIfPass.failed || lineupIfTake.failed) {
    out = lineupIfPass.failed ? lineupIfTake : lineupIfPass;
  } else {
    out = lineupIfPass.projection > lineupIfTake.projection ? lineupIfPass : lineupIfTake;
  }

  memoize[dicKey] = out;
  return out;

};
