HTMLElement.prototype.avList = function(name){
	return new HTMLElementAttributeValueList(this, name);
};

function HTMLElementAttributeValueList (e, n) {

	this.contains = function(value){
		var attrValue = e.getAttribute(n);
		var attrValueList = attrValue.split(/\s+/);
		var valueList = value.split(/\s+/);
		var c = 0;

		for (var i = 0; i < valueList.length; i++) {
			for (var y = 0; y < attrValueList.length; y++) {
				if (valueList[i] == attrValueList[y]) {
					c++;
					break;
				};
			};
		};

		return c == valueList.length;
	};

	this.add = function(value){
		var attrValue = e.getAttribute(n);
		var attrValueList = attrValue.split(/\s+/);
		var valueList = value.split(/\s+/);
		var addValue;

		for (var i = 0; i < valueList.length; i++) {
			var exist = false;
			for (var y = 0; y < attrValueList.length; y++) {
				if (valueList[i] == attrValueList[y]) {
					exist = true;
					break;
				};
			};
			if (exist == false) {
				addValue += " " + valueList[i];
			};
		};

		e.setAttribute(n, attrValue + addValue);
	};

	this.del = this.remove = function(value){
		var str = e.getAttribute(n);
		var list = str.split(" ");
		var newStr;

		for (var i = 0; i < list.length; i++) {
			if (list[i] != value) {
				newStr += list[i] + " ";
			};
		};

		e.setAttribute(n, newStr.slice(0, -2));
	};

}