/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/scss/index.scss":
/*!***********************************!*\
  !*** ./src/pages/scss/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/ts/drawer.ts":
/*!********************************!*\
  !*** ./src/pages/ts/drawer.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ./types */ "./src/pages/ts/types.ts");
var CanvasDelegator = /** @class */ (function () {
    function CanvasDelegator(element) {
        this.element = element;
        this._canvas = element.getContext('2d');
        this.cameraPosition = new types_1.Vector2(0, 0);
        this.zoomSize = 40;
        this.setupEvent();
    }
    Object.defineProperty(CanvasDelegator.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Picture의 종류를 분류해서 적절히 그림
     * @param picture
     */
    CanvasDelegator.prototype.draw = function (picture) {
        if (picture instanceof Font) {
            this.drawFont(picture);
        }
        else if (picture instanceof Quad) {
            this.drawQuad(picture);
        }
        else if (picture instanceof Circle) {
            this.drawCircle(picture);
        }
    };
    /**
     * canvas에 Text를 그림
     * @param font
     */
    CanvasDelegator.prototype.drawFont = function (font) {
        this.canvas.fillStyle = font.color;
        this.canvas.font = font + 'px';
        var textMatrics = this.canvas.measureText(font.text);
        var convertedScale = new types_1.Vector2(textMatrics.width, 0);
        var convertedPosition = types_1.Vector2.substract(this.getRealPixelPosition(font.transform.position), types_1.Vector2.division(convertedScale, 2));
        this.canvas.fillText(font.text, convertedPosition.x, convertedPosition.y);
    };
    /**
     * canvas에 사각형을 그림
     * @param circle
     */
    CanvasDelegator.prototype.drawQuad = function (quad) {
        this.canvas.fillStyle = quad.color;
        var convertedScale = this.convertMeterToPixel(quad.transform.scale);
        var convertedPosition = types_1.Vector2.substract(this.getRealPixelPosition(quad.transform.position), types_1.Vector2.division(convertedScale, 2));
        this.canvas.fillRect(convertedPosition.x, convertedPosition.y, convertedScale.x, convertedScale.y);
    };
    /**
     * canvas에 원을 그림
     * @param circle
     */
    CanvasDelegator.prototype.drawCircle = function (circle) {
        this.canvas.fillStyle = circle.color;
        var convertedPosition = this.getRealPixelPosition(circle.transform.position);
        var convertedScale = this.convertMeterToPixel(circle.transform.scale);
        this.canvas.beginPath();
        this.canvas.ellipse(convertedPosition.x, convertedPosition.y, convertedScale.x, convertedScale.y, circle.transform.rotation, 0, 2 * Math.PI);
        this.canvas.stroke();
    };
    /**
     * 미터단위의 Vector를 실제 그려질 Pixel단위로 바꿔줌
     * @param vetor
     */
    CanvasDelegator.prototype.convertMeterToPixel = function (vetor) {
        var convertedVector = types_1.Vector2.multiply(vetor, this.zoomSize);
        return convertedVector;
    };
    /**
     * 미터단위의 position vector를 실제 그려질 Pixel위치로 바꿔줌
     * @param position
     */
    CanvasDelegator.prototype.getRealPixelPosition = function (position) {
        var ratio = this.element.clientHeight / this.element.clientWidth;
        var cameraWidth = this.element.clientWidth / this.zoomSize;
        var cameraHeight = this.element.clientHeight / this.zoomSize;
        var convertedVector = new types_1.Vector2(this.element.clientWidth / 2, this.element.clientHeight / 2);
        convertedVector = types_1.Vector2.add(convertedVector, this.convertMeterToPixel(types_1.Vector2.substract(position, this.cameraPosition)));
        return convertedVector;
    };
    /**
     * canvas의 크기 재설정과 각 unit들을 렌더링
     * @param unitList
     */
    CanvasDelegator.prototype.update = function (unitList) {
        var _this = this;
        this.element.setAttribute('width', this.element.clientWidth.toString());
        this.element.setAttribute('height', this.element.clientHeight.toString());
        unitList.forEach(function (unit) {
            unit.render(_this);
        });
    };
    CanvasDelegator.prototype.setupEvent = function () {
        var _this = this;
        this.element.addEventListener('wheel', function (e) {
            _this.zoomSize -= e.deltaY / Math.abs(e.deltaY);
            if (_this.zoomSize <= 0) {
                _this.zoomSize = 1;
            }
        });
        this.element.addEventListener('mousemove', function (e) {
            if (e.buttons === 1) {
                _this.cameraPosition = types_1.Vector2.substract(_this.cameraPosition, new types_1.Vector2(e.movementX / _this.zoomSize, e.movementY / _this.zoomSize));
            }
        });
    };
    return CanvasDelegator;
}());
exports.CanvasDelegator = CanvasDelegator;
var Picture = /** @class */ (function () {
    function Picture(transform, color) {
        if (color === void 0) { color = 'rgba(0, 0, 0, 1)'; }
        this.transform = transform;
        this.color = color;
    }
    return Picture;
}());
exports.Picture = Picture;
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Shape;
}(Picture));
exports.Shape = Shape;
var Font = /** @class */ (function (_super) {
    __extends(Font, _super);
    function Font() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = 24;
        return _this;
    }
    return Font;
}(Picture));
exports.Font = Font;
var Quad = /** @class */ (function (_super) {
    __extends(Quad, _super);
    function Quad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Quad;
}(Shape));
exports.Quad = Quad;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Circle;
}(Shape));
exports.Circle = Circle;


