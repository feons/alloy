function ApplicationWindow(tab) {
	var self = Ti.UI.createWindow();
	
	switch (tab) {
		case "1":
				self.backgroundImage = "appicon.png";
				self.backgroundRepeat = "true";
			break;
		case "2":
			var view = Ti.UI.createView({
				backgroundImage: "appicon.png",
				backgroundRepeat: "true"
			});
			self.add(view);
			break;
		case "3":
			var image = Ti.UI.createImageView({
				backgroundImage: "appicon.png",
				backgroundRepeat: "true"
			});
			self.add(image);
			break;
	}
	
	return self;
};

module.exports = ApplicationWindow;
