HTMLElement.prototype.avList = function(name){
	var n = HTMLElementAttributeValueList.selectors[name];
	if (!n) {
		n = name;
	};
	if (n.toLowerCase() == "class" && this.classList){
		return this.classList;
	};
	return new HTMLElementAttributeValueList(this, n);
};

function HTMLElementAttributeValueList (e, n) {
	this.element = e;
	this.attrName = n;
}

HTMLElementAttributeValueList.selectors = {
	".": "class",
	"#": "id",
	"@": "name",
};

HTMLElementAttributeValueList.prototype.contains = function() {
	var value = this.element.getAttribute(this.attrName);
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

HTMLElementAttributeValueList.prototype.add = function(){
	var value = this.element.getAttribute(this.attrName);
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
	this.element.setAttribute(this.attrName, newValue);
};

HTMLElementAttributeValueList.prototype.remove = function(){
	var value = this.element.getAttribute(this.attrName);
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

		this.element.setAttribute(this.attrName, newValue.slice(0, -1));
	};
};