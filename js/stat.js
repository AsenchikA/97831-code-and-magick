'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_OFFSET = 10;
var CLOUD_PADDING = 18;
var FONT_GEP = 16;

var COLUMN_WIDTH = 40;
var COLUMN_OFFSET = 50;
var GISTOGRAM_HEIGHT = 150;

var PLAYER_COLUMN_COLOR = 'rgba(255, 0, 0, 1)';
var CLOUD_COLOR = '#fff';
var TEXT_COLOR = '#000';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

// отрисовка облака резульатов
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH - CLOUD_WIDTH / 10, y + (CLOUD_HEIGHT) / 2);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
};

// отрисовка заголовка результатов
var renderText = function (ctx, textArray) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = '16px PT Mono';
  for (var i = 0; i < textArray.length; i++) {
    ctx.fillText(textArray[i], CLOUD_X + CLOUD_PADDING, CLOUD_Y + CLOUD_PADDING + (i + 1) * FONT_GEP);
  }
};

// получение лучшего результата среди игроков
var getWinnerResult = function (array) {
  var bestResult = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > bestResult) {
      bestResult = array[i];
    }
  }
  return bestResult;
};

// получение цвета колонки противника
var getColorColumn = function () {
  var alfa = Math.random();
  return 'rgba(0, 0, 255, ' + alfa + ')';
};

window.renderStatistics = function (ctx, names, times) {
  // Отрисовка облака с результатами
  renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  // Отрисовка заголовка
  renderText(ctx, ['Ура вы победили!', 'Список результатов:']);
  // получение максимального результата
  var maxResult = getWinnerResult(times);

  for (var i = 0; i < names.length; i++) {
    // вывод имен участников
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + CLOUD_PADDING + (COLUMN_WIDTH + COLUMN_OFFSET) * i, CLOUD_Y + CLOUD_HEIGHT - CLOUD_PADDING);

    // получение параметров для столбца каждого учатника (цвета и высоты)
    var colorColumnPlayer = (names[i] === 'Вы') ? PLAYER_COLUMN_COLOR : getColorColumn();
    var columnHeight = times[i] * GISTOGRAM_HEIGHT / maxResult;

    // отрисовка столбца для каждого учатника
    ctx.fillStyle = colorColumnPlayer;
    ctx.fillRect(CLOUD_X + CLOUD_PADDING + (COLUMN_WIDTH + COLUMN_OFFSET) * i, CLOUD_Y + CLOUD_HEIGHT - CLOUD_PADDING - columnHeight - FONT_GEP, COLUMN_WIDTH, columnHeight);

    // вывод результатов игроков
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.floor(times[i]), CLOUD_X + CLOUD_PADDING + (COLUMN_WIDTH + COLUMN_OFFSET) * i, CLOUD_Y + CLOUD_HEIGHT - CLOUD_PADDING - columnHeight - FONT_GEP * 2);
  }
};
