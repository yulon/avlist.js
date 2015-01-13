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

	this.remove = function(value){
		var attrValue = e.getAttribute(n);
		var attrValueList = attrValue.split(/\s+/);
		var valueList = value.split(/\s+/);
		var newAttrValue;

		for (var i = 0; i < attrValueList.length; i++) {
			var exist = false;
			for (var y = 0; y < valueList.length; y++) {
				if (valueList[y] == attrValueList[i]) {
					exist = true;
					break;
				};
			};
			if (exist == false) {
				newAttrValue += attrValueList[i] + " ";
			};
		};

		e.setAttribute(n, newAttrValue.slice(0, -2));
	};

}