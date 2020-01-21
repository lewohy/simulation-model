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
        this.canvas.ellipse;
        this.canvas.ellipse(convertedPosition.x, convertedPosition.y, convertedScale.x, convertedScale.y, circle.transform.rotation, 0, 2 * Math.PI);
        this.canvas.fill();
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
        var deltaVector = this.convertMeterToPixel(types_1.Vector2.substract(position, this.cameraPosition));
        deltaVector.y = -deltaVector.y;
        convertedVector = types_1.Vector2.add(convertedVector, deltaVector);
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
                _this.cameraPosition = types_1.Vector2.substract(_this.cameraPosition, new types_1.Vector2(e.movementX / _this.zoomSize, -e.movementY / _this.zoomSize));
            }
        });
    };
    return CanvasDelegator;
}());
exports.CanvasDelegator = CanvasDelegator;
var Picture = /** @class */ (function () {
    function Picture(transform, color) {
        if (color === void 0) { color = 'rgba(0, 0, 0, 0.2)'; }
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
    function Font(transform, color) {
        if (color === void 0) { color = 'rgba(0, 0, 0, 1)'; }
        var _this = _super.call(this, transform, color) || this;
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
        this.environment.timeScale = 1;
        this.renderer = new renderer_1.Renderer(this.environment, elemeht);
        this.setup();
    }
    Model.prototype.setup = function () {
        this.truckGenerator = new TruckGenerator(this.environment);
        this.truckGenerator.transform.position = new types_1.Vector2(0, -10);
        this.truckDestination = new TruckDestination(this.environment);
        //this.truckList = new Array<Truck>();
        //this.truckList.push(new Truck(this.environment));
        this.truckGenerator.outPort = this.truckDestination;
        this.environment.appendUnit(this.truckGenerator);
        this.environment.appendUnit(this.truckDestination);
        //this.environment.appendUnit(this.truckList[0]);
    };
    return Model;
}());
exports.Model = Model;
/**
 * 트럭 도착지로 들어올 트럭들을 생성하는 장소
 */
var TruckGenerator = /** @class */ (function (_super) {
    __extends(TruckGenerator, _super);
    function TruckGenerator(environment) {
        var _this = _super.call(this, environment) || this;
        _this.truckArrivalTimeDataList = new Array();
        _this.nextTruckIndex = 0;
        return _this;
    }
    TruckGenerator.prototype.render = function (canvasDelegator) {
        var circle = new drawer_1.Circle(this.transform);
        canvasDelegator.draw(circle);
        var font = new drawer_1.Font(this.transform);
        font.text = '트럭 생성기';
        canvasDelegator.draw(font);
    };
    TruckGenerator.prototype.onStart = function () {
        this.transform.scale = new types_1.Vector2(1, 1);
        for (var i = 0; i < 162; i++) {
            var timeData = new types_1.TruckArrivalData(Math.random() * 720000, types_1.TruckArrivalData.TRUCK_KIND_SEA_BULK);
            this.truckArrivalTimeDataList.push(timeData);
        }
        for (var i = 0; i < 70; i++) {
            var timeData = new types_1.TruckArrivalData(Math.random() * 720000, types_1.TruckArrivalData.TRUCK_KIND_TANK_BULK);
            this.truckArrivalTimeDataList.push(timeData);
        }
        for (var i = 0; i < 358; i++) {
            var timeData = new types_1.TruckArrivalData(Math.random() * 720000, types_1.TruckArrivalData.TRUCK_KIND_DOKE);
            this.truckArrivalTimeDataList.push(timeData);
        }
        this.truckArrivalTimeDataList = this.truckArrivalTimeDataList.sort(function (a, b) {
            return a.time - b.time;
        });
    };
    TruckGenerator.prototype.onUpdate = function () {
        if (this.nextTruckIndex < this.truckArrivalTimeDataList.length) {
            var nextTruckArrivalTimeData = this.truckArrivalTimeDataList[this.nextTruckIndex];
            if (nextTruckArrivalTimeData.time < this.environment.elapsedTime) {
                if (nextTruckArrivalTimeData.kind == types_1.TruckArrivalData.TRUCK_KIND_SEA_BULK) {
                    var truck = new SeaBulkTruck(this.environment);
                    this.environment.appendUnit(truck);
                    this.outPort.appendAgent(truck);
                }
                else if (nextTruckArrivalTimeData.kind == types_1.TruckArrivalData.TRUCK_KIND_TANK_BULK) {
                    var truck = new TankBulkTruck(this.environment);
                    this.environment.appendUnit(truck);
                    this.outPort.appendAgent(truck);
                }
                else if (nextTruckArrivalTimeData.kind == types_1.TruckArrivalData.TRUCK_KIND_DOKE) {
                    var truck = new DockTruck(this.environment);
                    this.environment.appendUnit(truck);
                    this.outPort.appendAgent(truck);
                }
                nextTruckArrivalTimeData.isArrived = true;
                this.nextTruckIndex++;
            }
        }
    };
    TruckGenerator.prototype.onAgentIn = function (agent) {
    };
    TruckGenerator.prototype.onAgentOut = function (agent) {
    };
    return TruckGenerator;
}(unit_1.Facility));
/**
 * 트럭 도착지
 */
var TruckDestination = /** @class */ (function (_super) {
    __extends(TruckDestination, _super);
    function TruckDestination(environment) {
        return _super.call(this, environment) || this;
    }
    TruckDestination.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform);
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
        var randomDeltaPosition = new types_1.Vector2(Math.random() * this.transform.scale.x - this.transform.scale.x / 2, Math.random() * this.transform.scale.y - this.transform.scale.y / 2);
        agent.transform.position = types_1.Vector2.add(this.transform.position, randomDeltaPosition);
        agent.transform.rotation = Math.random() * 2 * Math.PI;
        this.removeAgent(agent);
    };
    /**
     *
     * @override
     */
    TruckDestination.prototype.onAgentOut = function (agent) {
    };
    return TruckDestination;
}(unit_1.Facility));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Truck.WIDTH = 1.85;
    Truck.LENGTH = 4.3;
    return Truck;
}(unit_1.Agent));
var SeaBulkTruck = /** @class */ (function (_super) {
    __extends(SeaBulkTruck, _super);
    function SeaBulkTruck(environment) {
        return _super.call(this, environment) || this;
    }
    SeaBulkTruck.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform, 'rgba(256, 0, 0, 0.2)');
        canvasDelegator.draw(quad);
    };
    SeaBulkTruck.prototype.onStart = function () {
        this.transform.scale = new types_1.Vector2(Truck.WIDTH, Truck.LENGTH);
    };
    SeaBulkTruck.prototype.onUpdate = function () {
        this.transform.position.y += 0.010;
    };
    return SeaBulkTruck;
}(Truck));
var TankBulkTruck = /** @class */ (function (_super) {
    __extends(TankBulkTruck, _super);
    function TankBulkTruck(environment) {
        return _super.call(this, environment) || this;
    }
    TankBulkTruck.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform, 'rgba(0, 256, 0, 0.2)');
        canvasDelegator.draw(quad);
    };
    TankBulkTruck.prototype.onStart = function () {
        this.transform.scale = new types_1.Vector2(Truck.WIDTH, Truck.LENGTH);
    };
    TankBulkTruck.prototype.onUpdate = function () {
        this.transform.position.y += 0.020;
    };
    return TankBulkTruck;
}(Truck));
var DockTruck = /** @class */ (function (_super) {
    __extends(DockTruck, _super);
    function DockTruck(environment) {
        return _super.call(this, environment) || this;
    }
    DockTruck.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform, 'rgba(0, 0, 256, 0.2)');
        canvasDelegator.draw(quad);
    };
    DockTruck.prototype.onStart = function () {
        this.transform.scale = new types_1.Vector2(Truck.WIDTH, Truck.LENGTH);
    };
    DockTruck.prototype.onUpdate = function () {
        this.transform.position.y += 0.015;
    };
    return DockTruck;
}(Truck));


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
/**
 * 트럭 도착 시간에 관한 데이터
 */
