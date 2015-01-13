HTMLElement.prototype.avList = function(name){
	if (name.toLowerCase() == "class" && this.classList){
		return this.classList;
	};
	return new HTMLElementAttributeValueList(this, name);
};

function HTMLElementAttributeValueList (e, n) {

	this.contains = function(){
		var value = e.getAttribute(n);
		var valueList = value.split(/\s+/);
		var c = 0;

		for (var i = 0; i < arguments.length; i++) {
			for (var y = 0; y < valueList.length; y++) {
				if (arguments[i] == valueList[y]) {
					c++;
					break;
				};
			};
		};

		return c == arguments.length;
	};

	this.add = function(){
		var value = e.getAttribute(n);
		var valueList = value.split(/\s+/);
		var addValue;

		for (var i = 0; i < arguments.length; i++) {
			var exist = false;
			for (var y = 0; y < valueList.length; y++) {
				if (arguments[i] == valueList[y]) {
					exist = true;
					break;
				};
			};
			if (exist == false) {
				addValue += " " + arguments[i];
			};
		};

		e.setAttribute(n, value + addValue);
	};

	this.remove = function(){
		var value = e.getAttribute(n);
		var valueList = value.split(/\s+/);
		var newValue;

		for (var i = 0; i < valueList.length; i++) {
			var exist = false;
			for (var y = 0; y < arguments.length; y++) {
				if (arguments[y] == valueList[i]) {
					exist = true;
					break;
				};
			};
			if (exist == false) {
				newValue += valueList[i] + " ";
			};
		};

		e.setAttribute(n, newValue.slice(0, -2));
	};

}