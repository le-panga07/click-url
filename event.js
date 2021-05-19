function sendPostMessage(event) {
    frameWindow = document.getElementById("testFrame").contentWindow;
    if(!isSet(frameWindow)) {
        return;
    }
    // not working need to check why?
    frameWindow.postMessage(event,"*");
}

function sendEvent(event) {
    frameDocument = document.getElementById("testFrame").contentDocument;
    elem = findClickableElement(frameDocument);
    if(elem) {
        var onClickPresent = isClickable(elem);
        // "ha('aw0')"
        if(onClickPresent) {
            dispatchEvent(elem);
            return;
        }
        var hrefProps = isHrefApplies(elem);
        fireEvent(hrefProps);
    }
}

function getClickEvent() {
    return "function" == typeof Event ? new MouseEvent("click") : document.createEvent("MouseEvents").initEvent("click", true, true);
}

function dispatchEvent(elem) {
    elem.dispatchEvent(getClickEvent())
}

function fireEvent(hrefProps) {
    window.open(hrefProps.mediaUrl, hrefProps._target);
}


        function findClickableElement(frameDocument) {
            var frameDocumentQuerySelector = 'a:not(.qc-adchoices-link):not([href*="privacy_summary.html"]):not([href*="adssettings.google.com"]):not([href*="privacy.centro.net"]):not([href="#"]):not([href*="info.yahoo.com"])';
            var anchorElementNode = frameDocument.querySelector(frameDocumentQuerySelector);
            if (!isSet(anchorElementNode)) {
                return null;
            }
            var isHyperlinkMatched = anchorElementNode.href.match("//googleads.g.doubleclick.net/pcs/click?") || anchorElementNode.href.match("//adclick.g.doubleclick.net/pcs/click?"),
                isSizeOffsetSatisfy = (anchorElementNode.offsetHeight > 0) && (anchorElementNode.offsetWidth > 0);
            if (isHyperlinkMatched || isSizeOffsetSatisfy) {
                return anchorElementNode;
            }
            return null;
        }

    function isClickable(anchorElementNode) {
            var onClickAttributeValue = anchorElementNode.getAttribute("onclick");
            return isSet(onClickAttributeValue);
    }

   function isHrefApplies(anchorElementNode) {
            var href =  anchorElementNode.href,
                target = anchorElementNode.getAttribute("target") || "_blank";
       return {
           mediaUrl: href,
           _target: target
       };
    }

    function isSet(val) {
        switch (typeof val) {
            case "string":
                return (typeof val === "string" && val !== '');
            case "object":
                return val !== null;
            case "number":
            case "boolean":
                return true;
            default:
                return false;
        }
    }

/*
key: "handleClick",
                value: function(e) {
                    if (this.propagateClickEvent(e),
                    D(this.state.creative.creativeKey))
                        window.open(this.state.creative.mediaUrl, "_blank");
                    else {
                        var t = this.findClickableElement();
                        if (t)
                            t.dispatchEvent(Object(E.e)());
                        else {
                            var n = this.findClickoutUrl();
                            n && window.open(n, "_blank")
                        }
                    }
                }

//Object(E.e)() executes the following method
 function d() {
        var e;
        return "function" == typeof Event ? e = new MouseEvent("click") : (e = document.createEvent("MouseEvents")).initEvent("click", !0, !0),
        e
    }
*/
