'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_WIDTH = 100;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 50;
var barHeight = CLOUD_HEIGHT / 2;

var renderCloud = function (ctx, x, y, color, shadow) {
  ctx.fillStyle = shadow;
  ctx.fillRect(x + GAP, y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', 'rgba(0, 0, 0, 0.7)');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + 5 * GAP + (TEXT_WIDTH) * i, CLOUD_HEIGHT - TEXT_HEIGHT - barHeight * times[i] / maxTime - GAP);
    ctx.fillText(names[i], CLOUD_X + 5 * GAP + (TEXT_WIDTH) * i, CLOUD_HEIGHT);
    var value = Math.floor(Math.random() * Math.floor(101));
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + value + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + 5 * GAP + (TEXT_WIDTH) * i, CLOUD_HEIGHT - TEXT_HEIGHT - barHeight * times[i] / maxTime, BAR_WIDTH, barHeight * times[i] / maxTime);
  }
};
