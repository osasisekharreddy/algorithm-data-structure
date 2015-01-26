define(function () {

	var FixNodeBase = function () {
		// nothing
	}

	/** Returns the parent node */
	FixNodeBase.prototype.parent = function () {
		return this._parent
	}

	/** Returns the (i+1)-th child, if it not exists then returns null */
	FixNodeBase.prototype.child = function (i) {
		return this._children[i]
	}


	/**
	 * Returns the count of children which are not null
	 */
	FixNodeBase.prototype.maxChildrenCount = function () {
		return this._children.length
	}


	/**
	 * Returns the max count of children
	 */
	FixNodeBase.prototype.childrenCount = function () {
		return _.reduce(this._children, function (memo, node) {
			return memo + (node ? 1 : 0)
		}, 0)
	}


	/**
	 * Iterate the children, child can be null
	 */
	FixNodeBase.prototype.eachChild = function (operation) {
		// because child can be null, so makes a range(0, length) iterate
		for (var i = 0; i < this._children.length; i++) {
			if (operation(this._children[i], i)) {
				return true
			}
		}
		return false
	}


	/**
	 * Set the (i+1)-th child
	 */
	FixNodeBase.prototype.setChild = function (i, child) {
		if (this._children[i]) {
			this._children[i]._parent = null
		}
		this._children[i] = child
		child._parent = this
	}


	return FixNodeBase
})

//
///** Whether a child exist in the position i */
//FixNodeBase.prototype.hasChild = function (i) {
//	return this._children[i] ? true : false
//}
//
///** Returns the first child which exists from left to right,
// * if there is no one a child then returns null */
//FixNodeBase.prototype.leftestChild = function () {
//	for (var i in this._children) {
//		return this._children[i]
//	}
//	return null
//}
//
///** Returns the last child which exists from right to left,
// * if there is no one a child then returns null */
//FixNodeBase.prototype.rightestChild = function () {
//	for (var i = this._children.length - 1; i >= 0; i--) {
//		if (this._children[i]) {
//			return this._children[i]
//		}
//	}
//	return null
//}


///**
// * Break the relation between parent and this,
// * if it's root, do nothing
// */
//FixNodeBase.prototype.cut = function () {
//	if (this.parent()) {
//		var index = this.parent()._children.indexOf(this)
//		this.parent()._children.setChild(index, null)
//	}
//}
