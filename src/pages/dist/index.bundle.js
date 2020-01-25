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

/***/ "./src/pages/ts/component.ts":
/*!***********************************!*\
  !*** ./src/pages/ts/component.ts ***!
  \***********************************/
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
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
exports.Component = Component;
/**
 * 역학 관련 처리를 수행하는 클래스
 */
var Dynamics = /** @class */ (function (_super) {
    __extends(Dynamics, _super);
    function Dynamics() {
        var _this = _super.call(this) || this;
        _this.velocity = types_1.Vector2.ZERO;
        return _this;
    }
    Dynamics.prototype.do = function (agent) {
        var deltaPosition = types_1.Vector2.multiply(new types_1.Vector2(this.velocity.x, this.velocity.y), agent.environment.deltaTime);
        agent.transform.position = types_1.Vector2.add(agent.transform.position, deltaPosition);
    };
    return Dynamics;
}(Component));
exports.Dynamics = Dynamics;


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
        this.enableGrid();
    };
    /**
     * canvas에 Path를 그림
     * @param path
     */
    CanvasDelegator.prototype.drawPath = function (path) {
        var _this = this;
        this.canvas.fillStyle = path.color;
        this.canvas.strokeStyle = path.color;
        this.canvas.lineWidth = path.width * this.zoomSize;
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
        points.push(new types_1.Vector2(convertedPosition.x + radius * Math.cos(theta2 + quad.transform.rotation), convertedPosition.y - radius * Math.sin(theta2 + quad.transform.rotation)));
        points.push(new types_1.Vector2(convertedPosition.x + radius * Math.cos(-theta2 + quad.transform.rotation), convertedPosition.y - radius * Math.sin(-theta2 + quad.transform.rotation)));
        points.push(new types_1.Vector2(convertedPosition.x + radius * Math.cos(-theta1 + quad.transform.rotation), convertedPosition.y - radius * Math.sin(-theta1 + quad.transform.rotation)));
        points.push(new types_1.Vector2(convertedPosition.x + radius * Math.cos(theta1 + quad.transform.rotation), convertedPosition.y - radius * Math.sin(theta1 + quad.transform.rotation)));
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
     * 격자 활성화
     */
    CanvasDelegator.prototype.enableGrid = function () {
        // TODO
        var n = 10;
        var smallUnit = 1;
        var bigUnit = smallUnit * 10;
        for (var x = -100; x <= 100; x += smallUnit) {
            var path = new Path(new types_1.Transform(types_1.Vector2.ZERO, types_1.Vector2.ZERO), 'rgba(0, 0, 0, 0.1)');
            path.pointList.push(new types_1.Vector2(x, -100));
            path.pointList.push(new types_1.Vector2(x, +100));
            path.width = 1 / this.zoomSize;
            this.drawPath(path);
        }
    };
    /**
     * element에 대한 이벤트 설정
     */
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
        if (color === void 0) { color = 'rgba(0, 0, 0, 1)'; }
        var _this = _super.call(this, transform, color) || this;
        _this.pointList = new Array();
        _this.width = 1;
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
var component_1 = __webpack_require__(/*! ./component */ "./src/pages/ts/component.ts");
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
        var road1 = new Road(this.environment);
        road1.pointList.push(new types_1.Vector2(0, 0));
        road1.pointList.push(new types_1.Vector2(10, 0));
        road1.pointList.push(new types_1.Vector2(20, 20));
        road1.pointList.push(new types_1.Vector2(30, 10));
        road1.pointList.push(new types_1.Vector2(40, 20));
        this.truckGenerator.outPort = this.truckDestination;
        this.truckDestination.outPort = road1;
        this.truckGenerator.register();
        this.truckDestination.register();
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
        _this.forwardLaneCount = 1;
        _this.backwardLaneCount = 1;
        _this._name = 'Road';
        _this.pointList = new Array();
        return _this;
    }
    /**
     * @override
     */
    Road.prototype.onAgentIn = function (agent) {
    };
    /**
     * @override
     */
    Road.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
    Road.prototype.render = function (canvasDelegator) {
        var laneWidth = 2;
        var path = new drawer_1.Path(this.transform, 'rgba(128, 255, 255, 0.4)');
        this.pointList.forEach(function (point) {
            path.pointList.push(point);
        });
        path.width = laneWidth;
        canvasDelegator.draw(path);
        /*
        for (let i = 0; i < this.backwardLaneCount; i++) {
            let path = new Path(this.transform, 'rgba(255, 128, 255, 0.4)');
            this.pointList.forEach(point => {
                path.pointList.push(Vector2.add(point, Vector2.multiply(point.left(), laneWidth * 0.5)));
            });
            path.width = laneWidth;

            canvasDelegator.draw(path);
        }

        for (let i = 0; i < this.forwardLaneCount; i++) {
            let path = new Path(this.transform, 'rgba(128, 255, 255, 0.4)');
            this.pointList.forEach(point => {
                path.pointList.push(Vector2.add(point, Vector2.multiply(point.right(), laneWidth * 0.5)));
            });
            path.width = laneWidth;

            canvasDelegator.draw(path);
        }
        */
    };
    /**
     * @override
     */
    Road.prototype.onStart = function () {
    };
    /**
     * @override
     */
    Road.prototype.onUpdate = function () {
    };
    /**
     * 해당 길의 각도 반환
     * @param index
     */
    Road.prototype.getRoadAngle = function (index) {
        if (this.pointList.length <= index + 1) {
            return 0;
        }
        return Math.atan2(this.pointList[index + 1].y - this.pointList[index].y, this.pointList[index + 1].x - this.pointList[index].x);
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
        _this._name = 'TruckGenerator';
        _this.truckArrivalTimeDataList = new Array();
        _this.nextTruckIndex = 0;
        return _this;
    }
    /**
     * @override
     */
    TruckGenerator.prototype.onAgentIn = function (agent) {
    };
    /**
     * @override
     */
    TruckGenerator.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
    TruckGenerator.prototype.render = function (canvasDelegator) {
        var circle = new drawer_1.Circle(this.transform);
        canvasDelegator.draw(circle);
        var font = new drawer_1.Font(this.transform);
        font.text = '트럭 생성기';
        canvasDelegator.draw(font);
    };
    /**
     * @override
     */
    TruckGenerator.prototype.onStart = function () {
        this.transform.scale = new types_1.Vector2(1, 1);
        var truck = new DockTruck(this.environment);
        truck.register();
        this.outPort.appendAgent(truck);
        /*
        for (let i = 0; i < 162; i++) {
            let timeData = new TruckArrivalData(Math.random() * 720000, TruckArrivalData.TRUCK_KIND_SEA_BULK);
            this.truckArrivalTimeDataList.push(timeData);
        }

        for (let i = 0; i < 70; i++) {
            let timeData = new TruckArrivalData(Math.random() * 720000, TruckArrivalData.TRUCK_KIND_TANK_BULK);
            this.truckArrivalTimeDataList.push(timeData);
        }

        for (let i = 0; i < 358; i++) {
            let timeData = new TruckArrivalData(Math.random() * 720000, TruckArrivalData.TRUCK_KIND_DOKE);
            this.truckArrivalTimeDataList.push(timeData);
        }

        this.truckArrivalTimeDataList = this.truckArrivalTimeDataList.sort((a, b) => {
            return a.time - b.time;
        });*/
    };
    /**
     * @override
     */
    TruckGenerator.prototype.onUpdate = function () {
        /*
        if (this.nextTruckIndex < this.truckArrivalTimeDataList.length) {
            let nextTruckArrivalTimeData = this.truckArrivalTimeDataList[this.nextTruckIndex];

            if (nextTruckArrivalTimeData.time < this.environment.elapsedTime) {
                let truck: Truck;
                if (nextTruckArrivalTimeData.kind == TruckArrivalData.TRUCK_KIND_SEA_BULK) {
                    truck = new SeaBulkTruck(this.environment);
                } else if (nextTruckArrivalTimeData.kind == TruckArrivalData.TRUCK_KIND_TANK_BULK) {
                    truck = new TankBulkTruck(this.environment);
                } else if (nextTruckArrivalTimeData.kind == TruckArrivalData.TRUCK_KIND_DOKE) {
                    truck = new DockTruck(this.environment);
                }

                truck.register();
                this.outPort.appendAgent(truck);

                nextTruckArrivalTimeData.isArrived = true;
                this.nextTruckIndex++;
            }
        }*/
    };
    return TruckGenerator;
}(unit_1.Facility));
/**
 * 트럭 도착지
 */
