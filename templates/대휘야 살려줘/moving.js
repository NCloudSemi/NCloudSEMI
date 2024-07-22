let sketch = Sketch.create();
sketch.mouse.x = sketch.width / 10;
sketch.mouse.y = sketch.height;
let skylines = [];
let dt = 1;

//
// BUILDINGS
//

class Building {
    constructor(config) {
        this.reset(config);
    }

    reset(config) {
        this.layer = config.layer;
        this.x = config.x;
        this.y = config.y;
        this.width = config.width;
        this.height = config.height;
        this.color = config.color;
        this.slantedTop = Math.floor(Math.random() * 10) === 0;
        this.slantedTopHeight = this.width / Math.random() * (4 - 2) + 2;
        this.slantedTopDirection = Math.round(Math.random()) === 0;
        this.spireTop = Math.floor(Math.random() * 15) === 0;
        this.spireTopWidth = Math.random() * (this.width * 0.07 - this.width * 0.01) + this.width * 0.01;
        this.spireTopHeight = Math.random() * (20 - 10) + 10;
        this.antennaTop = !this.spireTop && Math.floor(Math.random() * 10) === 0;
        this.antennaTopWidth = this.layer / 2;
        this.antennaTopHeight = Math.random() * (20 - 5) + 5;
    }

    render() {
        sketch.fillStyle = sketch.strokeStyle = this.color;
        sketch.lineWidth = 2;

        sketch.beginPath();
        sketch.rect(this.x, this.y, this.width, this.height);
        sketch.fill();
        sketch.stroke();

        if (this.slantedTop) {
            sketch.beginPath();
            sketch.moveTo(this.x, this.y);
            sketch.lineTo(this.x + this.width, this.y);
            if (this.slantedTopDirection) {
                sketch.lineTo(this.x + this.width, this.y - this.slantedTopHeight);
            } else {
                sketch.lineTo(this.x, this.y - this.slantedTopHeight);
            }
            sketch.closePath();
            sketch.fill();
            sketch.stroke();
        }

        if (this.spireTop) {
            sketch.beginPath();
            sketch.moveTo(this.x + (this.width / 2), this.y - this.spireTopHeight);
            sketch.lineTo(this.x + (this.width / 2) + this.spireTopWidth, this.y);
            sketch.lineTo(this.x + (this.width / 2) - this.spireTopWidth, this.y);
            sketch.closePath();
            sketch.fill();
            sketch.stroke();
        }

        if (this.antennaTop) {
            sketch.beginPath();
            sketch.moveTo(this.x + (this.width / 2), this.y - this.antennaTopHeight);
            sketch.lineTo(this.x + (this.width / 2), this.y);
            sketch.lineWidth = this.antennaTopWidth;
            sketch.stroke();
        }
    }
}

//
// SKYLINES
//

class Skyline {
    constructor(config) {
        this.x = 0;
        this.buildings = [];
        this.layer = config.layer;
        this.width = {
            min: config.width.min,
            max: config.width.max
        };
        this.height = {
            min: config.height.min,
            max: config.height.max
        };
        this.speed = config.speed;
        this.color = config.color;
        this.populate();
    }

    populate() {
        let totalWidth = 0;
        while (totalWidth <= sketch.width + this.width.max * 2) {
            let newWidth = Math.round(Math.random() * (this.width.max - this.width.min) + this.width.min);
            let newHeight = Math.round(Math.random() * (this.height.max - this.height.min) + this.height.min);
            this.buildings.push(new Building({
                layer: this.layer,
                x: this.buildings.length === 0 ? 0 : this.buildings[this.buildings.length - 1].x + this.buildings[this.buildings.length - 1].width,
                y: sketch.height - newHeight,
                width: newWidth,
                height: newHeight,
                color: this.color
            }));
            totalWidth += newWidth;
        }
    }

    update() {
        this.x -= (sketch.mouse.x * this.speed) * dt;

        let firstBuilding = this.buildings[0];
        if (firstBuilding.width + firstBuilding.x + this.x < 0) {
            let newWidth = Math.round(Math.random() * (this.width.max - this.width.min) + this.width.min);
            let newHeight = Math.round(Math.random() * (this.height.max - this.height.min) + this.height.min);
            let lastBuilding = this.buildings[this.buildings.length - 1];
            firstBuilding.reset({
                layer: this.layer,
                x: lastBuilding.x + lastBuilding.width,
                y: sketch.height - newHeight,
                width: newWidth,
                height: newHeight,
                color: this.color
            });
            this.buildings.push(this.buildings.shift());
        }
    }

    render() {
        let i = this.buildings.length;
        sketch.save();
        sketch.translate(this.x, (sketch.height - sketch.mouse.y) / 20 * this.layer);
        while (i--) {
            this.buildings[i].render(i);
        }
        sketch.restore();
    }
}

//
// SETUP
//

sketch.setup = function() {
    for (let i = 5; i > 0; i--) {
        skylines.push(new Skyline({
            layer: i,
            width: {
                min: (i + 1) * 30,
                max: (i + 1) * 40
            },
            height: {
                min: 150 - (i * 35),
                max: 300 - (i * 35)
            },
            speed: (i + 1) * 0.003,
            color: `hsl(200, ${((i + 1) * 1) + 10}%, ${75 - (i * 13)}%)`
        }));
    }
};

//
// CLEAR
//

sketch.clear = function() {
    sketch.clearRect(0, 0, sketch.width, sketch.height);
};

//
// UPDATE
//

sketch.update = function() {
    dt = sketch.dt < 0.1 ? 0.1 : sketch.dct / 16;
    dt = dt > 5 ? 5 : dt;
    for (let i = skylines.length - 1; i >= 0; i--) {
        skylines[i].update(i);
    }
};

//
// DRAW
//

sketch.draw = function() {
    for (let i = skylines.length - 1; i >= 0; i--) {
        skylines[i].render(i);
    }
};

//
// Mousemove Fix
//

$(window).on('mousemove', function(e) {
    sketch.mouse.x = e.pageX;
    sketch.mouse.y = e.pageY;
});