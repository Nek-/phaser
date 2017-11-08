var Body = require('./Body');
var Class = require('../../utils/Class');

// var ImpactBody = require('./ImpactBody');
// var ImpactImage = require('./ImpactImage');
// var ImpactSprite = require('./ImpactSprite');

var Factory = new Class({

    initialize:

    function Factory (world)
    {
        this.world = world;

        this.sys = world.scene.sys;
    },

    body: function (gameObject)
    {
        return new Body(this.world, gameObject);
    }

    /*
    image: function (x, y, key, frame)
    {
        var image = new ImpactImage(this.world, x, y, key, frame);

        this.sys.displayList.add(image);

        return image;
    },

    sprite: function (x, y, key, frame)
    {
        var sprite = new ImpactSprite(this.world, x, y, key, frame);

        this.sys.displayList.add(sprite);
        this.sys.updateList.add(sprite);

        return sprite;
    }
    */

});

module.exports = Factory;
