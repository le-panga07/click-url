function onDOMLoad(element, func) {
    if (/complete|interactive|loaded/.test(window.document.readyState)) {
        func.apply();
    } else {
        if (element.addEventListener) {
            element.addEventListener("DOMContentLoaded", func, false);
        } else if (element.attachEvent) { //IE
            element.attachEvent("onreadystatechange", function () {
                if (element.readyState === "complete") {
                    func.apply();
                }
            });
        }
    }
}

function attachEvent() {
var elem = document.getElementById("wrapper-box");
addEvent(elem, "click", sendEvent);
}

function addEvent(elem, type, eventHandler) {
if (elem.addEventListener) {
    elem.addEventListener(type, eventHandler, false);
} else if (elem.attachEvent) {
    elem.attachEvent("on" + type, eventHandler);
}
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
clickUrl = getUrlFromElement(frameDocument);
if(clickUrl) {
    fireEvent({mediaUrl: clickUrl, _target: "_blank"});
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

    function getUrlFromElement(frameDocument) {
        var noScriptElement = frameDocument.querySelector("noscript");
        if (!isSet(noScriptElement)) {
            return null;
        }
        var regexValue = noScriptElement.innerHTML.match(/href=['"](.*?)['"]/);
        if (isSet(regexValue) && isSet(regexValue[1]) && (regexValue[1].includes("//adclick.g.doubleclick.net/pcs/click?"))) {
            return regexValue[1];
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
