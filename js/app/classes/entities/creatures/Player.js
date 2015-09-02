/*!
 * Player
 * Version: 1.0.0
 * Date: 2015/08/30
 * Source: https://gihub.com/jleelove/TileGame
 *
 * Copyright (c) 2015 Jamie Nichols
 * https://github.com/jleelove/
 * jamie337nichols
 * Jamie337nichols@gmail.com
 *
 * Description
 * 
 *
 * Dependencies
 * 
 */
define(['Creature','Assets'],function(Creature,Assets){

    var Player = Creature.extend({
        init:function(_handler,_x,_y){
            this._super(_handler,_x,_y,Creature.DEFAULT_WIDTH,Creature.DEFAULT_CREATURE_HEIGHT);
            this.assets = Assets.getAssets('player');

        },
        tick:function(_dt){
            this.getInput(_dt);
            this.move();
            this.handler.getGameCamera().centerOnEntity(this);
        },
        render:function(_g){
            _g.myDrawImage(this.assets.idle,this.x - this.handler.getGameCamera().getxOffset(),this.y - this.handler.getGameCamera().getyOffset(),this.assets.width,this.assets.height);

        },
        getInput:function(_dt) {
            this.xMove=0;
            this.yMove=0;
            if(this.handler.getKeyManager().up){
                this.yMove = -this.speed * _dt;
            }
            if(this.handler.getKeyManager().down){
                this.yMove = this.speed * _dt;
            }
            if(this.handler.getKeyManager().left){
                this.xMove = -this.speed * _dt;
            }
            if(this.handler.getKeyManager().right){
                this.xMove = this.speed * _dt;
            }

        }
    });

    return Player;
});