/***/ }),

/***/ "./src/pages/ts/index.ts":
/*!*******************************!*\
  !*** ./src/pages/ts/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(/*! ./model */ "./src/pages/ts/model.ts");
var model = new model_1.Model(document.getElementById('simulation-view'));


/***/ }),

/***/ "./src/pages/ts/model.ts":
/*!*******************************!*\
  !*** ./src/pages/ts/model.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var unit_1 = __webpack_require__(/*! ./unit */ "./src/pages/ts/unit.ts");
var renderer_1 = __webpack_require__(/*! ./renderer */ "./src/pages/ts/renderer.ts");
var drawer_1 = __webpack_require__(/*! ./drawer */ "./src/pages/ts/drawer.ts");
var types_1 = __webpack_require__(/*! ./types */ "./src/pages/ts/types.ts");
var Model = /** @class */ (function () {
    function Model(elemeht) {
        this.environment = new unit_1.Environment();
        this.renderer = new renderer_1.Renderer(this.environment, elemeht);
        this.setup();
    }
    Model.prototype.setup = function () {
        for (var i = -20; i < 20; i += 10) {
            var t = new TruckDestination(this.environment);
            t.transform.position = new types_1.Vector2(i, i);
            this.environment.appendUnit(t);
        }
    };
    return Model;
}());
exports.Model = Model;
/**
 * 트럭 도착지
 */
var TruckDestination = /** @class */ (function (_super) {
    __extends(TruckDestination, _super);
    function TruckDestination(environment) {
        return _super.call(this, environment) || this;
    }
    TruckDestination.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform, 'rgba(0, 0, 0, 0.2)');
        canvasDelegator.draw(quad);
        var font = new drawer_1.Font(this.transform);
        font.text = '트럭 도착지';
        canvasDelegator.draw(font);
    };
    /**
     * @override
     */
    TruckDestination.prototype.onStart = function () {
    };
    /**
     *
     */
    TruckDestination.prototype.onUpdate = function () {
    };
    /**
     *
     * @override
     */
    TruckDestination.prototype.onAgentIn = function (agent) {
    };
    /**
     *
     * @override
     */
    TruckDestination.prototype.onAgentOut = function (agent) {
    };
    return TruckDestination;
}(unit_1.Facility));
exports.TruckDestination = TruckDestination;


/***/ }),

/***/ "./src/pages/ts/renderer.ts":
/*!**********************************!*\
  !*** ./src/pages/ts/renderer.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var drawer_1 = __webpack_require__(/*! ./drawer */ "./src/pages/ts/drawer.ts");
