var TennisGame1 = function() {
  this.player1Score = 0;
  this.player2Score = 0;
  this.difference = 0;
};

TennisGame1.prototype.wonPoint = function(playerName) {
  var pointForPlayer1 = playerName === 'player1';
  this.player1Score += pointForPlayer1 ? 1 : 0;
  this.player2Score += pointForPlayer1 ? 0 : 1;
  this.difference = this.player1Score - this.player2Score;
};

TennisGame1.prototype.getScore = function() {
  if (this._isTie()) {
    return this._getTieScoreString();
  }
  if (this.player1Score < 4 && this.player2Score < 4) {
    return this._buildScoreString();
  }
  if (this._isAdvantage()) {
    return this._getAdvantageScoreString();
  }
  return this._getWinScoreString();
};




TennisGame1.prototype._getTieScoreString = function() {
  var ties = [
    'Love-All',
    'Fifteen-All',
    'Thirty-All'
  ];
  if (this.player1Score < ties.length) {
    return ties[this.player1Score];
  }
  return 'Deuce';
};

TennisGame1.prototype._getAdvantageScoreString = function() {
  if (this.difference === 1) {
    return "Advantage player1";
  }
  return "Advantage player2";
};

TennisGame1.prototype._getWinScoreString = function() {
  if (this.difference >= 2) {
    return "Win for player1";
  }
  return "Win for player2";
};

function _getScoreStringByPoints(score) {
  var scoreToString = [
    'Love',
    'Fifteen',
    'Thirty',
    'Forty'
  ];
  return scoreToString[score];
}

TennisGame1.prototype._isTie = function() {
  return this.difference === 0;
};

TennisGame1.prototype._isAdvantage = function() {
  return Math.abs(this.difference) == 1;
};
TennisGame1.prototype._buildScoreString = function() {
  return [
    _getScoreStringByPoints(this.player1Score),
    _getScoreStringByPoints(this.player2Score)
  ].join('-');
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
