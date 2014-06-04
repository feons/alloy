function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs
	var win1 = new Window('1'),
		win2 = new Window('2');
		win3 = new Window('3');

	var tab1 = Ti.UI.createTab({
		title: 'Window backgroundImage',
		window: win1
	});
	win1.containingTab = tab1;

	var tab2 = Ti.UI.createTab({
		title: 'View backgroundImage',
		window: win2
	});
	win2.containingTab = tab2;

	var tab3 = Ti.UI.createTab({
		title: 'ImageView',
		window: win3
	});
	win3.containingTab = tab3;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);

	return self;
};

module.exports = ApplicationTabGroup;
