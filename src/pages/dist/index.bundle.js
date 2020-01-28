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
    function CanvasDelegator(environment, element) {
        this.environment = environment;
        this.element = element;
        this._canvas = element.getContext('2d');
        this.cameraPosition = new types_1.Vector2(0, 0);
        this.zoomSize = 10;
        this.setupEvent();
    }
    Object.defineProperty(CanvasDelegator.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasDelegator.prototype, "focusedUnit", {
        get: function () {
            return this._focusedUnit;
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
        if (this.focusedUnit) {
            this.drawWireframe(this.focusedUnit);
        }
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
        var convertedScale = new types_1.Vector2(textMatrics.width, font.size);
        var tmpPosition = this.getRealPixelPosition(font.transform.position);
        var convertedPosition = new types_1.Vector2(tmpPosition.x - convertedScale.x / 2, tmpPosition.y);
        this.canvas.fillText(font.text, convertedPosition.x, convertedPosition.y);
    };
    /**
     * canvas에 사각형을 그림
     * @param circle
     */
    CanvasDelegator.prototype.drawQuad = function (quad) {
        var _this = this;
        this.canvas.fillStyle = quad.color;
        this.canvas.strokeStyle = quad.color;
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
        if (quad.strokeWidth > 0) {
            this.canvas.lineWidth = quad.strokeWidth;
            this.canvas.stroke();
        }
        else {
            this.canvas.fill();
        }
    };
    /**
     * canvas에 원을 그림
     * @param circle
     */
    CanvasDelegator.prototype.drawCircle = function (circle) {
        this.canvas.fillStyle = circle.color;
        this.canvas.strokeStyle = circle.color;
        var convertedPosition = this.getRealPixelPosition(circle.transform.position);
        var convertedScale = this.convertMeterToPixel(circle.transform.scale);
        this.canvas.beginPath();
        this.canvas.ellipse;
        this.canvas.ellipse(convertedPosition.x, convertedPosition.y, convertedScale.x, convertedScale.y, circle.transform.rotation, 0, 2 * Math.PI);
        if (circle.strokeWidth > 0) {
            this.canvas.lineWidth = circle.strokeWidth;
            this.canvas.stroke();
        }
        else {
            this.canvas.fill();
        }
    };
    /**
     * 해당 유닛의 와이어프레임을 그림
     */
    CanvasDelegator.prototype.drawWireframe = function (unit) {
        var quad = new Quad(unit.transform, 'rgba(0, 0, 0, 0.5)');
        quad.strokeWidth = 1;
        this.draw(quad);
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
        /*
        let n = 10;
        let smallUnit = 1;
        let bigUnit = smallUnit * 10;

        for (let x = -100; x <= 100; x += smallUnit) {
            let path = new Path(new Transform(Vector2.ZERO, Vector2.ZERO), 'rgba(0, 0, 0, 0.1)');
            path.pointList.push(new Vector2(x, -100));
            path.pointList.push(new Vector2(x, +100));
            path.width = 1 / this.zoomSize;
            this.drawPath(path);
        }
        */
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
        this.element.addEventListener('mousedown', function (e) {
            if (e.button === 2) {
                for (var i = 0; i < _this.environment.unitList.length; i++) {
                    var unit = _this.environment.unitList[i];
                    var convertedPosition = _this.getRealPixelPosition(unit.transform.position);
                    var convertedScale = _this.convertMeterToPixel(unit.transform.scale);
                    if (e.offsetX > convertedPosition.x - convertedScale.y / 2 && e.offsetX < convertedPosition.x + convertedScale.y / 2 && e.offsetY > convertedPosition.y - convertedScale.x / 2 && e.offsetY < convertedPosition.y + convertedScale.x / 2) {
                        _this._focusedUnit = unit;
                    }
                }
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.strokeWidth = 0;
        return _this;
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
var widget_1 = __webpack_require__(/*! ./widget */ "./src/pages/ts/widget.ts");
var model = new model_1.Model(document.getElementById('simulation-view'));
var propertyEditor = new widget_1.PropertyEditor(model, document.getElementById('property-editor'));
/*
class A {
    private _a: number = 1;

    public get a(): number {
        return this._a;
    }
}

let a = new A();
let i = 4;

for (let x in a) {
    console.log(x, typeof(a[x]), a[x]);
    try {
        a[x] = i++;
    } catch (e) {
        console.log((<Error> e).name);
    }
}

for (let x in a) {
    console.log(x, typeof(a[x]), a[x]);
}*/ 


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
        this.environment.timeScale = 100;
        this.renderer = new renderer_1.Renderer(this.environment, elemeht);
        this.setup();
    }
    Model.prototype.setup = function () {
        this.truckGenerator = new TruckGenerator(this.environment);
        this.truckGenerator.transform.position = new types_1.Vector2(-20, 0);
        this.truckDestination = new TruckDestination(this.environment);
        this.truckDestination.transform.position = new types_1.Vector2(0, 0);
        this.watingPlace = new WaitingPlace(this.environment);
        this.watingPlace.transform.position = new types_1.Vector2(100, 0);
        this.inGateway = new InGateway(this.environment);
        this.inGateway.transform.position = new types_1.Vector2(200, 0);
        this.linerPreparationPlace = new SeabulkTruckLinerPreparationPlace(this.environment);
        this.linerPreparationPlace.transform.position = new types_1.Vector2(300, 50);
        this.weightMesaurementPlace1 = new WeightMesaurementPlace(this.environment);
        this.weightMesaurementPlace1.transform.position = new types_1.Vector2(400, 0);
        this.bulkProductLoadingPlace = new BulkProductLoadingPlace(this.environment);
        this.bulkProductLoadingPlace.transform.position = new types_1.Vector2(500, 0);
        this.dockProductLoadingPlace = new DockProductLoadingPlace(this.environment);
        this.dockProductLoadingPlace.transform.position = new types_1.Vector2(500, -50);
        this.weightMesaurementPlace2 = new WeightMesaurementPlace(this.environment);
        this.weightMesaurementPlace2.transform.position = new types_1.Vector2(600, 0);
        this.outGateway = new OutGateway(this.environment);
        this.outGateway.transform.position = new types_1.Vector2(700, 0);
        this.externalDestination = new ExternalDestination(this.environment);
        this.externalDestination.transform.position = new types_1.Vector2(800, 0);
        // 트럭 도착지 -> 대기실
        var td2wp = new Road(this.environment);
        {
            td2wp.addPoint(this.truckDestination.getSidePosition(0));
            td2wp.addPoint(this.watingPlace.getSidePosition(Math.PI));
            td2wp.portList.push(this.watingPlace);
        }
        // 대기실 -> 게이트웨이
        var wp2ig = new Road(this.environment);
        {
            wp2ig.addPoint(this.watingPlace.getSidePosition(0));
            wp2ig.addPoint(this.inGateway.getSidePosition(Math.PI));
            wp2ig.portList.push(this.inGateway);
        }
        // 게이트웨이 -> 벌크용 무게 측정실1
        var ig2wmp1 = new Road(this.environment);
        {
            ig2wmp1.addPoint(this.inGateway.getSidePosition(0));
            ig2wmp1.addPoint(this.weightMesaurementPlace1.getSidePosition(Math.PI));
            ig2wmp1.portList.push(this.weightMesaurementPlace1);
        }
        // 벌크용 무게 측정실1 -> 벌크 제품 적재실
        var wmp12bplp = new Road(this.environment);
        {
            wmp12bplp.addPoint(this.weightMesaurementPlace1.getSidePosition(0));
            wmp12bplp.addPoint(this.bulkProductLoadingPlace.getSidePosition(Math.PI));
            wmp12bplp.portList.push(this.bulkProductLoadingPlace);
        }
        // 벌크 제품 적재실 -> 벌크용 무게 측정실2
        var bplp2wmp2 = new Road(this.environment);
        {
            bplp2wmp2.addPoint(this.bulkProductLoadingPlace.getSidePosition(0));
            bplp2wmp2.addPoint(this.weightMesaurementPlace2.getSidePosition(Math.PI));
            bplp2wmp2.portList.push(this.weightMesaurementPlace2);
        }
        // 벌크용 무게 측정실2 -> 출구 게이트웨이
        var wmp22og = new Road(this.environment);
        {
            wmp22og.addPoint(this.weightMesaurementPlace2.getSidePosition(0));
            wmp22og.addPoint(this.outGateway.getSidePosition(Math.PI));
            wmp22og.portList.push(this.outGateway);
        }
        // 출구 게이트웨이 -> 외부 목적지
        var og2ed = new Road(this.environment);
        {
            og2ed.addPoint(this.outGateway.getSidePosition(0));
            og2ed.addPoint(this.externalDestination.getSidePosition(Math.PI));
            og2ed.portList.push(this.externalDestination);
        }
        ////////////////////////////////////////////////////////////
        // 게이트웨이 -> 씨벌크용 라이너 준비실
        var ig2lpp = new Road(this.environment);
        {
            var tmp1 = types_1.Vector2.add(this.inGateway.getSidePosition(0), new types_1.Vector2(0, 3));
            var tmp2 = this.linerPreparationPlace.getSidePosition(Math.PI);
            var tmp3 = types_1.Vector2.substract(tmp2, tmp1);
            ig2lpp.addPoint(tmp1);
            ig2lpp.addPoint(new types_1.Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            ig2lpp.addPoint(new types_1.Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            ig2lpp.addPoint(tmp2);
            ig2lpp.portList.push(this.linerPreparationPlace);
        }
        // 씨벌크용 라이너 준비실 -> 벌크용 무게 측정실1
        var lpp2wmp1 = new Road(this.environment);
        {
            var tmp1 = this.linerPreparationPlace.getSidePosition(0);
            var tmp2 = types_1.Vector2.add(this.weightMesaurementPlace1.getSidePosition(Math.PI), new types_1.Vector2(0, 3));
            var tmp3 = types_1.Vector2.substract(tmp2, tmp1);
            lpp2wmp1.addPoint(tmp1);
            lpp2wmp1.addPoint(new types_1.Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            lpp2wmp1.addPoint(new types_1.Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            lpp2wmp1.addPoint(tmp2);
            lpp2wmp1.portList.push(this.weightMesaurementPlace1);
        }
        ////////////////////////////////////////////////////////////
        // 입구 게이트웨이 -> 도크용 제품 적재실
        var ig2dplp = new Road(this.environment);
        {
            var tmp1 = types_1.Vector2.add(this.inGateway.getSidePosition(0), new types_1.Vector2(0, -3));
            var tmp2 = this.dockProductLoadingPlace.getSidePosition(Math.PI);
            var tmp3 = types_1.Vector2.substract(tmp2, tmp1);
            ig2dplp.addPoint(tmp1);
            ig2dplp.addPoint(new types_1.Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            ig2dplp.addPoint(new types_1.Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            ig2dplp.addPoint(tmp2);
            ig2dplp.portList.push(this.dockProductLoadingPlace);
        }
        // 도크용 제품 적재실 -> 출구 게이트웨이
        var dplp2og = new Road(this.environment);
        {
            var tmp1 = this.dockProductLoadingPlace.getSidePosition(0);
            var tmp2 = types_1.Vector2.add(this.outGateway.getSidePosition(Math.PI), new types_1.Vector2(0, -3));
            var tmp3 = types_1.Vector2.substract(tmp2, tmp1);
            dplp2og.addPoint(tmp1);
            dplp2og.addPoint(new types_1.Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            dplp2og.addPoint(new types_1.Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            dplp2og.addPoint(tmp2);
            dplp2og.portList.push(this.outGateway);
        }
        this.truckGenerator.portList.push(this.truckDestination);
        this.truckDestination.portList.push(td2wp);
        this.watingPlace.portList.push(wp2ig);
        this.inGateway.portList.push(ig2lpp);
        this.inGateway.portList.push(ig2wmp1);
        this.inGateway.portList.push(ig2dplp);
        this.linerPreparationPlace.portList.push(lpp2wmp1);
        this.weightMesaurementPlace1.portList.push(wmp12bplp);
        this.bulkProductLoadingPlace.portList.push(bplp2wmp2);
        this.weightMesaurementPlace2.portList.push(wmp22og);
        this.dockProductLoadingPlace.portList.push(dplp2og);
        this.outGateway.portList.push(og2ed);
        this.truckGenerator.register();
        this.truckDestination.register();
        this.watingPlace.register();
        this.inGateway.register();
        this.linerPreparationPlace.register();
        this.weightMesaurementPlace1.register();
        this.bulkProductLoadingPlace.register();
        this.dockProductLoadingPlace.register();
        this.weightMesaurementPlace2.register();
        this.outGateway.register();
        this.externalDestination.register();
        td2wp.register();
        wp2ig.register();
        ig2wmp1.register();
        wmp12bplp.register();
        bplp2wmp2.register();
        wmp22og.register();
        og2ed.register();
        ig2lpp.register();
        lpp2wmp1.register();
        ig2dplp.register();
        dplp2og.register();
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
        _this.transform.scale = new types_1.Vector2(Road.LANE_WIDTH, Road.LANE_WIDTH);
        return _this;
    }
    /**
     * @override
     */
    Road.prototype.onAgentIn = function (agent) {
        agent.transform.position = this.pointList[0];
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
        var path = new drawer_1.Path(this.transform, 'rgba(128, 255, 255, 0.4)');
        path.width = Road.LANE_WIDTH;
        this.pointList.forEach(function (point) {
            path.pointList.push(point);
        });
        canvasDelegator.draw(path);
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
     * point 추가
     * @param point
     */
    Road.prototype.addPoint = function (position) {
        this.pointList.push(position);
        var minX = position.x;
        var minY = position.y;
        var maxX = position.x;
        var maxY = position.y;
        this.pointList.forEach(function (point) {
            if (point.x < minX) {
                minX = point.x;
            }
            if (point.x > maxX) {
                maxX = point.x;
            }
            if (point.y < minY) {
                minY = point.y;
            }
            if (point.y > maxY) {
                maxY = point.y;
            }
        });
        var lbPosition = new types_1.Vector2(minX, minY);
        var rtPosition = new types_1.Vector2(maxX, maxY);
        var tmp = types_1.Vector2.substract(rtPosition, lbPosition);
        this.transform.position = types_1.Vector2.add(lbPosition, types_1.Vector2.division(tmp, 2));
        if (tmp.x > Road.LANE_WIDTH) {
            this.transform.scale.y = tmp.x;
        }
        if (tmp.y > Road.LANE_WIDTH) {
            this.transform.scale.x = tmp.y;
        }
    };
    /**
     * point 반환
     * @param index
     */
    Road.prototype.getPoint = function (index) {
        return this.pointList[index];
    };
    /**
     * point 갯수 반환
     * @param index
     */
    Road.prototype.getPointLength = function () {
        return this.pointList.length;
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
    Road.LANE_WIDTH = 2;
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
        /*
        let truck = new DockTruck(this.environment);
        truck.register();
        this.portList[0].appendAgent(truck);
        */
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
    /**
     * @override
     */
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
                this.portList[0].appendAgent(truck);
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
        this.portList[0].appendAgent(agent);
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
    };
    /**
     * @override
     */
    TruckDestination.prototype.onUpdate = function () {
    };
    return TruckDestination;
}(unit_1.Facility));
var WaitingPlace = /** @class */ (function (_super) {
    __extends(WaitingPlace, _super);
    function WaitingPlace(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'WaitingPlace';
        return _this;
    }
    /**
     * @override
     */
    WaitingPlace.prototype.onAgentIn = function (agent) {
        this.portList[0].appendAgent(agent);
    };
    /**
     * @override
     */
    WaitingPlace.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
    WaitingPlace.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform);
        canvasDelegator.draw(quad);
        var font = new drawer_1.Font(this.transform);
        font.text = '트럭 대기실';
        canvasDelegator.draw(font);
    };
    /**
     * @override
     */
    WaitingPlace.prototype.onStart = function () {
    };
    /**
     * @override
     */
    WaitingPlace.prototype.onUpdate = function () {
    };
    return WaitingPlace;
}(unit_1.Facility));
var InGateway = /** @class */ (function (_super) {
    __extends(InGateway, _super);
    function InGateway(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'Gateway';
        return _this;
    }
    /**
     * @override
     */
    InGateway.prototype.onAgentIn = function (agent) {
        if (agent instanceof SeaBulkTruck) {
            this.portList[0].appendAgent(agent);
        }
        else if (agent instanceof TankBulkTruck) {
            this.portList[1].appendAgent(agent);
        }
        else if (agent instanceof DockTruck) {
            this.portList[2].appendAgent(agent);
        }
    };
    /**
     * @override
     */
    InGateway.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
    InGateway.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform);
        canvasDelegator.draw(quad);
        var font = new drawer_1.Font(this.transform);
        font.text = '게이트웨이';
        canvasDelegator.draw(font);
    };
    /**
     * @override
     */
    InGateway.prototype.onStart = function () {
    };
    /**
     * @override
     */
    InGateway.prototype.onUpdate = function () {
    };
    return InGateway;
}(unit_1.Facility));
var OutGateway = /** @class */ (function (_super) {
    __extends(OutGateway, _super);
    function OutGateway(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'Gateway';
        return _this;
    }
    /**
     * @override
     */
    OutGateway.prototype.onAgentIn = function (agent) {
        this.portList[0].appendAgent(agent);
    };
    /**
     * @override
     */
    OutGateway.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
    OutGateway.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform);
        canvasDelegator.draw(quad);
        var font = new drawer_1.Font(this.transform);
        font.text = '게이트웨이';
        canvasDelegator.draw(font);
    };
    /**
     * @override
     */
    OutGateway.prototype.onStart = function () {
    };
    /**
     * @override
     */
    OutGateway.prototype.onUpdate = function () {
    };
    return OutGateway;
}(unit_1.Facility));
var SeabulkTruckLinerPreparationPlace = /** @class */ (function (_super) {
    __extends(SeabulkTruckLinerPreparationPlace, _super);
    function SeabulkTruckLinerPreparationPlace(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'LinerPreparationPlace';
        return _this;
    }
    /**
     * @override
     */
    SeabulkTruckLinerPreparationPlace.prototype.onAgentIn = function (agent) {
        this.portList[0].appendAgent(agent);
    };
    /**
     * @override
     */
    SeabulkTruckLinerPreparationPlace.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
    SeabulkTruckLinerPreparationPlace.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform);
        canvasDelegator.draw(quad);
        var font = new drawer_1.Font(this.transform);
        font.text = '씨벌크용 라이너 준비실';
        canvasDelegator.draw(font);
    };
    /**
     * @override
     */
    SeabulkTruckLinerPreparationPlace.prototype.onStart = function () {
    };
    /**
     * @override
     */
    SeabulkTruckLinerPreparationPlace.prototype.onUpdate = function () {
    };
    return SeabulkTruckLinerPreparationPlace;
}(unit_1.Facility));
var WeightMesaurementPlace = /** @class */ (function (_super) {
    __extends(WeightMesaurementPlace, _super);
    function WeightMesaurementPlace(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'WeightMesaurementPlace';
        return _this;
    }
    /**
     * @override
     */
    WeightMesaurementPlace.prototype.onAgentIn = function (agent) {
        this.portList[0].appendAgent(agent);
    };
    /**
     * @override
     */
    WeightMesaurementPlace.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
    WeightMesaurementPlace.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform);
        canvasDelegator.draw(quad);
        var font = new drawer_1.Font(this.transform);
        font.text = '무게 측정실';
        canvasDelegator.draw(font);
    };
    /**
     * @override
     */
    WeightMesaurementPlace.prototype.onStart = function () {
    };
    /**
     * @override
     */
    WeightMesaurementPlace.prototype.onUpdate = function () {
    };
    return WeightMesaurementPlace;
}(unit_1.Facility));
var BulkProductLoadingPlace = /** @class */ (function (_super) {
    __extends(BulkProductLoadingPlace, _super);
    function BulkProductLoadingPlace(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'BulkProductLoadingPlace';
        return _this;
    }
    /**
     * @override
     */
    BulkProductLoadingPlace.prototype.onAgentIn = function (agent) {
        this.portList[0].appendAgent(agent);
    };
    /**
     * @override
     */
    BulkProductLoadingPlace.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
    BulkProductLoadingPlace.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform);
        canvasDelegator.draw(quad);
        var font = new drawer_1.Font(this.transform);
        font.text = '벌크 제품 적제실';
        canvasDelegator.draw(font);
    };
    /**
     * @override
     */
    BulkProductLoadingPlace.prototype.onStart = function () {
    };
    /**
     * @override
     */
    BulkProductLoadingPlace.prototype.onUpdate = function () {
    };
    return BulkProductLoadingPlace;
}(unit_1.Facility));
var DockProductLoadingPlace = /** @class */ (function (_super) {
    __extends(DockProductLoadingPlace, _super);
    function DockProductLoadingPlace(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'DockProductLoadingPlace';
        return _this;
    }
    /**
     * @override
     */
    DockProductLoadingPlace.prototype.onAgentIn = function (agent) {
        this.portList[0].appendAgent(agent);
    };
    /**
     * @override
     */
    DockProductLoadingPlace.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
    DockProductLoadingPlace.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform);
        canvasDelegator.draw(quad);
        var font = new drawer_1.Font(this.transform);
        font.text = '도크 제품 적재실';
        canvasDelegator.draw(font);
    };
    /**
     * @override
     */
    DockProductLoadingPlace.prototype.onStart = function () {
    };
    /**
     * @override
     */
    DockProductLoadingPlace.prototype.onUpdate = function () {
    };
    return DockProductLoadingPlace;
}(unit_1.Facility));
var ExternalDestination = /** @class */ (function (_super) {
    __extends(ExternalDestination, _super);
    function ExternalDestination(environment) {
        var _this = _super.call(this, environment) || this;
        _this._name = 'ExternalDestination';
        return _this;
    }
    /**
     * @override
     */
    ExternalDestination.prototype.onAgentIn = function (agent) {
    };
    /**
     * @override
     */
    ExternalDestination.prototype.onAgentOut = function (agent) {
    };
    /**
     * @override
     */
    ExternalDestination.prototype.render = function (canvasDelegator) {
        var quad = new drawer_1.Quad(this.transform);
        canvasDelegator.draw(quad);
        var font = new drawer_1.Font(this.transform);
        font.text = '외부 목적지';
        canvasDelegator.draw(font);
    };
    /**
     * @override
     */
    ExternalDestination.prototype.onStart = function () {
    };
    /**
     * @override
     */
    ExternalDestination.prototype.onUpdate = function () {
    };
    return ExternalDestination;
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
        if (this.currentFacility instanceof Road) {
            var road = this.currentFacility;
            this.reset();
            var currentProgress = types_1.Vector2.inverseLerp(road.getPoint(this.currentRoadIndex), road.getPoint(this.currentRoadIndex + 1), this.transform.position);
            while (currentProgress >= 1) {
                currentProgress -= 1;
                this.currentRoadIndex++;
                if (this.currentRoadIndex === road.getPointLength() - 1) {
                    this.currentRoadIndex = 0;
                    this.dynamic.velocity = types_1.Vector2.ZERO;
                    road.portList[0].appendAgent(this);
                    break;
                }
                currentProgress = currentProgress * types_1.Vector2.substract(road.getPoint(this.currentRoadIndex - 1), road.getPoint(this.currentRoadIndex)).magnitude / types_1.Vector2.substract(road.getPoint(this.currentRoadIndex), road.getPoint(this.currentRoadIndex + 1)).magnitude;
                if (currentProgress < 1) {
                    this.transform.position = types_1.Vector2.lerp(road.getPoint(this.currentRoadIndex), road.getPoint(this.currentRoadIndex + 1), currentProgress);
                    this.reset();
                }
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
        this.dynamic.velocity = types_1.Vector2.multiply(this.transform.forward(), 2.7);
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
        this.environment = environment;
        this.canvasDelegator = new drawer_1.CanvasDelegator(environment, element);
        this.running = true;
        this.interval = setInterval(function () {
            if (_this.running) {
                _this.onUpdate();
            }
        }, 10);
    }
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
        this.timeScale = 1;
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
        this.transform = new types_1.Transform(types_1.Vector2.ZERO, new types_1.Vector2(1, 1), 0);
        this._environment = environment;
    }
    Object.defineProperty(Unit.prototype, "name", {
        get: function () {
            return this._name;
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
        _this.portList = new Array();
        _this.transform.scale = new types_1.Vector2(20, 20);
        return _this;
    }
    /**
     * Agent 추가
     * @param agent
     */
    Facility.prototype.appendAgent = function (agent) {
        if (agent.currentFacility) {
            agent.currentFacility.removeAgent(agent);
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
                this.onAgentOut(agent);
                agent.currentFacility = null;
                break;
            }
        }
    };
    /**
     * 옆면 위치 구하기용
     * @param directrion 0: right, pi: left
     */
    Facility.prototype.getSidePosition = function (angle) {
        var vector = types_1.Vector2.add(this.transform.position, new types_1.Vector2(this.transform.scale.x / 2 * Math.cos(angle), this.transform.scale.y / 2 * Math.sin(angle)));
        return vector;
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
        _this.currentFacility = null;
        _this.componentList = new Array();
        return _this;
    }
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

/***/ "./src/pages/ts/widget.ts":
/*!********************************!*\
  !*** ./src/pages/ts/widget.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PropertyEditor = /** @class */ (function () {
    function PropertyEditor(model, element) {
        var _this = this;
        this.model = model;
        this.nameView = element.querySelector('#name-view');
        setInterval(function () {
            var unit = _this.model.renderer.canvasDelegator.focusedUnit;
            if (unit) {
                _this.nameView.innerText = unit.name;
                for (var key in unit) {
                    if (key != 'name') {
                        var value = unit[key];
                        if (typeof (value) === 'string') {
                            //console.log(key, value);
                        }
                    }
                }
            }
        }, PropertyEditor.REFRESH_DELAY);
    }
    PropertyEditor.REFRESH_DELAY = 5;
    return PropertyEditor;
}());
exports.PropertyEditor = PropertyEditor;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy9kcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RzL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy91bml0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVDOzs7Ozs7Ozs7Ozs7QUNBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyx3Q0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3RDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyx3Q0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsMENBQTBDLEVBQUU7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwrQkFBK0IsdUNBQXVDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOEJBQThCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDeFNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdDQUFTO0FBQy9CLGVBQWUsbUJBQU8sQ0FBQywwQ0FBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDN0JZO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLHNDQUFRO0FBQzdCLGlCQUFpQixtQkFBTyxDQUFDLDhDQUFZO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQywwQ0FBVTtBQUNqQyxjQUFjLG1CQUFPLENBQUMsd0NBQVM7QUFDL0Isa0JBQWtCLG1CQUFPLENBQUMsZ0RBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3YzQlk7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsMENBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsY0FBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNqR2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsd0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtCQUErQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzFLYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciBDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb21wb25lbnQoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcclxuLyoqXHJcbiAqIOyXre2VmSDqtIDroKgg7LKY66as66W8IOyImO2Wie2VmOuKlCDtgbTrnpjsiqRcclxuICovXHJcbnZhciBEeW5hbWljcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEeW5hbWljcywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIER5bmFtaWNzKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMudmVsb2NpdHkgPSB0eXBlc18xLlZlY3RvcjIuWkVSTztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBEeW5hbWljcy5wcm90b3R5cGUuZG8gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICB2YXIgZGVsdGFQb3NpdGlvbiA9IHR5cGVzXzEuVmVjdG9yMi5tdWx0aXBseShuZXcgdHlwZXNfMS5WZWN0b3IyKHRoaXMudmVsb2NpdHkueCwgdGhpcy52ZWxvY2l0eS55KSwgYWdlbnQuZW52aXJvbm1lbnQuZGVsdGFUaW1lKTtcclxuICAgICAgICBhZ2VudC50cmFuc2Zvcm0ucG9zaXRpb24gPSB0eXBlc18xLlZlY3RvcjIuYWRkKGFnZW50LnRyYW5zZm9ybS5wb3NpdGlvbiwgZGVsdGFQb3NpdGlvbik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIER5bmFtaWNzO1xyXG59KENvbXBvbmVudCkpO1xyXG5leHBvcnRzLkR5bmFtaWNzID0gRHluYW1pY3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG52YXIgQ2FudmFzRGVsZWdhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzRGVsZWdhdG9yKGVudmlyb25tZW50LCBlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhUG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHRoaXMuem9vbVNpemUgPSAxMDtcclxuICAgICAgICB0aGlzLnNldHVwRXZlbnQoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLCBcImNhbnZhc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYW52YXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZSwgXCJmb2N1c2VkVW5pdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb2N1c2VkVW5pdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogUGljdHVyZeydmCDsooXrpZjrpbwg67aE66WY7ZW07IScIOyggeygiO2eiCDqt7jrprxcclxuICAgICAqIEBwYXJhbSBwaWN0dXJlXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChwaWN0dXJlKSB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmUgaW5zdGFuY2VvZiBQYXRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BhdGgocGljdHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBpY3R1cmUgaW5zdGFuY2VvZiBGb250KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0ZvbnQocGljdHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBpY3R1cmUgaW5zdGFuY2VvZiBRdWFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1F1YWQocGljdHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBpY3R1cmUgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKHBpY3R1cmUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+ydmCDtgazquLAg7J6s7ISk7KCV6rO8IOqwgSB1bml065Ok7J2EIOugjOuNlOungVxyXG4gICAgICogQHBhcmFtIHVuaXRMaXN0XHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHVuaXRMaXN0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHVuaXRMaXN0LmZvckVhY2goZnVuY3Rpb24gKHVuaXQpIHtcclxuICAgICAgICAgICAgdW5pdC5yZW5kZXIoX3RoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRVbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1dpcmVmcmFtZSh0aGlzLmZvY3VzZWRVbml0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmFibGVHcmlkKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPsl5AgUGF0aOulvCDqt7jrprxcclxuICAgICAqIEBwYXJhbSBwYXRoXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd1BhdGggPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFN0eWxlID0gcGF0aC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHJva2VTdHlsZSA9IHBhdGguY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMubGluZVdpZHRoID0gcGF0aC53aWR0aCAqIHRoaXMuem9vbVNpemU7XHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgY29udmVydGVkU2NhbGUgPSB0aGlzLmNvbnZlcnRNZXRlclRvUGl4ZWwocGF0aC50cmFuc2Zvcm0uc2NhbGUpO1xyXG4gICAgICAgIGxldCBjb252ZXJ0ZWRQb3NpdGlvbiA9IHRoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24ocGF0aC50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvaW50TGlzdCA9IHBhdGgucG9pbnRMaXN0Lm1hcChmdW5jdGlvbiAocG9pbnQpIHsgcmV0dXJuIF90aGlzLmdldFJlYWxQaXhlbFBvc2l0aW9uKHBvaW50KTsgfSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMubW92ZVRvKGNvbnZlcnRlZFBvaW50TGlzdFswXS54LCBjb252ZXJ0ZWRQb2ludExpc3RbMF0ueSk7XHJcbiAgICAgICAgY29udmVydGVkUG9pbnRMaXN0LmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNhbnZhcy5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPsl5AgVGV4dOulvCDqt7jrprxcclxuICAgICAqIEBwYXJhbSBmb250XHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd0ZvbnQgPSBmdW5jdGlvbiAoZm9udCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmZpbGxTdHlsZSA9IGZvbnQuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZm9udCA9IGZvbnQgKyAncHgnO1xyXG4gICAgICAgIHZhciB0ZXh0TWF0cmljcyA9IHRoaXMuY2FudmFzLm1lYXN1cmVUZXh0KGZvbnQudGV4dCk7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFNjYWxlID0gbmV3IHR5cGVzXzEuVmVjdG9yMih0ZXh0TWF0cmljcy53aWR0aCwgZm9udC5zaXplKTtcclxuICAgICAgICB2YXIgdG1wUG9zaXRpb24gPSB0aGlzLmdldFJlYWxQaXhlbFBvc2l0aW9uKGZvbnQudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICB2YXIgY29udmVydGVkUG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKHRtcFBvc2l0aW9uLnggLSBjb252ZXJ0ZWRTY2FsZS54IC8gMiwgdG1wUG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFRleHQoZm9udC50ZXh0LCBjb252ZXJ0ZWRQb3NpdGlvbi54LCBjb252ZXJ0ZWRQb3NpdGlvbi55KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+yXkCDsgqzqsIHtmJXsnYQg6re466a8XHJcbiAgICAgKiBAcGFyYW0gY2lyY2xlXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd1F1YWQgPSBmdW5jdGlvbiAocXVhZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFN0eWxlID0gcXVhZC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHJva2VTdHlsZSA9IHF1YWQuY29sb3I7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFNjYWxlID0gdGhpcy5jb252ZXJ0TWV0ZXJUb1BpeGVsKHF1YWQudHJhbnNmb3JtLnNjYWxlKTtcclxuICAgICAgICB2YXIgY29udmVydGVkUG9zaXRpb24gPSB0aGlzLmdldFJlYWxQaXhlbFBvc2l0aW9uKHF1YWQudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICB2YXIgdGhldGExID0gTWF0aC5hdGFuMihjb252ZXJ0ZWRTY2FsZS54LCBjb252ZXJ0ZWRTY2FsZS55KTtcclxuICAgICAgICB2YXIgdGhldGEyID0gTWF0aC5QSSAtIHRoZXRhMTtcclxuICAgICAgICB2YXIgcmFkaXVzID0gY29udmVydGVkU2NhbGUueSAvIDIgLyBNYXRoLmNvcyh0aGV0YTEpO1xyXG4gICAgICAgIHZhciBwb2ludHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBwb2ludHMucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKGNvbnZlcnRlZFBvc2l0aW9uLnggKyByYWRpdXMgKiBNYXRoLmNvcyh0aGV0YTIgKyBxdWFkLnRyYW5zZm9ybS5yb3RhdGlvbiksIGNvbnZlcnRlZFBvc2l0aW9uLnkgLSByYWRpdXMgKiBNYXRoLnNpbih0aGV0YTIgKyBxdWFkLnRyYW5zZm9ybS5yb3RhdGlvbikpKTtcclxuICAgICAgICBwb2ludHMucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKGNvbnZlcnRlZFBvc2l0aW9uLnggKyByYWRpdXMgKiBNYXRoLmNvcygtdGhldGEyICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pLCBjb252ZXJ0ZWRQb3NpdGlvbi55IC0gcmFkaXVzICogTWF0aC5zaW4oLXRoZXRhMiArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSkpO1xyXG4gICAgICAgIHBvaW50cy5wdXNoKG5ldyB0eXBlc18xLlZlY3RvcjIoY29udmVydGVkUG9zaXRpb24ueCArIHJhZGl1cyAqIE1hdGguY29zKC10aGV0YTEgKyBxdWFkLnRyYW5zZm9ybS5yb3RhdGlvbiksIGNvbnZlcnRlZFBvc2l0aW9uLnkgLSByYWRpdXMgKiBNYXRoLnNpbigtdGhldGExICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pKSk7XHJcbiAgICAgICAgcG9pbnRzLnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMihjb252ZXJ0ZWRQb3NpdGlvbi54ICsgcmFkaXVzICogTWF0aC5jb3ModGhldGExICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pLCBjb252ZXJ0ZWRQb3NpdGlvbi55IC0gcmFkaXVzICogTWF0aC5zaW4odGhldGExICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pKSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMubW92ZVRvKHBvaW50c1szXS54LCBwb2ludHNbM10ueSk7XHJcbiAgICAgICAgcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNhbnZhcy5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHF1YWQuc3Ryb2tlV2lkdGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmxpbmVXaWR0aCA9IHF1YWQuc3Ryb2tlV2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+yXkCDsm5DsnYQg6re466a8XHJcbiAgICAgKiBAcGFyYW0gY2lyY2xlXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBjaXJjbGUuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3Ryb2tlU3R5bGUgPSBjaXJjbGUuY29sb3I7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvc2l0aW9uID0gdGhpcy5nZXRSZWFsUGl4ZWxQb3NpdGlvbihjaXJjbGUudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICB2YXIgY29udmVydGVkU2NhbGUgPSB0aGlzLmNvbnZlcnRNZXRlclRvUGl4ZWwoY2lyY2xlLnRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZWxsaXBzZTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5lbGxpcHNlKGNvbnZlcnRlZFBvc2l0aW9uLngsIGNvbnZlcnRlZFBvc2l0aW9uLnksIGNvbnZlcnRlZFNjYWxlLngsIGNvbnZlcnRlZFNjYWxlLnksIGNpcmNsZS50cmFuc2Zvcm0ucm90YXRpb24sIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBpZiAoY2lyY2xlLnN0cm9rZVdpZHRoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5saW5lV2lkdGggPSBjaXJjbGUuc3Ryb2tlV2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIO2VtOuLuSDsnKDri5vsnZgg7JmA7J207Ja07ZSE66CI7J6E7J2EIOq3uOumvFxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmRyYXdXaXJlZnJhbWUgPSBmdW5jdGlvbiAodW5pdCkge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IFF1YWQodW5pdC50cmFuc2Zvcm0sICdyZ2JhKDAsIDAsIDAsIDAuNSknKTtcclxuICAgICAgICBxdWFkLnN0cm9rZVdpZHRoID0gMTtcclxuICAgICAgICB0aGlzLmRyYXcocXVhZCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDrr7jthLDri6jsnITsnZggVmVjdG9y66W8IOyLpOygnCDqt7jroKTsp4ggUGl4ZWzri6jsnITroZwg67CU6r+U7KSMXHJcbiAgICAgKiBAcGFyYW0gdmV0b3JcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5jb252ZXJ0TWV0ZXJUb1BpeGVsID0gZnVuY3Rpb24gKHZldG9yKSB7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFZlY3RvciA9IHR5cGVzXzEuVmVjdG9yMi5tdWx0aXBseSh2ZXRvciwgdGhpcy56b29tU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZFZlY3RvcjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOuvuO2EsOuLqOychOydmCBwb3NpdGlvbiB2ZWN0b3Lrpbwg7Iuk7KCcIOq3uOugpOyniCBQaXhlbOychOy5mOuhnCDrsJTqv5TspIxcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmdldFJlYWxQaXhlbFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHJhdGlvID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAvIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgY2FtZXJhV2lkdGggPSB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGggLyB0aGlzLnpvb21TaXplO1xyXG4gICAgICAgIHZhciBjYW1lcmFIZWlnaHQgPSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gdGhpcy56b29tU2l6ZTtcclxuICAgICAgICB2YXIgY29udmVydGVkVmVjdG9yID0gbmV3IHR5cGVzXzEuVmVjdG9yMih0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGggLyAyLCB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdmFyIGRlbHRhVmVjdG9yID0gdGhpcy5jb252ZXJ0TWV0ZXJUb1BpeGVsKHR5cGVzXzEuVmVjdG9yMi5zdWJzdHJhY3QocG9zaXRpb24sIHRoaXMuY2FtZXJhUG9zaXRpb24pKTtcclxuICAgICAgICBkZWx0YVZlY3Rvci55ID0gLWRlbHRhVmVjdG9yLnk7XHJcbiAgICAgICAgY29udmVydGVkVmVjdG9yID0gdHlwZXNfMS5WZWN0b3IyLmFkZChjb252ZXJ0ZWRWZWN0b3IsIGRlbHRhVmVjdG9yKTtcclxuICAgICAgICByZXR1cm4gY29udmVydGVkVmVjdG9yO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6rKp7J6QIO2ZnOyEse2ZlFxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmVuYWJsZUdyaWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IG4gPSAxMDtcclxuICAgICAgICBsZXQgc21hbGxVbml0ID0gMTtcclxuICAgICAgICBsZXQgYmlnVW5pdCA9IHNtYWxsVW5pdCAqIDEwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gLTEwMDsgeCA8PSAxMDA7IHggKz0gc21hbGxVbml0KSB7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gbmV3IFBhdGgobmV3IFRyYW5zZm9ybShWZWN0b3IyLlpFUk8sIFZlY3RvcjIuWkVSTyksICdyZ2JhKDAsIDAsIDAsIDAuMSknKTtcclxuICAgICAgICAgICAgcGF0aC5wb2ludExpc3QucHVzaChuZXcgVmVjdG9yMih4LCAtMTAwKSk7XHJcbiAgICAgICAgICAgIHBhdGgucG9pbnRMaXN0LnB1c2gobmV3IFZlY3RvcjIoeCwgKzEwMCkpO1xyXG4gICAgICAgICAgICBwYXRoLndpZHRoID0gMSAvIHRoaXMuem9vbVNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BhdGgocGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBlbGVtZW507JeQIOuMgO2VnCDsnbTrsqTtirgg7ISk7KCVXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuc2V0dXBFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnpvb21TaXplIC09IGUuZGVsdGFZIC8gTWF0aC5hYnMoZS5kZWx0YVkpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuem9vbVNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuem9vbVNpemUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbnMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNhbWVyYVBvc2l0aW9uID0gdHlwZXNfMS5WZWN0b3IyLnN1YnN0cmFjdChfdGhpcy5jYW1lcmFQb3NpdGlvbiwgbmV3IHR5cGVzXzEuVmVjdG9yMihlLm1vdmVtZW50WCAvIF90aGlzLnpvb21TaXplLCAtZS5tb3ZlbWVudFkgLyBfdGhpcy56b29tU2l6ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy5lbnZpcm9ubWVudC51bml0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1bml0ID0gX3RoaXMuZW52aXJvbm1lbnQudW5pdExpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnZlcnRlZFBvc2l0aW9uID0gX3RoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24odW5pdC50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb252ZXJ0ZWRTY2FsZSA9IF90aGlzLmNvbnZlcnRNZXRlclRvUGl4ZWwodW5pdC50cmFuc2Zvcm0uc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm9mZnNldFggPiBjb252ZXJ0ZWRQb3NpdGlvbi54IC0gY29udmVydGVkU2NhbGUueSAvIDIgJiYgZS5vZmZzZXRYIDwgY29udmVydGVkUG9zaXRpb24ueCArIGNvbnZlcnRlZFNjYWxlLnkgLyAyICYmIGUub2Zmc2V0WSA+IGNvbnZlcnRlZFBvc2l0aW9uLnkgLSBjb252ZXJ0ZWRTY2FsZS54IC8gMiAmJiBlLm9mZnNldFkgPCBjb252ZXJ0ZWRQb3NpdGlvbi55ICsgY29udmVydGVkU2NhbGUueCAvIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2ZvY3VzZWRVbml0ID0gdW5pdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzRGVsZWdhdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLkNhbnZhc0RlbGVnYXRvciA9IENhbnZhc0RlbGVnYXRvcjtcclxudmFyIFBpY3R1cmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQaWN0dXJlKHRyYW5zZm9ybSwgY29sb3IpIHtcclxuICAgICAgICBpZiAoY29sb3IgPT09IHZvaWQgMCkgeyBjb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknOyB9XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBpY3R1cmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUGljdHVyZSA9IFBpY3R1cmU7XHJcbnZhciBTaGFwZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTaGFwZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNoYXBlKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnN0cm9rZVdpZHRoID0gMDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU2hhcGU7XHJcbn0oUGljdHVyZSkpO1xyXG5leHBvcnRzLlNoYXBlID0gU2hhcGU7XHJcbnZhciBGb250ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZvbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGb250KHRyYW5zZm9ybSwgY29sb3IpIHtcclxuICAgICAgICBpZiAoY29sb3IgPT09IHZvaWQgMCkgeyBjb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDEpJzsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRyYW5zZm9ybSwgY29sb3IpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuc2l6ZSA9IDI0O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGb250O1xyXG59KFBpY3R1cmUpKTtcclxuZXhwb3J0cy5Gb250ID0gRm9udDtcclxudmFyIFBhdGggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGF0aCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFBhdGgodHJhbnNmb3JtLCBjb2xvcikge1xyXG4gICAgICAgIGlmIChjb2xvciA9PT0gdm9pZCAwKSB7IGNvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMSknOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHJhbnNmb3JtLCBjb2xvcikgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb2ludExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBfdGhpcy53aWR0aCA9IDE7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBhdGg7XHJcbn0oU2hhcGUpKTtcclxuZXhwb3J0cy5QYXRoID0gUGF0aDtcclxudmFyIFF1YWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUXVhZCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFF1YWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFF1YWQ7XHJcbn0oU2hhcGUpKTtcclxuZXhwb3J0cy5RdWFkID0gUXVhZDtcclxudmFyIENpcmNsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDaXJjbGUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDaXJjbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENpcmNsZTtcclxufShTaGFwZSkpO1xyXG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG1vZGVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbFwiKTtcclxudmFyIHdpZGdldF8xID0gcmVxdWlyZShcIi4vd2lkZ2V0XCIpO1xyXG52YXIgbW9kZWwgPSBuZXcgbW9kZWxfMS5Nb2RlbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2ltdWxhdGlvbi12aWV3JykpO1xyXG52YXIgcHJvcGVydHlFZGl0b3IgPSBuZXcgd2lkZ2V0XzEuUHJvcGVydHlFZGl0b3IobW9kZWwsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9wZXJ0eS1lZGl0b3InKSk7XHJcbi8qXHJcbmNsYXNzIEEge1xyXG4gICAgcHJpdmF0ZSBfYTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGEoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGEgPSBuZXcgQSgpO1xyXG5sZXQgaSA9IDQ7XHJcblxyXG5mb3IgKGxldCB4IGluIGEpIHtcclxuICAgIGNvbnNvbGUubG9nKHgsIHR5cGVvZihhW3hdKSwgYVt4XSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGFbeF0gPSBpKys7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coKDxFcnJvcj4gZSkubmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvciAobGV0IHggaW4gYSkge1xyXG4gICAgY29uc29sZS5sb2coeCwgdHlwZW9mKGFbeF0pLCBhW3hdKTtcclxufSovIFxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHVuaXRfMSA9IHJlcXVpcmUoXCIuL3VuaXRcIik7XHJcbnZhciByZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyZXJcIik7XHJcbnZhciBkcmF3ZXJfMSA9IHJlcXVpcmUoXCIuL2RyYXdlclwiKTtcclxudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50XCIpO1xyXG52YXIgTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNb2RlbChlbGVtZWh0KSB7XHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IG5ldyB1bml0XzEuRW52aXJvbm1lbnQoKTtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50LnRpbWVTY2FsZSA9IDEwMDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IHJlbmRlcmVyXzEuUmVuZGVyZXIodGhpcy5lbnZpcm9ubWVudCwgZWxlbWVodCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gICAgTW9kZWwucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudHJ1Y2tHZW5lcmF0b3IgPSBuZXcgVHJ1Y2tHZW5lcmF0b3IodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy50cnVja0dlbmVyYXRvci50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKC0yMCwgMCk7XHJcbiAgICAgICAgdGhpcy50cnVja0Rlc3RpbmF0aW9uID0gbmV3IFRydWNrRGVzdGluYXRpb24odGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy50cnVja0Rlc3RpbmF0aW9uLnRyYW5zZm9ybS5wb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgdGhpcy53YXRpbmdQbGFjZSA9IG5ldyBXYWl0aW5nUGxhY2UodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy53YXRpbmdQbGFjZS50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDEwMCwgMCk7XHJcbiAgICAgICAgdGhpcy5pbkdhdGV3YXkgPSBuZXcgSW5HYXRld2F5KHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHRoaXMuaW5HYXRld2F5LnRyYW5zZm9ybS5wb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoMjAwLCAwKTtcclxuICAgICAgICB0aGlzLmxpbmVyUHJlcGFyYXRpb25QbGFjZSA9IG5ldyBTZWFidWxrVHJ1Y2tMaW5lclByZXBhcmF0aW9uUGxhY2UodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy5saW5lclByZXBhcmF0aW9uUGxhY2UudHJhbnNmb3JtLnBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMigzMDAsIDUwKTtcclxuICAgICAgICB0aGlzLndlaWdodE1lc2F1cmVtZW50UGxhY2UxID0gbmV3IFdlaWdodE1lc2F1cmVtZW50UGxhY2UodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMS50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDQwMCwgMCk7XHJcbiAgICAgICAgdGhpcy5idWxrUHJvZHVjdExvYWRpbmdQbGFjZSA9IG5ldyBCdWxrUHJvZHVjdExvYWRpbmdQbGFjZSh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB0aGlzLmJ1bGtQcm9kdWN0TG9hZGluZ1BsYWNlLnRyYW5zZm9ybS5wb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoNTAwLCAwKTtcclxuICAgICAgICB0aGlzLmRvY2tQcm9kdWN0TG9hZGluZ1BsYWNlID0gbmV3IERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHRoaXMuZG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2UudHJhbnNmb3JtLnBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMig1MDAsIC01MCk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMiA9IG5ldyBXZWlnaHRNZXNhdXJlbWVudFBsYWNlKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0TWVzYXVyZW1lbnRQbGFjZTIudHJhbnNmb3JtLnBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMig2MDAsIDApO1xyXG4gICAgICAgIHRoaXMub3V0R2F0ZXdheSA9IG5ldyBPdXRHYXRld2F5KHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHRoaXMub3V0R2F0ZXdheS50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDcwMCwgMCk7XHJcbiAgICAgICAgdGhpcy5leHRlcm5hbERlc3RpbmF0aW9uID0gbmV3IEV4dGVybmFsRGVzdGluYXRpb24odGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy5leHRlcm5hbERlc3RpbmF0aW9uLnRyYW5zZm9ybS5wb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoODAwLCAwKTtcclxuICAgICAgICAvLyDtirjrn60g64+E7LCp7KeAIC0+IOuMgOq4sOyLpFxyXG4gICAgICAgIHZhciB0ZDJ3cCA9IG5ldyBSb2FkKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGQyd3AuYWRkUG9pbnQodGhpcy50cnVja0Rlc3RpbmF0aW9uLmdldFNpZGVQb3NpdGlvbigwKSk7XHJcbiAgICAgICAgICAgIHRkMndwLmFkZFBvaW50KHRoaXMud2F0aW5nUGxhY2UuZ2V0U2lkZVBvc2l0aW9uKE1hdGguUEkpKTtcclxuICAgICAgICAgICAgdGQyd3AucG9ydExpc3QucHVzaCh0aGlzLndhdGluZ1BsYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g64yA6riw7IukIC0+IOqyjOydtO2KuOybqOydtFxyXG4gICAgICAgIHZhciB3cDJpZyA9IG5ldyBSb2FkKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd3AyaWcuYWRkUG9pbnQodGhpcy53YXRpbmdQbGFjZS5nZXRTaWRlUG9zaXRpb24oMCkpO1xyXG4gICAgICAgICAgICB3cDJpZy5hZGRQb2ludCh0aGlzLmluR2F0ZXdheS5nZXRTaWRlUG9zaXRpb24oTWF0aC5QSSkpO1xyXG4gICAgICAgICAgICB3cDJpZy5wb3J0TGlzdC5wdXNoKHRoaXMuaW5HYXRld2F5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6rKM7J207Yq47Juo7J20IC0+IOuyjO2BrOyaqSDrrLTqsowg7Lih7KCV7IukMVxyXG4gICAgICAgIHZhciBpZzJ3bXAxID0gbmV3IFJvYWQodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZzJ3bXAxLmFkZFBvaW50KHRoaXMuaW5HYXRld2F5LmdldFNpZGVQb3NpdGlvbigwKSk7XHJcbiAgICAgICAgICAgIGlnMndtcDEuYWRkUG9pbnQodGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMS5nZXRTaWRlUG9zaXRpb24oTWF0aC5QSSkpO1xyXG4gICAgICAgICAgICBpZzJ3bXAxLnBvcnRMaXN0LnB1c2godGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOuyjO2BrOyaqSDrrLTqsowg7Lih7KCV7IukMSAtPiDrsoztgawg7KCc7ZKIIOyggeyerOyLpFxyXG4gICAgICAgIHZhciB3bXAxMmJwbHAgPSBuZXcgUm9hZCh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdtcDEyYnBscC5hZGRQb2ludCh0aGlzLndlaWdodE1lc2F1cmVtZW50UGxhY2UxLmdldFNpZGVQb3NpdGlvbigwKSk7XHJcbiAgICAgICAgICAgIHdtcDEyYnBscC5hZGRQb2ludCh0aGlzLmJ1bGtQcm9kdWN0TG9hZGluZ1BsYWNlLmdldFNpZGVQb3NpdGlvbihNYXRoLlBJKSk7XHJcbiAgICAgICAgICAgIHdtcDEyYnBscC5wb3J0TGlzdC5wdXNoKHRoaXMuYnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDrsoztgawg7KCc7ZKIIOyggeyerOyLpCAtPiDrsoztgazsmqkg66y06rKMIOy4oeygleyLpDJcclxuICAgICAgICB2YXIgYnBscDJ3bXAyID0gbmV3IFJvYWQodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicGxwMndtcDIuYWRkUG9pbnQodGhpcy5idWxrUHJvZHVjdExvYWRpbmdQbGFjZS5nZXRTaWRlUG9zaXRpb24oMCkpO1xyXG4gICAgICAgICAgICBicGxwMndtcDIuYWRkUG9pbnQodGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMi5nZXRTaWRlUG9zaXRpb24oTWF0aC5QSSkpO1xyXG4gICAgICAgICAgICBicGxwMndtcDIucG9ydExpc3QucHVzaCh0aGlzLndlaWdodE1lc2F1cmVtZW50UGxhY2UyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g67KM7YGs7JqpIOustOqyjCDsuKHsoJXsi6QyIC0+IOy2nOq1rCDqsozsnbTtirjsm6jsnbRcclxuICAgICAgICB2YXIgd21wMjJvZyA9IG5ldyBSb2FkKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd21wMjJvZy5hZGRQb2ludCh0aGlzLndlaWdodE1lc2F1cmVtZW50UGxhY2UyLmdldFNpZGVQb3NpdGlvbigwKSk7XHJcbiAgICAgICAgICAgIHdtcDIyb2cuYWRkUG9pbnQodGhpcy5vdXRHYXRld2F5LmdldFNpZGVQb3NpdGlvbihNYXRoLlBJKSk7XHJcbiAgICAgICAgICAgIHdtcDIyb2cucG9ydExpc3QucHVzaCh0aGlzLm91dEdhdGV3YXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDstpzqtawg6rKM7J207Yq47Juo7J20IC0+IOyZuOu2gCDrqqnsoIHsp4BcclxuICAgICAgICB2YXIgb2cyZWQgPSBuZXcgUm9hZCh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9nMmVkLmFkZFBvaW50KHRoaXMub3V0R2F0ZXdheS5nZXRTaWRlUG9zaXRpb24oMCkpO1xyXG4gICAgICAgICAgICBvZzJlZC5hZGRQb2ludCh0aGlzLmV4dGVybmFsRGVzdGluYXRpb24uZ2V0U2lkZVBvc2l0aW9uKE1hdGguUEkpKTtcclxuICAgICAgICAgICAgb2cyZWQucG9ydExpc3QucHVzaCh0aGlzLmV4dGVybmFsRGVzdGluYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDqsozsnbTtirjsm6jsnbQgLT4g7JSo67KM7YGs7JqpIOudvOydtOuEiCDspIDruYTsi6RcclxuICAgICAgICB2YXIgaWcybHBwID0gbmV3IFJvYWQodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdG1wMSA9IHR5cGVzXzEuVmVjdG9yMi5hZGQodGhpcy5pbkdhdGV3YXkuZ2V0U2lkZVBvc2l0aW9uKDApLCBuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIDMpKTtcclxuICAgICAgICAgICAgdmFyIHRtcDIgPSB0aGlzLmxpbmVyUHJlcGFyYXRpb25QbGFjZS5nZXRTaWRlUG9zaXRpb24oTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHZhciB0bXAzID0gdHlwZXNfMS5WZWN0b3IyLnN1YnN0cmFjdCh0bXAyLCB0bXAxKTtcclxuICAgICAgICAgICAgaWcybHBwLmFkZFBvaW50KHRtcDEpO1xyXG4gICAgICAgICAgICBpZzJscHAuYWRkUG9pbnQobmV3IHR5cGVzXzEuVmVjdG9yMih0bXAxLnggKyB0bXAzLnggLyAzLCB0bXAxLnkpKTtcclxuICAgICAgICAgICAgaWcybHBwLmFkZFBvaW50KG5ldyB0eXBlc18xLlZlY3RvcjIodG1wMS54ICsgdG1wMy54IC8gMyAqIDIsIHRtcDIueSkpO1xyXG4gICAgICAgICAgICBpZzJscHAuYWRkUG9pbnQodG1wMik7XHJcbiAgICAgICAgICAgIGlnMmxwcC5wb3J0TGlzdC5wdXNoKHRoaXMubGluZXJQcmVwYXJhdGlvblBsYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g7JSo67KM7YGs7JqpIOudvOydtOuEiCDspIDruYTsi6QgLT4g67KM7YGs7JqpIOustOqyjCDsuKHsoJXsi6QxXHJcbiAgICAgICAgdmFyIGxwcDJ3bXAxID0gbmV3IFJvYWQodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdG1wMSA9IHRoaXMubGluZXJQcmVwYXJhdGlvblBsYWNlLmdldFNpZGVQb3NpdGlvbigwKTtcclxuICAgICAgICAgICAgdmFyIHRtcDIgPSB0eXBlc18xLlZlY3RvcjIuYWRkKHRoaXMud2VpZ2h0TWVzYXVyZW1lbnRQbGFjZTEuZ2V0U2lkZVBvc2l0aW9uKE1hdGguUEkpLCBuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIDMpKTtcclxuICAgICAgICAgICAgdmFyIHRtcDMgPSB0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KHRtcDIsIHRtcDEpO1xyXG4gICAgICAgICAgICBscHAyd21wMS5hZGRQb2ludCh0bXAxKTtcclxuICAgICAgICAgICAgbHBwMndtcDEuYWRkUG9pbnQobmV3IHR5cGVzXzEuVmVjdG9yMih0bXAxLnggKyB0bXAzLnggLyAzLCB0bXAxLnkpKTtcclxuICAgICAgICAgICAgbHBwMndtcDEuYWRkUG9pbnQobmV3IHR5cGVzXzEuVmVjdG9yMih0bXAxLnggKyB0bXAzLnggLyAzICogMiwgdG1wMi55KSk7XHJcbiAgICAgICAgICAgIGxwcDJ3bXAxLmFkZFBvaW50KHRtcDIpO1xyXG4gICAgICAgICAgICBscHAyd21wMS5wb3J0TGlzdC5wdXNoKHRoaXMud2VpZ2h0TWVzYXVyZW1lbnRQbGFjZTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDsnoXqtawg6rKM7J207Yq47Juo7J20IC0+IOuPhO2BrOyaqSDsoJztkogg7KCB7J6s7IukXHJcbiAgICAgICAgdmFyIGlnMmRwbHAgPSBuZXcgUm9hZCh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB0bXAxID0gdHlwZXNfMS5WZWN0b3IyLmFkZCh0aGlzLmluR2F0ZXdheS5nZXRTaWRlUG9zaXRpb24oMCksIG5ldyB0eXBlc18xLlZlY3RvcjIoMCwgLTMpKTtcclxuICAgICAgICAgICAgdmFyIHRtcDIgPSB0aGlzLmRvY2tQcm9kdWN0TG9hZGluZ1BsYWNlLmdldFNpZGVQb3NpdGlvbihNYXRoLlBJKTtcclxuICAgICAgICAgICAgdmFyIHRtcDMgPSB0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KHRtcDIsIHRtcDEpO1xyXG4gICAgICAgICAgICBpZzJkcGxwLmFkZFBvaW50KHRtcDEpO1xyXG4gICAgICAgICAgICBpZzJkcGxwLmFkZFBvaW50KG5ldyB0eXBlc18xLlZlY3RvcjIodG1wMS54ICsgdG1wMy54IC8gMywgdG1wMS55KSk7XHJcbiAgICAgICAgICAgIGlnMmRwbHAuYWRkUG9pbnQobmV3IHR5cGVzXzEuVmVjdG9yMih0bXAxLnggKyB0bXAzLnggLyAzICogMiwgdG1wMi55KSk7XHJcbiAgICAgICAgICAgIGlnMmRwbHAuYWRkUG9pbnQodG1wMik7XHJcbiAgICAgICAgICAgIGlnMmRwbHAucG9ydExpc3QucHVzaCh0aGlzLmRvY2tQcm9kdWN0TG9hZGluZ1BsYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g64+E7YGs7JqpIOygnO2SiCDsoIHsnqzsi6QgLT4g7Lac6rWsIOqyjOydtO2KuOybqOydtFxyXG4gICAgICAgIHZhciBkcGxwMm9nID0gbmV3IFJvYWQodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdG1wMSA9IHRoaXMuZG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2UuZ2V0U2lkZVBvc2l0aW9uKDApO1xyXG4gICAgICAgICAgICB2YXIgdG1wMiA9IHR5cGVzXzEuVmVjdG9yMi5hZGQodGhpcy5vdXRHYXRld2F5LmdldFNpZGVQb3NpdGlvbihNYXRoLlBJKSwgbmV3IHR5cGVzXzEuVmVjdG9yMigwLCAtMykpO1xyXG4gICAgICAgICAgICB2YXIgdG1wMyA9IHR5cGVzXzEuVmVjdG9yMi5zdWJzdHJhY3QodG1wMiwgdG1wMSk7XHJcbiAgICAgICAgICAgIGRwbHAyb2cuYWRkUG9pbnQodG1wMSk7XHJcbiAgICAgICAgICAgIGRwbHAyb2cuYWRkUG9pbnQobmV3IHR5cGVzXzEuVmVjdG9yMih0bXAxLnggKyB0bXAzLnggLyAzLCB0bXAxLnkpKTtcclxuICAgICAgICAgICAgZHBscDJvZy5hZGRQb2ludChuZXcgdHlwZXNfMS5WZWN0b3IyKHRtcDEueCArIHRtcDMueCAvIDMgKiAyLCB0bXAyLnkpKTtcclxuICAgICAgICAgICAgZHBscDJvZy5hZGRQb2ludCh0bXAyKTtcclxuICAgICAgICAgICAgZHBscDJvZy5wb3J0TGlzdC5wdXNoKHRoaXMub3V0R2F0ZXdheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJ1Y2tHZW5lcmF0b3IucG9ydExpc3QucHVzaCh0aGlzLnRydWNrRGVzdGluYXRpb24pO1xyXG4gICAgICAgIHRoaXMudHJ1Y2tEZXN0aW5hdGlvbi5wb3J0TGlzdC5wdXNoKHRkMndwKTtcclxuICAgICAgICB0aGlzLndhdGluZ1BsYWNlLnBvcnRMaXN0LnB1c2god3AyaWcpO1xyXG4gICAgICAgIHRoaXMuaW5HYXRld2F5LnBvcnRMaXN0LnB1c2goaWcybHBwKTtcclxuICAgICAgICB0aGlzLmluR2F0ZXdheS5wb3J0TGlzdC5wdXNoKGlnMndtcDEpO1xyXG4gICAgICAgIHRoaXMuaW5HYXRld2F5LnBvcnRMaXN0LnB1c2goaWcyZHBscCk7XHJcbiAgICAgICAgdGhpcy5saW5lclByZXBhcmF0aW9uUGxhY2UucG9ydExpc3QucHVzaChscHAyd21wMSk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMS5wb3J0TGlzdC5wdXNoKHdtcDEyYnBscCk7XHJcbiAgICAgICAgdGhpcy5idWxrUHJvZHVjdExvYWRpbmdQbGFjZS5wb3J0TGlzdC5wdXNoKGJwbHAyd21wMik7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMi5wb3J0TGlzdC5wdXNoKHdtcDIyb2cpO1xyXG4gICAgICAgIHRoaXMuZG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2UucG9ydExpc3QucHVzaChkcGxwMm9nKTtcclxuICAgICAgICB0aGlzLm91dEdhdGV3YXkucG9ydExpc3QucHVzaChvZzJlZCk7XHJcbiAgICAgICAgdGhpcy50cnVja0dlbmVyYXRvci5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMudHJ1Y2tEZXN0aW5hdGlvbi5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMud2F0aW5nUGxhY2UucmVnaXN0ZXIoKTtcclxuICAgICAgICB0aGlzLmluR2F0ZXdheS5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMubGluZXJQcmVwYXJhdGlvblBsYWNlLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMS5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMuYnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UucmVnaXN0ZXIoKTtcclxuICAgICAgICB0aGlzLmRvY2tQcm9kdWN0TG9hZGluZ1BsYWNlLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMi5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMub3V0R2F0ZXdheS5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMuZXh0ZXJuYWxEZXN0aW5hdGlvbi5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRkMndwLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgd3AyaWcucmVnaXN0ZXIoKTtcclxuICAgICAgICBpZzJ3bXAxLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgd21wMTJicGxwLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgYnBscDJ3bXAyLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgd21wMjJvZy5yZWdpc3RlcigpO1xyXG4gICAgICAgIG9nMmVkLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgaWcybHBwLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgbHBwMndtcDEucmVnaXN0ZXIoKTtcclxuICAgICAgICBpZzJkcGxwLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgZHBscDJvZy5yZWdpc3RlcigpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Nb2RlbCA9IE1vZGVsO1xyXG4vKipcclxuICog7Yq465+t7J20IOyngOuCmOuLpOuLkCDquLhcclxuICovXHJcbnZhciBSb2FkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJvYWQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSb2FkKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZm9yd2FyZExhbmVDb3VudCA9IDE7XHJcbiAgICAgICAgX3RoaXMuYmFja3dhcmRMYW5lQ291bnQgPSAxO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ1JvYWQnO1xyXG4gICAgICAgIF90aGlzLnBvaW50TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIF90aGlzLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIoUm9hZC5MQU5FX1dJRFRILCBSb2FkLkxBTkVfV0lEVEgpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFJvYWQucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIGFnZW50LnRyYW5zZm9ybS5wb3NpdGlvbiA9IHRoaXMucG9pbnRMaXN0WzBdO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFJvYWQucHJvdG90eXBlLm9uQWdlbnRPdXQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBSb2FkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHBhdGggPSBuZXcgZHJhd2VyXzEuUGF0aCh0aGlzLnRyYW5zZm9ybSwgJ3JnYmEoMTI4LCAyNTUsIDI1NSwgMC40KScpO1xyXG4gICAgICAgIHBhdGgud2lkdGggPSBSb2FkLkxBTkVfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5wb2ludExpc3QuZm9yRWFjaChmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICAgICAgcGF0aC5wb2ludExpc3QucHVzaChwb2ludCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocGF0aCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgUm9hZC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBSb2FkLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIHBvaW50IOy2lOqwgFxyXG4gICAgICogQHBhcmFtIHBvaW50XHJcbiAgICAgKi9cclxuICAgIFJvYWQucHJvdG90eXBlLmFkZFBvaW50ID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludExpc3QucHVzaChwb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIG1pblggPSBwb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciBtaW5ZID0gcG9zaXRpb24ueTtcclxuICAgICAgICB2YXIgbWF4WCA9IHBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIG1heFkgPSBwb3NpdGlvbi55O1xyXG4gICAgICAgIHRoaXMucG9pbnRMaXN0LmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgICAgIGlmIChwb2ludC54IDwgbWluWCkge1xyXG4gICAgICAgICAgICAgICAgbWluWCA9IHBvaW50Lng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvaW50LnggPiBtYXhYKSB7XHJcbiAgICAgICAgICAgICAgICBtYXhYID0gcG9pbnQueDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9pbnQueSA8IG1pblkpIHtcclxuICAgICAgICAgICAgICAgIG1pblkgPSBwb2ludC55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb2ludC55ID4gbWF4WSkge1xyXG4gICAgICAgICAgICAgICAgbWF4WSA9IHBvaW50Lnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbGJQb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIobWluWCwgbWluWSk7XHJcbiAgICAgICAgdmFyIHJ0UG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKG1heFgsIG1heFkpO1xyXG4gICAgICAgIHZhciB0bXAgPSB0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KHJ0UG9zaXRpb24sIGxiUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uID0gdHlwZXNfMS5WZWN0b3IyLmFkZChsYlBvc2l0aW9uLCB0eXBlc18xLlZlY3RvcjIuZGl2aXNpb24odG1wLCAyKSk7XHJcbiAgICAgICAgaWYgKHRtcC54ID4gUm9hZC5MQU5FX1dJRFRIKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlLnkgPSB0bXAueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRtcC55ID4gUm9hZC5MQU5FX1dJRFRIKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnNjYWxlLnggPSB0bXAueTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwb2ludCDrsJjtmZhcclxuICAgICAqIEBwYXJhbSBpbmRleFxyXG4gICAgICovXHJcbiAgICBSb2FkLnByb3RvdHlwZS5nZXRQb2ludCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50TGlzdFtpbmRleF07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBwb2ludCDqsK/siJgg67CY7ZmYXHJcbiAgICAgKiBAcGFyYW0gaW5kZXhcclxuICAgICAqL1xyXG4gICAgUm9hZC5wcm90b3R5cGUuZ2V0UG9pbnRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnRMaXN0Lmxlbmd0aDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIO2VtOuLuSDquLjsnZgg6rCB64+EIOuwmO2ZmFxyXG4gICAgICogQHBhcmFtIGluZGV4XHJcbiAgICAgKi9cclxuICAgIFJvYWQucHJvdG90eXBlLmdldFJvYWRBbmdsZSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvaW50TGlzdC5sZW5ndGggPD0gaW5kZXggKyAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnBvaW50TGlzdFtpbmRleCArIDFdLnkgLSB0aGlzLnBvaW50TGlzdFtpbmRleF0ueSwgdGhpcy5wb2ludExpc3RbaW5kZXggKyAxXS54IC0gdGhpcy5wb2ludExpc3RbaW5kZXhdLngpO1xyXG4gICAgfTtcclxuICAgIFJvYWQuTEFORV9XSURUSCA9IDI7XHJcbiAgICByZXR1cm4gUm9hZDtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxuLyoqXHJcbiAqIO2KuOufrSDrj4TssKnsp4DroZwg65Ok7Ja07JisIO2KuOufreuTpOydhCDsg53shLHtlZjripQg7J6l7IaMXHJcbiAqL1xyXG52YXIgVHJ1Y2tHZW5lcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVHJ1Y2tHZW5lcmF0b3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUcnVja0dlbmVyYXRvcihlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ1RydWNrR2VuZXJhdG9yJztcclxuICAgICAgICBfdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBfdGhpcy5uZXh0VHJ1Y2tJbmRleCA9IDA7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tHZW5lcmF0b3IucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrR2VuZXJhdG9yLnByb3RvdHlwZS5vbkFnZW50T3V0ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tHZW5lcmF0b3IucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgY2lyY2xlID0gbmV3IGRyYXdlcl8xLkNpcmNsZSh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcoY2lyY2xlKTtcclxuICAgICAgICB2YXIgZm9udCA9IG5ldyBkcmF3ZXJfMS5Gb250KHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBmb250LnRleHQgPSAn7Yq465+tIOyDneyEseq4sCc7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcoZm9udCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tHZW5lcmF0b3IucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0uc2NhbGUgPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDEsIDEpO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IHRydWNrID0gbmV3IERvY2tUcnVjayh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB0cnVjay5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMucG9ydExpc3RbMF0uYXBwZW5kQWdlbnQodHJ1Y2spO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjI7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGltZURhdGEgPSBuZXcgdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhKE1hdGgucmFuZG9tKCkgKiA3MjAwMDAsIHR5cGVzXzEuVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1NFQV9CVUxLKTtcclxuICAgICAgICAgICAgdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3QucHVzaCh0aW1lRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzA7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGltZURhdGEgPSBuZXcgdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhKE1hdGgucmFuZG9tKCkgKiA3MjAwMDAsIHR5cGVzXzEuVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1RBTktfQlVMSyk7XHJcbiAgICAgICAgICAgIHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0LnB1c2godGltZURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM1ODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lRGF0YSA9IG5ldyB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEoTWF0aC5yYW5kb20oKSAqIDcyMDAwMCwgdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfRE9LRSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0LnB1c2godGltZURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdCA9IHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEudGltZSAtIGIudGltZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dFRydWNrSW5kZXggPCB0aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIG5leHRUcnVja0Fycml2YWxUaW1lRGF0YSA9IHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0W3RoaXMubmV4dFRydWNrSW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAobmV4dFRydWNrQXJyaXZhbFRpbWVEYXRhLnRpbWUgPCB0aGlzLmVudmlyb25tZW50LmVsYXBzZWRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJ1Y2sgPSB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dFRydWNrQXJyaXZhbFRpbWVEYXRhLmtpbmQgPT0gdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfU0VBX0JVTEspIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnVjayA9IG5ldyBTZWFCdWxrVHJ1Y2sodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEua2luZCA9PSB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9UQU5LX0JVTEspIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnVjayA9IG5ldyBUYW5rQnVsa1RydWNrKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dFRydWNrQXJyaXZhbFRpbWVEYXRhLmtpbmQgPT0gdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfRE9LRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRydWNrID0gbmV3IERvY2tUcnVjayh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRydWNrLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcnRMaXN0WzBdLmFwcGVuZEFnZW50KHRydWNrKTtcclxuICAgICAgICAgICAgICAgIG5leHRUcnVja0Fycml2YWxUaW1lRGF0YS5pc0Fycml2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VHJ1Y2tJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBUcnVja0dlbmVyYXRvcjtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxuLyoqXHJcbiAqIO2KuOufrSDrj4TssKnsp4BcclxuICovXHJcbnZhciBUcnVja0Rlc3RpbmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRydWNrRGVzdGluYXRpb24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUcnVja0Rlc3RpbmF0aW9uKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnVHJ1Y2tEZXN0aW5hdGlvbic7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrRGVzdGluYXRpb24ucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIHZhciByYW5kb21EZWx0YVBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMihNYXRoLnJhbmRvbSgpICogdGhpcy50cmFuc2Zvcm0uc2NhbGUueCAtIHRoaXMudHJhbnNmb3JtLnNjYWxlLnggLyAyLCBNYXRoLnJhbmRvbSgpICogdGhpcy50cmFuc2Zvcm0uc2NhbGUueSAtIHRoaXMudHJhbnNmb3JtLnNjYWxlLnkgLyAyKTtcclxuICAgICAgICAvL2FnZW50LnRyYW5zZm9ybS5wb3NpdGlvbiA9IFZlY3RvcjIuYWRkKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLCByYW5kb21EZWx0YVBvc2l0aW9uKTtcclxuICAgICAgICAvL2FnZW50LnRyYW5zZm9ybS5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnBvcnRMaXN0WzBdLmFwcGVuZEFnZW50KGFnZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tEZXN0aW5hdGlvbi5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrRGVzdGluYXRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgcXVhZCA9IG5ldyBkcmF3ZXJfMS5RdWFkKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhxdWFkKTtcclxuICAgICAgICB2YXIgZm9udCA9IG5ldyBkcmF3ZXJfMS5Gb250KHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBmb250LnRleHQgPSAn7Yq465+tIOuPhOywqeyngCc7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcoZm9udCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tEZXN0aW5hdGlvbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJ1Y2tEZXN0aW5hdGlvbjtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxudmFyIFdhaXRpbmdQbGFjZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhXYWl0aW5nUGxhY2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBXYWl0aW5nUGxhY2UoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdXYWl0aW5nUGxhY2UnO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFdhaXRpbmdQbGFjZS5wcm90b3R5cGUub25BZ2VudEluID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICAgICAgdGhpcy5wb3J0TGlzdFswXS5hcHBlbmRBZ2VudChhZ2VudCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgV2FpdGluZ1BsYWNlLnByb3RvdHlwZS5vbkFnZW50T3V0ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgV2FpdGluZ1BsYWNlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICAgICAgdmFyIGZvbnQgPSBuZXcgZHJhd2VyXzEuRm9udCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgZm9udC50ZXh0ID0gJ+2KuOufrSDrjIDquLDsi6QnO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KGZvbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFdhaXRpbmdQbGFjZS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBXYWl0aW5nUGxhY2UucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXYWl0aW5nUGxhY2U7XHJcbn0odW5pdF8xLkZhY2lsaXR5KSk7XHJcbnZhciBJbkdhdGV3YXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSW5HYXRld2F5LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSW5HYXRld2F5KGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnR2F0ZXdheSc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgSW5HYXRld2F5LnByb3RvdHlwZS5vbkFnZW50SW4gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICBpZiAoYWdlbnQgaW5zdGFuY2VvZiBTZWFCdWxrVHJ1Y2spIHtcclxuICAgICAgICAgICAgdGhpcy5wb3J0TGlzdFswXS5hcHBlbmRBZ2VudChhZ2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFnZW50IGluc3RhbmNlb2YgVGFua0J1bGtUcnVjaykge1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRMaXN0WzFdLmFwcGVuZEFnZW50KGFnZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWdlbnQgaW5zdGFuY2VvZiBEb2NrVHJ1Y2spIHtcclxuICAgICAgICAgICAgdGhpcy5wb3J0TGlzdFsyXS5hcHBlbmRBZ2VudChhZ2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEluR2F0ZXdheS5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEluR2F0ZXdheS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICfqsozsnbTtirjsm6jsnbQnO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KGZvbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEluR2F0ZXdheS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBJbkdhdGV3YXkucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJbkdhdGV3YXk7XHJcbn0odW5pdF8xLkZhY2lsaXR5KSk7XHJcbnZhciBPdXRHYXRld2F5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE91dEdhdGV3YXksIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBPdXRHYXRld2F5KGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnR2F0ZXdheSc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgT3V0R2F0ZXdheS5wcm90b3R5cGUub25BZ2VudEluID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICAgICAgdGhpcy5wb3J0TGlzdFswXS5hcHBlbmRBZ2VudChhZ2VudCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgT3V0R2F0ZXdheS5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE91dEdhdGV3YXkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgcXVhZCA9IG5ldyBkcmF3ZXJfMS5RdWFkKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhxdWFkKTtcclxuICAgICAgICB2YXIgZm9udCA9IG5ldyBkcmF3ZXJfMS5Gb250KHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBmb250LnRleHQgPSAn6rKM7J207Yq47Juo7J20JztcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhmb250KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBPdXRHYXRld2F5LnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE91dEdhdGV3YXkucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPdXRHYXRld2F5O1xyXG59KHVuaXRfMS5GYWNpbGl0eSkpO1xyXG52YXIgU2VhYnVsa1RydWNrTGluZXJQcmVwYXJhdGlvblBsYWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlYWJ1bGtUcnVja0xpbmVyUHJlcGFyYXRpb25QbGFjZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNlYWJ1bGtUcnVja0xpbmVyUHJlcGFyYXRpb25QbGFjZShlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ0xpbmVyUHJlcGFyYXRpb25QbGFjZSc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgU2VhYnVsa1RydWNrTGluZXJQcmVwYXJhdGlvblBsYWNlLnByb3RvdHlwZS5vbkFnZW50SW4gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICB0aGlzLnBvcnRMaXN0WzBdLmFwcGVuZEFnZW50KGFnZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBTZWFidWxrVHJ1Y2tMaW5lclByZXBhcmF0aW9uUGxhY2UucHJvdG90eXBlLm9uQWdlbnRPdXQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBTZWFidWxrVHJ1Y2tMaW5lclByZXBhcmF0aW9uUGxhY2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgcXVhZCA9IG5ldyBkcmF3ZXJfMS5RdWFkKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhxdWFkKTtcclxuICAgICAgICB2YXIgZm9udCA9IG5ldyBkcmF3ZXJfMS5Gb250KHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBmb250LnRleHQgPSAn7JSo67KM7YGs7JqpIOudvOydtOuEiCDspIDruYTsi6QnO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KGZvbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFNlYWJ1bGtUcnVja0xpbmVyUHJlcGFyYXRpb25QbGFjZS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBTZWFidWxrVHJ1Y2tMaW5lclByZXBhcmF0aW9uUGxhY2UucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTZWFidWxrVHJ1Y2tMaW5lclByZXBhcmF0aW9uUGxhY2U7XHJcbn0odW5pdF8xLkZhY2lsaXR5KSk7XHJcbnZhciBXZWlnaHRNZXNhdXJlbWVudFBsYWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFdlaWdodE1lc2F1cmVtZW50UGxhY2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBXZWlnaHRNZXNhdXJlbWVudFBsYWNlKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnV2VpZ2h0TWVzYXVyZW1lbnRQbGFjZSc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgV2VpZ2h0TWVzYXVyZW1lbnRQbGFjZS5wcm90b3R5cGUub25BZ2VudEluID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICAgICAgdGhpcy5wb3J0TGlzdFswXS5hcHBlbmRBZ2VudChhZ2VudCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgV2VpZ2h0TWVzYXVyZW1lbnRQbGFjZS5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFdlaWdodE1lc2F1cmVtZW50UGxhY2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgcXVhZCA9IG5ldyBkcmF3ZXJfMS5RdWFkKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhxdWFkKTtcclxuICAgICAgICB2YXIgZm9udCA9IG5ldyBkcmF3ZXJfMS5Gb250KHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBmb250LnRleHQgPSAn66y06rKMIOy4oeygleyLpCc7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcoZm9udCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgV2VpZ2h0TWVzYXVyZW1lbnRQbGFjZS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBXZWlnaHRNZXNhdXJlbWVudFBsYWNlLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV2VpZ2h0TWVzYXVyZW1lbnRQbGFjZTtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxudmFyIEJ1bGtQcm9kdWN0TG9hZGluZ1BsYWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJ1bGtQcm9kdWN0TG9hZGluZ1BsYWNlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdCdWxrUHJvZHVjdExvYWRpbmdQbGFjZSc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgQnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIHRoaXMucG9ydExpc3RbMF0uYXBwZW5kQWdlbnQoYWdlbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEJ1bGtQcm9kdWN0TG9hZGluZ1BsYWNlLnByb3RvdHlwZS5vbkFnZW50T3V0ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgQnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgcXVhZCA9IG5ldyBkcmF3ZXJfMS5RdWFkKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhxdWFkKTtcclxuICAgICAgICB2YXIgZm9udCA9IG5ldyBkcmF3ZXJfMS5Gb250KHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBmb250LnRleHQgPSAn67KM7YGsIOygnO2SiCDsoIHsoJzsi6QnO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KGZvbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEJ1bGtQcm9kdWN0TG9hZGluZ1BsYWNlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEJ1bGtQcm9kdWN0TG9hZGluZ1BsYWNlLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2U7XHJcbn0odW5pdF8xLkZhY2lsaXR5KSk7XHJcbnZhciBEb2NrUHJvZHVjdExvYWRpbmdQbGFjZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEb2NrUHJvZHVjdExvYWRpbmdQbGFjZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnRG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2UnO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlLnByb3RvdHlwZS5vbkFnZW50SW4gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICB0aGlzLnBvcnRMaXN0WzBdLmFwcGVuZEFnZW50KGFnZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBEb2NrUHJvZHVjdExvYWRpbmdQbGFjZS5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICAgICAgdmFyIGZvbnQgPSBuZXcgZHJhd2VyXzEuRm9udCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgZm9udC50ZXh0ID0gJ+uPhO2BrCDsoJztkogg7KCB7J6s7IukJztcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhmb250KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBEb2NrUHJvZHVjdExvYWRpbmdQbGFjZS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBEb2NrUHJvZHVjdExvYWRpbmdQbGFjZS5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlO1xyXG59KHVuaXRfMS5GYWNpbGl0eSkpO1xyXG52YXIgRXh0ZXJuYWxEZXN0aW5hdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhFeHRlcm5hbERlc3RpbmF0aW9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRXh0ZXJuYWxEZXN0aW5hdGlvbihlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ0V4dGVybmFsRGVzdGluYXRpb24nO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEV4dGVybmFsRGVzdGluYXRpb24ucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEV4dGVybmFsRGVzdGluYXRpb24ucHJvdG90eXBlLm9uQWdlbnRPdXQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBFeHRlcm5hbERlc3RpbmF0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICAgICAgdmFyIGZvbnQgPSBuZXcgZHJhd2VyXzEuRm9udCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgZm9udC50ZXh0ID0gJ+yZuOu2gCDrqqnsoIHsp4AnO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KGZvbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEV4dGVybmFsRGVzdGluYXRpb24ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgRXh0ZXJuYWxEZXN0aW5hdGlvbi5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEV4dGVybmFsRGVzdGluYXRpb247XHJcbn0odW5pdF8xLkZhY2lsaXR5KSk7XHJcbnZhciBUcnVjayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUcnVjaywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRydWNrKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuY3VycmVudFJvYWRJbmRleCA9IDA7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnVHJ1Y2snO1xyXG4gICAgICAgIF90aGlzLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIoVHJ1Y2suV0lEVEgsIFRydWNrLkxFTkdUSCk7XHJcbiAgICAgICAgX3RoaXMuZHluYW1pYyA9IG5ldyBjb21wb25lbnRfMS5EeW5hbWljcygpO1xyXG4gICAgICAgIF90aGlzLmFkZENvbXBvbmVudChfdGhpcy5keW5hbWljKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOuPhOuhnOychOyXkCDsnojsnYQg65WMIO2VoCDsnbzrk6Qg7LKY66asXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGYWNpbGl0eSBpbnN0YW5jZW9mIFJvYWQpIHtcclxuICAgICAgICAgICAgdmFyIHJvYWQgPSB0aGlzLmN1cnJlbnRGYWNpbGl0eTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFByb2dyZXNzID0gdHlwZXNfMS5WZWN0b3IyLmludmVyc2VMZXJwKHJvYWQuZ2V0UG9pbnQodGhpcy5jdXJyZW50Um9hZEluZGV4KSwgcm9hZC5nZXRQb2ludCh0aGlzLmN1cnJlbnRSb2FkSW5kZXggKyAxKSwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudFByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9ncmVzcyAtPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Um9hZEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Um9hZEluZGV4ID09PSByb2FkLmdldFBvaW50TGVuZ3RoKCkgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Um9hZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmR5bmFtaWMudmVsb2NpdHkgPSB0eXBlc18xLlZlY3RvcjIuWkVSTztcclxuICAgICAgICAgICAgICAgICAgICByb2FkLnBvcnRMaXN0WzBdLmFwcGVuZEFnZW50KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2dyZXNzID0gY3VycmVudFByb2dyZXNzICogdHlwZXNfMS5WZWN0b3IyLnN1YnN0cmFjdChyb2FkLmdldFBvaW50KHRoaXMuY3VycmVudFJvYWRJbmRleCAtIDEpLCByb2FkLmdldFBvaW50KHRoaXMuY3VycmVudFJvYWRJbmRleCkpLm1hZ25pdHVkZSAvIHR5cGVzXzEuVmVjdG9yMi5zdWJzdHJhY3Qocm9hZC5nZXRQb2ludCh0aGlzLmN1cnJlbnRSb2FkSW5kZXgpLCByb2FkLmdldFBvaW50KHRoaXMuY3VycmVudFJvYWRJbmRleCArIDEpKS5tYWduaXR1ZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFByb2dyZXNzIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uID0gdHlwZXNfMS5WZWN0b3IyLmxlcnAocm9hZC5nZXRQb2ludCh0aGlzLmN1cnJlbnRSb2FkSW5kZXgpLCByb2FkLmdldFBvaW50KHRoaXMuY3VycmVudFJvYWRJbmRleCArIDEpLCBjdXJyZW50UHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOydtOu2gOu2hCDsiJjsoJXtlYTsmpRcclxuICAgICAqL1xyXG4gICAgVHJ1Y2sucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByb2FkID0gdGhpcy5jdXJyZW50RmFjaWxpdHk7XHJcbiAgICAgICAgdmFyIGFuZ2xlID0gcm9hZC5nZXRSb2FkQW5nbGUodGhpcy5jdXJyZW50Um9hZEluZGV4KTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5yb3RhdGlvbiA9IGFuZ2xlO1xyXG4gICAgICAgIHRoaXMuZHluYW1pYy52ZWxvY2l0eSA9IHR5cGVzXzEuVmVjdG9yMi5tdWx0aXBseSh0aGlzLnRyYW5zZm9ybS5mb3J3YXJkKCksIDIuNyk7XHJcbiAgICB9O1xyXG4gICAgVHJ1Y2suV0lEVEggPSAxLjg1O1xyXG4gICAgVHJ1Y2suTEVOR1RIID0gNC4zO1xyXG4gICAgcmV0dXJuIFRydWNrO1xyXG59KHVuaXRfMS5BZ2VudCkpO1xyXG52YXIgU2VhQnVsa1RydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlYUJ1bGtUcnVjaywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFNlYUJ1bGtUcnVjayhlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ1NlYUJ1bGtUcnVjayc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgU2VhQnVsa1RydWNrLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSwgJ3JnYmEoMjU2LCAwLCAwLCAwLjIpJyk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgU2VhQnVsa1RydWNrLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFNlYUJ1bGtUcnVjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5vblVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VhQnVsa1RydWNrO1xyXG59KFRydWNrKSk7XHJcbnZhciBUYW5rQnVsa1RydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRhbmtCdWxrVHJ1Y2ssIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUYW5rQnVsa1RydWNrKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnVGFua0J1bGtUcnVjayc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVGFua0J1bGtUcnVjay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0sICdyZ2JhKDAsIDI1NiwgMCwgMC4yKScpO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRhbmtCdWxrVHJ1Y2sucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVGFua0J1bGtUcnVjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5vblVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFua0J1bGtUcnVjaztcclxufShUcnVjaykpO1xyXG52YXIgRG9ja1RydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKERvY2tUcnVjaywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIERvY2tUcnVjayhlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ0RvY2tUcnVjayc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgRG9ja1RydWNrLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSwgJ3JnYmEoMCwgMCwgMjU2LCAwLjIpJyk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgRG9ja1RydWNrLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIERvY2tUcnVjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5vblVwZGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIC8vIFRPRE9cclxuICAgIH07XHJcbiAgICByZXR1cm4gRG9ja1RydWNrO1xyXG59KFRydWNrKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBkcmF3ZXJfMSA9IHJlcXVpcmUoXCIuL2RyYXdlclwiKTtcclxudmFyIFJlbmRlcmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyZXIoZW52aXJvbm1lbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgICAgICB0aGlzLmNhbnZhc0RlbGVnYXRvciA9IG5ldyBkcmF3ZXJfMS5DYW52YXNEZWxlZ2F0b3IoZW52aXJvbm1lbnQsIGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzRGVsZWdhdG9yLnVwZGF0ZSh0aGlzLmVudmlyb25tZW50LnVuaXRMaXN0KTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5NQVhfV0lEVEggPSAxMDAwO1xyXG4gICAgUmVuZGVyZXIuTUFYX0hFSUdIVCA9IDEwMDA7XHJcbiAgICByZXR1cm4gUmVuZGVyZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmVuZGVyZXIgPSBSZW5kZXJlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIDLssKjsm5Ag67Kh7YSwXHJcbiAqL1xyXG52YXIgVmVjdG9yMiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjIoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIFZlY3RvcjIuYWRkID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54ICsgYi54LCBhLnkgKyBiLnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuc3Vic3RyYWN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54IC0gYi54LCBhLnkgLSBiLnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIubXVsdGlwbHkgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihhLnggKiBiLCBhLnkgKiBiKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmRpdmlzaW9uID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoYS54IC8gYiwgYS55IC8gYik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5sZXJwID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuICAgICAgICB2YXIgdmVjdG9yID0gVmVjdG9yMi5hZGQoYSwgVmVjdG9yMi5tdWx0aXBseShWZWN0b3IyLnN1YnN0cmFjdChiLCBhKSwgYykpO1xyXG4gICAgICAgIHJldHVybiB2ZWN0b3I7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5pbnZlcnNlTGVycCA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgdmFyIHYxID0gVmVjdG9yMi5zdWJzdHJhY3QoYywgYSk7XHJcbiAgICAgICAgdmFyIHYyID0gVmVjdG9yMi5zdWJzdHJhY3QoYiwgYSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh2MS5zcXJNYWduaXR1ZGUgLyB2Mi5zcXJNYWduaXR1ZGUpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJzcXJNYWduaXR1ZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcIm1hZ25pdHVkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5zcXJNYWduaXR1ZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yMi5aRVJPID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICByZXR1cm4gVmVjdG9yMjtcclxufSgpKTtcclxuZXhwb3J0cy5WZWN0b3IyID0gVmVjdG9yMjtcclxuLyoqXHJcbiAqIFVuaXTsnZgg7JyE7LmYLCDtgazquLAsIOqwgeuPhOygleuztOulvCDqsJbqs6DsnojsnYxcclxuICovXHJcbnZhciBUcmFuc2Zvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUcmFuc2Zvcm0ocG9zaXRpb24sIHNjYWxlLCByb3RhdGlvbikge1xyXG4gICAgICAgIGlmIChyb3RhdGlvbiA9PT0gdm9pZCAwKSB7IHJvdGF0aW9uID0gMDsgfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDslZ4g67Kh7YSwXHJcbiAgICAgKi9cclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUuZm9yd2FyZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3RvcjIoTWF0aC5jb3ModGhpcy5yb3RhdGlvbiksIE1hdGguc2luKHRoaXMucm90YXRpb24pKTtcclxuICAgICAgICByZXR1cm4gdmVjdG9yO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog7Jm87Kq9IOuyoe2EsFxyXG4gICAgICovXHJcbiAgICBUcmFuc2Zvcm0ucHJvdG90eXBlLmxlZnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBWZWN0b3IyKE1hdGguY29zKHRoaXMucm90YXRpb24gKyBNYXRoLlBJIC8gMiksIE1hdGguc2luKHRoaXMucm90YXRpb24gKyBNYXRoLlBJIC8gMikpO1xyXG4gICAgICAgIHJldHVybiB2ZWN0b3I7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDsmKTrpbjsqr0g67Kh7YSwXHJcbiAgICAgKi9cclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUucmlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBWZWN0b3IyKE1hdGguY29zKHRoaXMucm90YXRpb24gLSBNYXRoLlBJIC8gMiksIE1hdGguc2luKHRoaXMucm90YXRpb24gLSBNYXRoLlBJIC8gMikpO1xyXG4gICAgICAgIHJldHVybiB2ZWN0b3I7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyYW5zZm9ybTtcclxufSgpKTtcclxuZXhwb3J0cy5UcmFuc2Zvcm0gPSBUcmFuc2Zvcm07XHJcbi8qKlxyXG4gKiDtirjrn60g64+E7LCpIOyLnOqwhOyXkCDqtIDtlZwg642w7J207YSwXHJcbiAqL1xyXG52YXIgVHJ1Y2tBcnJpdmFsRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRydWNrQXJyaXZhbERhdGEodGltZSwga2luZCkge1xyXG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcclxuICAgICAgICB0aGlzLmlzQXJyaXZlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1NFQV9CVUxLID0gMTtcclxuICAgIFRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9UQU5LX0JVTEsgPSAyO1xyXG4gICAgVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX0RPS0UgPSAzO1xyXG4gICAgcmV0dXJuIFRydWNrQXJyaXZhbERhdGE7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVHJ1Y2tBcnJpdmFsRGF0YSA9IFRydWNrQXJyaXZhbERhdGE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG52YXIgRW52aXJvbm1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFbnZpcm9ubWVudCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RpY2sgPSAwO1xyXG4gICAgICAgIHRoaXMuX2VsYXBzZWRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy51bml0TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuX3RpY2sgKz0gRW52aXJvbm1lbnQuRVBTSUxPTl9ERUxBWTtcclxuICAgICAgICAgICAgX3RoaXMuX2RlbHRhVGltZSA9IF90aGlzLnRpbWVTY2FsZSAvIDYwO1xyXG4gICAgICAgICAgICBfdGhpcy5fZWxhcHNlZFRpbWUgKz0gX3RoaXMuZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX3RpY2sgPiAxNyAvIF90aGlzLnRpbWVTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3RpY2sgPSAwO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudW5pdExpc3QuZm9yRWFjaChmdW5jdGlvbiAodW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bml0IGluc3RhbmNlb2YgQWdlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdC5hcHBseUNvbXBvbmVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdC5vblVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBFbnZpcm9ubWVudC5FUFNJTE9OX0RFTEFZKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbnZpcm9ubWVudC5wcm90b3R5cGUsIFwiZWxhcHNlZFRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZWxhcHNlZFRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRW52aXJvbm1lbnQucHJvdG90eXBlLCBcImRlbHRhVGltZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWx0YVRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIO2VtOuLuSDtmZjqsr3sl5Ag7Jyg64ubIOy2lOqwgFxyXG4gICAgICogQHBhcmFtIHVuaXRcclxuICAgICAqL1xyXG4gICAgRW52aXJvbm1lbnQucHJvdG90eXBlLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiAodW5pdCkge1xyXG4gICAgICAgIHVuaXQub25TdGFydCgpO1xyXG4gICAgICAgIHRoaXMudW5pdExpc3QucHVzaCh1bml0KTtcclxuICAgIH07XHJcbiAgICBFbnZpcm9ubWVudC5FUFNJTE9OX0RFTEFZID0gNTtcclxuICAgIHJldHVybiBFbnZpcm9ubWVudDtcclxufSgpKTtcclxuZXhwb3J0cy5FbnZpcm9ubWVudCA9IEVudmlyb25tZW50O1xyXG52YXIgVW5pdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFVuaXQoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gJ1VuaXQnO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gbmV3IHR5cGVzXzEuVHJhbnNmb3JtKHR5cGVzXzEuVmVjdG9yMi5aRVJPLCBuZXcgdHlwZXNfMS5WZWN0b3IyKDEsIDEpLCAwKTtcclxuICAgICAgICB0aGlzLl9lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFVuaXQucHJvdG90eXBlLCBcIm5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShVbml0LnByb3RvdHlwZSwgXCJlbnZpcm9ubWVudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFVuaXQucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQuYXBwZW5kVW5pdCh0aGlzKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVW5pdDtcclxufSgpKTtcclxuZXhwb3J0cy5Vbml0ID0gVW5pdDtcclxuLyoqXHJcbiAqIOuqqOuTnCDsi5zshKTrk6TsnZgg67aA66qoIO2BtOuemOyKpFxyXG4gKi9cclxudmFyIEZhY2lsaXR5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZhY2lsaXR5LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRmFjaWxpdHkoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdGYWNpbGl0eSc7XHJcbiAgICAgICAgX3RoaXMuYWdlbnRMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgX3RoaXMucG9ydExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBfdGhpcy50cmFuc2Zvcm0uc2NhbGUgPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDIwLCAyMCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZ2VudCDstpTqsIBcclxuICAgICAqIEBwYXJhbSBhZ2VudFxyXG4gICAgICovXHJcbiAgICBGYWNpbGl0eS5wcm90b3R5cGUuYXBwZW5kQWdlbnQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICBpZiAoYWdlbnQuY3VycmVudEZhY2lsaXR5KSB7XHJcbiAgICAgICAgICAgIGFnZW50LmN1cnJlbnRGYWNpbGl0eS5yZW1vdmVBZ2VudChhZ2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWdlbnRMaXN0LnB1c2goYWdlbnQpO1xyXG4gICAgICAgIGFnZW50LmN1cnJlbnRGYWNpbGl0eSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vbkFnZW50SW4oYWdlbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWdlbnQg7IKt7KCcXHJcbiAgICAgKiBAcGFyYW0gYWdlbnRcclxuICAgICAqL1xyXG4gICAgRmFjaWxpdHkucHJvdG90eXBlLnJlbW92ZUFnZW50ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFnZW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZ2VudExpc3RbaV0gPT09IGFnZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFnZW50TGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWdlbnRPdXQoYWdlbnQpO1xyXG4gICAgICAgICAgICAgICAgYWdlbnQuY3VycmVudEZhY2lsaXR5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog7JiG66m0IOychOy5mCDqtaztlZjquLDsmqlcclxuICAgICAqIEBwYXJhbSBkaXJlY3RyaW9uIDA6IHJpZ2h0LCBwaTogbGVmdFxyXG4gICAgICovXHJcbiAgICBGYWNpbGl0eS5wcm90b3R5cGUuZ2V0U2lkZVBvc2l0aW9uID0gZnVuY3Rpb24gKGFuZ2xlKSB7XHJcbiAgICAgICAgdmFyIHZlY3RvciA9IHR5cGVzXzEuVmVjdG9yMi5hZGQodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24sIG5ldyB0eXBlc18xLlZlY3RvcjIodGhpcy50cmFuc2Zvcm0uc2NhbGUueCAvIDIgKiBNYXRoLmNvcyhhbmdsZSksIHRoaXMudHJhbnNmb3JtLnNjYWxlLnkgLyAyICogTWF0aC5zaW4oYW5nbGUpKSk7XHJcbiAgICAgICAgcmV0dXJuIHZlY3RvcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmFjaWxpdHk7XHJcbn0oVW5pdCkpO1xyXG5leHBvcnRzLkZhY2lsaXR5ID0gRmFjaWxpdHk7XHJcbi8qKlxyXG4gKiDrqqjrk6AgQWdlbnTsnZgg67aA66qoIO2BtOuemOyKpFxyXG4gKi9cclxudmFyIEFnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFnZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQWdlbnQoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdBZ2VudCc7XHJcbiAgICAgICAgX3RoaXMuY3VycmVudEZhY2lsaXR5ID0gbnVsbDtcclxuICAgICAgICBfdGhpcy5jb21wb25lbnRMaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgQWdlbnQucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudExpc3QucHVzaChjb21wb25lbnQpO1xyXG4gICAgfTtcclxuICAgIEFnZW50LnByb3RvdHlwZS5yZW1vdmVDb21wb25lbnQgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbXBvbmVudExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFtpXSA9PT0gY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFnZW50LnByb3RvdHlwZS5hcHBseUNvbXBvbmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNvbXBvbmVudExpc3QuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5kbyhfdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFnZW50O1xyXG59KFVuaXQpKTtcclxuZXhwb3J0cy5BZ2VudCA9IEFnZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUHJvcGVydHlFZGl0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQcm9wZXJ0eUVkaXRvcihtb2RlbCwgZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIHRoaXMubmFtZVZpZXcgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLXZpZXcnKTtcclxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB1bml0ID0gX3RoaXMubW9kZWwucmVuZGVyZXIuY2FudmFzRGVsZWdhdG9yLmZvY3VzZWRVbml0O1xyXG4gICAgICAgICAgICBpZiAodW5pdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubmFtZVZpZXcuaW5uZXJUZXh0ID0gdW5pdC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHVuaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9ICduYW1lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB1bml0W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBQcm9wZXJ0eUVkaXRvci5SRUZSRVNIX0RFTEFZKTtcclxuICAgIH1cclxuICAgIFByb3BlcnR5RWRpdG9yLlJFRlJFU0hfREVMQVkgPSA1O1xyXG4gICAgcmV0dXJuIFByb3BlcnR5RWRpdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLlByb3BlcnR5RWRpdG9yID0gUHJvcGVydHlFZGl0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=