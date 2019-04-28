var Game = function(){
		var g = {
			actions: {},
			keydowns: {},
		}
		var canvas = document.querySelector('#id-canvas')
		var context = canvas.getContext('2d')
		g.canvas = canvas
		g.context = context

		// draw
		g.drawImage = function(Image) {
			g.context.drawImage(Image.image, Image.x, Image.y)
		}

		// events
		window.addEventListener('keydown', function(event) {
			g.keydowns[event.key] = true
		})

		window.addEventListener('keyup', function(event) {
			g.keydowns[event.key] = false
		})
		// 
		g.registerAction = function(key, callback) {
			g.actions[key] = callback
		}

		// timer --> 这是一个函数，当 Game 被创建的时候，事件开始监听，如过发生就向后 执行
		setInterval(function() {
			// --> 这里有两个函数是使用的时候需要注册的， game.update game.draw
			// events
			var actions = Object.keys(g.actions)
			for (var i = 0; i < actions.length; i++) {
				var key = actions[i]
				if(g.keydowns[key]) {
					g.actions[key]()
				}
			}
			// update
			g.update()
			// clear
			context.clearRect(0, 0, canvas.width, canvas.height)
			// draw
			g.draw()


		}, 1000/30)
		return g
	}