var TruckArrivalData = /** @class */ (function () {
    function TruckArrivalData(time, kind) {
        this.time = time;
        this.kind = kind;
        this.isArrived = false;
    }
    TruckArrivalData.TRUCK_KIND_SEA_BULK = 1;
    TruckArrivalData.TRUCK_KIND_TANK_BULK = 2;
    TruckArrivalData.TRUCK_KIND_DOKE = 3;
    return TruckArrivalData;
}());
exports.TruckArrivalData = TruckArrivalData;


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
        this._tick = 0;
        this._elapsedTime = 0;
        this._timeScale = 1;
        this.unitList = new Array();
        setInterval(function () {
            _this._tick += Environment.EPSILON_DELAY;
            _this._elapsedTime += Environment.EPSILON_DELAY * _this.timeScale;
            if (_this._tick > 17 / _this.timeScale) {
                _this._tick = 0;
                _this.unitList.forEach(function (unit) {
                    unit.onUpdate();
                });
            }
        }, Environment.EPSILON_DELAY);
    }
    Object.defineProperty(Environment.prototype, "elapsedTime", {
        get: function () {
            return this._elapsedTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "timeScale", {
        get: function () {
            return this._timeScale;
        },
        set: function (val) {
            this._timeScale = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 해당 환경에 유닛 추가
     * @param unit
     */
    Environment.prototype.appendUnit = function (unit) {
        unit.onStart();
        this.unitList.push(unit);
    };
    Environment.EPSILON_DELAY = 5;
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
        if (agent.currentFacility) {
            agent.currentFacility.removeAgent(agent);
            agent.currentFacility.onAgentOut(agent);
        }
        this.agentList.push(agent);
        this.onAgentIn(agent);
        agent.currentFacility = this;
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
        this.onAgentOut(agent);
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
        var _this = _super.call(this, environment) || this;
        _this._currentFacility = null;
        return _this;
    }
    Object.defineProperty(Agent.prototype, "currentFacility", {
        get: function () {
            return this._currentFacility;
        },
        set: function (val) {
            this._currentFacility = val;
        },
        enumerable: true,
        configurable: true
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvZHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RzL3JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvdW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdDQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQy9LYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyx3Q0FBUztBQUMvQjs7Ozs7Ozs7Ozs7OztBQ0hhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLHNDQUFRO0FBQzdCLGlCQUFpQixtQkFBTyxDQUFDLDhDQUFZO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQywwQ0FBVTtBQUNqQyxjQUFjLG1CQUFPLENBQUMsd0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaE5ZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLDBDQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkVhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdDQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG52YXIgQ2FudmFzRGVsZWdhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzRGVsZWdhdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmNhbWVyYVBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMigwLCAwKTtcclxuICAgICAgICB0aGlzLnpvb21TaXplID0gNDA7XHJcbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZSwgXCJjYW52YXNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQaWN0dXJl7J2YIOyiheulmOulvCDrtoTrpZjtlbTshJwg7KCB7KCI7Z6IIOq3uOumvFxyXG4gICAgICogQHBhcmFtIHBpY3R1cmVcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKHBpY3R1cmUpIHtcclxuICAgICAgICBpZiAocGljdHVyZSBpbnN0YW5jZW9mIEZvbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3Rm9udChwaWN0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGljdHVyZSBpbnN0YW5jZW9mIFF1YWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UXVhZChwaWN0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGljdHVyZSBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdDaXJjbGUocGljdHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogY2FudmFz7JeQIFRleHTrpbwg6re466a8XHJcbiAgICAgKiBAcGFyYW0gZm9udFxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmRyYXdGb250ID0gZnVuY3Rpb24gKGZvbnQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBmb250LmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmZvbnQgPSBmb250ICsgJ3B4JztcclxuICAgICAgICB2YXIgdGV4dE1hdHJpY3MgPSB0aGlzLmNhbnZhcy5tZWFzdXJlVGV4dChmb250LnRleHQpO1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRTY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIodGV4dE1hdHJpY3Mud2lkdGgsIDApO1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRQb3NpdGlvbiA9IHR5cGVzXzEuVmVjdG9yMi5zdWJzdHJhY3QodGhpcy5nZXRSZWFsUGl4ZWxQb3NpdGlvbihmb250LnRyYW5zZm9ybS5wb3NpdGlvbiksIHR5cGVzXzEuVmVjdG9yMi5kaXZpc2lvbihjb252ZXJ0ZWRTY2FsZSwgMikpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmZpbGxUZXh0KGZvbnQudGV4dCwgY29udmVydGVkUG9zaXRpb24ueCwgY29udmVydGVkUG9zaXRpb24ueSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPsl5Ag7IKs6rCB7ZiV7J2EIOq3uOumvFxyXG4gICAgICogQHBhcmFtIGNpcmNsZVxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmRyYXdRdWFkID0gZnVuY3Rpb24gKHF1YWQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBxdWFkLmNvbG9yO1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRTY2FsZSA9IHRoaXMuY29udmVydE1ldGVyVG9QaXhlbChxdWFkLnRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvc2l0aW9uID0gdHlwZXNfMS5WZWN0b3IyLnN1YnN0cmFjdCh0aGlzLmdldFJlYWxQaXhlbFBvc2l0aW9uKHF1YWQudHJhbnNmb3JtLnBvc2l0aW9uKSwgdHlwZXNfMS5WZWN0b3IyLmRpdmlzaW9uKGNvbnZlcnRlZFNjYWxlLCAyKSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFJlY3QoY29udmVydGVkUG9zaXRpb24ueCwgY29udmVydGVkUG9zaXRpb24ueSwgY29udmVydGVkU2NhbGUueCwgY29udmVydGVkU2NhbGUueSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPsl5Ag7JuQ7J2EIOq3uOumvFxyXG4gICAgICogQHBhcmFtIGNpcmNsZVxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmRyYXdDaXJjbGUgPSBmdW5jdGlvbiAoY2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFN0eWxlID0gY2lyY2xlLmNvbG9yO1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRQb3NpdGlvbiA9IHRoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24oY2lyY2xlLnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFNjYWxlID0gdGhpcy5jb252ZXJ0TWV0ZXJUb1BpeGVsKGNpcmNsZS50cmFuc2Zvcm0uc2NhbGUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmVsbGlwc2U7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZWxsaXBzZShjb252ZXJ0ZWRQb3NpdGlvbi54LCBjb252ZXJ0ZWRQb3NpdGlvbi55LCBjb252ZXJ0ZWRTY2FsZS54LCBjb252ZXJ0ZWRTY2FsZS55LCBjaXJjbGUudHJhbnNmb3JtLnJvdGF0aW9uLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog66+47YSw64uo7JyE7J2YIFZlY3RvcuulvCDsi6TsoJwg6re466Ck7KeIIFBpeGVs64uo7JyE66GcIOuwlOq/lOykjFxyXG4gICAgICogQHBhcmFtIHZldG9yXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuY29udmVydE1ldGVyVG9QaXhlbCA9IGZ1bmN0aW9uICh2ZXRvcikge1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRWZWN0b3IgPSB0eXBlc18xLlZlY3RvcjIubXVsdGlwbHkodmV0b3IsIHRoaXMuem9vbVNpemUpO1xyXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZWRWZWN0b3I7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDrr7jthLDri6jsnITsnZggcG9zaXRpb24gdmVjdG9y66W8IOyLpOygnCDqt7jroKTsp4ggUGl4ZWzsnITsuZjroZwg67CU6r+U7KSMXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5nZXRSZWFsUGl4ZWxQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciByYXRpbyA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgLyB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdmFyIGNhbWVyYVdpZHRoID0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoIC8gdGhpcy56b29tU2l6ZTtcclxuICAgICAgICB2YXIgY2FtZXJhSGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAvIHRoaXMuem9vbVNpemU7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFZlY3RvciA9IG5ldyB0eXBlc18xLlZlY3RvcjIodGhpcy5lbGVtZW50LmNsaWVudFdpZHRoIC8gMiwgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAvIDIpO1xyXG4gICAgICAgIHZhciBkZWx0YVZlY3RvciA9IHRoaXMuY29udmVydE1ldGVyVG9QaXhlbCh0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KHBvc2l0aW9uLCB0aGlzLmNhbWVyYVBvc2l0aW9uKSk7XHJcbiAgICAgICAgZGVsdGFWZWN0b3IueSA9IC1kZWx0YVZlY3Rvci55O1xyXG4gICAgICAgIGNvbnZlcnRlZFZlY3RvciA9IHR5cGVzXzEuVmVjdG9yMi5hZGQoY29udmVydGVkVmVjdG9yLCBkZWx0YVZlY3Rvcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZFZlY3RvcjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+ydmCDtgazquLAg7J6s7ISk7KCV6rO8IOqwgSB1bml065Ok7J2EIOugjOuNlOungVxyXG4gICAgICogQHBhcmFtIHVuaXRMaXN0XHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHVuaXRMaXN0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHVuaXRMaXN0LmZvckVhY2goZnVuY3Rpb24gKHVuaXQpIHtcclxuICAgICAgICAgICAgdW5pdC5yZW5kZXIoX3RoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuc2V0dXBFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnpvb21TaXplIC09IGUuZGVsdGFZIC8gTWF0aC5hYnMoZS5kZWx0YVkpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuem9vbVNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuem9vbVNpemUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbnMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNhbWVyYVBvc2l0aW9uID0gdHlwZXNfMS5WZWN0b3IyLnN1YnN0cmFjdChfdGhpcy5jYW1lcmFQb3NpdGlvbiwgbmV3IHR5cGVzXzEuVmVjdG9yMihlLm1vdmVtZW50WCAvIF90aGlzLnpvb21TaXplLCAtZS5tb3ZlbWVudFkgLyBfdGhpcy56b29tU2l6ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbnZhc0RlbGVnYXRvcjtcclxufSgpKTtcclxuZXhwb3J0cy5DYW52YXNEZWxlZ2F0b3IgPSBDYW52YXNEZWxlZ2F0b3I7XHJcbnZhciBQaWN0dXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGljdHVyZSh0cmFuc2Zvcm0sIGNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yID09PSB2b2lkIDApIHsgY29sb3IgPSAncmdiYSgwLCAwLCAwLCAwLjIpJzsgfVxyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBQaWN0dXJlO1xyXG59KCkpO1xyXG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xyXG52YXIgU2hhcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2hhcGUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTaGFwZSgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU2hhcGU7XHJcbn0oUGljdHVyZSkpO1xyXG5leHBvcnRzLlNoYXBlID0gU2hhcGU7XHJcbnZhciBGb250ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZvbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGb250KHRyYW5zZm9ybSwgY29sb3IpIHtcclxuICAgICAgICBpZiAoY29sb3IgPT09IHZvaWQgMCkgeyBjb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDEpJzsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRyYW5zZm9ybSwgY29sb3IpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuc2l6ZSA9IDI0O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGb250O1xyXG59KFBpY3R1cmUpKTtcclxuZXhwb3J0cy5Gb250ID0gRm9udDtcclxudmFyIFF1YWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUXVhZCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFF1YWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFF1YWQ7XHJcbn0oU2hhcGUpKTtcclxuZXhwb3J0cy5RdWFkID0gUXVhZDtcclxudmFyIENpcmNsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDaXJjbGUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDaXJjbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENpcmNsZTtcclxufShTaGFwZSkpO1xyXG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG1vZGVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbFwiKTtcclxudmFyIG1vZGVsID0gbmV3IG1vZGVsXzEuTW9kZWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpbXVsYXRpb24tdmlldycpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1bml0XzEgPSByZXF1aXJlKFwiLi91bml0XCIpO1xyXG52YXIgcmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlcmVyXCIpO1xyXG52YXIgZHJhd2VyXzEgPSByZXF1aXJlKFwiLi9kcmF3ZXJcIik7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciBNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vZGVsKGVsZW1laHQpIHtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gbmV3IHVuaXRfMS5FbnZpcm9ubWVudCgpO1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQudGltZVNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IHJlbmRlcmVyXzEuUmVuZGVyZXIodGhpcy5lbnZpcm9ubWVudCwgZWxlbWVodCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gICAgTW9kZWwucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudHJ1Y2tHZW5lcmF0b3IgPSBuZXcgVHJ1Y2tHZW5lcmF0b3IodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy50cnVja0dlbmVyYXRvci50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIC0xMCk7XHJcbiAgICAgICAgdGhpcy50cnVja0Rlc3RpbmF0aW9uID0gbmV3IFRydWNrRGVzdGluYXRpb24odGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgLy90aGlzLnRydWNrTGlzdCA9IG5ldyBBcnJheTxUcnVjaz4oKTtcclxuICAgICAgICAvL3RoaXMudHJ1Y2tMaXN0LnB1c2gobmV3IFRydWNrKHRoaXMuZW52aXJvbm1lbnQpKTtcclxuICAgICAgICB0aGlzLnRydWNrR2VuZXJhdG9yLm91dFBvcnQgPSB0aGlzLnRydWNrRGVzdGluYXRpb247XHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5hcHBlbmRVbml0KHRoaXMudHJ1Y2tHZW5lcmF0b3IpO1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQuYXBwZW5kVW5pdCh0aGlzLnRydWNrRGVzdGluYXRpb24pO1xyXG4gICAgICAgIC8vdGhpcy5lbnZpcm9ubWVudC5hcHBlbmRVbml0KHRoaXMudHJ1Y2tMaXN0WzBdKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTW9kZWw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTW9kZWwgPSBNb2RlbDtcclxuLyoqXHJcbiAqIO2KuOufrSDrj4TssKnsp4DroZwg65Ok7Ja07JisIO2KuOufreuTpOydhCDsg53shLHtlZjripQg7J6l7IaMXHJcbiAqL1xyXG52YXIgVHJ1Y2tHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVHJ1Y2tHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUcnVja0dlbmVyYXRvcihlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIF90aGlzLm5leHRUcnVja0luZGV4ID0gMDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBjaXJjbGUgPSBuZXcgZHJhd2VyXzEuQ2lyY2xlKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhjaXJjbGUpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICftirjrn60g7IOd7ISx6riwJztcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhmb250KTtcclxuICAgIH07XHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIoMSwgMSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjI7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGltZURhdGEgPSBuZXcgdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhKE1hdGgucmFuZG9tKCkgKiA3MjAwMDAsIHR5cGVzXzEuVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1NFQV9CVUxLKTtcclxuICAgICAgICAgICAgdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3QucHVzaCh0aW1lRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzA7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGltZURhdGEgPSBuZXcgdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhKE1hdGgucmFuZG9tKCkgKiA3MjAwMDAsIHR5cGVzXzEuVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1RBTktfQlVMSyk7XHJcbiAgICAgICAgICAgIHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0LnB1c2godGltZURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM1ODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lRGF0YSA9IG5ldyB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEoTWF0aC5yYW5kb20oKSAqIDcyMDAwMCwgdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfRE9LRSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0LnB1c2godGltZURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdCA9IHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEudGltZSAtIGIudGltZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dFRydWNrSW5kZXggPCB0aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIG5leHRUcnVja0Fycml2YWxUaW1lRGF0YSA9IHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0W3RoaXMubmV4dFRydWNrSW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAobmV4dFRydWNrQXJyaXZhbFRpbWVEYXRhLnRpbWUgPCB0aGlzLmVudmlyb25tZW50LmVsYXBzZWRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dFRydWNrQXJyaXZhbFRpbWVEYXRhLmtpbmQgPT0gdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfU0VBX0JVTEspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJ1Y2sgPSBuZXcgU2VhQnVsa1RydWNrKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQuYXBwZW5kVW5pdCh0cnVjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRQb3J0LmFwcGVuZEFnZW50KHRydWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHRUcnVja0Fycml2YWxUaW1lRGF0YS5raW5kID09IHR5cGVzXzEuVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1RBTktfQlVMSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0cnVjayA9IG5ldyBUYW5rQnVsa1RydWNrKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQuYXBwZW5kVW5pdCh0cnVjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRQb3J0LmFwcGVuZEFnZW50KHRydWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHRUcnVja0Fycml2YWxUaW1lRGF0YS5raW5kID09IHR5cGVzXzEuVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX0RPS0UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJ1Y2sgPSBuZXcgRG9ja1RydWNrKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQuYXBwZW5kVW5pdCh0cnVjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRQb3J0LmFwcGVuZEFnZW50KHRydWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5leHRUcnVja0Fycml2YWxUaW1lRGF0YS5pc0Fycml2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VHJ1Y2tJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFRydWNrR2VuZXJhdG9yLnByb3RvdHlwZS5vbkFnZW50SW4gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUcnVja0dlbmVyYXRvcjtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxuLyoqXHJcbiAqIO2KuOufrSDrj4TssKnsp4BcclxuICovXHJcbnZhciBUcnVja0Rlc3RpbmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRydWNrRGVzdGluYXRpb24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUcnVja0Rlc3RpbmF0aW9uKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVHJ1Y2tEZXN0aW5hdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICftirjrn60g64+E7LCp7KeAJztcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhmb250KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tEZXN0aW5hdGlvbi5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrRGVzdGluYXRpb24ucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIHZhciByYW5kb21EZWx0YVBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMihNYXRoLnJhbmRvbSgpICogdGhpcy50cmFuc2Zvcm0uc2NhbGUueCAtIHRoaXMudHJhbnNmb3JtLnNjYWxlLnggLyAyLCBNYXRoLnJhbmRvbSgpICogdGhpcy50cmFuc2Zvcm0uc2NhbGUueSAtIHRoaXMudHJhbnNmb3JtLnNjYWxlLnkgLyAyKTtcclxuICAgICAgICBhZ2VudC50cmFuc2Zvcm0ucG9zaXRpb24gPSB0eXBlc18xLlZlY3RvcjIuYWRkKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLCByYW5kb21EZWx0YVBvc2l0aW9uKTtcclxuICAgICAgICBhZ2VudC50cmFuc2Zvcm0ucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBZ2VudChhZ2VudCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrRGVzdGluYXRpb24ucHJvdG90eXBlLm9uQWdlbnRPdXQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJ1Y2tEZXN0aW5hdGlvbjtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxudmFyIFRydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRydWNrLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVHJ1Y2soKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVHJ1Y2suV0lEVEggPSAxLjg1O1xyXG4gICAgVHJ1Y2suTEVOR1RIID0gNC4zO1xyXG4gICAgcmV0dXJuIFRydWNrO1xyXG59KHVuaXRfMS5BZ2VudCkpO1xyXG52YXIgU2VhQnVsa1RydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlYUJ1bGtUcnVjaywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNlYUJ1bGtUcnVjayhlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNlYUJ1bGtUcnVjay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0sICdyZ2JhKDI1NiwgMCwgMCwgMC4yKScpO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgfTtcclxuICAgIFNlYUJ1bGtUcnVjay5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIoVHJ1Y2suV0lEVEgsIFRydWNrLkxFTkdUSCk7XHJcbiAgICB9O1xyXG4gICAgU2VhQnVsa1RydWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55ICs9IDAuMDEwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZWFCdWxrVHJ1Y2s7XHJcbn0oVHJ1Y2spKTtcclxudmFyIFRhbmtCdWxrVHJ1Y2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVGFua0J1bGtUcnVjaywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRhbmtCdWxrVHJ1Y2soZW52aXJvbm1lbnQpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBUYW5rQnVsa1RydWNrLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSwgJ3JnYmEoMCwgMjU2LCAwLCAwLjIpJyk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICB9O1xyXG4gICAgVGFua0J1bGtUcnVjay5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIoVHJ1Y2suV0lEVEgsIFRydWNrLkxFTkdUSCk7XHJcbiAgICB9O1xyXG4gICAgVGFua0J1bGtUcnVjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSArPSAwLjAyMDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua0J1bGtUcnVjaztcclxufShUcnVjaykpO1xyXG52YXIgRG9ja1RydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKERvY2tUcnVjaywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIERvY2tUcnVjayhlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIERvY2tUcnVjay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0sICdyZ2JhKDAsIDAsIDI1NiwgMC4yKScpO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgfTtcclxuICAgIERvY2tUcnVjay5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIoVHJ1Y2suV0lEVEgsIFRydWNrLkxFTkdUSCk7XHJcbiAgICB9O1xyXG4gICAgRG9ja1RydWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55ICs9IDAuMDE1O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEb2NrVHJ1Y2s7XHJcbn0oVHJ1Y2spKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRyYXdlcl8xID0gcmVxdWlyZShcIi4vZHJhd2VyXCIpO1xyXG52YXIgUmVuZGVyZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZW5kZXJlcihlbnZpcm9ubWVudCwgZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgICAgICB0aGlzLmNhbnZhc0RlbGVnYXRvciA9IG5ldyBkcmF3ZXJfMS5DYW52YXNEZWxlZ2F0b3IoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25VcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZW5kZXJlci5wcm90b3R5cGUsIFwiZW52aXJvbm1lbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW52aXJvbm1lbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzRGVsZWdhdG9yLnVwZGF0ZSh0aGlzLmVudmlyb25tZW50LnVuaXRMaXN0KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5NQVhfV0lEVEggPSAxMDI0O1xyXG4gICAgUmVuZGVyZXIuTUFYX0hFSUdIVCA9IDEwMjQ7XHJcbiAgICByZXR1cm4gUmVuZGVyZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmVuZGVyZXIgPSBSZW5kZXJlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIDLssKjsm5Ag67Kh7YSwXHJcbiAqL1xyXG52YXIgVmVjdG9yMiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjIoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIFZlY3RvcjIuYWRkID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuc3Vic3RyYWN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIubXVsdGlwbHkgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihhLnggKiBiLCBhLnkgKiBiKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmRpdmlzaW9uID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54IC8gYiwgYS55IC8gYik7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcInNxck1hZ25pdHVkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwibWFnbml0dWRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnNxck1hZ25pdHVkZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBWZWN0b3IyLlpFUk8gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHJldHVybiBWZWN0b3IyO1xyXG59KCkpO1xyXG5leHBvcnRzLlZlY3RvcjIgPSBWZWN0b3IyO1xyXG4vKipcclxuICogVW5pdOydmCDsnITsuZgsIO2BrOq4sCwg6rCB64+E7KCV67O066W8IOqwluqzoOyeiOydjFxyXG4gKi9cclxudmFyIFRyYW5zZm9ybSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyYW5zZm9ybShwb3NpdGlvbiwgc2NhbGUsIHJvdGF0aW9uKSB7XHJcbiAgICAgICAgaWYgKHJvdGF0aW9uID09PSB2b2lkIDApIHsgcm90YXRpb24gPSAwOyB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVHJhbnNmb3JtO1xyXG59KCkpO1xyXG5leHBvcnRzLlRyYW5zZm9ybSA9IFRyYW5zZm9ybTtcclxuLyoqXHJcbiAqIO2KuOufrSDrj4TssKkg7Iuc6rCE7JeQIOq0gO2VnCDrjbDsnbTthLBcclxuICovXHJcbnZhciBUcnVja0Fycml2YWxEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJ1Y2tBcnJpdmFsRGF0YSh0aW1lLCBraW5kKSB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgICAgICB0aGlzLmtpbmQgPSBraW5kO1xyXG4gICAgICAgIHRoaXMuaXNBcnJpdmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBUcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfU0VBX0JVTEsgPSAxO1xyXG4gICAgVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1RBTktfQlVMSyA9IDI7XHJcbiAgICBUcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfRE9LRSA9IDM7XHJcbiAgICByZXR1cm4gVHJ1Y2tBcnJpdmFsRGF0YTtcclxufSgpKTtcclxuZXhwb3J0cy5UcnVja0Fycml2YWxEYXRhID0gVHJ1Y2tBcnJpdmFsRGF0YTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciBFbnZpcm9ubWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVudmlyb25tZW50KCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fdGljayA9IDA7XHJcbiAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy51bml0TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuX3RpY2sgKz0gRW52aXJvbm1lbnQuRVBTSUxPTl9ERUxBWTtcclxuICAgICAgICAgICAgX3RoaXMuX2VsYXBzZWRUaW1lICs9IEVudmlyb25tZW50LkVQU0lMT05fREVMQVkgKiBfdGhpcy50aW1lU2NhbGU7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fdGljayA+IDE3IC8gX3RoaXMudGltZVNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fdGljayA9IDA7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51bml0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh1bml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdC5vblVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBFbnZpcm9ubWVudC5FUFNJTE9OX0RFTEFZKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbnZpcm9ubWVudC5wcm90b3R5cGUsIFwiZWxhcHNlZFRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZWxhcHNlZFRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRW52aXJvbm1lbnQucHJvdG90eXBlLCBcInRpbWVTY2FsZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lU2NhbGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGltZVNjYWxlID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiDtlbTri7kg7ZmY6rK97JeQIOycoOuLmyDstpTqsIBcclxuICAgICAqIEBwYXJhbSB1bml0XHJcbiAgICAgKi9cclxuICAgIEVudmlyb25tZW50LnByb3RvdHlwZS5hcHBlbmRVbml0ID0gZnVuY3Rpb24gKHVuaXQpIHtcclxuICAgICAgICB1bml0Lm9uU3RhcnQoKTtcclxuICAgICAgICB0aGlzLnVuaXRMaXN0LnB1c2godW5pdCk7XHJcbiAgICB9O1xyXG4gICAgRW52aXJvbm1lbnQuRVBTSUxPTl9ERUxBWSA9IDU7XHJcbiAgICByZXR1cm4gRW52aXJvbm1lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRW52aXJvbm1lbnQgPSBFbnZpcm9ubWVudDtcclxudmFyIFVuaXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVbml0KGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtID0gbmV3IHR5cGVzXzEuVHJhbnNmb3JtKHR5cGVzXzEuVmVjdG9yMi5aRVJPLCBuZXcgdHlwZXNfMS5WZWN0b3IyKDEwLCAxMCksIDApO1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShVbml0LnByb3RvdHlwZSwgXCJ0cmFuc2Zvcm1cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFVuaXQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVW5pdCA9IFVuaXQ7XHJcbi8qKlxyXG4gKiDrqqjrk5wg7Iuc7ISk65Ok7J2YIOu2gOuqqCDtgbTrnpjsiqRcclxuICovXHJcbnZhciBGYWNpbGl0eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGYWNpbGl0eSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZhY2lsaXR5KGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuYWdlbnRMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZ2VudCDstpTqsIBcclxuICAgICAqIEBwYXJhbSBhZ2VudFxyXG4gICAgICovXHJcbiAgICBGYWNpbGl0eS5wcm90b3R5cGUuYXBwZW5kQWdlbnQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICBpZiAoYWdlbnQuY3VycmVudEZhY2lsaXR5KSB7XHJcbiAgICAgICAgICAgIGFnZW50LmN1cnJlbnRGYWNpbGl0eS5yZW1vdmVBZ2VudChhZ2VudCk7XHJcbiAgICAgICAgICAgIGFnZW50LmN1cnJlbnRGYWNpbGl0eS5vbkFnZW50T3V0KGFnZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZ2VudExpc3QucHVzaChhZ2VudCk7XHJcbiAgICAgICAgdGhpcy5vbkFnZW50SW4oYWdlbnQpO1xyXG4gICAgICAgIGFnZW50LmN1cnJlbnRGYWNpbGl0eSA9IHRoaXM7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZ2VudCDsgq3soJxcclxuICAgICAqIEBwYXJhbSBhZ2VudFxyXG4gICAgICovXHJcbiAgICBGYWNpbGl0eS5wcm90b3R5cGUucmVtb3ZlQWdlbnQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWdlbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFnZW50TGlzdFtpXSA9PT0gYWdlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWdlbnRMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQWdlbnRPdXQoYWdlbnQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGYWNpbGl0eTtcclxufShVbml0KSk7XHJcbmV4cG9ydHMuRmFjaWxpdHkgPSBGYWNpbGl0eTtcclxuLyoqXHJcbiAqIOuqqOuToCBBZ2VudOydmCDrtoDrqqgg7YG0656Y7IqkXHJcbiAqL1xyXG52YXIgQWdlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQWdlbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBZ2VudChlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9jdXJyZW50RmFjaWxpdHkgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBZ2VudC5wcm90b3R5cGUsIFwiY3VycmVudEZhY2lsaXR5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRGYWNpbGl0eTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RmFjaWxpdHkgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQWdlbnQ7XHJcbn0oVW5pdCkpO1xyXG5leHBvcnRzLkFnZW50ID0gQWdlbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=