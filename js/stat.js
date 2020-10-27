'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const COLUMN_GAP = 50;
const FONT = 'PT Mono';
const FONT_GAP = 16;
const TEXT_HEIGHT = 16;
const SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
const MY_COLOR = 'rgba(255, 0, 0, 1)';
const MY_PLAYER = 'Вы';
const CLOUD_COLOR = '#fff';
const NEW_BLUE_COLOR = 'hsl(240, 100%, 50%)';

/*const barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP; */

function getRandomColor() {
    return NEW_BLUE_COLOR + Math.random() * 100 + '%';
  }

function renderText(ctx, text, x, y, font, color) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}


var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
 

var getMaxTime = function(times) {
    var maxTime = times[0];

    for (var i = 1; i < times.length; i++) {
        if (times[i] > maxTime) {
          maxTime = times[i];
        }
      }

    return maxTime;
};

window.renderStatistics = function(ctx, names, times) {
    renderCloud(
        ctx,
        CLOUD_X + GAP,
        CLOUD_Y + GAP,
        'rgba(0, 0, 0, 0.7)'
        );
    renderCloud(
        ctx,
        CLOUD_X,
        CLOUD_Y,
        '#fff'
        );

    ctx.fillStyle = '#000';

    var names = getMaxTime(names);

    for (var i = 0; i < names.length; i++) {
       
    ctx.fillText(
    'test',
        CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * i,
        CLOUD_Y + GAP 
        );
    ctx.fillRect(
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
        CLOUD_Y + GAP + TEXT_HEIGHT,
        BAR_WIDTH,
        barHeight
        );
    }
};



     /*   var playerIndex = 1;
        var playerName = 'Катя';

    ctx.fillText(
        playerName,
        CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * playerIndex,
        CLOUD_Y + GAP 
        );
    ctx.fillRect(
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * playerIndex,
        CLOUD_Y + GAP,
        BAR_WIDTH,
        barHeight
        );
  
        playerIndex = 2;
        playerName = 'Юрий';

    ctx.fillText(
        playerName,
        CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) * playerIndex,
        CLOUD_Y + GAP 
        );
        
    ctx.fillRect(
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * playerIndex,
        CLOUD_Y + GAP,
        BAR_WIDTH,
        barHeight 
      );

      playerIndex = 3;
      playerName = 'Кекс';

    ctx.fillText(
        playerName,
        CLOUD_X + GAP + FONT_GAP + (GAP + BAR_WIDTH) *playerIndex,
        CLOUD_Y + GAP 
        );
        
    ctx.fillRect(
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * playerIndex,
        CLOUD_Y + GAP,
        BAR_WIDTH,
        barHeight
        );
};
*/