var Renderer = /** @class */ (function () {
    function Renderer(environment, element) {
        var _this = this;
        this._environment = environment;
        this.canvasDelegator = new drawer_1.CanvasDelegator(element);
        this.running = true;
        this.interval = setInterval(function () {
            if (_this.running) {
                _this.onUpdate();
            }
        }, 10);
    }
    Object.defineProperty(Renderer.prototype, "environment", {
        get: function () {
            return this._environment;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Renderer.prototype.start = function () {
        this.running = true;
    };
    Renderer.prototype.pause = function () {
        this.running = false;
    };
    Renderer.prototype.onUpdate = function () {
        this.canvasDelegator.update(this.environment.unitList);
    };
    Renderer.MAX_WIDTH = 1024;
    Renderer.MAX_HEIGHT = 1024;
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/pages/ts/types.ts":
/*!*******************************!*\
  !*** ./src/pages/ts/types.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 2차원 벡터
 */
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.add = function (a, b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    };
    Vector2.substract = function (a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
    };
    Vector2.multiply = function (a, b) {
        return new Vector2(a.x * b, a.y * b);
    };
    Vector2.division = function (a, b) {
        return new Vector2(a.x / b, a.y / b);
    };
    Object.defineProperty(Vector2.prototype, "sqrMagnitude", {
        get: function () {
            return this.x * this.x + this.y * this.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "magnitude", {
        get: function () {
            return Math.sqrt(this.sqrMagnitude);
        },
        enumerable: true,
        configurable: true
    });
    Vector2.ZERO = new Vector2(0, 0);
    return Vector2;
}());
exports.Vector2 = Vector2;
/**
 * Unit의 위치, 크기, 각도정보를 갖고있음
 */
var Transform = /** @class */ (function () {
    function Transform(position, scale, rotation) {
        if (rotation === void 0) { rotation = 0; }
        this.position = position;
        this.scale = scale;
        this.rotation = rotation;
    }
    return Transform;
}());
exports.Transform = Transform;


/***/ }),

/***/ "./src/pages/ts/unit.ts":
/*!******************************!*\
  !*** ./src/pages/ts/unit.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(/*! ./types */ "./src/pages/ts/types.ts");
var Environment = /** @class */ (function () {
    function Environment() {
        var _this = this;
        this.tick = 0;
        this._time = 0;
        this._timeScale = 1;
        this.unitList = new Array();
        setInterval(function () {
            _this.tick += 10;
            if (_this.tick > 16 / _this.timeScale) {
                _this.tick = 0;
                _this.unitList.forEach(function (unit) {
                    unit.onUpdate();
                });
            }
        }, 10);
    }
    Object.defineProperty(Environment.prototype, "time", {
        get: function () {
            return this._time;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Environment.prototype, "timeScale", {
        get: function () {
            return this._timeScale;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * 해당 환경에 유닛 추가
     * @param unit
     */
    Environment.prototype.appendUnit = function (unit) {
        unit.onStart();
        this.unitList.push(unit);
    };
    return Environment;
}());
exports.Environment = Environment;
var Unit = /** @class */ (function () {
    function Unit(environment) {
        this._transform = new types_1.Transform(types_1.Vector2.ZERO, new types_1.Vector2(10, 10), 0);
        this.environment = environment;
    }
    Object.defineProperty(Unit.prototype, "transform", {
        get: function () {
            return this._transform;
        },
        enumerable: true,
        configurable: true
    });
    return Unit;
}());
exports.Unit = Unit;
/**
 * 모드 시설들의 부모 클래스
 */
var Facility = /** @class */ (function (_super) {
    __extends(Facility, _super);
    function Facility(environment) {
        var _this = _super.call(this, environment) || this;
        _this.agentList = new Array();
        return _this;
    }
    /**
     * Agent 추가
     * @param agent
     */
    Facility.prototype.appendAgent = function (agent) {
        this.agentList.push(agent);
        this.onAgentIn(agent);
    };
    /**
     * Agent 삭제
     * @param agent
     */
    Facility.prototype.removeAgent = function (agent) {
        for (var i = 0; i < this.agentList.length; i++) {
            if (this.agentList[i] === agent) {
                this.agentList.splice(i, 1);
            }
        }
        this.onAgentIn(agent);
    };
    return Facility;
}(Unit));
exports.Facility = Facility;
/**
 * 모든 Agent의 부모 클래스
 */
var Agent = /** @class */ (function (_super) {
    __extends(Agent, _super);
    function Agent(environment) {
        return _super.call(this, environment) || this;
    }
    return Agent;
}(Unit));
exports.Agent = Agent;


/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./src/pages/ts/index.ts ./src/pages/scss/index.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/pages/ts/index.ts */"./src/pages/ts/index.ts");
module.exports = __webpack_require__(/*! ./src/pages/scss/index.scss */"./src/pages/scss/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Njc3MvaW5kZXguc2Nzcz9kOGY4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy9kcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RzL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy91bml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciBDYW52YXNEZWxlZ2F0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNEZWxlZ2F0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhUG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHRoaXMuem9vbVNpemUgPSA0MDtcclxuICAgICAgICB0aGlzLnNldHVwRXZlbnQoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLCBcImNhbnZhc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYW52YXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICA7XHJcbiAgICAvKipcclxuICAgICAqIFBpY3R1cmXsnZgg7KKF66WY66W8IOu2hOulmO2VtOyEnCDsoIHsoIjtnogg6re466a8XHJcbiAgICAgKiBAcGFyYW0gcGljdHVyZVxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAocGljdHVyZSkge1xyXG4gICAgICAgIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgRm9udCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdGb250KHBpY3R1cmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgUXVhZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdRdWFkKHBpY3R1cmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgQ2lyY2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0NpcmNsZShwaWN0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPsl5AgVGV4dOulvCDqt7jrprxcclxuICAgICAqIEBwYXJhbSBmb250XHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd0ZvbnQgPSBmdW5jdGlvbiAoZm9udCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmZpbGxTdHlsZSA9IGZvbnQuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZm9udCA9IGZvbnQgKyAncHgnO1xyXG4gICAgICAgIHZhciB0ZXh0TWF0cmljcyA9IHRoaXMuY2FudmFzLm1lYXN1cmVUZXh0KGZvbnQudGV4dCk7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFNjYWxlID0gbmV3IHR5cGVzXzEuVmVjdG9yMih0ZXh0TWF0cmljcy53aWR0aCwgMCk7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvc2l0aW9uID0gdHlwZXNfMS5WZWN0b3IyLnN1YnN0cmFjdCh0aGlzLmdldFJlYWxQaXhlbFBvc2l0aW9uKGZvbnQudHJhbnNmb3JtLnBvc2l0aW9uKSwgdHlwZXNfMS5WZWN0b3IyLmRpdmlzaW9uKGNvbnZlcnRlZFNjYWxlLCAyKSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFRleHQoZm9udC50ZXh0LCBjb252ZXJ0ZWRQb3NpdGlvbi54LCBjb252ZXJ0ZWRQb3NpdGlvbi55KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+yXkCDsgqzqsIHtmJXsnYQg6re466a8XHJcbiAgICAgKiBAcGFyYW0gY2lyY2xlXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd1F1YWQgPSBmdW5jdGlvbiAocXVhZCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmZpbGxTdHlsZSA9IHF1YWQuY29sb3I7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFNjYWxlID0gdGhpcy5jb252ZXJ0TWV0ZXJUb1BpeGVsKHF1YWQudHJhbnNmb3JtLnNjYWxlKTtcclxuICAgICAgICB2YXIgY29udmVydGVkUG9zaXRpb24gPSB0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KHRoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24ocXVhZC50cmFuc2Zvcm0ucG9zaXRpb24pLCB0eXBlc18xLlZlY3RvcjIuZGl2aXNpb24oY29udmVydGVkU2NhbGUsIDIpKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsUmVjdChjb252ZXJ0ZWRQb3NpdGlvbi54LCBjb252ZXJ0ZWRQb3NpdGlvbi55LCBjb252ZXJ0ZWRTY2FsZS54LCBjb252ZXJ0ZWRTY2FsZS55KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+yXkCDsm5DsnYQg6re466a8XHJcbiAgICAgKiBAcGFyYW0gY2lyY2xlXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBjaXJjbGUuY29sb3I7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvc2l0aW9uID0gdGhpcy5nZXRSZWFsUGl4ZWxQb3NpdGlvbihjaXJjbGUudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICB2YXIgY29udmVydGVkU2NhbGUgPSB0aGlzLmNvbnZlcnRNZXRlclRvUGl4ZWwoY2lyY2xlLnRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZWxsaXBzZShjb252ZXJ0ZWRQb3NpdGlvbi54LCBjb252ZXJ0ZWRQb3NpdGlvbi55LCBjb252ZXJ0ZWRTY2FsZS54LCBjb252ZXJ0ZWRTY2FsZS55LCBjaXJjbGUudHJhbnNmb3JtLnJvdGF0aW9uLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDrr7jthLDri6jsnITsnZggVmVjdG9y66W8IOyLpOygnCDqt7jroKTsp4ggUGl4ZWzri6jsnITroZwg67CU6r+U7KSMXHJcbiAgICAgKiBAcGFyYW0gdmV0b3JcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5jb252ZXJ0TWV0ZXJUb1BpeGVsID0gZnVuY3Rpb24gKHZldG9yKSB7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFZlY3RvciA9IHR5cGVzXzEuVmVjdG9yMi5tdWx0aXBseSh2ZXRvciwgdGhpcy56b29tU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZFZlY3RvcjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOuvuO2EsOuLqOychOydmCBwb3NpdGlvbiB2ZWN0b3Lrpbwg7Iuk7KCcIOq3uOugpOyniCBQaXhlbOychOy5mOuhnCDrsJTqv5TspIxcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmdldFJlYWxQaXhlbFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHJhdGlvID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAvIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgY2FtZXJhV2lkdGggPSB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGggLyB0aGlzLnpvb21TaXplO1xyXG4gICAgICAgIHZhciBjYW1lcmFIZWlnaHQgPSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gdGhpcy56b29tU2l6ZTtcclxuICAgICAgICB2YXIgY29udmVydGVkVmVjdG9yID0gbmV3IHR5cGVzXzEuVmVjdG9yMih0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGggLyAyLCB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgY29udmVydGVkVmVjdG9yID0gdHlwZXNfMS5WZWN0b3IyLmFkZChjb252ZXJ0ZWRWZWN0b3IsIHRoaXMuY29udmVydE1ldGVyVG9QaXhlbCh0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KHBvc2l0aW9uLCB0aGlzLmNhbWVyYVBvc2l0aW9uKSkpO1xyXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZWRWZWN0b3I7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPsnZgg7YGs6riwIOyerOyEpOygleqzvCDqsIEgdW5pdOuTpOydhCDroIzrjZTrp4FcclxuICAgICAqIEBwYXJhbSB1bml0TGlzdFxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh1bml0TGlzdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICB1bml0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh1bml0KSB7XHJcbiAgICAgICAgICAgIHVuaXQucmVuZGVyKF90aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLnNldHVwRXZlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBfdGhpcy56b29tU2l6ZSAtPSBlLmRlbHRhWSAvIE1hdGguYWJzKGUuZGVsdGFZKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnpvb21TaXplIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnpvb21TaXplID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5idXR0b25zID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jYW1lcmFQb3NpdGlvbiA9IHR5cGVzXzEuVmVjdG9yMi5zdWJzdHJhY3QoX3RoaXMuY2FtZXJhUG9zaXRpb24sIG5ldyB0eXBlc18xLlZlY3RvcjIoZS5tb3ZlbWVudFggLyBfdGhpcy56b29tU2l6ZSwgZS5tb3ZlbWVudFkgLyBfdGhpcy56b29tU2l6ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbnZhc0RlbGVnYXRvcjtcclxufSgpKTtcclxuZXhwb3J0cy5DYW52YXNEZWxlZ2F0b3IgPSBDYW52YXNEZWxlZ2F0b3I7XHJcbnZhciBQaWN0dXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGljdHVyZSh0cmFuc2Zvcm0sIGNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yID09PSB2b2lkIDApIHsgY29sb3IgPSAncmdiYSgwLCAwLCAwLCAxKSc7IH1cclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUGljdHVyZTtcclxufSgpKTtcclxuZXhwb3J0cy5QaWN0dXJlID0gUGljdHVyZTtcclxudmFyIFNoYXBlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNoYXBlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2hhcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFNoYXBlO1xyXG59KFBpY3R1cmUpKTtcclxuZXhwb3J0cy5TaGFwZSA9IFNoYXBlO1xyXG52YXIgRm9udCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGb250LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRm9udCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zaXplID0gMjQ7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZvbnQ7XHJcbn0oUGljdHVyZSkpO1xyXG5leHBvcnRzLkZvbnQgPSBGb250O1xyXG52YXIgUXVhZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhRdWFkLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUXVhZCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUXVhZDtcclxufShTaGFwZSkpO1xyXG5leHBvcnRzLlF1YWQgPSBRdWFkO1xyXG52YXIgQ2lyY2xlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENpcmNsZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENpcmNsZSgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2lyY2xlO1xyXG59KFNoYXBlKSk7XHJcbmV4cG9ydHMuQ2lyY2xlID0gQ2lyY2xlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbW9kZWxfMSA9IHJlcXVpcmUoXCIuL21vZGVsXCIpO1xyXG52YXIgbW9kZWwgPSBuZXcgbW9kZWxfMS5Nb2RlbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ltdWxhdGlvbi12aWV3JykpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVuaXRfMSA9IHJlcXVpcmUoXCIuL3VuaXRcIik7XHJcbnZhciByZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyZXJcIik7XHJcbnZhciBkcmF3ZXJfMSA9IHJlcXVpcmUoXCIuL2RyYXdlclwiKTtcclxudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxudmFyIE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9kZWwoZWxlbWVodCkge1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBuZXcgdW5pdF8xLkVudmlyb25tZW50KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyByZW5kZXJlcl8xLlJlbmRlcmVyKHRoaXMuZW52aXJvbm1lbnQsIGVsZW1laHQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH1cclxuICAgIE1vZGVsLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gLTIwOyBpIDwgMjA7IGkgKz0gMTApIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBuZXcgVHJ1Y2tEZXN0aW5hdGlvbih0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICAgICAgdC50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKGksIGkpO1xyXG4gICAgICAgICAgICB0aGlzLmVudmlyb25tZW50LmFwcGVuZFVuaXQodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Nb2RlbCA9IE1vZGVsO1xyXG4vKipcclxuICog7Yq465+tIOuPhOywqeyngFxyXG4gKi9cclxudmFyIFRydWNrRGVzdGluYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVHJ1Y2tEZXN0aW5hdGlvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRydWNrRGVzdGluYXRpb24oZW52aXJvbm1lbnQpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSwgJ3JnYmEoMCwgMCwgMCwgMC4yKScpO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICftirjrn60g64+E7LCp7KeAJztcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhmb250KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tEZXN0aW5hdGlvbi5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrRGVzdGluYXRpb24ucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5vbkFnZW50T3V0ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRydWNrRGVzdGluYXRpb247XHJcbn0odW5pdF8xLkZhY2lsaXR5KSk7XHJcbmV4cG9ydHMuVHJ1Y2tEZXN0aW5hdGlvbiA9IFRydWNrRGVzdGluYXRpb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkcmF3ZXJfMSA9IHJlcXVpcmUoXCIuL2RyYXdlclwiKTtcclxudmFyIFJlbmRlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyZXIoZW52aXJvbm1lbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2Vudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNEZWxlZ2F0b3IgPSBuZXcgZHJhd2VyXzEuQ2FudmFzRGVsZWdhdG9yKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVuZGVyZXIucHJvdG90eXBlLCBcImVudmlyb25tZW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vudmlyb25tZW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgO1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0RlbGVnYXRvci51cGRhdGUodGhpcy5lbnZpcm9ubWVudC51bml0TGlzdCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIuTUFYX1dJRFRIID0gMTAyNDtcclxuICAgIFJlbmRlcmVyLk1BWF9IRUlHSFQgPSAxMDI0O1xyXG4gICAgcmV0dXJuIFJlbmRlcmVyO1xyXG59KCkpO1xyXG5leHBvcnRzLlJlbmRlcmVyID0gUmVuZGVyZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiAy7LCo7JuQIOuyoe2EsFxyXG4gKi9cclxudmFyIFZlY3RvcjIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWN0b3IyKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBWZWN0b3IyLmFkZCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGEueCArIGIueCwgYS55ICsgYi55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnN1YnN0cmFjdCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGEueCAtIGIueCwgYS55IC0gYi55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLm11bHRpcGx5ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54ICogYiwgYS55ICogYik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5kaXZpc2lvbiA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGEueCAvIGIsIGEueSAvIGIpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJzcXJNYWduaXR1ZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcIm1hZ25pdHVkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5zcXJNYWduaXR1ZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yMi5aRVJPID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICByZXR1cm4gVmVjdG9yMjtcclxufSgpKTtcclxuZXhwb3J0cy5WZWN0b3IyID0gVmVjdG9yMjtcclxuLyoqXHJcbiAqIFVuaXTsnZgg7JyE7LmYLCDtgazquLAsIOqwgeuPhOygleuztOulvCDqsJbqs6DsnojsnYxcclxuICovXHJcbnZhciBUcmFuc2Zvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm0ocG9zaXRpb24sIHNjYWxlLCByb3RhdGlvbikge1xyXG4gICAgICAgIGlmIChyb3RhdGlvbiA9PT0gdm9pZCAwKSB7IHJvdGF0aW9uID0gMDsgfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRyYW5zZm9ybTtcclxufSgpKTtcclxuZXhwb3J0cy5UcmFuc2Zvcm0gPSBUcmFuc2Zvcm07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG52YXIgRW52aXJvbm1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFbnZpcm9ubWVudCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudGljayA9IDA7XHJcbiAgICAgICAgdGhpcy5fdGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fdGltZVNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLnVuaXRMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy50aWNrICs9IDEwO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMudGljayA+IDE2IC8gX3RoaXMudGltZVNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50aWNrID0gMDtcclxuICAgICAgICAgICAgICAgIF90aGlzLnVuaXRMaXN0LmZvckVhY2goZnVuY3Rpb24gKHVuaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bml0Lm9uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbnZpcm9ubWVudC5wcm90b3R5cGUsIFwidGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVudmlyb25tZW50LnByb3RvdHlwZSwgXCJ0aW1lU2NhbGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGltZVNjYWxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgO1xyXG4gICAgLyoqXHJcbiAgICAgKiDtlbTri7kg7ZmY6rK97JeQIOycoOuLmyDstpTqsIBcclxuICAgICAqIEBwYXJhbSB1bml0XHJcbiAgICAgKi9cclxuICAgIEVudmlyb25tZW50LnByb3RvdHlwZS5hcHBlbmRVbml0ID0gZnVuY3Rpb24gKHVuaXQpIHtcclxuICAgICAgICB1bml0Lm9uU3RhcnQoKTtcclxuICAgICAgICB0aGlzLnVuaXRMaXN0LnB1c2godW5pdCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVudmlyb25tZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkVudmlyb25tZW50ID0gRW52aXJvbm1lbnQ7XHJcbnZhciBVbml0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVW5pdChlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IG5ldyB0eXBlc18xLlRyYW5zZm9ybSh0eXBlc18xLlZlY3RvcjIuWkVSTywgbmV3IHR5cGVzXzEuVmVjdG9yMigxMCwgMTApLCAwKTtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVW5pdC5wcm90b3R5cGUsIFwidHJhbnNmb3JtXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBVbml0O1xyXG59KCkpO1xyXG5leHBvcnRzLlVuaXQgPSBVbml0O1xyXG4vKipcclxuICog66qo65OcIOyLnOyEpOuTpOydmCDrtoDrqqgg7YG0656Y7IqkXHJcbiAqL1xyXG52YXIgRmFjaWxpdHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmFjaWxpdHksIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGYWNpbGl0eShlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmFnZW50TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWdlbnQg7LaU6rCAXHJcbiAgICAgKiBAcGFyYW0gYWdlbnRcclxuICAgICAqL1xyXG4gICAgRmFjaWxpdHkucHJvdG90eXBlLmFwcGVuZEFnZW50ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICAgICAgdGhpcy5hZ2VudExpc3QucHVzaChhZ2VudCk7XHJcbiAgICAgICAgdGhpcy5vbkFnZW50SW4oYWdlbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWdlbnQg7IKt7KCcXHJcbiAgICAgKiBAcGFyYW0gYWdlbnRcclxuICAgICAqL1xyXG4gICAgRmFjaWxpdHkucHJvdG90eXBlLnJlbW92ZUFnZW50ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFnZW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZ2VudExpc3RbaV0gPT09IGFnZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFnZW50TGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkFnZW50SW4oYWdlbnQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGYWNpbGl0eTtcclxufShVbml0KSk7XHJcbmV4cG9ydHMuRmFjaWxpdHkgPSBGYWNpbGl0eTtcclxuLyoqXHJcbiAqIOuqqOuToCBBZ2VudOydmCDrtoDrqqgg7YG0656Y7IqkXHJcbiAqL1xyXG52YXIgQWdlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQWdlbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBZ2VudChlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBBZ2VudDtcclxufShVbml0KSk7XHJcbmV4cG9ydHMuQWdlbnQgPSBBZ2VudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==