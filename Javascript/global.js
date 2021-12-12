//
// Made by Jordan Hoosman
//

const PI_D4 = Math.PI / 4;
const PI_D8 = Math.PI / 8;

/// ///
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
var navMenu = null;
var numNavItems = 6;
var navBuffer;

/// Mouse ///
var mevents,
    mouseX, 
    mouseY;
var navHoverText, 
    navHoverTextInterval;
var scrollHandler;
var rotateControl = true,
    rotatedItem = null;
var clickHandler = null;

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
    canvasHandle = null,
	canvasImages = [];
