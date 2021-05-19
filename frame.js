function CreateFrame(windowRef) {
    if (windowRef) {
        this.frame = windowRef.document.createElement("iframe");
        return;
    }
    this.frame = document.createElement("iframe");
}

CreateFrame.prototype.set = function (attr, val) {
    this.frame[attr] = val;
    return this;
};

CreateFrame.prototype.setStyle = function (styleObj) {
    var attr;
    for (attr in styleObj) {
        if (styleObj.hasOwnProperty(attr)) {
            this.frame.style[attr] = styleObj[attr];
        }
    }
    return this;
};

CreateFrame.prototype.overrideStyle = function (style) {
    this.frame.style.cssText = style;
    return this;
};

CreateFrame.prototype.done = function () {
    return this.frame;
};
function createAndAttachIFrame() {
    var iFrameElement = new CreateFrame()
        .set('id', 'testFrame')
        .set('marginWidth', 0)
        .set('marginHeight', 0)
        .set('scrolling', 'no')
        .set('frameBorder', 0)
        .set('height', 250)
        .set('width', 300)
        .set('style', "margin: 20%;")
        .done();
    
    var frame;
    var documentBody = document.getElementById("wrapper-box");
    if (documentBody.firstChild) {
        frame = documentBody.insertBefore(iFrameElement, documentBody.firstChild)
    } else {
        frame = documentBody.appendChild(iFrameElement);
    }
    return frame;
}

window.createAndAttachIFrame = createAndAttachIFrame;