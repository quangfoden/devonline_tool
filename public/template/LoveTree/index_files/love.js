(function(window){
    function random(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    function bezier(cp, t) {
        var p1 = cp[0].mul((1 - t) * (1 - t));
        var p2 = cp[1].mul(2 * t * (1 - t));
        var p3 = cp[2].mul(t * t);
        return p1.add(p2).add(p3);
    }

    function inheart(x, y, r) {
        var z = ((x / r) * (x / r) + (y / r) * (y / r) - 1) * ((x / r) * (x / r) + (y / r) * (y / r) - 1) * ((x / r) * (x / r) + (y / r) * (y / r) - 1) - (x / r) * (x / r) * (y / r) * (y / r) * (y / r);
        return z < 0;
    }

    Point = function(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    Point.prototype = {
        clone: function() { return new Point(this.x, this.y); },
        add:   function(o) { p = this.clone(); p.x += o.x; p.y += o.y; return p; },
        sub:   function(o) { p = this.clone(); p.x -= o.x; p.y -= o.y; return p; },
        div:   function(n) { p = this.clone(); p.x /= n; p.y /= n; return p; },
        mul:   function(n) { p = this.clone(); p.x *= n; p.y *= n; return p; }
    }

    Heart = function() {
        var points = [], x, y, t;
        for (var i = 10; i < 30; i += 0.2) {
            t = i / Math.PI;
            x = 16 * Math.pow(Math.sin(t), 3);
            y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
            points.push(new Point(x, y));
        }
        this.points = points;
        this.length = points.length;
    }
    Heart.prototype = {
        get: function(i, scale) { return this.points[i].mul(scale || 1); }
    }

    Seed = function(tree, point, scale, color) {
        this.tree = tree;
        var scale = scale || 1;
        var color = color || '#FF0000';
        this.heart = { point: point, scale: scale, color: color, figure: new Heart() };
        this.cirle = { point: point, scale: scale, color: color, radius: 5 };

        // Bus animation state
        this._busAnim = 0;
        this._busWheelAngle = 0;
        this._busHovered = false;
        this._busX = 0; // relative to label anchor, animated
    }
    Seed.prototype = {
        draw: function() {
            this.drawHeart();
            this.drawText();
        },
        addPosition: function(x, y) {
            this.cirle.point = this.cirle.point.add(new Point(x, y));
        },
        canMove: function() { return this.cirle.point.y < (this.tree.height + 20); },
        move: function(x, y) { this.clear(); this.drawCirle(); this.addPosition(x, y); },
        canScale: function() { return this.heart.scale > 0.2; },
        setHeartScale: function(scale) { this.heart.scale *= scale; },
        scale: function(scale) { this.clear(); this.drawCirle(); this.drawHeart(); this.setHeartScale(scale); },
        drawHeart: function() {
            var ctx = this.tree.ctx, heart = this.heart;
            var point = heart.point, color = heart.color, scale = heart.scale;
            ctx.save();
            ctx.fillStyle = color;
            ctx.translate(point.x, point.y);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            for (var i = 0; i < heart.figure.length; i++) {
                var p = heart.figure.get(i, scale);
                ctx.lineTo(p.x, -p.y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        },
        drawCirle: function() {
            var ctx = this.tree.ctx, cirle = this.cirle;
            var point = cirle.point, color = cirle.color, scale = cirle.scale, radius = cirle.radius;
            ctx.save();
            ctx.fillStyle = color;
            ctx.translate(point.x, point.y);
            ctx.scale(scale, scale);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        },

        // ─────────────────────────────────────────────────────────────
        //  drawText — replaced with romantic mini-bus on canvas
        // ─────────────────────────────────────────────────────────────
        drawText: function() {
            var ctx  = this.tree.ctx;
            var heart = this.heart;
            var point = heart.point;
            var scale = heart.scale;

            ctx.save();
            ctx.translate(point.x, point.y);
            ctx.scale(scale * 0.75, scale * 0.75);

            // connector line (same as before)
            ctx.strokeStyle = heart.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(15, 15);
            ctx.lineTo(60, 15);
            ctx.stroke();

            // ── animate bus X offset (gentle bob left-right) ──
            this._busAnim += 0.06;
            this._busWheelAngle += 0.18;
            var bobX = Math.sin(this._busAnim) * 2.5;

            // label anchor: starts at (23, 16) just like before
            var lx = 23 + bobX;
            var ly = 16;

            // ── draw bus ──
            this._drawBus(ctx, lx, ly - 28);

            ctx.restore();
        },

        // Draw a cute mini bus centred at (bx, by) on whatever ctx/transform is active
        _drawBus: function(ctx, bx, by) {
            var w  = 62;   // bus width
            var h  = 26;   // bus body height
            var r  = 4;    // corner radius
            var wa = this._busWheelAngle;

            ctx.save();
            ctx.translate(bx, by);

            // ── glow / shadow ──
            ctx.shadowColor = 'rgba(255, 100, 150, 0.55)';
            ctx.shadowBlur  = 8;

            // ── body ──
            ctx.beginPath();
            ctx.moveTo(r, 0);
            ctx.lineTo(w - r, 0);
            ctx.quadraticCurveTo(w, 0, w, r);
            ctx.lineTo(w, h - r);
            ctx.quadraticCurveTo(w, h, w - r, h);
            ctx.lineTo(r, h);
            ctx.quadraticCurveTo(0, h, 0, h - r);
            ctx.lineTo(0, r);
            ctx.quadraticCurveTo(0, 0, r, 0);
            ctx.closePath();
            var bodyGrad = ctx.createLinearGradient(0, 0, 0, h);
            bodyGrad.addColorStop(0, '#ff6b9d');
            bodyGrad.addColorStop(0.5, '#e75480');
            bodyGrad.addColorStop(1, '#c0395f');
            ctx.fillStyle = bodyGrad;
            ctx.fill();
            ctx.shadowBlur = 0;

            // ── gold stripe ──
            ctx.fillStyle = 'rgba(255, 217, 125, 0.75)';
            ctx.fillRect(0, h * 0.62, w, 3);

            // ── destination sign (top of bus) ──
            ctx.fillStyle = 'rgba(255,245,140,0.92)';
            ctx.beginPath();
            ctx.roundRect
                ? ctx.roundRect(6, 2, w - 12, 7, 2)
                : (function(c){ c.fillRect(6,2,w-12,7); })(ctx);
            ctx.fill();
            ctx.fillStyle = '#7a1c35';
            ctx.font = 'bold 5px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('💖 Hạnh Phúc 💖', w / 2, 8);

            // ── windows ──
            var wins = [
                { x: 6,  ww: 11, wh: 11 },
                { x: 20, ww: 11, wh: 11 },
                { x: 34, ww: 11, wh: 11 },
            ];
            wins.forEach(function(win, idx) {
                // window frame
                ctx.fillStyle = '#b3e5fc';
                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(win.x, 10, win.ww, win.wh, 2);
                } else {
                    ctx.rect(win.x, 10, win.ww, win.wh);
                }
                ctx.fill();
                // glare
                ctx.fillStyle = 'rgba(255,255,255,0.55)';
                ctx.fillRect(win.x + 1, 11, 4, 3);
                // heart in middle window
                if (idx === 1) {
                    ctx.font = '7px serif';
                    ctx.textAlign = 'center';
                    ctx.fillStyle = '#e75480';
                    ctx.fillText('♥', win.x + win.ww / 2, 19);
                }
            });

            // ── door (right side) ──
            ctx.fillStyle = 'rgba(150,30,70,0.9)';
            ctx.fillRect(48, 10, 9, 14);
            ctx.fillStyle = 'rgba(255,255,255,0.25)';
            ctx.fillRect(52, 10, 1, 14); // door split line
            // door handle
            ctx.fillStyle = '#ffd97d';
            ctx.beginPath();
            ctx.arc(49.5, 18, 1.2, 0, Math.PI * 2);
            ctx.fill();

            // ── front bumper / grill ──
            ctx.fillStyle = '#9e2a4e';
            ctx.fillRect(w - 4, 4, 4, h - 8);
            // headlight
            var hlGrad = ctx.createRadialGradient(w - 1, 8, 0, w - 1, 8, 5);
            hlGrad.addColorStop(0, '#fffde7');
            hlGrad.addColorStop(1, 'rgba(255,213,79,0)');
            ctx.fillStyle = hlGrad;
            ctx.beginPath();
            ctx.arc(w - 1, 8, 5, 0, Math.PI * 2);
            ctx.fill();

            // actual headlight circle
            ctx.fillStyle = '#ffd54f';
            ctx.beginPath();
            ctx.arc(w - 2, 8, 2.5, 0, Math.PI * 2);
            ctx.fill();

            // ── wheels ──
            var wheelPositions = [{ x: 10 }, { x: 50 }];
            wheelPositions.forEach(function(wp) {
                var cx = wp.x, cy = h + 4;
                // tyre
                ctx.fillStyle = '#333';
                ctx.beginPath();
                ctx.arc(cx, cy, 5.5, 0, Math.PI * 2);
                ctx.fill();
                // rim
                ctx.fillStyle = '#aaa';
                ctx.beginPath();
                ctx.arc(cx, cy, 3.2, 0, Math.PI * 2);
                ctx.fill();
                // spokes (rotate with wa)
                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(wa);
                ctx.strokeStyle = '#777';
                ctx.lineWidth = 0.8;
                for (var s = 0; s < 4; s++) {
                    ctx.rotate(Math.PI / 4);
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(0, 3);
                    ctx.stroke();
                }
                ctx.restore();
                // hub dot
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(cx, cy, 1, 0, Math.PI * 2);
                ctx.fill();
            });

            // ── "Lên xe" text below bus ──
            ctx.shadowColor = 'rgba(219, 19, 79, 0.7)';
            ctx.shadowBlur  = 6;
            ctx.fillStyle   = 'red';
            ctx.font        = 'bold 6.5px "Quicksand", sans-serif';
            ctx.textAlign   = 'center';
            ctx.fillText('🚌 Lên xe nào! 💖', w / 2, h + 18);
            ctx.shadowBlur  = 0;

            ctx.restore();
        },

        clear: function() {
            var ctx = this.tree.ctx, cirle = this.cirle;
            var point = cirle.point, scale = cirle.scale, radius = 26;
            var w = h = (radius * scale);
            ctx.clearRect(point.x - w, point.y - h, 4 * w, 4 * h);
        },
        hover: function(x, y) {
            var ctx = this.tree.ctx;
            var pixel = ctx.getImageData(x, y, 1, 1);
            return pixel.data[3] == 255;
        }
    }

    Footer = function(tree, width, height, speed) {
        this.tree = tree;
        this.point = new Point(tree.seed.heart.point.x, tree.height - height / 2);
        this.width = width;
        this.height = height;
        this.speed = speed || 2;
        this.length = 0;
    }
    Footer.prototype = {
        draw: function() {
            var ctx = this.tree.ctx, point = this.point;
            var len = this.length / 2;
            ctx.save();
            ctx.strokeStyle = 'rgb(35, 31, 32)';
            ctx.lineWidth = this.height;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.translate(point.x, point.y);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(len, 0);
            ctx.lineTo(-len, 0);
            ctx.stroke();
            ctx.restore();
            if (this.length < this.width) { this.length += this.speed; }
        }
    }

    Tree = function(canvas, width, height, opt) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = width;
        this.height = height;
        this.opt = opt || {};
        this.record = {};
        this.initSeed();
        this.initFooter();
        this.initBranch();
        this.initBloom();
    }
    Tree.prototype = {
        initSeed: function() {
            var seed = this.opt.seed || {};
            var x = seed.x || this.width / 2;
            var y = seed.y || this.height / 2;
            var point = new Point(x, y);
            var color = seed.color || '#FF0000';
            var scale = seed.scale || 1;
            this.seed = new Seed(this, point, scale, color);
        },
        initFooter: function() {
            var footer = this.opt.footer || {};
            var width  = footer.width  || this.width;
            var height = footer.height || 5;
            var speed  = footer.speed  || 2;
            this.footer = new Footer(this, width, height, speed);
        },
        initBranch: function() {
            var branchs = this.opt.branch || [];
            this.branchs = [];
            this.addBranchs(branchs);
        },
        initBloom: function() {
            var bloom = this.opt.bloom || {};
            var cache = [], num = bloom.num || 500,
                width = bloom.width || this.width,
                height = bloom.height || this.height,
                figure = this.seed.heart.figure;
            var r = 240;
            for (var i = 0; i < num; i++) {
                cache.push(this.createBloom(width, height, r, figure));
            }
            this.blooms = [];
            this.bloomsCache = cache;
        },
        toDataURL: function(type) { return this.canvas.toDataURL(type); },
        draw: function(k) {
            var s = this, ctx = s.ctx;
            var rec = s.record[k];
            if (!rec) return;
            var point = rec.point, image = rec.image;
            ctx.save();
            ctx.putImageData(image, point.x, point.y);
            ctx.restore();
        },
        addBranch:    function(branch)  { this.branchs.push(branch); },
        addBranchs:   function(branchs) {
            var s = this, b, p1, p2, p3, r, l, c;
            for (var i = 0; i < branchs.length; i++) {
                b = branchs[i];
                p1 = new Point(b[0], b[1]);
                p2 = new Point(b[2], b[3]);
                p3 = new Point(b[4], b[5]);
                r = b[6]; l = b[7]; c = b[8];
                s.addBranch(new Branch(s, p1, p2, p3, r, l, c));
            }
        },
        removeBranch: function(branch) {
            var branchs = this.branchs;
            for (var i = 0; i < branchs.length; i++) {
                if (branchs[i] === branch) { branchs.splice(i, 1); }
            }
        },
        canGrow: function() { return !!this.branchs.length; },
        grow: function() {
            var branchs = this.branchs;
            for (var i = 0; i < branchs.length; i++) {
                if (branchs[i]) { branchs[i].grow(); }
            }
        },
        addBloom:    function(bloom)  { this.blooms.push(bloom); },
        removeBloom: function(bloom)  {
            var blooms = this.blooms;
            for (var i = 0; i < blooms.length; i++) {
                if (blooms[i] === bloom) { blooms.splice(i, 1); }
            }
        },
        createBloom: function(width, height, radius, figure, color, alpha, angle, scale, place, speed) {
            var x, y;
            while (true) {
                x = random(20, width - 20);
                y = random(20, height - 20);
                if (inheart(x - width / 2, height - (height - 40) / 2 - y, radius)) {
                    return new Bloom(this, new Point(x, y), figure, color, alpha, angle, scale, place, speed);
                }
            }
        },
        canFlower: function() { return !!this.blooms.length; },
        flower: function(num) {
            var s = this, blooms = s.bloomsCache.splice(0, num);
            for (var i = 0; i < blooms.length; i++) { s.addBloom(blooms[i]); }
            blooms = s.blooms;
            for (var j = 0; j < blooms.length; j++) { blooms[j].flower(); }
        },
        snapshot: function(k, x, y, width, height) {
            var ctx = this.ctx;
            var image = ctx.getImageData(x, y, width, height);
            this.record[k] = { image: image, point: new Point(x, y), width: width, height: height };
        },
        setSpeed: function(k, speed) { this.record[k || "move"].speed = speed; },
        move: function(k, x, y) {
            var s = this, ctx = s.ctx;
            var rec = s.record[k || "move"];
            var point = rec.point, image = rec.image,
                speed = rec.speed || 10, width = rec.width, height = rec.height;
            i = point.x + speed < x ? point.x + speed : x;
            j = point.y + speed < y ? point.y + speed : y;
            ctx.save();
            ctx.clearRect(point.x, point.y, width, height);
            ctx.putImageData(image, i, j);
            ctx.restore();
            rec.point = new Point(i, j);
            rec.speed = speed * 0.95;
            if (rec.speed < 2) { rec.speed = 2; }
            return i < x || j < y;
        },
        jump: function() {
            var s = this, blooms = s.blooms;
            if (blooms.length) {
                for (var i = 0; i < blooms.length; i++) { blooms[i].jump(); }
            }
            if ((blooms.length && blooms.length < 3) || !blooms.length) {
                var bloom = this.opt.bloom || {},
                    width = bloom.width || this.width,
                    height = bloom.height || this.height,
                    figure = this.seed.heart.figure;
                var r = 240;
                for (var i = 0; i < random(1, 2); i++) {
                    blooms.push(this.createBloom(width / 2 + width, height, r, figure, null, 1, null, 1, new Point(random(-100, 600), 720), random(200, 300)));
                }
            }
        }
    }

    Branch = function(tree, point1, point2, point3, radius, length, branchs) {
        this.tree = tree;
        this.point1 = point1; this.point2 = point2; this.point3 = point3;
        this.radius = radius;
        this.length = length || 100;
        this.len = 0;
        this.t = 1 / (this.length - 1);
        this.branchs = branchs || [];
    }
    Branch.prototype = {
        grow: function() {
            var s = this, p;
            if (s.len <= s.length) {
                p = bezier([s.point1, s.point2, s.point3], s.len * s.t);
                s.draw(p);
                s.len += 1;
                s.radius *= 0.97;
            } else {
                s.tree.removeBranch(s);
                s.tree.addBranchs(s.branchs);
            }
        },
        draw: function(p) {
            var s = this, ctx = s.tree.ctx;
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = 'rgb(35, 31, 32)';
            ctx.shadowColor = 'rgb(35, 31, 32)';
            ctx.shadowBlur = 2;
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, s.radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

    Bloom = function(tree, point, figure, color, alpha, angle, scale, place, speed) {
        this.tree = tree;
        this.point = point;
        this.color = color || 'rgb(255,' + random(0, 255) + ',' + random(0, 255) + ')';
        this.alpha = alpha || random(0.3, 1);
        this.angle = angle || random(0, 360);
        this.scale = scale || 0.1;
        this.place = place;
        this.speed = speed;
        this.figure = figure;
    }
    Bloom.prototype = {
        setFigure: function(figure) { this.figure = figure; },
        flower: function() {
            var s = this;
            s.draw();
            s.scale += 0.1;
            if (s.scale > 1) { s.tree.removeBloom(s); }
        },
        draw: function() {
            var s = this, ctx = s.tree.ctx, figure = s.figure;
            ctx.save();
            ctx.fillStyle = s.color;
            ctx.globalAlpha = s.alpha;
            ctx.translate(s.point.x, s.point.y);
            ctx.scale(s.scale, s.scale);
            ctx.rotate(s.angle);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            for (var i = 0; i < figure.length; i++) {
                var p = figure.get(i);
                ctx.lineTo(p.x, -p.y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        },
        jump: function() {
            var s = this, height = s.tree.height;
            if (s.point.x < -20 || s.point.y > height + 20) {
                s.tree.removeBloom(s);
            } else {
                s.draw();
                s.point = s.place.sub(s.point).div(s.speed).add(s.point);
                s.angle += 0.05;
                s.speed -= 1;
            }
        }
    }

    window.random = random;
    window.bezier = bezier;
    window.Point  = Point;
    window.Tree   = Tree;

})(window);