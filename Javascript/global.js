//
// Made by Jordan Hoosman
//

var DEBUG = true;
var windowWidth, 
    windowHeight, 
    windowRect;
var resizeHandler = null;

/// Paging ///
var CURRENTPAGE = "";
var pageContent, 
    pageUnloadTimer, 
    pageUnloaded = false;

/// Navigation ///
var numNavItems = 6;
var navBorder;

/// Mouse ///
var mevents,
    mouseX, 
    mouseY;
var navHoverText, 
    navHoverTextInterval;
var scrollHandler;
var rotateControl = true,
    rotatedItem = null;

/// Keyboard ///
var keyDownHandle = null,
    keyUpHandle = null;

/// Cookies ///
var acceptedCookies = false;

/// Background Video ///
var DO_VIDEOFADEIN = true;
var DISABLE_VIDEO = false;
var backgroundVideo;

/// Background Canvas ///
var canvas, 
    ctx,
    canvasHandle = null;
