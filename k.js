class myextension {
		getInfo() {
			return {
				id: 'myextension',
				name: '我的扩展',
				color1: '#ff8829',
				color2: '#ff8829',
				color3: '#ff8829',
				blocks: [
					{opcode: 'myblock',
					blockType: Scratch.BlockType.REPORTER,
					text: '[A] 我的积木',
					arguments:{A:{
                                		type: Scratch.ArgumentType.NUMBER,
                                		defaultValue:'1'}
					}
				]
			};
		}
		myblock({A}) {
			return A+9;
		}
}
Scratch.extensions.register(new myextension());
