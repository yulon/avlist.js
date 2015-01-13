HTMLElement.prototype.avList = function(attrName){
	return new HTMLElementAttributeValueList(this, attrName);
};

function HTMLElementAttributeValueList (e, a) {

	this.contains = function(attrValue){
		var str = e.getAttribute(a);
		var list = str.split(" ");

		for (var i = 0; i < list.length; i++) {
			if (list[i] == attrValue) {
				return true;
			};
		};

		return false;
	};

	this.add = function(attrValue){
		var str = e.getAttribute(a);
		var list = str.split(" ");

		for (var i = 0; i < list.length; i++) {
			if (list[i] == attrValue) {
				return;
			};
		};

		e.setAttribute(a, str + " " + attrValue);
	};

	this.del = this.remove = function(attrValue){
		var str = e.getAttribute(a);
		var list = str.split(" ");
		var newStr;

		for (var i = 0; i < list.length; i++) {
			if (list[i] != attrValue) {
				newStr += list[i] + " ";
			};
		};

		e.setAttribute(a, newStr.slice(0, -2));
	};

}