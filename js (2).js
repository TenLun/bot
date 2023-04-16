class myextension {
		getInfo() {
			return {
				id: 'myextension',
				name: '我的扩展',
				color1: '#ff8829',
				color2: '#ff8829',
				color3: '#ff8829',
				'标签',
				blocks: [
					{opcode: 'myblock',
					blockType: Scratch.BlockType.COMMAND,
					text: "我的积木",
					arguments:{ }
					}
				]
			};
		}
		myblock(args) {
			window.open('https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4','_blank');
		}
};
Scratch.extensions.register(new myextension());