var Block = function(position){
		// 这是一个砖块
		// position --> [0, 0]
		var p = position
		var image = imageFromPath('img/block.png')
		var o = {
			image: image,
			x: p[0],
			y: p[1],
			w: 50,
			h: 20,
			alive: true,	
		}
		
		o.kill = function() {
			o.alive = false
		}
		o.collide = function(b) {
			// 判断两个矩形是否相交
			return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
		}
		return o
	}