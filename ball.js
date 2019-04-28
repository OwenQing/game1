var Ball = function(){
		// 注意一下定义类的方法，函数式编程
		var image = imageFromPath('img/ball.png')
		var o = {
			image: image,
			x: 100,
			y: 100,
			speedX: 15,
			speedY: 15,
			fired: false,
			
		}
		// 这种定义方法的方式,就不用把映射关系写在字典里面了，否则就会报错
		o.fire = function() {
			o.fired = true
		}
		o.move = function() {
			if (o.fired) {
				// move 速度的分解与合成，x, y 方向上各有一个速度，表象出来的感觉就式斜的
				if (o.x < 0 || o.x > 400) {
					o.speedX *= -1
				}
				if (o.y< 0 || o.y > 300) {
					o.speedY *= -1
				}
				o.x += o.speedX
				o.y += o.speedY
			}
		}
		o.rebound = function() {
			// 反弹函数
			o.speedY *= -1
		}
		return o
	}