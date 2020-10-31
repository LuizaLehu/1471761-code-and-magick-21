'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const COLUMN_GAP = 50;
const FONT = 'PT Mono';
const FONT_GAP = 16;
const TEXT_HEIGHT = 16;
const SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
const MY_COLOR = 'rgba(255, 0, 0, 1)';
const MY_PLAYER = 'Вы'; 
const BASE_COLOR ='#000';
const CLOUD_COLOR = '#fff';
const NEW_BLUE_COLOR = 'hsl(240, 100%, 50%)';

/*let names = ['Вы', 'Кекс', 'Катя', 'Игорь'] */

/*const barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP; */

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function renderText(ctx, text, x, y, font, color) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

function getRandomColor() {
    return NEW_BLUE_COLOR + Math.random() * 100 + '%';
  }

 
var getMaxTime = function(times) {
    var maxTime = times[0];

    for (var i = 1; i < times.length; i++) {
        if (times[i] > maxTime) {
          maxTime = times[i];
        }
      }

    return maxTime;
};

function drawColumn(ctx, index, name, color, time, maxTime) {
    ctx.fillStyle = BASE_COLOR;
    time = Math.floor(BAR_HEIGHT*time/maxTime);

    renderText (ctx, name, CLOUD_X + COLUMN_GAP+(BAR_WIDTH + COLUMN_GAP) * index, FONT, BASE_COLOR);
    renderText (ctx, time, CLOUD_X + COLUMN_GAP+(BAR_WIDTH + COLUMN_GAP) * index, FONT, BASE_COLOR);
    ctx.fillStyle = color;
    ctx.fillRect( CLOUD_X + COLUMN_GAP+(BAR_WIDTH + COLUMN_GAP) + index, time);
}



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

    
    for (var i = 0; i < names.length; i++) {
     /* let color ='';
      
      if (names[i] === MY_PLAYER) {
          color = MY_COLOR
      }
      else {
          color = getRandomColor();
      }
      drawColumn(i, names[i], color, times[i], getMaxTime(times), ctx);
        
        }
        
        
        
        renderText(ctx, 'Ура вы победили!', CLOUD_X + FOUNT_GAP, CLOUD_Y + FOUNT_GAP, MAIN_FONT, MAIN_COLOR);
        
        renderText(ctx, 'Список результатов:', CLOUD_X + FOUNT_GAP, CLOUD_Y + FOUNT_GAP + FOUNT_GAP, MAIN_FONT, MAIN_COLOR);
        
        
    }
     */

    ctx.fillText(
    names,
        CLOUD_X + GAP + FONT_GAP + (COLUMN_GAP + BAR_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT, 
        );
    ctx.fillRect(
        CLOUD_X + GAP + (COLUMN_GAP + BAR_WIDTH) * i,
        CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT - TEXT_HEIGHT - GAP*2,
        BAR_WIDTH,
        BAR_HEIGHT
        );
    }
}; 



     