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
var renderer_1 = __webpack_require__(/*! ./renderer */ "./src/pages/ts/renderer.ts");
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
        if (picture instanceof Path) {
            this.drawPath(picture);
        }
        else if (picture instanceof Font) {
            this.drawFont(picture);
        }
        else if (picture instanceof Quad) {
            this.drawQuad(picture);
        }
        else if (picture instanceof Circle) {
            this.drawCircle(picture);
        }
    };
    CanvasDelegator.prototype.drawPath = function (path) {
        var _this = this;
        this.canvas.fillStyle = path.color;
        this.canvas.strokeStyle = path.color;
        /*
        let convertedScale = this.convertMeterToPixel(path.transform.scale);
        let convertedPosition = this.getRealPixelPosition(path.transform.position);
        */
        var convertedPointList = path.pointList.map(function (point) { return _this.getRealPixelPosition(point); });
        this.canvas.beginPath();
        this.canvas.moveTo(convertedPointList[0].x, convertedPointList[0].y);
        convertedPointList.forEach(function (point) {
            _this.canvas.lineTo(point.x, point.y);
        });
        this.canvas.stroke();
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
        var _this = this;
        this.canvas.fillStyle = quad.color;
        var convertedScale = this.convertMeterToPixel(quad.transform.scale);
        var convertedPosition = this.getRealPixelPosition(quad.transform.position);
        var theta1 = Math.atan2(convertedScale.x, convertedScale.y);
        var theta2 = Math.PI - theta1;
        var radius = convertedScale.y / 2 / Math.cos(theta1);
        var points = new Array();
        points.push(new types_1.Vector2(convertedPosition.x + radius * Math.cos(theta2 + quad.transform.rotation), convertedPosition.y + radius * Math.sin(theta2 + quad.transform.rotation)));
        points.push(new types_1.Vector2(convertedPosition.x + radius * Math.cos(-theta2 + quad.transform.rotation), convertedPosition.y + radius * Math.sin(-theta2 + quad.transform.rotation)));
        points.push(new types_1.Vector2(convertedPosition.x + radius * Math.cos(-theta1 + quad.transform.rotation), convertedPosition.y + radius * Math.sin(-theta1 + quad.transform.rotation)));
        points.push(new types_1.Vector2(convertedPosition.x + radius * Math.cos(theta1 + quad.transform.rotation), convertedPosition.y + radius * Math.sin(theta1 + quad.transform.rotation)));
        this.canvas.beginPath();
        this.canvas.moveTo(points[3].x, points[3].y);
        points.forEach(function (point) {
            _this.canvas.lineTo(point.x, point.y);
        });
        this.canvas.fill();
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
        for (var i = -renderer_1.Renderer.MAX_WIDTH / 2; i < renderer_1.Renderer.MAX_WIDTH / 2; i += 1) {
            var path = new Path(new types_1.Transform(types_1.Vector2.ZERO, types_1.Vector2.ZERO), (i % 10 == 0 ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'));
            path.pointList.push(new types_1.Vector2(i, -renderer_1.Renderer.MAX_HEIGHT / 2));
            path.pointList.push(new types_1.Vector2(i, renderer_1.Renderer.MAX_HEIGHT / 2));
            this.drawPath(path);
        }
        for (var i = -renderer_1.Renderer.MAX_HEIGHT / 2; i < renderer_1.Renderer.MAX_HEIGHT / 2; i += 1) {
            var path = new Path(new types_1.Transform(types_1.Vector2.ZERO, types_1.Vector2.ZERO), (i % 10 == 0 ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'));
            path.pointList.push(new types_1.Vector2(-renderer_1.Renderer.MAX_HEIGHT / 2, i));
            path.pointList.push(new types_1.Vector2(renderer_1.Renderer.MAX_HEIGHT / 2, i));
            this.drawPath(path);
        }
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
var Path = /** @class */ (function (_super) {
    __extends(Path, _super);
    function Path(transform, color) {
        if (color === void 0) { color = 'rgba(0, 0, 0, 0.2)'; }
        var _this = _super.call(this, transform, color) || this;
        _this.pointList = new Array();
        return _this;
    }
    return Path;
}(Shape));
exports.Path = Path;
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
        this.truckGenerator.transform.position = new types_1.Vector2(0, -20);
        this.truckDestination = new TruckDestination(this.environment);
        this.truckDestination.transform.position = new types_1.Vector2(0, 0);
        this.truckGenerator.outPort = this.truckDestination;
        this.truckGenerator.register();
        this.truckDestination.register();
        var road1 = new Road(this.environment);
        road1.wayPointList.push(new types_1.Vector2(0, 0));
        road1.wayPointList.push(new types_1.Vector2(10, 0));
        road1.wayPointList.push(new types_1.Vector2(10, 10));
        road1.register();
    };
    return Model;
}());
exports.Model = Model;
/**
 * 트럭이 지나다닐 길
 */
var Road = /** @class */ (function (_super) {
    __extends(Road, _super);
    function Road(environment) {
        var _this = _super.call(this, environment) || this;
        _this.wayPointList = new Array();
        return _this;
    }
    Road.prototype.onAgentIn = function (agent) {
    };
    Road.prototype.onAgentOut = function (agent) {
    };
    Road.prototype.render = function (canvasDelegator) {
        var path = new drawer_1.Path(this.transform);
        this.wayPointList.forEach(function (point) {
            path.pointList.push(point);
        });
        canvasDelegator.draw(path);
    };
    Road.prototype.onStart = function () {
    };
    Road.prototype.onUpdate = function () {
    };
    return Road;
}(unit_1.Facility));
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
    TruckGenerator.prototype.onAgentIn = function (agent) {
    };
    TruckGenerator.prototype.onAgentOut = function (agent) {
    };
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
                var truck = void 0;
                if (nextTruckArrivalTimeData.kind == types_1.TruckArrivalData.TRUCK_KIND_SEA_BULK) {
                    truck = new SeaBulkTruck(this.environment);
                }
                else if (nextTruckArrivalTimeData.kind == types_1.TruckArrivalData.TRUCK_KIND_TANK_BULK) {
                    truck = new TankBulkTruck(this.environment);
                }
                else if (nextTruckArrivalTimeData.kind == types_1.TruckArrivalData.TRUCK_KIND_DOKE) {
                    truck = new DockTruck(this.environment);
                }
                truck.register();
                this.outPort.appendAgent(truck);
                nextTruckArrivalTimeData.isArrived = true;
                this.nextTruckIndex++;
            }
        }
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
    /**
     *
     * @override
     */
    TruckDestination.prototype.onAgentIn = function (agent) {
        var randomDeltaPosition = new types_1.Vector2(Math.random() * this.transform.scale.x - this.transform.scale.x / 2, Math.random() * this.transform.scale.y - this.transform.scale.y / 2);
        //agent.transform.position = Vector2.add(this.transform.position, randomDeltaPosition);
        //agent.transform.rotation = Math.random() * 2 * Math.PI;
        this.removeAgent(agent);
    };
    /**
     *
     * @override
     */
    TruckDestination.prototype.onAgentOut = function (agent) {
    };
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
        this.transform.scale = new types_1.Vector2(20, 20);
    };
    /**
     *
     */
    TruckDestination.prototype.onUpdate = function () {
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
    Renderer.MAX_WIDTH = 1000;
    Renderer.MAX_HEIGHT = 1000;
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
    Vector2.prototype.front = function () {
        var vector = new Vector2(this.x, this.y);
        return vector;
    };
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
            _this._deltaTime = Environment.EPSILON_DELAY * _this.timeScale;
            _this._elapsedTime += _this.deltaTime;
            if (_this._tick > 17 / _this.timeScale) {
                _this._tick = 0;
                _this.unitList.forEach(function (unit) {
                    unit.onUpdate();
                    if (unit instanceof Agent) {
                        unit.applyComponents();
                    }
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
    Object.defineProperty(Environment.prototype, "deltaTime", {
        get: function () {
            return this._deltaTime;
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
        this._environment = environment;
    }
    Object.defineProperty(Unit.prototype, "transform", {
        get: function () {
            return this._transform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Unit.prototype, "environment", {
        get: function () {
            return this._environment;
        },
        enumerable: true,
        configurable: true
    });
    Unit.prototype.register = function () {
        this.environment.appendUnit(this);
    };
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
        _this.componentList = new Array();
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
    Agent.prototype.addComponent = function (component) {
        this.componentList.push(component);
    };
    Agent.prototype.applyComponents = function () {
        var _this = this;
        this.componentList.forEach(function (component) {
            component.do(_this);
        });
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvZHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RzL3JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvdW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdDQUFTO0FBQy9CLGlCQUFpQixtQkFBTyxDQUFDLDhDQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDBDQUEwQyxFQUFFO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3REFBd0QsdUNBQXVDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsd0NBQXdDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4QkFBOEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hPYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyx3Q0FBUztBQUMvQjs7Ozs7Ozs7Ozs7OztBQ0hhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLHNDQUFRO0FBQzdCLGlCQUFpQixtQkFBTyxDQUFDLDhDQUFZO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQywwQ0FBVTtBQUNqQyxjQUFjLG1CQUFPLENBQUMsd0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDek9ZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLDBDQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsY0FBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2RWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsd0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciByZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyZXJcIik7XHJcbnZhciBDYW52YXNEZWxlZ2F0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNEZWxlZ2F0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhUG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHRoaXMuem9vbVNpemUgPSA0MDtcclxuICAgICAgICB0aGlzLnNldHVwRXZlbnQoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLCBcImNhbnZhc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYW52YXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIFBpY3R1cmXsnZgg7KKF66WY66W8IOu2hOulmO2VtOyEnCDsoIHsoIjtnogg6re466a8XHJcbiAgICAgKiBAcGFyYW0gcGljdHVyZVxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAocGljdHVyZSkge1xyXG4gICAgICAgIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgUGF0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdQYXRoKHBpY3R1cmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgRm9udCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdGb250KHBpY3R1cmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgUXVhZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdRdWFkKHBpY3R1cmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgQ2lyY2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0NpcmNsZShwaWN0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5kcmF3UGF0aCA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBwYXRoLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0cm9rZVN0eWxlID0gcGF0aC5jb2xvcjtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGxldCBjb252ZXJ0ZWRTY2FsZSA9IHRoaXMuY29udmVydE1ldGVyVG9QaXhlbChwYXRoLnRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICAgICAgbGV0IGNvbnZlcnRlZFBvc2l0aW9uID0gdGhpcy5nZXRSZWFsUGl4ZWxQb3NpdGlvbihwYXRoLnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICAgICAgKi9cclxuICAgICAgICB2YXIgY29udmVydGVkUG9pbnRMaXN0ID0gcGF0aC5wb2ludExpc3QubWFwKGZ1bmN0aW9uIChwb2ludCkgeyByZXR1cm4gX3RoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24ocG9pbnQpOyB9KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5tb3ZlVG8oY29udmVydGVkUG9pbnRMaXN0WzBdLngsIGNvbnZlcnRlZFBvaW50TGlzdFswXS55KTtcclxuICAgICAgICBjb252ZXJ0ZWRQb2ludExpc3QuZm9yRWFjaChmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuY2FudmFzLmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHJva2UoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+yXkCBUZXh066W8IOq3uOumvFxyXG4gICAgICogQHBhcmFtIGZvbnRcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5kcmF3Rm9udCA9IGZ1bmN0aW9uIChmb250KSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFN0eWxlID0gZm9udC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5mb250ID0gZm9udCArICdweCc7XHJcbiAgICAgICAgdmFyIHRleHRNYXRyaWNzID0gdGhpcy5jYW52YXMubWVhc3VyZVRleHQoZm9udC50ZXh0KTtcclxuICAgICAgICB2YXIgY29udmVydGVkU2NhbGUgPSBuZXcgdHlwZXNfMS5WZWN0b3IyKHRleHRNYXRyaWNzLndpZHRoLCAwKTtcclxuICAgICAgICB2YXIgY29udmVydGVkUG9zaXRpb24gPSB0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KHRoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24oZm9udC50cmFuc2Zvcm0ucG9zaXRpb24pLCB0eXBlc18xLlZlY3RvcjIuZGl2aXNpb24oY29udmVydGVkU2NhbGUsIDIpKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsVGV4dChmb250LnRleHQsIGNvbnZlcnRlZFBvc2l0aW9uLngsIGNvbnZlcnRlZFBvc2l0aW9uLnkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogY2FudmFz7JeQIOyCrOqwge2YleydhCDqt7jrprxcclxuICAgICAqIEBwYXJhbSBjaXJjbGVcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5kcmF3UXVhZCA9IGZ1bmN0aW9uIChxdWFkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBxdWFkLmNvbG9yO1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRTY2FsZSA9IHRoaXMuY29udmVydE1ldGVyVG9QaXhlbChxdWFkLnRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvc2l0aW9uID0gdGhpcy5nZXRSZWFsUGl4ZWxQb3NpdGlvbihxdWFkLnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIHRoZXRhMSA9IE1hdGguYXRhbjIoY29udmVydGVkU2NhbGUueCwgY29udmVydGVkU2NhbGUueSk7XHJcbiAgICAgICAgdmFyIHRoZXRhMiA9IE1hdGguUEkgLSB0aGV0YTE7XHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IGNvbnZlcnRlZFNjYWxlLnkgLyAyIC8gTWF0aC5jb3ModGhldGExKTtcclxuICAgICAgICB2YXIgcG9pbnRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgcG9pbnRzLnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMihjb252ZXJ0ZWRQb3NpdGlvbi54ICsgcmFkaXVzICogTWF0aC5jb3ModGhldGEyICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pLCBjb252ZXJ0ZWRQb3NpdGlvbi55ICsgcmFkaXVzICogTWF0aC5zaW4odGhldGEyICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pKSk7XHJcbiAgICAgICAgcG9pbnRzLnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMihjb252ZXJ0ZWRQb3NpdGlvbi54ICsgcmFkaXVzICogTWF0aC5jb3MoLXRoZXRhMiArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSwgY29udmVydGVkUG9zaXRpb24ueSArIHJhZGl1cyAqIE1hdGguc2luKC10aGV0YTIgKyBxdWFkLnRyYW5zZm9ybS5yb3RhdGlvbikpKTtcclxuICAgICAgICBwb2ludHMucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKGNvbnZlcnRlZFBvc2l0aW9uLnggKyByYWRpdXMgKiBNYXRoLmNvcygtdGhldGExICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pLCBjb252ZXJ0ZWRQb3NpdGlvbi55ICsgcmFkaXVzICogTWF0aC5zaW4oLXRoZXRhMSArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSkpO1xyXG4gICAgICAgIHBvaW50cy5wdXNoKG5ldyB0eXBlc18xLlZlY3RvcjIoY29udmVydGVkUG9zaXRpb24ueCArIHJhZGl1cyAqIE1hdGguY29zKHRoZXRhMSArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSwgY29udmVydGVkUG9zaXRpb24ueSArIHJhZGl1cyAqIE1hdGguc2luKHRoZXRhMSArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSkpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLm1vdmVUbyhwb2ludHNbM10ueCwgcG9pbnRzWzNdLnkpO1xyXG4gICAgICAgIHBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgICAgICBfdGhpcy5jYW52YXMubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmZpbGwoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+yXkCDsm5DsnYQg6re466a8XHJcbiAgICAgKiBAcGFyYW0gY2lyY2xlXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBjaXJjbGUuY29sb3I7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvc2l0aW9uID0gdGhpcy5nZXRSZWFsUGl4ZWxQb3NpdGlvbihjaXJjbGUudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICB2YXIgY29udmVydGVkU2NhbGUgPSB0aGlzLmNvbnZlcnRNZXRlclRvUGl4ZWwoY2lyY2xlLnRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZWxsaXBzZTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5lbGxpcHNlKGNvbnZlcnRlZFBvc2l0aW9uLngsIGNvbnZlcnRlZFBvc2l0aW9uLnksIGNvbnZlcnRlZFNjYWxlLngsIGNvbnZlcnRlZFNjYWxlLnksIGNpcmNsZS50cmFuc2Zvcm0ucm90YXRpb24sIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDrr7jthLDri6jsnITsnZggVmVjdG9y66W8IOyLpOygnCDqt7jroKTsp4ggUGl4ZWzri6jsnITroZwg67CU6r+U7KSMXHJcbiAgICAgKiBAcGFyYW0gdmV0b3JcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5jb252ZXJ0TWV0ZXJUb1BpeGVsID0gZnVuY3Rpb24gKHZldG9yKSB7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFZlY3RvciA9IHR5cGVzXzEuVmVjdG9yMi5tdWx0aXBseSh2ZXRvciwgdGhpcy56b29tU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZFZlY3RvcjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOuvuO2EsOuLqOychOydmCBwb3NpdGlvbiB2ZWN0b3Lrpbwg7Iuk7KCcIOq3uOugpOyniCBQaXhlbOychOy5mOuhnCDrsJTqv5TspIxcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmdldFJlYWxQaXhlbFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHJhdGlvID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAvIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgY2FtZXJhV2lkdGggPSB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGggLyB0aGlzLnpvb21TaXplO1xyXG4gICAgICAgIHZhciBjYW1lcmFIZWlnaHQgPSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gdGhpcy56b29tU2l6ZTtcclxuICAgICAgICB2YXIgY29udmVydGVkVmVjdG9yID0gbmV3IHR5cGVzXzEuVmVjdG9yMih0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGggLyAyLCB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdmFyIGRlbHRhVmVjdG9yID0gdGhpcy5jb252ZXJ0TWV0ZXJUb1BpeGVsKHR5cGVzXzEuVmVjdG9yMi5zdWJzdHJhY3QocG9zaXRpb24sIHRoaXMuY2FtZXJhUG9zaXRpb24pKTtcclxuICAgICAgICBkZWx0YVZlY3Rvci55ID0gLWRlbHRhVmVjdG9yLnk7XHJcbiAgICAgICAgY29udmVydGVkVmVjdG9yID0gdHlwZXNfMS5WZWN0b3IyLmFkZChjb252ZXJ0ZWRWZWN0b3IsIGRlbHRhVmVjdG9yKTtcclxuICAgICAgICByZXR1cm4gY29udmVydGVkVmVjdG9yO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogY2FudmFz7J2YIO2BrOq4sCDsnqzshKTsoJXqs7wg6rCBIHVuaXTrk6TsnYQg66CM642U66eBXHJcbiAgICAgKiBAcGFyYW0gdW5pdExpc3RcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodW5pdExpc3QpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdW5pdExpc3QuZm9yRWFjaChmdW5jdGlvbiAodW5pdCkge1xyXG4gICAgICAgICAgICB1bml0LnJlbmRlcihfdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IC1yZW5kZXJlcl8xLlJlbmRlcmVyLk1BWF9XSURUSCAvIDI7IGkgPCByZW5kZXJlcl8xLlJlbmRlcmVyLk1BWF9XSURUSCAvIDI7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IG5ldyBQYXRoKG5ldyB0eXBlc18xLlRyYW5zZm9ybSh0eXBlc18xLlZlY3RvcjIuWkVSTywgdHlwZXNfMS5WZWN0b3IyLlpFUk8pLCAoaSAlIDEwID09IDAgPyAncmdiYSgwLCAwLCAwLCAwLjQpJyA6ICdyZ2JhKDAsIDAsIDAsIDAuMSknKSk7XHJcbiAgICAgICAgICAgIHBhdGgucG9pbnRMaXN0LnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMihpLCAtcmVuZGVyZXJfMS5SZW5kZXJlci5NQVhfSEVJR0hUIC8gMikpO1xyXG4gICAgICAgICAgICBwYXRoLnBvaW50TGlzdC5wdXNoKG5ldyB0eXBlc18xLlZlY3RvcjIoaSwgcmVuZGVyZXJfMS5SZW5kZXJlci5NQVhfSEVJR0hUIC8gMikpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdQYXRoKHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gLXJlbmRlcmVyXzEuUmVuZGVyZXIuTUFYX0hFSUdIVCAvIDI7IGkgPCByZW5kZXJlcl8xLlJlbmRlcmVyLk1BWF9IRUlHSFQgLyAyOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgdmFyIHBhdGggPSBuZXcgUGF0aChuZXcgdHlwZXNfMS5UcmFuc2Zvcm0odHlwZXNfMS5WZWN0b3IyLlpFUk8sIHR5cGVzXzEuVmVjdG9yMi5aRVJPKSwgKGkgJSAxMCA9PSAwID8gJ3JnYmEoMCwgMCwgMCwgMC40KScgOiAncmdiYSgwLCAwLCAwLCAwLjEpJykpO1xyXG4gICAgICAgICAgICBwYXRoLnBvaW50TGlzdC5wdXNoKG5ldyB0eXBlc18xLlZlY3RvcjIoLXJlbmRlcmVyXzEuUmVuZGVyZXIuTUFYX0hFSUdIVCAvIDIsIGkpKTtcclxuICAgICAgICAgICAgcGF0aC5wb2ludExpc3QucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKHJlbmRlcmVyXzEuUmVuZGVyZXIuTUFYX0hFSUdIVCAvIDIsIGkpKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aChwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5zZXR1cEV2ZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuem9vbVNpemUgLT0gZS5kZWx0YVkgLyBNYXRoLmFicyhlLmRlbHRhWSk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy56b29tU2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy56b29tU2l6ZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUuYnV0dG9ucyA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2FtZXJhUG9zaXRpb24gPSB0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KF90aGlzLmNhbWVyYVBvc2l0aW9uLCBuZXcgdHlwZXNfMS5WZWN0b3IyKGUubW92ZW1lbnRYIC8gX3RoaXMuem9vbVNpemUsIC1lLm1vdmVtZW50WSAvIF90aGlzLnpvb21TaXplKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzRGVsZWdhdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLkNhbnZhc0RlbGVnYXRvciA9IENhbnZhc0RlbGVnYXRvcjtcclxudmFyIFBpY3R1cmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQaWN0dXJlKHRyYW5zZm9ybSwgY29sb3IpIHtcclxuICAgICAgICBpZiAoY29sb3IgPT09IHZvaWQgMCkgeyBjb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknOyB9XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBpY3R1cmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUGljdHVyZSA9IFBpY3R1cmU7XHJcbnZhciBTaGFwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTaGFwZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNoYXBlKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBTaGFwZTtcclxufShQaWN0dXJlKSk7XHJcbmV4cG9ydHMuU2hhcGUgPSBTaGFwZTtcclxudmFyIEZvbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRm9udCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZvbnQodHJhbnNmb3JtLCBjb2xvcikge1xyXG4gICAgICAgIGlmIChjb2xvciA9PT0gdm9pZCAwKSB7IGNvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMSknOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHJhbnNmb3JtLCBjb2xvcikgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zaXplID0gMjQ7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZvbnQ7XHJcbn0oUGljdHVyZSkpO1xyXG5leHBvcnRzLkZvbnQgPSBGb250O1xyXG52YXIgUGF0aCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQYXRoLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGF0aCh0cmFuc2Zvcm0sIGNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yID09PSB2b2lkIDApIHsgY29sb3IgPSAncmdiYSgwLCAwLCAwLCAwLjIpJzsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRyYW5zZm9ybSwgY29sb3IpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMucG9pbnRMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBhdGg7XHJcbn0oU2hhcGUpKTtcclxuZXhwb3J0cy5QYXRoID0gUGF0aDtcclxudmFyIFF1YWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUXVhZCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFF1YWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFF1YWQ7XHJcbn0oU2hhcGUpKTtcclxuZXhwb3J0cy5RdWFkID0gUXVhZDtcclxudmFyIENpcmNsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDaXJjbGUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDaXJjbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENpcmNsZTtcclxufShTaGFwZSkpO1xyXG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG1vZGVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbFwiKTtcclxudmFyIG1vZGVsID0gbmV3IG1vZGVsXzEuTW9kZWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpbXVsYXRpb24tdmlldycpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1bml0XzEgPSByZXF1aXJlKFwiLi91bml0XCIpO1xyXG52YXIgcmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlcmVyXCIpO1xyXG52YXIgZHJhd2VyXzEgPSByZXF1aXJlKFwiLi9kcmF3ZXJcIik7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciBNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vZGVsKGVsZW1laHQpIHtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gbmV3IHVuaXRfMS5FbnZpcm9ubWVudCgpO1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQudGltZVNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IHJlbmRlcmVyXzEuUmVuZGVyZXIodGhpcy5lbnZpcm9ubWVudCwgZWxlbWVodCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gICAgTW9kZWwucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudHJ1Y2tHZW5lcmF0b3IgPSBuZXcgVHJ1Y2tHZW5lcmF0b3IodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy50cnVja0dlbmVyYXRvci50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIC0yMCk7XHJcbiAgICAgICAgdGhpcy50cnVja0Rlc3RpbmF0aW9uID0gbmV3IFRydWNrRGVzdGluYXRpb24odGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy50cnVja0Rlc3RpbmF0aW9uLnRyYW5zZm9ybS5wb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgdGhpcy50cnVja0dlbmVyYXRvci5vdXRQb3J0ID0gdGhpcy50cnVja0Rlc3RpbmF0aW9uO1xyXG4gICAgICAgIHRoaXMudHJ1Y2tHZW5lcmF0b3IucmVnaXN0ZXIoKTtcclxuICAgICAgICB0aGlzLnRydWNrRGVzdGluYXRpb24ucmVnaXN0ZXIoKTtcclxuICAgICAgICB2YXIgcm9hZDEgPSBuZXcgUm9hZCh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICByb2FkMS53YXlQb2ludExpc3QucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIDApKTtcclxuICAgICAgICByb2FkMS53YXlQb2ludExpc3QucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKDEwLCAwKSk7XHJcbiAgICAgICAgcm9hZDEud2F5UG9pbnRMaXN0LnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMigxMCwgMTApKTtcclxuICAgICAgICByb2FkMS5yZWdpc3RlcigpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Nb2RlbCA9IE1vZGVsO1xyXG4vKipcclxuICog7Yq465+t7J20IOyngOuCmOuLpOuLkCDquLhcclxuICovXHJcbnZhciBSb2FkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJvYWQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSb2FkKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMud2F5UG9pbnRMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgUm9hZC5wcm90b3R5cGUub25BZ2VudEluID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgUm9hZC5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIFJvYWQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgcGF0aCA9IG5ldyBkcmF3ZXJfMS5QYXRoKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICB0aGlzLndheVBvaW50TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgICAgICBwYXRoLnBvaW50TGlzdC5wdXNoKHBvaW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhwYXRoKTtcclxuICAgIH07XHJcbiAgICBSb2FkLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIFJvYWQucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSb2FkO1xyXG59KHVuaXRfMS5GYWNpbGl0eSkpO1xyXG4vKipcclxuICog7Yq465+tIOuPhOywqeyngOuhnCDrk6TslrTsmKwg7Yq465+t65Ok7J2EIOyDneyEse2VmOuKlCDsnqXshoxcclxuICovXHJcbnZhciBUcnVja0dlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUcnVja0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRydWNrR2VuZXJhdG9yKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgX3RoaXMubmV4dFRydWNrSW5kZXggPSAwO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFRydWNrR2VuZXJhdG9yLnByb3RvdHlwZS5vbkFnZW50SW4gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIFRydWNrR2VuZXJhdG9yLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIGNpcmNsZSA9IG5ldyBkcmF3ZXJfMS5DaXJjbGUodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KGNpcmNsZSk7XHJcbiAgICAgICAgdmFyIGZvbnQgPSBuZXcgZHJhd2VyXzEuRm9udCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgZm9udC50ZXh0ID0gJ+2KuOufrSDsg53shLHquLAnO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KGZvbnQpO1xyXG4gICAgfTtcclxuICAgIFRydWNrR2VuZXJhdG9yLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlID0gbmV3IHR5cGVzXzEuVmVjdG9yMigxLCAxKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2MjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lRGF0YSA9IG5ldyB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEoTWF0aC5yYW5kb20oKSAqIDcyMDAwMCwgdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfU0VBX0JVTEspO1xyXG4gICAgICAgICAgICB0aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdC5wdXNoKHRpbWVEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lRGF0YSA9IG5ldyB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEoTWF0aC5yYW5kb20oKSAqIDcyMDAwMCwgdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfVEFOS19CVUxLKTtcclxuICAgICAgICAgICAgdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3QucHVzaCh0aW1lRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzU4OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRpbWVEYXRhID0gbmV3IHR5cGVzXzEuVHJ1Y2tBcnJpdmFsRGF0YShNYXRoLnJhbmRvbSgpICogNzIwMDAwLCB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9ET0tFKTtcclxuICAgICAgICAgICAgdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3QucHVzaCh0aW1lRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0ID0gdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS50aW1lIC0gYi50aW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFRydWNrR2VuZXJhdG9yLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5uZXh0VHJ1Y2tJbmRleCA8IHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dFRydWNrQXJyaXZhbFRpbWVEYXRhID0gdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3RbdGhpcy5uZXh0VHJ1Y2tJbmRleF07XHJcbiAgICAgICAgICAgIGlmIChuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEudGltZSA8IHRoaXMuZW52aXJvbm1lbnQuZWxhcHNlZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cnVjayA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEua2luZCA9PSB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9TRUFfQlVMSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRydWNrID0gbmV3IFNlYUJ1bGtUcnVjayh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHRUcnVja0Fycml2YWxUaW1lRGF0YS5raW5kID09IHR5cGVzXzEuVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1RBTktfQlVMSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRydWNrID0gbmV3IFRhbmtCdWxrVHJ1Y2sodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEua2luZCA9PSB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9ET0tFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1Y2sgPSBuZXcgRG9ja1RydWNrKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJ1Y2sucmVnaXN0ZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0UG9ydC5hcHBlbmRBZ2VudCh0cnVjayk7XHJcbiAgICAgICAgICAgICAgICBuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEuaXNBcnJpdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRydWNrSW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJ1Y2tHZW5lcmF0b3I7XHJcbn0odW5pdF8xLkZhY2lsaXR5KSk7XHJcbi8qKlxyXG4gKiDtirjrn60g64+E7LCp7KeAXHJcbiAqL1xyXG52YXIgVHJ1Y2tEZXN0aW5hdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUcnVja0Rlc3RpbmF0aW9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVHJ1Y2tEZXN0aW5hdGlvbihlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5vbkFnZW50SW4gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICB2YXIgcmFuZG9tRGVsdGFQb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoTWF0aC5yYW5kb20oKSAqIHRoaXMudHJhbnNmb3JtLnNjYWxlLnggLSB0aGlzLnRyYW5zZm9ybS5zY2FsZS54IC8gMiwgTWF0aC5yYW5kb20oKSAqIHRoaXMudHJhbnNmb3JtLnNjYWxlLnkgLSB0aGlzLnRyYW5zZm9ybS5zY2FsZS55IC8gMik7XHJcbiAgICAgICAgLy9hZ2VudC50cmFuc2Zvcm0ucG9zaXRpb24gPSBWZWN0b3IyLmFkZCh0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbiwgcmFuZG9tRGVsdGFQb3NpdGlvbik7XHJcbiAgICAgICAgLy9hZ2VudC50cmFuc2Zvcm0ucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBZ2VudChhZ2VudCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrRGVzdGluYXRpb24ucHJvdG90eXBlLm9uQWdlbnRPdXQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICAgICAgdmFyIGZvbnQgPSBuZXcgZHJhd2VyXzEuRm9udCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgZm9udC50ZXh0ID0gJ+2KuOufrSDrj4TssKnsp4AnO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KGZvbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrRGVzdGluYXRpb24ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2NhbGUgPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDIwLCAyMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJ1Y2tEZXN0aW5hdGlvbjtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxudmFyIFRydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRydWNrLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVHJ1Y2soKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVHJ1Y2suV0lEVEggPSAxLjg1O1xyXG4gICAgVHJ1Y2suTEVOR1RIID0gNC4zO1xyXG4gICAgcmV0dXJuIFRydWNrO1xyXG59KHVuaXRfMS5BZ2VudCkpO1xyXG52YXIgU2VhQnVsa1RydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlYUJ1bGtUcnVjaywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNlYUJ1bGtUcnVjayhlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFNlYUJ1bGtUcnVjay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0sICdyZ2JhKDI1NiwgMCwgMCwgMC4yKScpO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgfTtcclxuICAgIFNlYUJ1bGtUcnVjay5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIoVHJ1Y2suV0lEVEgsIFRydWNrLkxFTkdUSCk7XHJcbiAgICB9O1xyXG4gICAgU2VhQnVsa1RydWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VhQnVsa1RydWNrO1xyXG59KFRydWNrKSk7XHJcbnZhciBUYW5rQnVsa1RydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhbmtCdWxrVHJ1Y2ssIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUYW5rQnVsa1RydWNrKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVGFua0J1bGtUcnVjay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0sICdyZ2JhKDAsIDI1NiwgMCwgMC4yKScpO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgfTtcclxuICAgIFRhbmtCdWxrVHJ1Y2sucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2NhbGUgPSBuZXcgdHlwZXNfMS5WZWN0b3IyKFRydWNrLldJRFRILCBUcnVjay5MRU5HVEgpO1xyXG4gICAgfTtcclxuICAgIFRhbmtCdWxrVHJ1Y2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUYW5rQnVsa1RydWNrO1xyXG59KFRydWNrKSk7XHJcbnZhciBEb2NrVHJ1Y2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRG9ja1RydWNrLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRG9ja1RydWNrKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgRG9ja1RydWNrLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSwgJ3JnYmEoMCwgMCwgMjU2LCAwLjIpJyk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICB9O1xyXG4gICAgRG9ja1RydWNrLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlID0gbmV3IHR5cGVzXzEuVmVjdG9yMihUcnVjay5XSURUSCwgVHJ1Y2suTEVOR1RIKTtcclxuICAgIH07XHJcbiAgICBEb2NrVHJ1Y2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEb2NrVHJ1Y2s7XHJcbn0oVHJ1Y2spKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRyYXdlcl8xID0gcmVxdWlyZShcIi4vZHJhd2VyXCIpO1xyXG52YXIgUmVuZGVyZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZW5kZXJlcihlbnZpcm9ubWVudCwgZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgICAgICB0aGlzLmNhbnZhc0RlbGVnYXRvciA9IG5ldyBkcmF3ZXJfMS5DYW52YXNEZWxlZ2F0b3IoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25VcGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZW5kZXJlci5wcm90b3R5cGUsIFwiZW52aXJvbm1lbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW52aXJvbm1lbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzRGVsZWdhdG9yLnVwZGF0ZSh0aGlzLmVudmlyb25tZW50LnVuaXRMaXN0KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5NQVhfV0lEVEggPSAxMDAwO1xyXG4gICAgUmVuZGVyZXIuTUFYX0hFSUdIVCA9IDEwMDA7XHJcbiAgICByZXR1cm4gUmVuZGVyZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmVuZGVyZXIgPSBSZW5kZXJlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIDLssKjsm5Ag67Kh7YSwXHJcbiAqL1xyXG52YXIgVmVjdG9yMiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjIoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIFZlY3RvcjIuYWRkID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuc3Vic3RyYWN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIubXVsdGlwbHkgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihhLnggKiBiLCBhLnkgKiBiKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmRpdmlzaW9uID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54IC8gYiwgYS55IC8gYik7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcInNxck1hZ25pdHVkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwibWFnbml0dWRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnNxck1hZ25pdHVkZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5mcm9udCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIHJldHVybiB2ZWN0b3I7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5aRVJPID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICByZXR1cm4gVmVjdG9yMjtcclxufSgpKTtcclxuZXhwb3J0cy5WZWN0b3IyID0gVmVjdG9yMjtcclxuLyoqXHJcbiAqIFVuaXTsnZgg7JyE7LmYLCDtgazquLAsIOqwgeuPhOygleuztOulvCDqsJbqs6DsnojsnYxcclxuICovXHJcbnZhciBUcmFuc2Zvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm0ocG9zaXRpb24sIHNjYWxlLCByb3RhdGlvbikge1xyXG4gICAgICAgIGlmIChyb3RhdGlvbiA9PT0gdm9pZCAwKSB7IHJvdGF0aW9uID0gMDsgfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRyYW5zZm9ybTtcclxufSgpKTtcclxuZXhwb3J0cy5UcmFuc2Zvcm0gPSBUcmFuc2Zvcm07XHJcbi8qKlxyXG4gKiDtirjrn60g64+E7LCpIOyLnOqwhOyXkCDqtIDtlZwg642w7J207YSwXHJcbiAqL1xyXG52YXIgVHJ1Y2tBcnJpdmFsRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRydWNrQXJyaXZhbERhdGEodGltZSwga2luZCkge1xyXG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcclxuICAgICAgICB0aGlzLmlzQXJyaXZlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1NFQV9CVUxLID0gMTtcclxuICAgIFRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9UQU5LX0JVTEsgPSAyO1xyXG4gICAgVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX0RPS0UgPSAzO1xyXG4gICAgcmV0dXJuIFRydWNrQXJyaXZhbERhdGE7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVHJ1Y2tBcnJpdmFsRGF0YSA9IFRydWNrQXJyaXZhbERhdGE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG52YXIgRW52aXJvbm1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFbnZpcm9ubWVudCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RpY2sgPSAwO1xyXG4gICAgICAgIHRoaXMuX2VsYXBzZWRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLl90aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMudW5pdExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLl90aWNrICs9IEVudmlyb25tZW50LkVQU0lMT05fREVMQVk7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWx0YVRpbWUgPSBFbnZpcm9ubWVudC5FUFNJTE9OX0RFTEFZICogX3RoaXMudGltZVNjYWxlO1xyXG4gICAgICAgICAgICBfdGhpcy5fZWxhcHNlZFRpbWUgKz0gX3RoaXMuZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX3RpY2sgPiAxNyAvIF90aGlzLnRpbWVTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3RpY2sgPSAwO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudW5pdExpc3QuZm9yRWFjaChmdW5jdGlvbiAodW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXQub25VcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodW5pdCBpbnN0YW5jZW9mIEFnZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQuYXBwbHlDb21wb25lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBFbnZpcm9ubWVudC5FUFNJTE9OX0RFTEFZKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbnZpcm9ubWVudC5wcm90b3R5cGUsIFwiZWxhcHNlZFRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZWxhcHNlZFRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRW52aXJvbm1lbnQucHJvdG90eXBlLCBcInRpbWVTY2FsZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lU2NhbGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGltZVNjYWxlID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVudmlyb25tZW50LnByb3RvdHlwZSwgXCJkZWx0YVRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVsdGFUaW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiDtlbTri7kg7ZmY6rK97JeQIOycoOuLmyDstpTqsIBcclxuICAgICAqIEBwYXJhbSB1bml0XHJcbiAgICAgKi9cclxuICAgIEVudmlyb25tZW50LnByb3RvdHlwZS5hcHBlbmRVbml0ID0gZnVuY3Rpb24gKHVuaXQpIHtcclxuICAgICAgICB1bml0Lm9uU3RhcnQoKTtcclxuICAgICAgICB0aGlzLnVuaXRMaXN0LnB1c2godW5pdCk7XHJcbiAgICB9O1xyXG4gICAgRW52aXJvbm1lbnQuRVBTSUxPTl9ERUxBWSA9IDU7XHJcbiAgICByZXR1cm4gRW52aXJvbm1lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRW52aXJvbm1lbnQgPSBFbnZpcm9ubWVudDtcclxudmFyIFVuaXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVbml0KGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtID0gbmV3IHR5cGVzXzEuVHJhbnNmb3JtKHR5cGVzXzEuVmVjdG9yMi5aRVJPLCBuZXcgdHlwZXNfMS5WZWN0b3IyKDEwLCAxMCksIDApO1xyXG4gICAgICAgIHRoaXMuX2Vudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVW5pdC5wcm90b3R5cGUsIFwidHJhbnNmb3JtXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShVbml0LnByb3RvdHlwZSwgXCJlbnZpcm9ubWVudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFVuaXQucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQuYXBwZW5kVW5pdCh0aGlzKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVW5pdDtcclxufSgpKTtcclxuZXhwb3J0cy5Vbml0ID0gVW5pdDtcclxuLyoqXHJcbiAqIOuqqOuTnCDsi5zshKTrk6TsnZgg67aA66qoIO2BtOuemOyKpFxyXG4gKi9cclxudmFyIEZhY2lsaXR5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZhY2lsaXR5LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmFjaWxpdHkoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5hZ2VudExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFnZW50IOy2lOqwgFxyXG4gICAgICogQHBhcmFtIGFnZW50XHJcbiAgICAgKi9cclxuICAgIEZhY2lsaXR5LnByb3RvdHlwZS5hcHBlbmRBZ2VudCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIGlmIChhZ2VudC5jdXJyZW50RmFjaWxpdHkpIHtcclxuICAgICAgICAgICAgYWdlbnQuY3VycmVudEZhY2lsaXR5LnJlbW92ZUFnZW50KGFnZW50KTtcclxuICAgICAgICAgICAgYWdlbnQuY3VycmVudEZhY2lsaXR5Lm9uQWdlbnRPdXQoYWdlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFnZW50TGlzdC5wdXNoKGFnZW50KTtcclxuICAgICAgICB0aGlzLm9uQWdlbnRJbihhZ2VudCk7XHJcbiAgICAgICAgYWdlbnQuY3VycmVudEZhY2lsaXR5ID0gdGhpcztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFnZW50IOyCreygnFxyXG4gICAgICogQHBhcmFtIGFnZW50XHJcbiAgICAgKi9cclxuICAgIEZhY2lsaXR5LnByb3RvdHlwZS5yZW1vdmVBZ2VudCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hZ2VudExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWdlbnRMaXN0W2ldID09PSBhZ2VudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZ2VudExpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25BZ2VudE91dChhZ2VudCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZhY2lsaXR5O1xyXG59KFVuaXQpKTtcclxuZXhwb3J0cy5GYWNpbGl0eSA9IEZhY2lsaXR5O1xyXG4vKipcclxuICog66qo65OgIEFnZW507J2YIOu2gOuqqCDtgbTrnpjsiqRcclxuICovXHJcbnZhciBBZ2VudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBZ2VudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFnZW50KGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX2N1cnJlbnRGYWNpbGl0eSA9IG51bGw7XHJcbiAgICAgICAgX3RoaXMuY29tcG9uZW50TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBZ2VudC5wcm90b3R5cGUsIFwiY3VycmVudEZhY2lsaXR5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRGYWNpbGl0eTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RmFjaWxpdHkgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBBZ2VudC5wcm90b3R5cGUuYWRkQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50TGlzdC5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnQucHJvdG90eXBlLmFwcGx5Q29tcG9uZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LmRvKF90aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQWdlbnQ7XHJcbn0oVW5pdCkpO1xyXG5leHBvcnRzLkFnZW50ID0gQWdlbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=