var TruckDestination = /** @class */ (function (_super) {
    __extends(TruckDestination, _super);
    function TruckDestination(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'TruckDestination';
        return _this;
    }
    /**
     *
     * @override
     */
    TruckDestination.prototype.onAgentIn = function (agent) {
        var randomDeltaPosition = new types_1.Vector2(Math.random() * this.transform.scale.x - this.transform.scale.x / 2, Math.random() * this.transform.scale.y - this.transform.scale.y / 2);
        //agent.transform.position = Vector2.add(this.transform.position, randomDeltaPosition);
        //agent.transform.rotation = Math.random() * 2 * Math.PI;
        this.outPort.appendAgent(agent);
    };
    /**
     *
     * @override
     */
    TruckDestination.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
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
     * @override
     */
    TruckDestination.prototype.onUpdate = function () {
    };
    return TruckDestination;
}(unit_1.Facility));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(environment) {
        var _this = _super.call(this, environment) || this;
        _this.currentRoadIndex = 0;
        _this._name = 'Truck';
        _this.transform.scale = new types_1.Vector2(Truck.WIDTH, Truck.LENGTH);
        _this.dynamic = new component_1.Dynamics();
        _this.addComponent(_this.dynamic);
        return _this;
    }
    /**
     * 도로위에 있을 때 할 일들 처리
     * @override
     */
    Truck.prototype.onUpdate = function () {
        //console.log(this.currentFacility.name);
        if (this.currentFacility instanceof Road) {
            var road = this.currentFacility;
            this.reset();
            if (types_1.Vector2.inverseLerp(road.pointList[this.currentRoadIndex], road.pointList[this.currentRoadIndex + 1], this.transform.position) >= 1) {
                this.currentRoadIndex++;
                this.transform.position = road.pointList[this.currentRoadIndex];
                this.reset();
            }
        }
    };
    /**
     * 이부분 수정필요
     */
    Truck.prototype.reset = function () {
        var road = this.currentFacility;
        var angle = road.getRoadAngle(this.currentRoadIndex);
        this.transform.rotation = angle;
        this.dynamic.velocity = types_1.Vector2.multiply(this.transform.forward(), 10);
    };
    Truck.WIDTH = 1.85;
    Truck.LENGTH = 4.3;
    return Truck;
}(unit_1.Agent));
var SeaBulkTruck = /** @class */ (function (_super) {
    __extends(SeaBulkTruck, _super);
    function SeaBulkTruck(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'SeaBulkTruck';
        return _this;
    }
    /**
     * @override
     */
    SeaBulkTruck.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform, 'rgba(256, 0, 0, 0.2)');
        canvasDelegator.draw(quad);
    };
    /**
     * @override
     */
    SeaBulkTruck.prototype.onStart = function () {
    };
    /**
     * @override
     */
    SeaBulkTruck.prototype.onUpdate = function () {
        _super.prototype.onUpdate.call(this);
        // TODO
    };
    return SeaBulkTruck;
}(Truck));
var TankBulkTruck = /** @class */ (function (_super) {
    __extends(TankBulkTruck, _super);
    function TankBulkTruck(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'TankBulkTruck';
        return _this;
    }
    /**
     * @override
     */
    TankBulkTruck.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform, 'rgba(0, 256, 0, 0.2)');
        canvasDelegator.draw(quad);
    };
    /**
     * @override
     */
    TankBulkTruck.prototype.onStart = function () {
    };
    /**
     * @override
     */
    TankBulkTruck.prototype.onUpdate = function () {
        _super.prototype.onUpdate.call(this);
        // TODO
    };
    return TankBulkTruck;
}(Truck));
var DockTruck = /** @class */ (function (_super) {
    __extends(DockTruck, _super);
    function DockTruck(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'DockTruck';
        return _this;
    }
    /**
     * @override
     */
    DockTruck.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform, 'rgba(0, 0, 256, 0.2)');
        canvasDelegator.draw(quad);
    };
    /**
     * @override
     */
    DockTruck.prototype.onStart = function () {
    };
    /**
     * @override
     */
    DockTruck.prototype.onUpdate = function () {
        _super.prototype.onUpdate.call(this);
        // TODO
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
    Vector2.lerp = function (a, b, c) {
        var vector = Vector2.add(a, Vector2.multiply(Vector2.substract(b, a), c));
        return vector;
    };
    Vector2.inverseLerp = function (a, b, c) {
        var v1 = Vector2.substract(c, a);
        var v2 = Vector2.substract(b, a);
        return Math.sqrt(v1.sqrMagnitude / v2.sqrMagnitude);
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
    /**
     * 앞 벡터
     */
    Transform.prototype.forward = function () {
        var vector = new Vector2(Math.cos(this.rotation), Math.sin(this.rotation));
        return vector;
    };
    /**
     * 왼쪽 벡터
     */
    Transform.prototype.left = function () {
        var vector = new Vector2(Math.cos(this.rotation + Math.PI / 2), Math.sin(this.rotation + Math.PI / 2));
        return vector;
    };
    /**
     * 오른쪽 벡터
     */
    Transform.prototype.right = function () {
        var vector = new Vector2(Math.cos(this.rotation - Math.PI / 2), Math.sin(this.rotation - Math.PI / 2));
        return vector;
    };
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
            _this._deltaTime = _this.timeScale / 60;
            _this._elapsedTime += _this.deltaTime;
            if (_this._tick > 17 / _this.timeScale) {
                _this._tick = 0;
                _this.unitList.forEach(function (unit) {
                    if (unit instanceof Agent) {
                        unit.applyComponents();
                    }
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
        this._name = 'Unit';
        this._transform = new types_1.Transform(types_1.Vector2.ZERO, new types_1.Vector2(10, 10), 0);
        this._environment = environment;
    }
    Object.defineProperty(Unit.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
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
        _this._name = 'Facility';
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
        agent.currentFacility = this;
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
        _this._name = 'Agent';
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
    Agent.prototype.removeComponent = function (component) {
        for (var i = 0; i < this.componentList.length; i++) {
            if (this.componentList[i] === component) {
                this.componentList.splice(i, 1);
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy9kcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RzL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy91bml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsd0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN0Q2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsd0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSwwQ0FBMEMsRUFBRTtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOEJBQThCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNyUGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsd0NBQVM7QUFDL0I7Ozs7Ozs7Ozs7Ozs7QUNIYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyxzQ0FBUTtBQUM3QixpQkFBaUIsbUJBQU8sQ0FBQyw4Q0FBWTtBQUNyQyxlQUFlLG1CQUFPLENBQUMsMENBQVU7QUFDakMsY0FBYyxtQkFBTyxDQUFDLHdDQUFTO0FBQy9CLGtCQUFrQixtQkFBTyxDQUFDLGdEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDallZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLDBDQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDakdhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdDQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrQkFBK0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciBDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcclxuLyoqXHJcbiAqIOyXre2VmSDqtIDroKgg7LKY66as66W8IOyImO2Wie2VmOuKlCDtgbTrnpjsiqRcclxuICovXHJcbnZhciBEeW5hbWljcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEeW5hbWljcywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIER5bmFtaWNzKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMudmVsb2NpdHkgPSB0eXBlc18xLlZlY3RvcjIuWkVSTztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBEeW5hbWljcy5wcm90b3R5cGUuZG8gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICB2YXIgZGVsdGFQb3NpdGlvbiA9IHR5cGVzXzEuVmVjdG9yMi5tdWx0aXBseShuZXcgdHlwZXNfMS5WZWN0b3IyKHRoaXMudmVsb2NpdHkueCwgdGhpcy52ZWxvY2l0eS55KSwgYWdlbnQuZW52aXJvbm1lbnQuZGVsdGFUaW1lKTtcclxuICAgICAgICBhZ2VudC50cmFuc2Zvcm0ucG9zaXRpb24gPSB0eXBlc18xLlZlY3RvcjIuYWRkKGFnZW50LnRyYW5zZm9ybS5wb3NpdGlvbiwgZGVsdGFQb3NpdGlvbik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIER5bmFtaWNzO1xyXG59KENvbXBvbmVudCkpO1xyXG5leHBvcnRzLkR5bmFtaWNzID0gRHluYW1pY3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG52YXIgQ2FudmFzRGVsZWdhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzRGVsZWdhdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmNhbWVyYVBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMigwLCAwKTtcclxuICAgICAgICB0aGlzLnpvb21TaXplID0gNDA7XHJcbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZSwgXCJjYW52YXNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBQaWN0dXJl7J2YIOyiheulmOulvCDrtoTrpZjtlbTshJwg7KCB7KCI7Z6IIOq3uOumvFxyXG4gICAgICogQHBhcmFtIHBpY3R1cmVcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKHBpY3R1cmUpIHtcclxuICAgICAgICBpZiAocGljdHVyZSBpbnN0YW5jZW9mIFBhdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aChwaWN0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGljdHVyZSBpbnN0YW5jZW9mIEZvbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3Rm9udChwaWN0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGljdHVyZSBpbnN0YW5jZW9mIFF1YWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UXVhZChwaWN0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGljdHVyZSBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdDaXJjbGUocGljdHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogY2FudmFz7J2YIO2BrOq4sCDsnqzshKTsoJXqs7wg6rCBIHVuaXTrk6TsnYQg66CM642U66eBXHJcbiAgICAgKiBAcGFyYW0gdW5pdExpc3RcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodW5pdExpc3QpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdW5pdExpc3QuZm9yRWFjaChmdW5jdGlvbiAodW5pdCkge1xyXG4gICAgICAgICAgICB1bml0LnJlbmRlcihfdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVHcmlkKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPsl5AgUGF0aOulvCDqt7jrprxcclxuICAgICAqIEBwYXJhbSBwYXRoXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd1BhdGggPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFN0eWxlID0gcGF0aC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHJva2VTdHlsZSA9IHBhdGguY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMubGluZVdpZHRoID0gcGF0aC53aWR0aCAqIHRoaXMuem9vbVNpemU7XHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgY29udmVydGVkU2NhbGUgPSB0aGlzLmNvbnZlcnRNZXRlclRvUGl4ZWwocGF0aC50cmFuc2Zvcm0uc2NhbGUpO1xyXG4gICAgICAgIGxldCBjb252ZXJ0ZWRQb3NpdGlvbiA9IHRoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24ocGF0aC50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvaW50TGlzdCA9IHBhdGgucG9pbnRMaXN0Lm1hcChmdW5jdGlvbiAocG9pbnQpIHsgcmV0dXJuIF90aGlzLmdldFJlYWxQaXhlbFBvc2l0aW9uKHBvaW50KTsgfSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMubW92ZVRvKGNvbnZlcnRlZFBvaW50TGlzdFswXS54LCBjb252ZXJ0ZWRQb2ludExpc3RbMF0ueSk7XHJcbiAgICAgICAgY29udmVydGVkUG9pbnRMaXN0LmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNhbnZhcy5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPsl5AgVGV4dOulvCDqt7jrprxcclxuICAgICAqIEBwYXJhbSBmb250XHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd0ZvbnQgPSBmdW5jdGlvbiAoZm9udCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmZpbGxTdHlsZSA9IGZvbnQuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZm9udCA9IGZvbnQgKyAncHgnO1xyXG4gICAgICAgIHZhciB0ZXh0TWF0cmljcyA9IHRoaXMuY2FudmFzLm1lYXN1cmVUZXh0KGZvbnQudGV4dCk7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFNjYWxlID0gbmV3IHR5cGVzXzEuVmVjdG9yMih0ZXh0TWF0cmljcy53aWR0aCwgMCk7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvc2l0aW9uID0gdHlwZXNfMS5WZWN0b3IyLnN1YnN0cmFjdCh0aGlzLmdldFJlYWxQaXhlbFBvc2l0aW9uKGZvbnQudHJhbnNmb3JtLnBvc2l0aW9uKSwgdHlwZXNfMS5WZWN0b3IyLmRpdmlzaW9uKGNvbnZlcnRlZFNjYWxlLCAyKSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFRleHQoZm9udC50ZXh0LCBjb252ZXJ0ZWRQb3NpdGlvbi54LCBjb252ZXJ0ZWRQb3NpdGlvbi55KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+yXkCDsgqzqsIHtmJXsnYQg6re466a8XHJcbiAgICAgKiBAcGFyYW0gY2lyY2xlXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd1F1YWQgPSBmdW5jdGlvbiAocXVhZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFN0eWxlID0gcXVhZC5jb2xvcjtcclxuICAgICAgICB2YXIgY29udmVydGVkU2NhbGUgPSB0aGlzLmNvbnZlcnRNZXRlclRvUGl4ZWwocXVhZC50cmFuc2Zvcm0uc2NhbGUpO1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRQb3NpdGlvbiA9IHRoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24ocXVhZC50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIHZhciB0aGV0YTEgPSBNYXRoLmF0YW4yKGNvbnZlcnRlZFNjYWxlLngsIGNvbnZlcnRlZFNjYWxlLnkpO1xyXG4gICAgICAgIHZhciB0aGV0YTIgPSBNYXRoLlBJIC0gdGhldGExO1xyXG4gICAgICAgIHZhciByYWRpdXMgPSBjb252ZXJ0ZWRTY2FsZS55IC8gMiAvIE1hdGguY29zKHRoZXRhMSk7XHJcbiAgICAgICAgdmFyIHBvaW50cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHBvaW50cy5wdXNoKG5ldyB0eXBlc18xLlZlY3RvcjIoY29udmVydGVkUG9zaXRpb24ueCArIHJhZGl1cyAqIE1hdGguY29zKHRoZXRhMiArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSwgY29udmVydGVkUG9zaXRpb24ueSAtIHJhZGl1cyAqIE1hdGguc2luKHRoZXRhMiArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSkpO1xyXG4gICAgICAgIHBvaW50cy5wdXNoKG5ldyB0eXBlc18xLlZlY3RvcjIoY29udmVydGVkUG9zaXRpb24ueCArIHJhZGl1cyAqIE1hdGguY29zKC10aGV0YTIgKyBxdWFkLnRyYW5zZm9ybS5yb3RhdGlvbiksIGNvbnZlcnRlZFBvc2l0aW9uLnkgLSByYWRpdXMgKiBNYXRoLnNpbigtdGhldGEyICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pKSk7XHJcbiAgICAgICAgcG9pbnRzLnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMihjb252ZXJ0ZWRQb3NpdGlvbi54ICsgcmFkaXVzICogTWF0aC5jb3MoLXRoZXRhMSArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSwgY29udmVydGVkUG9zaXRpb24ueSAtIHJhZGl1cyAqIE1hdGguc2luKC10aGV0YTEgKyBxdWFkLnRyYW5zZm9ybS5yb3RhdGlvbikpKTtcclxuICAgICAgICBwb2ludHMucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKGNvbnZlcnRlZFBvc2l0aW9uLnggKyByYWRpdXMgKiBNYXRoLmNvcyh0aGV0YTEgKyBxdWFkLnRyYW5zZm9ybS5yb3RhdGlvbiksIGNvbnZlcnRlZFBvc2l0aW9uLnkgLSByYWRpdXMgKiBNYXRoLnNpbih0aGV0YTEgKyBxdWFkLnRyYW5zZm9ybS5yb3RhdGlvbikpKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5tb3ZlVG8ocG9pbnRzWzNdLngsIHBvaW50c1szXS55KTtcclxuICAgICAgICBwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuY2FudmFzLmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPsl5Ag7JuQ7J2EIOq3uOumvFxyXG4gICAgICogQHBhcmFtIGNpcmNsZVxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmRyYXdDaXJjbGUgPSBmdW5jdGlvbiAoY2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFN0eWxlID0gY2lyY2xlLmNvbG9yO1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRQb3NpdGlvbiA9IHRoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24oY2lyY2xlLnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFNjYWxlID0gdGhpcy5jb252ZXJ0TWV0ZXJUb1BpeGVsKGNpcmNsZS50cmFuc2Zvcm0uc2NhbGUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmVsbGlwc2U7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZWxsaXBzZShjb252ZXJ0ZWRQb3NpdGlvbi54LCBjb252ZXJ0ZWRQb3NpdGlvbi55LCBjb252ZXJ0ZWRTY2FsZS54LCBjb252ZXJ0ZWRTY2FsZS55LCBjaXJjbGUudHJhbnNmb3JtLnJvdGF0aW9uLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog66+47YSw64uo7JyE7J2YIFZlY3RvcuulvCDsi6TsoJwg6re466Ck7KeIIFBpeGVs64uo7JyE66GcIOuwlOq/lOykjFxyXG4gICAgICogQHBhcmFtIHZldG9yXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuY29udmVydE1ldGVyVG9QaXhlbCA9IGZ1bmN0aW9uICh2ZXRvcikge1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRWZWN0b3IgPSB0eXBlc18xLlZlY3RvcjIubXVsdGlwbHkodmV0b3IsIHRoaXMuem9vbVNpemUpO1xyXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZWRWZWN0b3I7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDrr7jthLDri6jsnITsnZggcG9zaXRpb24gdmVjdG9y66W8IOyLpOygnCDqt7jroKTsp4ggUGl4ZWzsnITsuZjroZwg67CU6r+U7KSMXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5nZXRSZWFsUGl4ZWxQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciByYXRpbyA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgLyB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdmFyIGNhbWVyYVdpZHRoID0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoIC8gdGhpcy56b29tU2l6ZTtcclxuICAgICAgICB2YXIgY2FtZXJhSGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAvIHRoaXMuem9vbVNpemU7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFZlY3RvciA9IG5ldyB0eXBlc18xLlZlY3RvcjIodGhpcy5lbGVtZW50LmNsaWVudFdpZHRoIC8gMiwgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAvIDIpO1xyXG4gICAgICAgIHZhciBkZWx0YVZlY3RvciA9IHRoaXMuY29udmVydE1ldGVyVG9QaXhlbCh0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KHBvc2l0aW9uLCB0aGlzLmNhbWVyYVBvc2l0aW9uKSk7XHJcbiAgICAgICAgZGVsdGFWZWN0b3IueSA9IC1kZWx0YVZlY3Rvci55O1xyXG4gICAgICAgIGNvbnZlcnRlZFZlY3RvciA9IHR5cGVzXzEuVmVjdG9yMi5hZGQoY29udmVydGVkVmVjdG9yLCBkZWx0YVZlY3Rvcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZFZlY3RvcjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOqyqeyekCDtmZzshLHtmZRcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5lbmFibGVHcmlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgICAgICB2YXIgbiA9IDEwO1xyXG4gICAgICAgIHZhciBzbWFsbFVuaXQgPSAxO1xyXG4gICAgICAgIHZhciBiaWdVbml0ID0gc21hbGxVbml0ICogMTA7XHJcbiAgICAgICAgZm9yICh2YXIgeCA9IC0xMDA7IHggPD0gMTAwOyB4ICs9IHNtYWxsVW5pdCkge1xyXG4gICAgICAgICAgICB2YXIgcGF0aCA9IG5ldyBQYXRoKG5ldyB0eXBlc18xLlRyYW5zZm9ybSh0eXBlc18xLlZlY3RvcjIuWkVSTywgdHlwZXNfMS5WZWN0b3IyLlpFUk8pLCAncmdiYSgwLCAwLCAwLCAwLjEpJyk7XHJcbiAgICAgICAgICAgIHBhdGgucG9pbnRMaXN0LnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMih4LCAtMTAwKSk7XHJcbiAgICAgICAgICAgIHBhdGgucG9pbnRMaXN0LnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMih4LCArMTAwKSk7XHJcbiAgICAgICAgICAgIHBhdGgud2lkdGggPSAxIC8gdGhpcy56b29tU2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aChwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBlbGVtZW507JeQIOuMgO2VnCDsnbTrsqTtirgg7ISk7KCVXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuc2V0dXBFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnpvb21TaXplIC09IGUuZGVsdGFZIC8gTWF0aC5hYnMoZS5kZWx0YVkpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuem9vbVNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuem9vbVNpemUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbnMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNhbWVyYVBvc2l0aW9uID0gdHlwZXNfMS5WZWN0b3IyLnN1YnN0cmFjdChfdGhpcy5jYW1lcmFQb3NpdGlvbiwgbmV3IHR5cGVzXzEuVmVjdG9yMihlLm1vdmVtZW50WCAvIF90aGlzLnpvb21TaXplLCAtZS5tb3ZlbWVudFkgLyBfdGhpcy56b29tU2l6ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbnZhc0RlbGVnYXRvcjtcclxufSgpKTtcclxuZXhwb3J0cy5DYW52YXNEZWxlZ2F0b3IgPSBDYW52YXNEZWxlZ2F0b3I7XHJcbnZhciBQaWN0dXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGljdHVyZSh0cmFuc2Zvcm0sIGNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yID09PSB2b2lkIDApIHsgY29sb3IgPSAncmdiYSgwLCAwLCAwLCAwLjIpJzsgfVxyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBQaWN0dXJlO1xyXG59KCkpO1xyXG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xyXG52YXIgU2hhcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2hhcGUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTaGFwZSgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU2hhcGU7XHJcbn0oUGljdHVyZSkpO1xyXG5leHBvcnRzLlNoYXBlID0gU2hhcGU7XHJcbnZhciBGb250ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZvbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGb250KHRyYW5zZm9ybSwgY29sb3IpIHtcclxuICAgICAgICBpZiAoY29sb3IgPT09IHZvaWQgMCkgeyBjb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDEpJzsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRyYW5zZm9ybSwgY29sb3IpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuc2l6ZSA9IDI0O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGb250O1xyXG59KFBpY3R1cmUpKTtcclxuZXhwb3J0cy5Gb250ID0gRm9udDtcclxudmFyIFBhdGggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGF0aCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFBhdGgodHJhbnNmb3JtLCBjb2xvcikge1xyXG4gICAgICAgIGlmIChjb2xvciA9PT0gdm9pZCAwKSB7IGNvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMSknOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHJhbnNmb3JtLCBjb2xvcikgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb2ludExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBfdGhpcy53aWR0aCA9IDE7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBhdGg7XHJcbn0oU2hhcGUpKTtcclxuZXhwb3J0cy5QYXRoID0gUGF0aDtcclxudmFyIFF1YWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUXVhZCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFF1YWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFF1YWQ7XHJcbn0oU2hhcGUpKTtcclxuZXhwb3J0cy5RdWFkID0gUXVhZDtcclxudmFyIENpcmNsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDaXJjbGUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDaXJjbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENpcmNsZTtcclxufShTaGFwZSkpO1xyXG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG1vZGVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbFwiKTtcclxudmFyIG1vZGVsID0gbmV3IG1vZGVsXzEuTW9kZWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpbXVsYXRpb24tdmlldycpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1bml0XzEgPSByZXF1aXJlKFwiLi91bml0XCIpO1xyXG52YXIgcmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlcmVyXCIpO1xyXG52YXIgZHJhd2VyXzEgPSByZXF1aXJlKFwiLi9kcmF3ZXJcIik7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudFwiKTtcclxudmFyIE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9kZWwoZWxlbWVodCkge1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBuZXcgdW5pdF8xLkVudmlyb25tZW50KCk7XHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudC50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgcmVuZGVyZXJfMS5SZW5kZXJlcih0aGlzLmVudmlyb25tZW50LCBlbGVtZWh0KTtcclxuICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcbiAgICBNb2RlbC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50cnVja0dlbmVyYXRvciA9IG5ldyBUcnVja0dlbmVyYXRvcih0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB0aGlzLnRydWNrR2VuZXJhdG9yLnRyYW5zZm9ybS5wb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoMCwgLTIwKTtcclxuICAgICAgICB0aGlzLnRydWNrRGVzdGluYXRpb24gPSBuZXcgVHJ1Y2tEZXN0aW5hdGlvbih0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB0aGlzLnRydWNrRGVzdGluYXRpb24udHJhbnNmb3JtLnBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMigwLCAwKTtcclxuICAgICAgICB2YXIgcm9hZDEgPSBuZXcgUm9hZCh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICByb2FkMS5wb2ludExpc3QucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIDApKTtcclxuICAgICAgICByb2FkMS5wb2ludExpc3QucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKDEwLCAwKSk7XHJcbiAgICAgICAgcm9hZDEucG9pbnRMaXN0LnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMigyMCwgMjApKTtcclxuICAgICAgICByb2FkMS5wb2ludExpc3QucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKDMwLCAxMCkpO1xyXG4gICAgICAgIHJvYWQxLnBvaW50TGlzdC5wdXNoKG5ldyB0eXBlc18xLlZlY3RvcjIoNDAsIDIwKSk7XHJcbiAgICAgICAgdGhpcy50cnVja0dlbmVyYXRvci5vdXRQb3J0ID0gdGhpcy50cnVja0Rlc3RpbmF0aW9uO1xyXG4gICAgICAgIHRoaXMudHJ1Y2tEZXN0aW5hdGlvbi5vdXRQb3J0ID0gcm9hZDE7XHJcbiAgICAgICAgdGhpcy50cnVja0dlbmVyYXRvci5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMudHJ1Y2tEZXN0aW5hdGlvbi5yZWdpc3RlcigpO1xyXG4gICAgICAgIHJvYWQxLnJlZ2lzdGVyKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1vZGVsO1xyXG59KCkpO1xyXG5leHBvcnRzLk1vZGVsID0gTW9kZWw7XHJcbi8qKlxyXG4gKiDtirjrn63snbQg7KeA64KY64uk64uQIOq4uFxyXG4gKi9cclxudmFyIFJvYWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUm9hZCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJvYWQoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5mb3J3YXJkTGFuZUNvdW50ID0gMTtcclxuICAgICAgICBfdGhpcy5iYWNrd2FyZExhbmVDb3VudCA9IDE7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnUm9hZCc7XHJcbiAgICAgICAgX3RoaXMucG9pbnRMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgUm9hZC5wcm90b3R5cGUub25BZ2VudEluID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgUm9hZC5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFJvYWQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgbGFuZVdpZHRoID0gMjtcclxuICAgICAgICB2YXIgcGF0aCA9IG5ldyBkcmF3ZXJfMS5QYXRoKHRoaXMudHJhbnNmb3JtLCAncmdiYSgxMjgsIDI1NSwgMjU1LCAwLjQpJyk7XHJcbiAgICAgICAgdGhpcy5wb2ludExpc3QuZm9yRWFjaChmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICAgICAgcGF0aC5wb2ludExpc3QucHVzaChwb2ludCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGF0aC53aWR0aCA9IGxhbmVXaWR0aDtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhwYXRoKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iYWNrd2FyZExhbmVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gbmV3IFBhdGgodGhpcy50cmFuc2Zvcm0sICdyZ2JhKDI1NSwgMTI4LCAyNTUsIDAuNCknKTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludExpc3QuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXRoLnBvaW50TGlzdC5wdXNoKFZlY3RvcjIuYWRkKHBvaW50LCBWZWN0b3IyLm11bHRpcGx5KHBvaW50LmxlZnQoKSwgbGFuZVdpZHRoICogMC41KSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGF0aC53aWR0aCA9IGxhbmVXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHBhdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZvcndhcmRMYW5lQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoKHRoaXMudHJhbnNmb3JtLCAncmdiYSgxMjgsIDI1NSwgMjU1LCAwLjQpJyk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRMaXN0LmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGF0aC5wb2ludExpc3QucHVzaChWZWN0b3IyLmFkZChwb2ludCwgVmVjdG9yMi5tdWx0aXBseShwb2ludC5yaWdodCgpLCBsYW5lV2lkdGggKiAwLjUpKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwYXRoLndpZHRoID0gbGFuZVdpZHRoO1xyXG5cclxuICAgICAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgUm9hZC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBSb2FkLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIO2VtOuLuSDquLjsnZgg6rCB64+EIOuwmO2ZmFxyXG4gICAgICogQHBhcmFtIGluZGV4XHJcbiAgICAgKi9cclxuICAgIFJvYWQucHJvdG90eXBlLmdldFJvYWRBbmdsZSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvaW50TGlzdC5sZW5ndGggPD0gaW5kZXggKyAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnBvaW50TGlzdFtpbmRleCArIDFdLnkgLSB0aGlzLnBvaW50TGlzdFtpbmRleF0ueSwgdGhpcy5wb2ludExpc3RbaW5kZXggKyAxXS54IC0gdGhpcy5wb2ludExpc3RbaW5kZXhdLngpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSb2FkO1xyXG59KHVuaXRfMS5GYWNpbGl0eSkpO1xyXG4vKipcclxuICog7Yq465+tIOuPhOywqeyngOuhnCDrk6TslrTsmKwg7Yq465+t65Ok7J2EIOyDneyEse2VmOuKlCDsnqXshoxcclxuICovXHJcbnZhciBUcnVja0dlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUcnVja0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRydWNrR2VuZXJhdG9yKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnVHJ1Y2tHZW5lcmF0b3InO1xyXG4gICAgICAgIF90aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIF90aGlzLm5leHRUcnVja0luZGV4ID0gMDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUub25BZ2VudEluID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tHZW5lcmF0b3IucHJvdG90eXBlLm9uQWdlbnRPdXQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBjaXJjbGUgPSBuZXcgZHJhd2VyXzEuQ2lyY2xlKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhjaXJjbGUpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICftirjrn60g7IOd7ISx6riwJztcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhmb250KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIoMSwgMSk7XHJcbiAgICAgICAgdmFyIHRydWNrID0gbmV3IERvY2tUcnVjayh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB0cnVjay5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMub3V0UG9ydC5hcHBlbmRBZ2VudCh0cnVjayk7XHJcbiAgICAgICAgLypcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2MjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lRGF0YSA9IG5ldyBUcnVja0Fycml2YWxEYXRhKE1hdGgucmFuZG9tKCkgKiA3MjAwMDAsIFRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9TRUFfQlVMSyk7XHJcbiAgICAgICAgICAgIHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0LnB1c2godGltZURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lRGF0YSA9IG5ldyBUcnVja0Fycml2YWxEYXRhKE1hdGgucmFuZG9tKCkgKiA3MjAwMDAsIFRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9UQU5LX0JVTEspO1xyXG4gICAgICAgICAgICB0aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdC5wdXNoKHRpbWVEYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzU4OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVEYXRhID0gbmV3IFRydWNrQXJyaXZhbERhdGEoTWF0aC5yYW5kb20oKSAqIDcyMDAwMCwgVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX0RPS0UpO1xyXG4gICAgICAgICAgICB0aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdC5wdXNoKHRpbWVEYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0ID0gdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS50aW1lIC0gYi50aW1lO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tHZW5lcmF0b3IucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgaWYgKHRoaXMubmV4dFRydWNrSW5kZXggPCB0aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IG5leHRUcnVja0Fycml2YWxUaW1lRGF0YSA9IHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0W3RoaXMubmV4dFRydWNrSW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5leHRUcnVja0Fycml2YWxUaW1lRGF0YS50aW1lIDwgdGhpcy5lbnZpcm9ubWVudC5lbGFwc2VkVGltZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRydWNrOiBUcnVjaztcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEua2luZCA9PSBUcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfU0VBX0JVTEspIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnVjayA9IG5ldyBTZWFCdWxrVHJ1Y2sodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5leHRUcnVja0Fycml2YWxUaW1lRGF0YS5raW5kID09IFRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9UQU5LX0JVTEspIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnVjayA9IG5ldyBUYW5rQnVsa1RydWNrKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEua2luZCA9PSBUcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfRE9LRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRydWNrID0gbmV3IERvY2tUcnVjayh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0cnVjay5yZWdpc3RlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRQb3J0LmFwcGVuZEFnZW50KHRydWNrKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEuaXNBcnJpdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRydWNrSW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0qL1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUcnVja0dlbmVyYXRvcjtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxuLyoqXHJcbiAqIO2KuOufrSDrj4TssKnsp4BcclxuICovXHJcbnZhciBUcnVja0Rlc3RpbmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRydWNrRGVzdGluYXRpb24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUcnVja0Rlc3RpbmF0aW9uKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnVHJ1Y2tEZXN0aW5hdGlvbic7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrRGVzdGluYXRpb24ucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIHZhciByYW5kb21EZWx0YVBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMihNYXRoLnJhbmRvbSgpICogdGhpcy50cmFuc2Zvcm0uc2NhbGUueCAtIHRoaXMudHJhbnNmb3JtLnNjYWxlLnggLyAyLCBNYXRoLnJhbmRvbSgpICogdGhpcy50cmFuc2Zvcm0uc2NhbGUueSAtIHRoaXMudHJhbnNmb3JtLnNjYWxlLnkgLyAyKTtcclxuICAgICAgICAvL2FnZW50LnRyYW5zZm9ybS5wb3NpdGlvbiA9IFZlY3RvcjIuYWRkKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLCByYW5kb21EZWx0YVBvc2l0aW9uKTtcclxuICAgICAgICAvL2FnZW50LnRyYW5zZm9ybS5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcclxuICAgICAgICB0aGlzLm91dFBvcnQuYXBwZW5kQWdlbnQoYWdlbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5vbkFnZW50T3V0ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tEZXN0aW5hdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICftirjrn60g64+E7LCp7KeAJztcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhmb250KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlID0gbmV3IHR5cGVzXzEuVmVjdG9yMigyMCwgMjApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrRGVzdGluYXRpb24ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUcnVja0Rlc3RpbmF0aW9uO1xyXG59KHVuaXRfMS5GYWNpbGl0eSkpO1xyXG52YXIgVHJ1Y2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVHJ1Y2ssIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUcnVjayhlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmN1cnJlbnRSb2FkSW5kZXggPSAwO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ1RydWNrJztcclxuICAgICAgICBfdGhpcy50cmFuc2Zvcm0uc2NhbGUgPSBuZXcgdHlwZXNfMS5WZWN0b3IyKFRydWNrLldJRFRILCBUcnVjay5MRU5HVEgpO1xyXG4gICAgICAgIF90aGlzLmR5bmFtaWMgPSBuZXcgY29tcG9uZW50XzEuRHluYW1pY3MoKTtcclxuICAgICAgICBfdGhpcy5hZGRDb21wb25lbnQoX3RoaXMuZHluYW1pYyk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDrj4TroZzsnITsl5Ag7J6I7J2EIOuVjCDtlaAg7J2865OkIOyymOumrFxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudEZhY2lsaXR5Lm5hbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGYWNpbGl0eSBpbnN0YW5jZW9mIFJvYWQpIHtcclxuICAgICAgICAgICAgdmFyIHJvYWQgPSB0aGlzLmN1cnJlbnRGYWNpbGl0eTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgICAgICBpZiAodHlwZXNfMS5WZWN0b3IyLmludmVyc2VMZXJwKHJvYWQucG9pbnRMaXN0W3RoaXMuY3VycmVudFJvYWRJbmRleF0sIHJvYWQucG9pbnRMaXN0W3RoaXMuY3VycmVudFJvYWRJbmRleCArIDFdLCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbikgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Um9hZEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbiA9IHJvYWQucG9pbnRMaXN0W3RoaXMuY3VycmVudFJvYWRJbmRleF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDsnbTrtoDrtoQg7IiY7KCV7ZWE7JqUXHJcbiAgICAgKi9cclxuICAgIFRydWNrLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcm9hZCA9IHRoaXMuY3VycmVudEZhY2lsaXR5O1xyXG4gICAgICAgIHZhciBhbmdsZSA9IHJvYWQuZ2V0Um9hZEFuZ2xlKHRoaXMuY3VycmVudFJvYWRJbmRleCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0ucm90YXRpb24gPSBhbmdsZTtcclxuICAgICAgICB0aGlzLmR5bmFtaWMudmVsb2NpdHkgPSB0eXBlc18xLlZlY3RvcjIubXVsdGlwbHkodGhpcy50cmFuc2Zvcm0uZm9yd2FyZCgpLCAxMCk7XHJcbiAgICB9O1xyXG4gICAgVHJ1Y2suV0lEVEggPSAxLjg1O1xyXG4gICAgVHJ1Y2suTEVOR1RIID0gNC4zO1xyXG4gICAgcmV0dXJuIFRydWNrO1xyXG59KHVuaXRfMS5BZ2VudCkpO1xyXG52YXIgU2VhQnVsa1RydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlYUJ1bGtUcnVjaywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNlYUJ1bGtUcnVjayhlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ1NlYUJ1bGtUcnVjayc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgU2VhQnVsa1RydWNrLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSwgJ3JnYmEoMjU2LCAwLCAwLCAwLjIpJyk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgU2VhQnVsa1RydWNrLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFNlYUJ1bGtUcnVjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5vblVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VhQnVsa1RydWNrO1xyXG59KFRydWNrKSk7XHJcbnZhciBUYW5rQnVsa1RydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhbmtCdWxrVHJ1Y2ssIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUYW5rQnVsa1RydWNrKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnVGFua0J1bGtUcnVjayc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVGFua0J1bGtUcnVjay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0sICdyZ2JhKDAsIDI1NiwgMCwgMC4yKScpO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRhbmtCdWxrVHJ1Y2sucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVGFua0J1bGtUcnVjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5vblVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua0J1bGtUcnVjaztcclxufShUcnVjaykpO1xyXG52YXIgRG9ja1RydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKERvY2tUcnVjaywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIERvY2tUcnVjayhlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ0RvY2tUcnVjayc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgRG9ja1RydWNrLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSwgJ3JnYmEoMCwgMCwgMjU2LCAwLjIpJyk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgRG9ja1RydWNrLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIERvY2tUcnVjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5vblVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH07XHJcbiAgICByZXR1cm4gRG9ja1RydWNrO1xyXG59KFRydWNrKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkcmF3ZXJfMSA9IHJlcXVpcmUoXCIuL2RyYXdlclwiKTtcclxudmFyIFJlbmRlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyZXIoZW52aXJvbm1lbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2Vudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNEZWxlZ2F0b3IgPSBuZXcgZHJhd2VyXzEuQ2FudmFzRGVsZWdhdG9yKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVuZGVyZXIucHJvdG90eXBlLCBcImVudmlyb25tZW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vudmlyb25tZW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0RlbGVnYXRvci51cGRhdGUodGhpcy5lbnZpcm9ubWVudC51bml0TGlzdCk7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIuTUFYX1dJRFRIID0gMTAwMDtcclxuICAgIFJlbmRlcmVyLk1BWF9IRUlHSFQgPSAxMDAwO1xyXG4gICAgcmV0dXJuIFJlbmRlcmVyO1xyXG59KCkpO1xyXG5leHBvcnRzLlJlbmRlcmVyID0gUmVuZGVyZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiAy7LCo7JuQIOuyoe2EsFxyXG4gKi9cclxudmFyIFZlY3RvcjIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWN0b3IyKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBWZWN0b3IyLmFkZCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGEueCArIGIueCwgYS55ICsgYi55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnN1YnN0cmFjdCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGEueCAtIGIueCwgYS55IC0gYi55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLm11bHRpcGx5ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54ICogYiwgYS55ICogYik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5kaXZpc2lvbiA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGEueCAvIGIsIGEueSAvIGIpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIubGVycCA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgdmFyIHZlY3RvciA9IFZlY3RvcjIuYWRkKGEsIFZlY3RvcjIubXVsdGlwbHkoVmVjdG9yMi5zdWJzdHJhY3QoYiwgYSksIGMpKTtcclxuICAgICAgICByZXR1cm4gdmVjdG9yO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuaW52ZXJzZUxlcnAgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIHZhciB2MSA9IFZlY3RvcjIuc3Vic3RyYWN0KGMsIGEpO1xyXG4gICAgICAgIHZhciB2MiA9IFZlY3RvcjIuc3Vic3RyYWN0KGIsIGEpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodjEuc3FyTWFnbml0dWRlIC8gdjIuc3FyTWFnbml0dWRlKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwic3FyTWFnbml0dWRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJtYWduaXR1ZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuc3FyTWFnbml0dWRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZlY3RvcjIuWkVSTyA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgcmV0dXJuIFZlY3RvcjI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVmVjdG9yMiA9IFZlY3RvcjI7XHJcbi8qKlxyXG4gKiBVbml07J2YIOychOy5mCwg7YGs6riwLCDqsIHrj4TsoJXrs7Trpbwg6rCW6rOg7J6I7J2MXHJcbiAqL1xyXG52YXIgVHJhbnNmb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJhbnNmb3JtKHBvc2l0aW9uLCBzY2FsZSwgcm90YXRpb24pIHtcclxuICAgICAgICBpZiAocm90YXRpb24gPT09IHZvaWQgMCkgeyByb3RhdGlvbiA9IDA7IH1cclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog7JWeIOuyoe2EsFxyXG4gICAgICovXHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLmZvcndhcmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBWZWN0b3IyKE1hdGguY29zKHRoaXMucm90YXRpb24pLCBNYXRoLnNpbih0aGlzLnJvdGF0aW9uKSk7XHJcbiAgICAgICAgcmV0dXJuIHZlY3RvcjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOyZvOyqvSDrsqHthLBcclxuICAgICAqL1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5sZWZ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yMihNYXRoLmNvcyh0aGlzLnJvdGF0aW9uICsgTWF0aC5QSSAvIDIpLCBNYXRoLnNpbih0aGlzLnJvdGF0aW9uICsgTWF0aC5QSSAvIDIpKTtcclxuICAgICAgICByZXR1cm4gdmVjdG9yO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog7Jik66W47Kq9IOuyoe2EsFxyXG4gICAgICovXHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLnJpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yMihNYXRoLmNvcyh0aGlzLnJvdGF0aW9uIC0gTWF0aC5QSSAvIDIpLCBNYXRoLnNpbih0aGlzLnJvdGF0aW9uIC0gTWF0aC5QSSAvIDIpKTtcclxuICAgICAgICByZXR1cm4gdmVjdG9yO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUcmFuc2Zvcm07XHJcbn0oKSk7XHJcbmV4cG9ydHMuVHJhbnNmb3JtID0gVHJhbnNmb3JtO1xyXG4vKipcclxuICog7Yq465+tIOuPhOywqSDsi5zqsITsl5Ag6rSA7ZWcIOuNsOydtO2EsFxyXG4gKi9cclxudmFyIFRydWNrQXJyaXZhbERhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUcnVja0Fycml2YWxEYXRhKHRpbWUsIGtpbmQpIHtcclxuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xyXG4gICAgICAgIHRoaXMua2luZCA9IGtpbmQ7XHJcbiAgICAgICAgdGhpcy5pc0Fycml2ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9TRUFfQlVMSyA9IDE7XHJcbiAgICBUcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfVEFOS19CVUxLID0gMjtcclxuICAgIFRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9ET0tFID0gMztcclxuICAgIHJldHVybiBUcnVja0Fycml2YWxEYXRhO1xyXG59KCkpO1xyXG5leHBvcnRzLlRydWNrQXJyaXZhbERhdGEgPSBUcnVja0Fycml2YWxEYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxudmFyIEVudmlyb25tZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRW52aXJvbm1lbnQoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl90aWNrID0gMDtcclxuICAgICAgICB0aGlzLl9lbGFwc2VkVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fdGltZVNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLnVuaXRMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fdGljayArPSBFbnZpcm9ubWVudC5FUFNJTE9OX0RFTEFZO1xyXG4gICAgICAgICAgICBfdGhpcy5fZGVsdGFUaW1lID0gX3RoaXMudGltZVNjYWxlIC8gNjA7XHJcbiAgICAgICAgICAgIF90aGlzLl9lbGFwc2VkVGltZSArPSBfdGhpcy5kZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fdGljayA+IDE3IC8gX3RoaXMudGltZVNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fdGljayA9IDA7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy51bml0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh1bml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuaXQgaW5zdGFuY2VvZiBBZ2VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0LmFwcGx5Q29tcG9uZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB1bml0Lm9uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIEVudmlyb25tZW50LkVQU0lMT05fREVMQVkpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVudmlyb25tZW50LnByb3RvdHlwZSwgXCJlbGFwc2VkVGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbGFwc2VkVGltZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbnZpcm9ubWVudC5wcm90b3R5cGUsIFwidGltZVNjYWxlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVTY2FsZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lU2NhbGUgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRW52aXJvbm1lbnQucHJvdG90eXBlLCBcImRlbHRhVGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWx0YVRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIO2VtOuLuSDtmZjqsr3sl5Ag7Jyg64ubIOy2lOqwgFxyXG4gICAgICogQHBhcmFtIHVuaXRcclxuICAgICAqL1xyXG4gICAgRW52aXJvbm1lbnQucHJvdG90eXBlLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiAodW5pdCkge1xyXG4gICAgICAgIHVuaXQub25TdGFydCgpO1xyXG4gICAgICAgIHRoaXMudW5pdExpc3QucHVzaCh1bml0KTtcclxuICAgIH07XHJcbiAgICBFbnZpcm9ubWVudC5FUFNJTE9OX0RFTEFZID0gNTtcclxuICAgIHJldHVybiBFbnZpcm9ubWVudDtcclxufSgpKTtcclxuZXhwb3J0cy5FbnZpcm9ubWVudCA9IEVudmlyb25tZW50O1xyXG52YXIgVW5pdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVuaXQoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gJ1VuaXQnO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zZm9ybSA9IG5ldyB0eXBlc18xLlRyYW5zZm9ybSh0eXBlc18xLlZlY3RvcjIuWkVSTywgbmV3IHR5cGVzXzEuVmVjdG9yMigxMCwgMTApLCAwKTtcclxuICAgICAgICB0aGlzLl9lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFVuaXQucHJvdG90eXBlLCBcIm5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShVbml0LnByb3RvdHlwZSwgXCJ0cmFuc2Zvcm1cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFVuaXQucHJvdG90eXBlLCBcImVudmlyb25tZW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Vudmlyb25tZW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVW5pdC5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5hcHBlbmRVbml0KHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBVbml0O1xyXG59KCkpO1xyXG5leHBvcnRzLlVuaXQgPSBVbml0O1xyXG4vKipcclxuICog66qo65OcIOyLnOyEpOuTpOydmCDrtoDrqqgg7YG0656Y7IqkXHJcbiAqL1xyXG52YXIgRmFjaWxpdHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmFjaWxpdHksIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGYWNpbGl0eShlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ0ZhY2lsaXR5JztcclxuICAgICAgICBfdGhpcy5hZ2VudExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFnZW50IOy2lOqwgFxyXG4gICAgICogQHBhcmFtIGFnZW50XHJcbiAgICAgKi9cclxuICAgIEZhY2lsaXR5LnByb3RvdHlwZS5hcHBlbmRBZ2VudCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIGlmIChhZ2VudC5jdXJyZW50RmFjaWxpdHkpIHtcclxuICAgICAgICAgICAgYWdlbnQuY3VycmVudEZhY2lsaXR5LnJlbW92ZUFnZW50KGFnZW50KTtcclxuICAgICAgICAgICAgYWdlbnQuY3VycmVudEZhY2lsaXR5Lm9uQWdlbnRPdXQoYWdlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFnZW50TGlzdC5wdXNoKGFnZW50KTtcclxuICAgICAgICBhZ2VudC5jdXJyZW50RmFjaWxpdHkgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub25BZ2VudEluKGFnZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEFnZW50IOyCreygnFxyXG4gICAgICogQHBhcmFtIGFnZW50XHJcbiAgICAgKi9cclxuICAgIEZhY2lsaXR5LnByb3RvdHlwZS5yZW1vdmVBZ2VudCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hZ2VudExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWdlbnRMaXN0W2ldID09PSBhZ2VudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZ2VudExpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25BZ2VudE91dChhZ2VudCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZhY2lsaXR5O1xyXG59KFVuaXQpKTtcclxuZXhwb3J0cy5GYWNpbGl0eSA9IEZhY2lsaXR5O1xyXG4vKipcclxuICog66qo65OgIEFnZW507J2YIOu2gOuqqCDtgbTrnpjsiqRcclxuICovXHJcbnZhciBBZ2VudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhBZ2VudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFnZW50KGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnQWdlbnQnO1xyXG4gICAgICAgIF90aGlzLl9jdXJyZW50RmFjaWxpdHkgPSBudWxsO1xyXG4gICAgICAgIF90aGlzLmNvbXBvbmVudExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWdlbnQucHJvdG90eXBlLCBcImN1cnJlbnRGYWNpbGl0eVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50RmFjaWxpdHk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEZhY2lsaXR5ID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgQWdlbnQucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudExpc3QucHVzaChjb21wb25lbnQpO1xyXG4gICAgfTtcclxuICAgIEFnZW50LnByb3RvdHlwZS5yZW1vdmVDb21wb25lbnQgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbXBvbmVudExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFtpXSA9PT0gY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFnZW50LnByb3RvdHlwZS5hcHBseUNvbXBvbmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbXBvbmVudExpc3QuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5kbyhfdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFnZW50O1xyXG59KFVuaXQpKTtcclxuZXhwb3J0cy5BZ2VudCA9IEFnZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9