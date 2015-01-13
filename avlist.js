HTMLElement.prototype.avList = function(name){
	if (name.toLowerCase() == "class" && this.classList){
		return this.classList;
	};
	return new HTMLElementAttributeValueList(this, name);
};

function HTMLElementAttributeValueList (e, n) {

	this.contains = function(){
		var value = e.getAttribute(n);
		if (value != null) {
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
		return false;
	};

	this.add = function(){
		var value = e.getAttribute(n);
		var newValue;
		if (value) {
			var valueList = value.split(/\s+/);
			newValue = value;
			for (var i = 0; i < arguments.length; i++) {
				var exist = false;
				for (var y = 0; y < valueList.length; y++) {
					if (arguments[i] == valueList[y]) {
						exist = true;
						break;
					};
				};
				if (exist == false) {
					newValue += " " + arguments[i];
				};
			};
		}else{
			newValue = "";
			for (var i = 0; i < arguments.length; i++) {
				newValue += arguments[i] + " ";
			};
			newValue = newValue.slice(0, -1);
		};
		e.setAttribute(n, newValue);
	};

	this.remove = function(){
		var value = e.getAttribute(n);
		if (value) {
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

			e.setAttribute(n, newValue.slice(0, -1));
		};
		
	};

}