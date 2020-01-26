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
        this.environment.timeScale = 50;
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
            td2wp.pointList.push(this.truckDestination.getSidePosition(0));
            td2wp.pointList.push(this.watingPlace.getSidePosition(Math.PI));
            td2wp.portList.push(this.watingPlace);
        }
        // 대기실 -> 게이트웨이
        var wp2ig = new Road(this.environment);
        {
            wp2ig.pointList.push(this.watingPlace.getSidePosition(0));
            wp2ig.pointList.push(this.inGateway.getSidePosition(Math.PI));
            wp2ig.portList.push(this.inGateway);
        }
        // 게이트웨이 -> 벌크용 무게 측정실1
        var ig2wmp1 = new Road(this.environment);
        {
            ig2wmp1.pointList.push(this.inGateway.getSidePosition(0));
            ig2wmp1.pointList.push(this.weightMesaurementPlace1.getSidePosition(Math.PI));
            ig2wmp1.portList.push(this.weightMesaurementPlace1);
        }
        // 벌크용 무게 측정실1 -> 벌크 제품 적재실
        var wmp12bplp = new Road(this.environment);
        {
            wmp12bplp.pointList.push(this.weightMesaurementPlace1.getSidePosition(0));
            wmp12bplp.pointList.push(this.bulkProductLoadingPlace.getSidePosition(Math.PI));
            wmp12bplp.portList.push(this.bulkProductLoadingPlace);
        }
        // 벌크 제품 적재실 -> 벌크용 무게 측정실2
        var bplp2wmp2 = new Road(this.environment);
        {
            bplp2wmp2.pointList.push(this.bulkProductLoadingPlace.getSidePosition(0));
            bplp2wmp2.pointList.push(this.weightMesaurementPlace2.getSidePosition(Math.PI));
            bplp2wmp2.portList.push(this.weightMesaurementPlace2);
        }
        // 벌크용 무게 측정실2 -> 출구 게이트웨이
        var wmp22og = new Road(this.environment);
        {
            wmp22og.pointList.push(this.weightMesaurementPlace2.getSidePosition(0));
            wmp22og.pointList.push(this.outGateway.getSidePosition(Math.PI));
            wmp22og.portList.push(this.outGateway);
        }
        // 출구 게이트웨이 -> 외부 목적지
        var og2ed = new Road(this.environment);
        {
            og2ed.pointList.push(this.outGateway.getSidePosition(0));
            og2ed.pointList.push(this.externalDestination.getSidePosition(Math.PI));
            og2ed.portList.push(this.externalDestination);
        }
        ////////////////////////////////////////////////////////////
        // 게이트웨이 -> 씨벌크용 라이너 준비실
        var ig2lpp = new Road(this.environment);
        {
            var tmp1 = types_1.Vector2.add(this.inGateway.getSidePosition(0), new types_1.Vector2(0, 3));
            var tmp2 = this.linerPreparationPlace.getSidePosition(Math.PI);
            var tmp3 = types_1.Vector2.substract(tmp2, tmp1);
            ig2lpp.pointList.push(tmp1);
            ig2lpp.pointList.push(new types_1.Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            ig2lpp.pointList.push(new types_1.Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            ig2lpp.pointList.push(tmp2);
            ig2lpp.portList.push(this.linerPreparationPlace);
        }
        // 씨벌크용 라이너 준비실 -> 벌크용 무게 측정실1
        var lpp2wmp1 = new Road(this.environment);
        {
            var tmp1 = this.linerPreparationPlace.getSidePosition(0);
            var tmp2 = types_1.Vector2.add(this.weightMesaurementPlace1.getSidePosition(Math.PI), new types_1.Vector2(0, 3));
            var tmp3 = types_1.Vector2.substract(tmp2, tmp1);
            lpp2wmp1.pointList.push(tmp1);
            lpp2wmp1.pointList.push(new types_1.Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            lpp2wmp1.pointList.push(new types_1.Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            lpp2wmp1.pointList.push(tmp2);
            lpp2wmp1.portList.push(this.weightMesaurementPlace1);
        }
        ////////////////////////////////////////////////////////////
        // 입구 게이트웨이 -> 도크용 제품 적재실
        var ig2dplp = new Road(this.environment);
        {
            var tmp1 = types_1.Vector2.add(this.inGateway.getSidePosition(0), new types_1.Vector2(0, -3));
            var tmp2 = this.dockProductLoadingPlace.getSidePosition(Math.PI);
            var tmp3 = types_1.Vector2.substract(tmp2, tmp1);
            ig2dplp.pointList.push(tmp1);
            ig2dplp.pointList.push(new types_1.Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            ig2dplp.pointList.push(new types_1.Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            ig2dplp.pointList.push(tmp2);
            ig2dplp.portList.push(this.dockProductLoadingPlace);
        }
        // 도크용 제품 적재실 -> 출구 게이트웨이
        var dplp2og = new Road(this.environment);
        {
            var tmp1 = this.dockProductLoadingPlace.getSidePosition(0);
            var tmp2 = types_1.Vector2.add(this.outGateway.getSidePosition(Math.PI), new types_1.Vector2(0, -3));
            var tmp3 = types_1.Vector2.substract(tmp2, tmp1);
            dplp2og.pointList.push(tmp1);
            dplp2og.pointList.push(new types_1.Vector2(tmp1.x + tmp3.x / 3, tmp1.y));
            dplp2og.pointList.push(new types_1.Vector2(tmp1.x + tmp3.x / 3 * 2, tmp2.y));
            dplp2og.pointList.push(tmp2);
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
        var laneWidth = 2;
        var path = new drawer_1.Path(this.transform, 'rgba(128, 255, 255, 0.4)');
        this.pointList.forEach(function (point) {
            path.pointList.push(point);
        });
        path.width = laneWidth;
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
            var currentProgress = types_1.Vector2.inverseLerp(road.pointList[this.currentRoadIndex], road.pointList[this.currentRoadIndex + 1], this.transform.position);
            while (currentProgress >= 1) {
                currentProgress -= 1;
                this.currentRoadIndex++;
                if (this.currentRoadIndex === road.pointList.length - 1) {
                    this.currentRoadIndex = 0;
                    this.dynamic.velocity = types_1.Vector2.ZERO;
                    road.portList[0].appendAgent(this);
                    break;
                }
                currentProgress = currentProgress * types_1.Vector2.substract(road.pointList[this.currentRoadIndex - 1], road.pointList[this.currentRoadIndex]).magnitude / types_1.Vector2.substract(road.pointList[this.currentRoadIndex], road.pointList[this.currentRoadIndex + 1]).magnitude;
                if (currentProgress < 1) {
                    this.transform.position = types_1.Vector2.lerp(road.pointList[this.currentRoadIndex], road.pointList[this.currentRoadIndex + 1], currentProgress);
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
        this._transform = new types_1.Transform(types_1.Vector2.ZERO, new types_1.Vector2(1, 1), 0);
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
        _this._portList = new Array();
        _this.transform.scale = new types_1.Vector2(20, 20);
        return _this;
    }
    Object.defineProperty(Facility.prototype, "portList", {
        get: function () {
            return this._portList;
        },
        enumerable: true,
        configurable: true
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Njc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy9kcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdHMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3RzL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy90cy91bml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsd0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN0Q2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsd0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSwwQ0FBMEMsRUFBRTtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDelBhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHdDQUFTO0FBQy9COzs7Ozs7Ozs7Ozs7O0FDSGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsc0NBQVE7QUFDN0IsaUJBQWlCLG1CQUFPLENBQUMsOENBQVk7QUFDckMsZUFBZSxtQkFBTyxDQUFDLDBDQUFVO0FBQ2pDLGNBQWMsbUJBQU8sQ0FBQyx3Q0FBUztBQUMvQixrQkFBa0IsbUJBQU8sQ0FBQyxnREFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcjBCWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQywwQ0FBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ25DYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2pHYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyx3Q0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtCQUErQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxudmFyIENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBDb21wb25lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xyXG4vKipcclxuICog7Jet7ZWZIOq0gOugqCDsspjrpqzrpbwg7IiY7ZaJ7ZWY64qUIO2BtOuemOyKpFxyXG4gKi9cclxudmFyIER5bmFtaWNzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKER5bmFtaWNzLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRHluYW1pY3MoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy52ZWxvY2l0eSA9IHR5cGVzXzEuVmVjdG9yMi5aRVJPO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIER5bmFtaWNzLnByb3RvdHlwZS5kbyA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIHZhciBkZWx0YVBvc2l0aW9uID0gdHlwZXNfMS5WZWN0b3IyLm11bHRpcGx5KG5ldyB0eXBlc18xLlZlY3RvcjIodGhpcy52ZWxvY2l0eS54LCB0aGlzLnZlbG9jaXR5LnkpLCBhZ2VudC5lbnZpcm9ubWVudC5kZWx0YVRpbWUpO1xyXG4gICAgICAgIGFnZW50LnRyYW5zZm9ybS5wb3NpdGlvbiA9IHR5cGVzXzEuVmVjdG9yMi5hZGQoYWdlbnQudHJhbnNmb3JtLnBvc2l0aW9uLCBkZWx0YVBvc2l0aW9uKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRHluYW1pY3M7XHJcbn0oQ29tcG9uZW50KSk7XHJcbmV4cG9ydHMuRHluYW1pY3MgPSBEeW5hbWljcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciBDYW52YXNEZWxlZ2F0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNEZWxlZ2F0b3IoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhUG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHRoaXMuem9vbVNpemUgPSAxMDtcclxuICAgICAgICB0aGlzLnNldHVwRXZlbnQoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLCBcImNhbnZhc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYW52YXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIFBpY3R1cmXsnZgg7KKF66WY66W8IOu2hOulmO2VtOyEnCDsoIHsoIjtnogg6re466a8XHJcbiAgICAgKiBAcGFyYW0gcGljdHVyZVxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAocGljdHVyZSkge1xyXG4gICAgICAgIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgUGF0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdQYXRoKHBpY3R1cmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgRm9udCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdGb250KHBpY3R1cmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgUXVhZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdRdWFkKHBpY3R1cmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwaWN0dXJlIGluc3RhbmNlb2YgQ2lyY2xlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0NpcmNsZShwaWN0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBjYW52YXPsnZgg7YGs6riwIOyerOyEpOygleqzvCDqsIEgdW5pdOuTpOydhCDroIzrjZTrp4FcclxuICAgICAqIEBwYXJhbSB1bml0TGlzdFxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh1bml0TGlzdCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodC50b1N0cmluZygpKTtcclxuICAgICAgICB1bml0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh1bml0KSB7XHJcbiAgICAgICAgICAgIHVuaXQucmVuZGVyKF90aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVuYWJsZUdyaWQoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+yXkCBQYXRo66W8IOq3uOumvFxyXG4gICAgICogQHBhcmFtIHBhdGhcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5kcmF3UGF0aCA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBwYXRoLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0cm9rZVN0eWxlID0gcGF0aC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5saW5lV2lkdGggPSBwYXRoLndpZHRoICogdGhpcy56b29tU2l6ZTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGxldCBjb252ZXJ0ZWRTY2FsZSA9IHRoaXMuY29udmVydE1ldGVyVG9QaXhlbChwYXRoLnRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICAgICAgbGV0IGNvbnZlcnRlZFBvc2l0aW9uID0gdGhpcy5nZXRSZWFsUGl4ZWxQb3NpdGlvbihwYXRoLnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICAgICAgKi9cclxuICAgICAgICB2YXIgY29udmVydGVkUG9pbnRMaXN0ID0gcGF0aC5wb2ludExpc3QubWFwKGZ1bmN0aW9uIChwb2ludCkgeyByZXR1cm4gX3RoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24ocG9pbnQpOyB9KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5tb3ZlVG8oY29udmVydGVkUG9pbnRMaXN0WzBdLngsIGNvbnZlcnRlZFBvaW50TGlzdFswXS55KTtcclxuICAgICAgICBjb252ZXJ0ZWRQb2ludExpc3QuZm9yRWFjaChmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuY2FudmFzLmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHJva2UoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+yXkCBUZXh066W8IOq3uOumvFxyXG4gICAgICogQHBhcmFtIGZvbnRcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5kcmF3Rm9udCA9IGZ1bmN0aW9uIChmb250KSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZmlsbFN0eWxlID0gZm9udC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhcy5mb250ID0gZm9udCArICdweCc7XHJcbiAgICAgICAgdmFyIHRleHRNYXRyaWNzID0gdGhpcy5jYW52YXMubWVhc3VyZVRleHQoZm9udC50ZXh0KTtcclxuICAgICAgICB2YXIgY29udmVydGVkU2NhbGUgPSBuZXcgdHlwZXNfMS5WZWN0b3IyKHRleHRNYXRyaWNzLndpZHRoLCBmb250LnNpemUpO1xyXG4gICAgICAgIHZhciB0bXBQb3NpdGlvbiA9IHRoaXMuZ2V0UmVhbFBpeGVsUG9zaXRpb24oZm9udC50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRQb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIodG1wUG9zaXRpb24ueCAtIGNvbnZlcnRlZFNjYWxlLnggLyAyLCB0bXBQb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsVGV4dChmb250LnRleHQsIGNvbnZlcnRlZFBvc2l0aW9uLngsIGNvbnZlcnRlZFBvc2l0aW9uLnkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogY2FudmFz7JeQIOyCrOqwge2YleydhCDqt7jrprxcclxuICAgICAqIEBwYXJhbSBjaXJjbGVcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5kcmF3UXVhZCA9IGZ1bmN0aW9uIChxdWFkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBxdWFkLmNvbG9yO1xyXG4gICAgICAgIHZhciBjb252ZXJ0ZWRTY2FsZSA9IHRoaXMuY29udmVydE1ldGVyVG9QaXhlbChxdWFkLnRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvc2l0aW9uID0gdGhpcy5nZXRSZWFsUGl4ZWxQb3NpdGlvbihxdWFkLnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIHRoZXRhMSA9IE1hdGguYXRhbjIoY29udmVydGVkU2NhbGUueCwgY29udmVydGVkU2NhbGUueSk7XHJcbiAgICAgICAgdmFyIHRoZXRhMiA9IE1hdGguUEkgLSB0aGV0YTE7XHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IGNvbnZlcnRlZFNjYWxlLnkgLyAyIC8gTWF0aC5jb3ModGhldGExKTtcclxuICAgICAgICB2YXIgcG9pbnRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgcG9pbnRzLnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMihjb252ZXJ0ZWRQb3NpdGlvbi54ICsgcmFkaXVzICogTWF0aC5jb3ModGhldGEyICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pLCBjb252ZXJ0ZWRQb3NpdGlvbi55IC0gcmFkaXVzICogTWF0aC5zaW4odGhldGEyICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pKSk7XHJcbiAgICAgICAgcG9pbnRzLnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMihjb252ZXJ0ZWRQb3NpdGlvbi54ICsgcmFkaXVzICogTWF0aC5jb3MoLXRoZXRhMiArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSwgY29udmVydGVkUG9zaXRpb24ueSAtIHJhZGl1cyAqIE1hdGguc2luKC10aGV0YTIgKyBxdWFkLnRyYW5zZm9ybS5yb3RhdGlvbikpKTtcclxuICAgICAgICBwb2ludHMucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKGNvbnZlcnRlZFBvc2l0aW9uLnggKyByYWRpdXMgKiBNYXRoLmNvcygtdGhldGExICsgcXVhZC50cmFuc2Zvcm0ucm90YXRpb24pLCBjb252ZXJ0ZWRQb3NpdGlvbi55IC0gcmFkaXVzICogTWF0aC5zaW4oLXRoZXRhMSArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSkpO1xyXG4gICAgICAgIHBvaW50cy5wdXNoKG5ldyB0eXBlc18xLlZlY3RvcjIoY29udmVydGVkUG9zaXRpb24ueCArIHJhZGl1cyAqIE1hdGguY29zKHRoZXRhMSArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSwgY29udmVydGVkUG9zaXRpb24ueSAtIHJhZGl1cyAqIE1hdGguc2luKHRoZXRhMSArIHF1YWQudHJhbnNmb3JtLnJvdGF0aW9uKSkpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLm1vdmVUbyhwb2ludHNbM10ueCwgcG9pbnRzWzNdLnkpO1xyXG4gICAgICAgIHBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgICAgICBfdGhpcy5jYW52YXMubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmZpbGwoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGNhbnZhc+yXkCDsm5DsnYQg6re466a8XHJcbiAgICAgKiBAcGFyYW0gY2lyY2xlXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uIChjaXJjbGUpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsU3R5bGUgPSBjaXJjbGUuY29sb3I7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFBvc2l0aW9uID0gdGhpcy5nZXRSZWFsUGl4ZWxQb3NpdGlvbihjaXJjbGUudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICB2YXIgY29udmVydGVkU2NhbGUgPSB0aGlzLmNvbnZlcnRNZXRlclRvUGl4ZWwoY2lyY2xlLnRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuZWxsaXBzZTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5lbGxpcHNlKGNvbnZlcnRlZFBvc2l0aW9uLngsIGNvbnZlcnRlZFBvc2l0aW9uLnksIGNvbnZlcnRlZFNjYWxlLngsIGNvbnZlcnRlZFNjYWxlLnksIGNpcmNsZS50cmFuc2Zvcm0ucm90YXRpb24sIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5maWxsKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDrr7jthLDri6jsnITsnZggVmVjdG9y66W8IOyLpOygnCDqt7jroKTsp4ggUGl4ZWzri6jsnITroZwg67CU6r+U7KSMXHJcbiAgICAgKiBAcGFyYW0gdmV0b3JcclxuICAgICAqL1xyXG4gICAgQ2FudmFzRGVsZWdhdG9yLnByb3RvdHlwZS5jb252ZXJ0TWV0ZXJUb1BpeGVsID0gZnVuY3Rpb24gKHZldG9yKSB7XHJcbiAgICAgICAgdmFyIGNvbnZlcnRlZFZlY3RvciA9IHR5cGVzXzEuVmVjdG9yMi5tdWx0aXBseSh2ZXRvciwgdGhpcy56b29tU2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZFZlY3RvcjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOuvuO2EsOuLqOychOydmCBwb3NpdGlvbiB2ZWN0b3Lrpbwg7Iuk7KCcIOq3uOugpOyniCBQaXhlbOychOy5mOuhnCDrsJTqv5TspIxcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmdldFJlYWxQaXhlbFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHJhdGlvID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAvIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgY2FtZXJhV2lkdGggPSB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGggLyB0aGlzLnpvb21TaXplO1xyXG4gICAgICAgIHZhciBjYW1lcmFIZWlnaHQgPSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gdGhpcy56b29tU2l6ZTtcclxuICAgICAgICB2YXIgY29udmVydGVkVmVjdG9yID0gbmV3IHR5cGVzXzEuVmVjdG9yMih0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGggLyAyLCB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMik7XHJcbiAgICAgICAgdmFyIGRlbHRhVmVjdG9yID0gdGhpcy5jb252ZXJ0TWV0ZXJUb1BpeGVsKHR5cGVzXzEuVmVjdG9yMi5zdWJzdHJhY3QocG9zaXRpb24sIHRoaXMuY2FtZXJhUG9zaXRpb24pKTtcclxuICAgICAgICBkZWx0YVZlY3Rvci55ID0gLWRlbHRhVmVjdG9yLnk7XHJcbiAgICAgICAgY29udmVydGVkVmVjdG9yID0gdHlwZXNfMS5WZWN0b3IyLmFkZChjb252ZXJ0ZWRWZWN0b3IsIGRlbHRhVmVjdG9yKTtcclxuICAgICAgICByZXR1cm4gY29udmVydGVkVmVjdG9yO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6rKp7J6QIO2ZnOyEse2ZlFxyXG4gICAgICovXHJcbiAgICBDYW52YXNEZWxlZ2F0b3IucHJvdG90eXBlLmVuYWJsZUdyaWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gVE9ET1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IG4gPSAxMDtcclxuICAgICAgICBsZXQgc21hbGxVbml0ID0gMTtcclxuICAgICAgICBsZXQgYmlnVW5pdCA9IHNtYWxsVW5pdCAqIDEwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gLTEwMDsgeCA8PSAxMDA7IHggKz0gc21hbGxVbml0KSB7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gbmV3IFBhdGgobmV3IFRyYW5zZm9ybShWZWN0b3IyLlpFUk8sIFZlY3RvcjIuWkVSTyksICdyZ2JhKDAsIDAsIDAsIDAuMSknKTtcclxuICAgICAgICAgICAgcGF0aC5wb2ludExpc3QucHVzaChuZXcgVmVjdG9yMih4LCAtMTAwKSk7XHJcbiAgICAgICAgICAgIHBhdGgucG9pbnRMaXN0LnB1c2gobmV3IFZlY3RvcjIoeCwgKzEwMCkpO1xyXG4gICAgICAgICAgICBwYXRoLndpZHRoID0gMSAvIHRoaXMuem9vbVNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BhdGgocGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBlbGVtZW507JeQIOuMgO2VnCDsnbTrsqTtirgg7ISk7KCVXHJcbiAgICAgKi9cclxuICAgIENhbnZhc0RlbGVnYXRvci5wcm90b3R5cGUuc2V0dXBFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnpvb21TaXplIC09IGUuZGVsdGFZIC8gTWF0aC5hYnMoZS5kZWx0YVkpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuem9vbVNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuem9vbVNpemUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbnMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNhbWVyYVBvc2l0aW9uID0gdHlwZXNfMS5WZWN0b3IyLnN1YnN0cmFjdChfdGhpcy5jYW1lcmFQb3NpdGlvbiwgbmV3IHR5cGVzXzEuVmVjdG9yMihlLm1vdmVtZW50WCAvIF90aGlzLnpvb21TaXplLCAtZS5tb3ZlbWVudFkgLyBfdGhpcy56b29tU2l6ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbnZhc0RlbGVnYXRvcjtcclxufSgpKTtcclxuZXhwb3J0cy5DYW52YXNEZWxlZ2F0b3IgPSBDYW52YXNEZWxlZ2F0b3I7XHJcbnZhciBQaWN0dXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGljdHVyZSh0cmFuc2Zvcm0sIGNvbG9yKSB7XHJcbiAgICAgICAgaWYgKGNvbG9yID09PSB2b2lkIDApIHsgY29sb3IgPSAncmdiYSgwLCAwLCAwLCAwLjIpJzsgfVxyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBQaWN0dXJlO1xyXG59KCkpO1xyXG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xyXG52YXIgU2hhcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2hhcGUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTaGFwZSgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gU2hhcGU7XHJcbn0oUGljdHVyZSkpO1xyXG5leHBvcnRzLlNoYXBlID0gU2hhcGU7XHJcbnZhciBGb250ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEZvbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBGb250KHRyYW5zZm9ybSwgY29sb3IpIHtcclxuICAgICAgICBpZiAoY29sb3IgPT09IHZvaWQgMCkgeyBjb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDEpJzsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRyYW5zZm9ybSwgY29sb3IpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuc2l6ZSA9IDI0O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBGb250O1xyXG59KFBpY3R1cmUpKTtcclxuZXhwb3J0cy5Gb250ID0gRm9udDtcclxudmFyIFBhdGggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUGF0aCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFBhdGgodHJhbnNmb3JtLCBjb2xvcikge1xyXG4gICAgICAgIGlmIChjb2xvciA9PT0gdm9pZCAwKSB7IGNvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMSknOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHJhbnNmb3JtLCBjb2xvcikgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wb2ludExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBfdGhpcy53aWR0aCA9IDE7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBhdGg7XHJcbn0oU2hhcGUpKTtcclxuZXhwb3J0cy5QYXRoID0gUGF0aDtcclxudmFyIFF1YWQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUXVhZCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFF1YWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFF1YWQ7XHJcbn0oU2hhcGUpKTtcclxuZXhwb3J0cy5RdWFkID0gUXVhZDtcclxudmFyIENpcmNsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDaXJjbGUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDaXJjbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENpcmNsZTtcclxufShTaGFwZSkpO1xyXG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIG1vZGVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbFwiKTtcclxudmFyIG1vZGVsID0gbmV3IG1vZGVsXzEuTW9kZWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpbXVsYXRpb24tdmlldycpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1bml0XzEgPSByZXF1aXJlKFwiLi91bml0XCIpO1xyXG52YXIgcmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlcmVyXCIpO1xyXG52YXIgZHJhd2VyXzEgPSByZXF1aXJlKFwiLi9kcmF3ZXJcIik7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudFwiKTtcclxudmFyIE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9kZWwoZWxlbWVodCkge1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBuZXcgdW5pdF8xLkVudmlyb25tZW50KCk7XHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudC50aW1lU2NhbGUgPSA1MDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IHJlbmRlcmVyXzEuUmVuZGVyZXIodGhpcy5lbnZpcm9ubWVudCwgZWxlbWVodCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gICAgTW9kZWwucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudHJ1Y2tHZW5lcmF0b3IgPSBuZXcgVHJ1Y2tHZW5lcmF0b3IodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy50cnVja0dlbmVyYXRvci50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKC0yMCwgMCk7XHJcbiAgICAgICAgdGhpcy50cnVja0Rlc3RpbmF0aW9uID0gbmV3IFRydWNrRGVzdGluYXRpb24odGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy50cnVja0Rlc3RpbmF0aW9uLnRyYW5zZm9ybS5wb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgdGhpcy53YXRpbmdQbGFjZSA9IG5ldyBXYWl0aW5nUGxhY2UodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy53YXRpbmdQbGFjZS50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDEwMCwgMCk7XHJcbiAgICAgICAgdGhpcy5pbkdhdGV3YXkgPSBuZXcgSW5HYXRld2F5KHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHRoaXMuaW5HYXRld2F5LnRyYW5zZm9ybS5wb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoMjAwLCAwKTtcclxuICAgICAgICB0aGlzLmxpbmVyUHJlcGFyYXRpb25QbGFjZSA9IG5ldyBTZWFidWxrVHJ1Y2tMaW5lclByZXBhcmF0aW9uUGxhY2UodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy5saW5lclByZXBhcmF0aW9uUGxhY2UudHJhbnNmb3JtLnBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMigzMDAsIDUwKTtcclxuICAgICAgICB0aGlzLndlaWdodE1lc2F1cmVtZW50UGxhY2UxID0gbmV3IFdlaWdodE1lc2F1cmVtZW50UGxhY2UodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMS50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDQwMCwgMCk7XHJcbiAgICAgICAgdGhpcy5idWxrUHJvZHVjdExvYWRpbmdQbGFjZSA9IG5ldyBCdWxrUHJvZHVjdExvYWRpbmdQbGFjZSh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB0aGlzLmJ1bGtQcm9kdWN0TG9hZGluZ1BsYWNlLnRyYW5zZm9ybS5wb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoNTAwLCAwKTtcclxuICAgICAgICB0aGlzLmRvY2tQcm9kdWN0TG9hZGluZ1BsYWNlID0gbmV3IERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHRoaXMuZG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2UudHJhbnNmb3JtLnBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMig1MDAsIC01MCk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMiA9IG5ldyBXZWlnaHRNZXNhdXJlbWVudFBsYWNlKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHRoaXMud2VpZ2h0TWVzYXVyZW1lbnRQbGFjZTIudHJhbnNmb3JtLnBvc2l0aW9uID0gbmV3IHR5cGVzXzEuVmVjdG9yMig2MDAsIDApO1xyXG4gICAgICAgIHRoaXMub3V0R2F0ZXdheSA9IG5ldyBPdXRHYXRld2F5KHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHRoaXMub3V0R2F0ZXdheS50cmFuc2Zvcm0ucG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKDcwMCwgMCk7XHJcbiAgICAgICAgdGhpcy5leHRlcm5hbERlc3RpbmF0aW9uID0gbmV3IEV4dGVybmFsRGVzdGluYXRpb24odGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgdGhpcy5leHRlcm5hbERlc3RpbmF0aW9uLnRyYW5zZm9ybS5wb3NpdGlvbiA9IG5ldyB0eXBlc18xLlZlY3RvcjIoODAwLCAwKTtcclxuICAgICAgICAvLyDtirjrn60g64+E7LCp7KeAIC0+IOuMgOq4sOyLpFxyXG4gICAgICAgIHZhciB0ZDJ3cCA9IG5ldyBSb2FkKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGQyd3AucG9pbnRMaXN0LnB1c2godGhpcy50cnVja0Rlc3RpbmF0aW9uLmdldFNpZGVQb3NpdGlvbigwKSk7XHJcbiAgICAgICAgICAgIHRkMndwLnBvaW50TGlzdC5wdXNoKHRoaXMud2F0aW5nUGxhY2UuZ2V0U2lkZVBvc2l0aW9uKE1hdGguUEkpKTtcclxuICAgICAgICAgICAgdGQyd3AucG9ydExpc3QucHVzaCh0aGlzLndhdGluZ1BsYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g64yA6riw7IukIC0+IOqyjOydtO2KuOybqOydtFxyXG4gICAgICAgIHZhciB3cDJpZyA9IG5ldyBSb2FkKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd3AyaWcucG9pbnRMaXN0LnB1c2godGhpcy53YXRpbmdQbGFjZS5nZXRTaWRlUG9zaXRpb24oMCkpO1xyXG4gICAgICAgICAgICB3cDJpZy5wb2ludExpc3QucHVzaCh0aGlzLmluR2F0ZXdheS5nZXRTaWRlUG9zaXRpb24oTWF0aC5QSSkpO1xyXG4gICAgICAgICAgICB3cDJpZy5wb3J0TGlzdC5wdXNoKHRoaXMuaW5HYXRld2F5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6rKM7J207Yq47Juo7J20IC0+IOuyjO2BrOyaqSDrrLTqsowg7Lih7KCV7IukMVxyXG4gICAgICAgIHZhciBpZzJ3bXAxID0gbmV3IFJvYWQodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZzJ3bXAxLnBvaW50TGlzdC5wdXNoKHRoaXMuaW5HYXRld2F5LmdldFNpZGVQb3NpdGlvbigwKSk7XHJcbiAgICAgICAgICAgIGlnMndtcDEucG9pbnRMaXN0LnB1c2godGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMS5nZXRTaWRlUG9zaXRpb24oTWF0aC5QSSkpO1xyXG4gICAgICAgICAgICBpZzJ3bXAxLnBvcnRMaXN0LnB1c2godGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOuyjO2BrOyaqSDrrLTqsowg7Lih7KCV7IukMSAtPiDrsoztgawg7KCc7ZKIIOyggeyerOyLpFxyXG4gICAgICAgIHZhciB3bXAxMmJwbHAgPSBuZXcgUm9hZCh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdtcDEyYnBscC5wb2ludExpc3QucHVzaCh0aGlzLndlaWdodE1lc2F1cmVtZW50UGxhY2UxLmdldFNpZGVQb3NpdGlvbigwKSk7XHJcbiAgICAgICAgICAgIHdtcDEyYnBscC5wb2ludExpc3QucHVzaCh0aGlzLmJ1bGtQcm9kdWN0TG9hZGluZ1BsYWNlLmdldFNpZGVQb3NpdGlvbihNYXRoLlBJKSk7XHJcbiAgICAgICAgICAgIHdtcDEyYnBscC5wb3J0TGlzdC5wdXNoKHRoaXMuYnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDrsoztgawg7KCc7ZKIIOyggeyerOyLpCAtPiDrsoztgazsmqkg66y06rKMIOy4oeygleyLpDJcclxuICAgICAgICB2YXIgYnBscDJ3bXAyID0gbmV3IFJvYWQodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicGxwMndtcDIucG9pbnRMaXN0LnB1c2godGhpcy5idWxrUHJvZHVjdExvYWRpbmdQbGFjZS5nZXRTaWRlUG9zaXRpb24oMCkpO1xyXG4gICAgICAgICAgICBicGxwMndtcDIucG9pbnRMaXN0LnB1c2godGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMi5nZXRTaWRlUG9zaXRpb24oTWF0aC5QSSkpO1xyXG4gICAgICAgICAgICBicGxwMndtcDIucG9ydExpc3QucHVzaCh0aGlzLndlaWdodE1lc2F1cmVtZW50UGxhY2UyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g67KM7YGs7JqpIOustOqyjCDsuKHsoJXsi6QyIC0+IOy2nOq1rCDqsozsnbTtirjsm6jsnbRcclxuICAgICAgICB2YXIgd21wMjJvZyA9IG5ldyBSb2FkKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd21wMjJvZy5wb2ludExpc3QucHVzaCh0aGlzLndlaWdodE1lc2F1cmVtZW50UGxhY2UyLmdldFNpZGVQb3NpdGlvbigwKSk7XHJcbiAgICAgICAgICAgIHdtcDIyb2cucG9pbnRMaXN0LnB1c2godGhpcy5vdXRHYXRld2F5LmdldFNpZGVQb3NpdGlvbihNYXRoLlBJKSk7XHJcbiAgICAgICAgICAgIHdtcDIyb2cucG9ydExpc3QucHVzaCh0aGlzLm91dEdhdGV3YXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDstpzqtawg6rKM7J207Yq47Juo7J20IC0+IOyZuOu2gCDrqqnsoIHsp4BcclxuICAgICAgICB2YXIgb2cyZWQgPSBuZXcgUm9hZCh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9nMmVkLnBvaW50TGlzdC5wdXNoKHRoaXMub3V0R2F0ZXdheS5nZXRTaWRlUG9zaXRpb24oMCkpO1xyXG4gICAgICAgICAgICBvZzJlZC5wb2ludExpc3QucHVzaCh0aGlzLmV4dGVybmFsRGVzdGluYXRpb24uZ2V0U2lkZVBvc2l0aW9uKE1hdGguUEkpKTtcclxuICAgICAgICAgICAgb2cyZWQucG9ydExpc3QucHVzaCh0aGlzLmV4dGVybmFsRGVzdGluYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDqsozsnbTtirjsm6jsnbQgLT4g7JSo67KM7YGs7JqpIOudvOydtOuEiCDspIDruYTsi6RcclxuICAgICAgICB2YXIgaWcybHBwID0gbmV3IFJvYWQodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdG1wMSA9IHR5cGVzXzEuVmVjdG9yMi5hZGQodGhpcy5pbkdhdGV3YXkuZ2V0U2lkZVBvc2l0aW9uKDApLCBuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIDMpKTtcclxuICAgICAgICAgICAgdmFyIHRtcDIgPSB0aGlzLmxpbmVyUHJlcGFyYXRpb25QbGFjZS5nZXRTaWRlUG9zaXRpb24oTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHZhciB0bXAzID0gdHlwZXNfMS5WZWN0b3IyLnN1YnN0cmFjdCh0bXAyLCB0bXAxKTtcclxuICAgICAgICAgICAgaWcybHBwLnBvaW50TGlzdC5wdXNoKHRtcDEpO1xyXG4gICAgICAgICAgICBpZzJscHAucG9pbnRMaXN0LnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMih0bXAxLnggKyB0bXAzLnggLyAzLCB0bXAxLnkpKTtcclxuICAgICAgICAgICAgaWcybHBwLnBvaW50TGlzdC5wdXNoKG5ldyB0eXBlc18xLlZlY3RvcjIodG1wMS54ICsgdG1wMy54IC8gMyAqIDIsIHRtcDIueSkpO1xyXG4gICAgICAgICAgICBpZzJscHAucG9pbnRMaXN0LnB1c2godG1wMik7XHJcbiAgICAgICAgICAgIGlnMmxwcC5wb3J0TGlzdC5wdXNoKHRoaXMubGluZXJQcmVwYXJhdGlvblBsYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g7JSo67KM7YGs7JqpIOudvOydtOuEiCDspIDruYTsi6QgLT4g67KM7YGs7JqpIOustOqyjCDsuKHsoJXsi6QxXHJcbiAgICAgICAgdmFyIGxwcDJ3bXAxID0gbmV3IFJvYWQodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdG1wMSA9IHRoaXMubGluZXJQcmVwYXJhdGlvblBsYWNlLmdldFNpZGVQb3NpdGlvbigwKTtcclxuICAgICAgICAgICAgdmFyIHRtcDIgPSB0eXBlc18xLlZlY3RvcjIuYWRkKHRoaXMud2VpZ2h0TWVzYXVyZW1lbnRQbGFjZTEuZ2V0U2lkZVBvc2l0aW9uKE1hdGguUEkpLCBuZXcgdHlwZXNfMS5WZWN0b3IyKDAsIDMpKTtcclxuICAgICAgICAgICAgdmFyIHRtcDMgPSB0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KHRtcDIsIHRtcDEpO1xyXG4gICAgICAgICAgICBscHAyd21wMS5wb2ludExpc3QucHVzaCh0bXAxKTtcclxuICAgICAgICAgICAgbHBwMndtcDEucG9pbnRMaXN0LnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMih0bXAxLnggKyB0bXAzLnggLyAzLCB0bXAxLnkpKTtcclxuICAgICAgICAgICAgbHBwMndtcDEucG9pbnRMaXN0LnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMih0bXAxLnggKyB0bXAzLnggLyAzICogMiwgdG1wMi55KSk7XHJcbiAgICAgICAgICAgIGxwcDJ3bXAxLnBvaW50TGlzdC5wdXNoKHRtcDIpO1xyXG4gICAgICAgICAgICBscHAyd21wMS5wb3J0TGlzdC5wdXNoKHRoaXMud2VpZ2h0TWVzYXVyZW1lbnRQbGFjZTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLyDsnoXqtawg6rKM7J207Yq47Juo7J20IC0+IOuPhO2BrOyaqSDsoJztkogg7KCB7J6s7IukXHJcbiAgICAgICAgdmFyIGlnMmRwbHAgPSBuZXcgUm9hZCh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB0bXAxID0gdHlwZXNfMS5WZWN0b3IyLmFkZCh0aGlzLmluR2F0ZXdheS5nZXRTaWRlUG9zaXRpb24oMCksIG5ldyB0eXBlc18xLlZlY3RvcjIoMCwgLTMpKTtcclxuICAgICAgICAgICAgdmFyIHRtcDIgPSB0aGlzLmRvY2tQcm9kdWN0TG9hZGluZ1BsYWNlLmdldFNpZGVQb3NpdGlvbihNYXRoLlBJKTtcclxuICAgICAgICAgICAgdmFyIHRtcDMgPSB0eXBlc18xLlZlY3RvcjIuc3Vic3RyYWN0KHRtcDIsIHRtcDEpO1xyXG4gICAgICAgICAgICBpZzJkcGxwLnBvaW50TGlzdC5wdXNoKHRtcDEpO1xyXG4gICAgICAgICAgICBpZzJkcGxwLnBvaW50TGlzdC5wdXNoKG5ldyB0eXBlc18xLlZlY3RvcjIodG1wMS54ICsgdG1wMy54IC8gMywgdG1wMS55KSk7XHJcbiAgICAgICAgICAgIGlnMmRwbHAucG9pbnRMaXN0LnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMih0bXAxLnggKyB0bXAzLnggLyAzICogMiwgdG1wMi55KSk7XHJcbiAgICAgICAgICAgIGlnMmRwbHAucG9pbnRMaXN0LnB1c2godG1wMik7XHJcbiAgICAgICAgICAgIGlnMmRwbHAucG9ydExpc3QucHVzaCh0aGlzLmRvY2tQcm9kdWN0TG9hZGluZ1BsYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g64+E7YGs7JqpIOygnO2SiCDsoIHsnqzsi6QgLT4g7Lac6rWsIOqyjOydtO2KuOybqOydtFxyXG4gICAgICAgIHZhciBkcGxwMm9nID0gbmV3IFJvYWQodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdG1wMSA9IHRoaXMuZG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2UuZ2V0U2lkZVBvc2l0aW9uKDApO1xyXG4gICAgICAgICAgICB2YXIgdG1wMiA9IHR5cGVzXzEuVmVjdG9yMi5hZGQodGhpcy5vdXRHYXRld2F5LmdldFNpZGVQb3NpdGlvbihNYXRoLlBJKSwgbmV3IHR5cGVzXzEuVmVjdG9yMigwLCAtMykpO1xyXG4gICAgICAgICAgICB2YXIgdG1wMyA9IHR5cGVzXzEuVmVjdG9yMi5zdWJzdHJhY3QodG1wMiwgdG1wMSk7XHJcbiAgICAgICAgICAgIGRwbHAyb2cucG9pbnRMaXN0LnB1c2godG1wMSk7XHJcbiAgICAgICAgICAgIGRwbHAyb2cucG9pbnRMaXN0LnB1c2gobmV3IHR5cGVzXzEuVmVjdG9yMih0bXAxLnggKyB0bXAzLnggLyAzLCB0bXAxLnkpKTtcclxuICAgICAgICAgICAgZHBscDJvZy5wb2ludExpc3QucHVzaChuZXcgdHlwZXNfMS5WZWN0b3IyKHRtcDEueCArIHRtcDMueCAvIDMgKiAyLCB0bXAyLnkpKTtcclxuICAgICAgICAgICAgZHBscDJvZy5wb2ludExpc3QucHVzaCh0bXAyKTtcclxuICAgICAgICAgICAgZHBscDJvZy5wb3J0TGlzdC5wdXNoKHRoaXMub3V0R2F0ZXdheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJ1Y2tHZW5lcmF0b3IucG9ydExpc3QucHVzaCh0aGlzLnRydWNrRGVzdGluYXRpb24pO1xyXG4gICAgICAgIHRoaXMudHJ1Y2tEZXN0aW5hdGlvbi5wb3J0TGlzdC5wdXNoKHRkMndwKTtcclxuICAgICAgICB0aGlzLndhdGluZ1BsYWNlLnBvcnRMaXN0LnB1c2god3AyaWcpO1xyXG4gICAgICAgIHRoaXMuaW5HYXRld2F5LnBvcnRMaXN0LnB1c2goaWcybHBwKTtcclxuICAgICAgICB0aGlzLmluR2F0ZXdheS5wb3J0TGlzdC5wdXNoKGlnMndtcDEpO1xyXG4gICAgICAgIHRoaXMuaW5HYXRld2F5LnBvcnRMaXN0LnB1c2goaWcyZHBscCk7XHJcbiAgICAgICAgdGhpcy5saW5lclByZXBhcmF0aW9uUGxhY2UucG9ydExpc3QucHVzaChscHAyd21wMSk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMS5wb3J0TGlzdC5wdXNoKHdtcDEyYnBscCk7XHJcbiAgICAgICAgdGhpcy5idWxrUHJvZHVjdExvYWRpbmdQbGFjZS5wb3J0TGlzdC5wdXNoKGJwbHAyd21wMik7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMi5wb3J0TGlzdC5wdXNoKHdtcDIyb2cpO1xyXG4gICAgICAgIHRoaXMuZG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2UucG9ydExpc3QucHVzaChkcGxwMm9nKTtcclxuICAgICAgICB0aGlzLm91dEdhdGV3YXkucG9ydExpc3QucHVzaChvZzJlZCk7XHJcbiAgICAgICAgdGhpcy50cnVja0dlbmVyYXRvci5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMudHJ1Y2tEZXN0aW5hdGlvbi5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMud2F0aW5nUGxhY2UucmVnaXN0ZXIoKTtcclxuICAgICAgICB0aGlzLmluR2F0ZXdheS5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMubGluZXJQcmVwYXJhdGlvblBsYWNlLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMS5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMuYnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UucmVnaXN0ZXIoKTtcclxuICAgICAgICB0aGlzLmRvY2tQcm9kdWN0TG9hZGluZ1BsYWNlLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgdGhpcy53ZWlnaHRNZXNhdXJlbWVudFBsYWNlMi5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMub3V0R2F0ZXdheS5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRoaXMuZXh0ZXJuYWxEZXN0aW5hdGlvbi5yZWdpc3RlcigpO1xyXG4gICAgICAgIHRkMndwLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgd3AyaWcucmVnaXN0ZXIoKTtcclxuICAgICAgICBpZzJ3bXAxLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgd21wMTJicGxwLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgYnBscDJ3bXAyLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgd21wMjJvZy5yZWdpc3RlcigpO1xyXG4gICAgICAgIG9nMmVkLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgaWcybHBwLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgbHBwMndtcDEucmVnaXN0ZXIoKTtcclxuICAgICAgICBpZzJkcGxwLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgZHBscDJvZy5yZWdpc3RlcigpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNb2RlbDtcclxufSgpKTtcclxuZXhwb3J0cy5Nb2RlbCA9IE1vZGVsO1xyXG4vKipcclxuICog7Yq465+t7J20IOyngOuCmOuLpOuLkCDquLhcclxuICovXHJcbnZhciBSb2FkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJvYWQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSb2FkKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuZm9yd2FyZExhbmVDb3VudCA9IDE7XHJcbiAgICAgICAgX3RoaXMuYmFja3dhcmRMYW5lQ291bnQgPSAxO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ1JvYWQnO1xyXG4gICAgICAgIF90aGlzLnBvaW50TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFJvYWQucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIGFnZW50LnRyYW5zZm9ybS5wb3NpdGlvbiA9IHRoaXMucG9pbnRMaXN0WzBdO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFJvYWQucHJvdG90eXBlLm9uQWdlbnRPdXQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBSb2FkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIGxhbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgdmFyIHBhdGggPSBuZXcgZHJhd2VyXzEuUGF0aCh0aGlzLnRyYW5zZm9ybSwgJ3JnYmEoMTI4LCAyNTUsIDI1NSwgMC40KScpO1xyXG4gICAgICAgIHRoaXMucG9pbnRMaXN0LmZvckVhY2goZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgICAgIHBhdGgucG9pbnRMaXN0LnB1c2gocG9pbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhdGgud2lkdGggPSBsYW5lV2lkdGg7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocGF0aCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgUm9hZC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBSb2FkLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIO2VtOuLuSDquLjsnZgg6rCB64+EIOuwmO2ZmFxyXG4gICAgICogQHBhcmFtIGluZGV4XHJcbiAgICAgKi9cclxuICAgIFJvYWQucHJvdG90eXBlLmdldFJvYWRBbmdsZSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvaW50TGlzdC5sZW5ndGggPD0gaW5kZXggKyAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnBvaW50TGlzdFtpbmRleCArIDFdLnkgLSB0aGlzLnBvaW50TGlzdFtpbmRleF0ueSwgdGhpcy5wb2ludExpc3RbaW5kZXggKyAxXS54IC0gdGhpcy5wb2ludExpc3RbaW5kZXhdLngpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSb2FkO1xyXG59KHVuaXRfMS5GYWNpbGl0eSkpO1xyXG4vKipcclxuICog7Yq465+tIOuPhOywqeyngOuhnCDrk6TslrTsmKwg7Yq465+t65Ok7J2EIOyDneyEse2VmOuKlCDsnqXshoxcclxuICovXHJcbnZhciBUcnVja0dlbmVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUcnVja0dlbmVyYXRvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRydWNrR2VuZXJhdG9yKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnVHJ1Y2tHZW5lcmF0b3InO1xyXG4gICAgICAgIF90aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIF90aGlzLm5leHRUcnVja0luZGV4ID0gMDtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUub25BZ2VudEluID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tHZW5lcmF0b3IucHJvdG90eXBlLm9uQWdlbnRPdXQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBjaXJjbGUgPSBuZXcgZHJhd2VyXzEuQ2lyY2xlKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhjaXJjbGUpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICftirjrn60g7IOd7ISx6riwJztcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhmb250KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0dlbmVyYXRvci5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIoMSwgMSk7XHJcbiAgICAgICAgLypcclxuICAgICAgICBsZXQgdHJ1Y2sgPSBuZXcgRG9ja1RydWNrKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIHRydWNrLnJlZ2lzdGVyKCk7XHJcbiAgICAgICAgdGhpcy5wb3J0TGlzdFswXS5hcHBlbmRBZ2VudCh0cnVjayk7XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2MjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lRGF0YSA9IG5ldyB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEoTWF0aC5yYW5kb20oKSAqIDcyMDAwMCwgdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfU0VBX0JVTEspO1xyXG4gICAgICAgICAgICB0aGlzLnRydWNrQXJyaXZhbFRpbWVEYXRhTGlzdC5wdXNoKHRpbWVEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lRGF0YSA9IG5ldyB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEoTWF0aC5yYW5kb20oKSAqIDcyMDAwMCwgdHlwZXNfMS5UcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfVEFOS19CVUxLKTtcclxuICAgICAgICAgICAgdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3QucHVzaCh0aW1lRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzU4OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRpbWVEYXRhID0gbmV3IHR5cGVzXzEuVHJ1Y2tBcnJpdmFsRGF0YShNYXRoLnJhbmRvbSgpICogNzIwMDAwLCB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9ET0tFKTtcclxuICAgICAgICAgICAgdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3QucHVzaCh0aW1lRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0ID0gdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS50aW1lIC0gYi50aW1lO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrR2VuZXJhdG9yLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5uZXh0VHJ1Y2tJbmRleCA8IHRoaXMudHJ1Y2tBcnJpdmFsVGltZURhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dFRydWNrQXJyaXZhbFRpbWVEYXRhID0gdGhpcy50cnVja0Fycml2YWxUaW1lRGF0YUxpc3RbdGhpcy5uZXh0VHJ1Y2tJbmRleF07XHJcbiAgICAgICAgICAgIGlmIChuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEudGltZSA8IHRoaXMuZW52aXJvbm1lbnQuZWxhcHNlZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cnVjayA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEua2luZCA9PSB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9TRUFfQlVMSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRydWNrID0gbmV3IFNlYUJ1bGtUcnVjayh0aGlzLmVudmlyb25tZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHRUcnVja0Fycml2YWxUaW1lRGF0YS5raW5kID09IHR5cGVzXzEuVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1RBTktfQlVMSykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRydWNrID0gbmV3IFRhbmtCdWxrVHJ1Y2sodGhpcy5lbnZpcm9ubWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0VHJ1Y2tBcnJpdmFsVGltZURhdGEua2luZCA9PSB0eXBlc18xLlRydWNrQXJyaXZhbERhdGEuVFJVQ0tfS0lORF9ET0tFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1Y2sgPSBuZXcgRG9ja1RydWNrKHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJ1Y2sucmVnaXN0ZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9ydExpc3RbMF0uYXBwZW5kQWdlbnQodHJ1Y2spO1xyXG4gICAgICAgICAgICAgICAgbmV4dFRydWNrQXJyaXZhbFRpbWVEYXRhLmlzQXJyaXZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUcnVja0luZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRydWNrR2VuZXJhdG9yO1xyXG59KHVuaXRfMS5GYWNpbGl0eSkpO1xyXG4vKipcclxuICog7Yq465+tIOuPhOywqeyngFxyXG4gKi9cclxudmFyIFRydWNrRGVzdGluYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVHJ1Y2tEZXN0aW5hdGlvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRydWNrRGVzdGluYXRpb24oZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdUcnVja0Rlc3RpbmF0aW9uJztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tEZXN0aW5hdGlvbi5wcm90b3R5cGUub25BZ2VudEluID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbURlbHRhUG9zaXRpb24gPSBuZXcgdHlwZXNfMS5WZWN0b3IyKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRyYW5zZm9ybS5zY2FsZS54IC0gdGhpcy50cmFuc2Zvcm0uc2NhbGUueCAvIDIsIE1hdGgucmFuZG9tKCkgKiB0aGlzLnRyYW5zZm9ybS5zY2FsZS55IC0gdGhpcy50cmFuc2Zvcm0uc2NhbGUueSAvIDIpO1xyXG4gICAgICAgIC8vYWdlbnQudHJhbnNmb3JtLnBvc2l0aW9uID0gVmVjdG9yMi5hZGQodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24sIHJhbmRvbURlbHRhUG9zaXRpb24pO1xyXG4gICAgICAgIC8vYWdlbnQudHJhbnNmb3JtLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xyXG4gICAgICAgIHRoaXMucG9ydExpc3RbMF0uYXBwZW5kQWdlbnQoYWdlbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5vbkFnZW50T3V0ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgVHJ1Y2tEZXN0aW5hdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICftirjrn60g64+E7LCp7KeAJztcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhmb250KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVja0Rlc3RpbmF0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRydWNrRGVzdGluYXRpb24ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUcnVja0Rlc3RpbmF0aW9uO1xyXG59KHVuaXRfMS5GYWNpbGl0eSkpO1xyXG52YXIgV2FpdGluZ1BsYWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFdhaXRpbmdQbGFjZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFdhaXRpbmdQbGFjZShlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ1dhaXRpbmdQbGFjZSc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgV2FpdGluZ1BsYWNlLnByb3RvdHlwZS5vbkFnZW50SW4gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICB0aGlzLnBvcnRMaXN0WzBdLmFwcGVuZEFnZW50KGFnZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBXYWl0aW5nUGxhY2UucHJvdG90eXBlLm9uQWdlbnRPdXQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBXYWl0aW5nUGxhY2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgcXVhZCA9IG5ldyBkcmF3ZXJfMS5RdWFkKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhxdWFkKTtcclxuICAgICAgICB2YXIgZm9udCA9IG5ldyBkcmF3ZXJfMS5Gb250KHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBmb250LnRleHQgPSAn7Yq465+tIOuMgOq4sOyLpCc7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcoZm9udCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgV2FpdGluZ1BsYWNlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFdhaXRpbmdQbGFjZS5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdhaXRpbmdQbGFjZTtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxudmFyIEluR2F0ZXdheSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhJbkdhdGV3YXksIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBJbkdhdGV3YXkoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdHYXRld2F5JztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBJbkdhdGV3YXkucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIGlmIChhZ2VudCBpbnN0YW5jZW9mIFNlYUJ1bGtUcnVjaykge1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRMaXN0WzBdLmFwcGVuZEFnZW50KGFnZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYWdlbnQgaW5zdGFuY2VvZiBUYW5rQnVsa1RydWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydExpc3RbMV0uYXBwZW5kQWdlbnQoYWdlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhZ2VudCBpbnN0YW5jZW9mIERvY2tUcnVjaykge1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRMaXN0WzJdLmFwcGVuZEFnZW50KGFnZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgSW5HYXRld2F5LnByb3RvdHlwZS5vbkFnZW50T3V0ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgSW5HYXRld2F5LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoY2FudmFzRGVsZWdhdG9yKSB7XHJcbiAgICAgICAgdmFyIHF1YWQgPSBuZXcgZHJhd2VyXzEuUXVhZCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcocXVhZCk7XHJcbiAgICAgICAgdmFyIGZvbnQgPSBuZXcgZHJhd2VyXzEuRm9udCh0aGlzLnRyYW5zZm9ybSk7XHJcbiAgICAgICAgZm9udC50ZXh0ID0gJ+qyjOydtO2KuOybqOydtCc7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcoZm9udCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgSW5HYXRld2F5LnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEluR2F0ZXdheS5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEluR2F0ZXdheTtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxudmFyIE91dEdhdGV3YXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoT3V0R2F0ZXdheSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE91dEdhdGV3YXkoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdHYXRld2F5JztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBPdXRHYXRld2F5LnByb3RvdHlwZS5vbkFnZW50SW4gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICB0aGlzLnBvcnRMaXN0WzBdLmFwcGVuZEFnZW50KGFnZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBPdXRHYXRld2F5LnByb3RvdHlwZS5vbkFnZW50T3V0ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgT3V0R2F0ZXdheS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICfqsozsnbTtirjsm6jsnbQnO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KGZvbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIE91dEdhdGV3YXkucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgT3V0R2F0ZXdheS5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE91dEdhdGV3YXk7XHJcbn0odW5pdF8xLkZhY2lsaXR5KSk7XHJcbnZhciBTZWFidWxrVHJ1Y2tMaW5lclByZXBhcmF0aW9uUGxhY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoU2VhYnVsa1RydWNrTGluZXJQcmVwYXJhdGlvblBsYWNlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gU2VhYnVsa1RydWNrTGluZXJQcmVwYXJhdGlvblBsYWNlKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnTGluZXJQcmVwYXJhdGlvblBsYWNlJztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBTZWFidWxrVHJ1Y2tMaW5lclByZXBhcmF0aW9uUGxhY2UucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIHRoaXMucG9ydExpc3RbMF0uYXBwZW5kQWdlbnQoYWdlbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFNlYWJ1bGtUcnVja0xpbmVyUHJlcGFyYXRpb25QbGFjZS5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFNlYWJ1bGtUcnVja0xpbmVyUHJlcGFyYXRpb25QbGFjZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICfslKjrsoztgazsmqkg65287J2064SIIOykgOu5hOyLpCc7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcoZm9udCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgU2VhYnVsa1RydWNrTGluZXJQcmVwYXJhdGlvblBsYWNlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFNlYWJ1bGtUcnVja0xpbmVyUHJlcGFyYXRpb25QbGFjZS5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlYWJ1bGtUcnVja0xpbmVyUHJlcGFyYXRpb25QbGFjZTtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxudmFyIFdlaWdodE1lc2F1cmVtZW50UGxhY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoV2VpZ2h0TWVzYXVyZW1lbnRQbGFjZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFdlaWdodE1lc2F1cmVtZW50UGxhY2UoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdXZWlnaHRNZXNhdXJlbWVudFBsYWNlJztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBXZWlnaHRNZXNhdXJlbWVudFBsYWNlLnByb3RvdHlwZS5vbkFnZW50SW4gPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICB0aGlzLnBvcnRMaXN0WzBdLmFwcGVuZEFnZW50KGFnZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBXZWlnaHRNZXNhdXJlbWVudFBsYWNlLnByb3RvdHlwZS5vbkFnZW50T3V0ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgV2VpZ2h0TWVzYXVyZW1lbnRQbGFjZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICfrrLTqsowg7Lih7KCV7IukJztcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhmb250KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBXZWlnaHRNZXNhdXJlbWVudFBsYWNlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFdlaWdodE1lc2F1cmVtZW50UGxhY2UucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXZWlnaHRNZXNhdXJlbWVudFBsYWNlO1xyXG59KHVuaXRfMS5GYWNpbGl0eSkpO1xyXG52YXIgQnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCdWxrUHJvZHVjdExvYWRpbmdQbGFjZShlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ0J1bGtQcm9kdWN0TG9hZGluZ1BsYWNlJztcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBCdWxrUHJvZHVjdExvYWRpbmdQbGFjZS5wcm90b3R5cGUub25BZ2VudEluID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICAgICAgdGhpcy5wb3J0TGlzdFswXS5hcHBlbmRBZ2VudChhZ2VudCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgQnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UucHJvdG90eXBlLm9uQWdlbnRPdXQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBCdWxrUHJvZHVjdExvYWRpbmdQbGFjZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgICAgIHZhciBmb250ID0gbmV3IGRyYXdlcl8xLkZvbnQodGhpcy50cmFuc2Zvcm0pO1xyXG4gICAgICAgIGZvbnQudGV4dCA9ICfrsoztgawg7KCc7ZKIIOyggeygnOyLpCc7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcoZm9udCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgQnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgQnVsa1Byb2R1Y3RMb2FkaW5nUGxhY2UucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCdWxrUHJvZHVjdExvYWRpbmdQbGFjZTtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxudmFyIERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2UoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdEb2NrUHJvZHVjdExvYWRpbmdQbGFjZSc7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgRG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2UucHJvdG90eXBlLm9uQWdlbnRJbiA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgICAgIHRoaXMucG9ydExpc3RbMF0uYXBwZW5kQWdlbnQoYWdlbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlLnByb3RvdHlwZS5vbkFnZW50T3V0ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgRG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgcXVhZCA9IG5ldyBkcmF3ZXJfMS5RdWFkKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhxdWFkKTtcclxuICAgICAgICB2YXIgZm9udCA9IG5ldyBkcmF3ZXJfMS5Gb250KHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBmb250LnRleHQgPSAn64+E7YGsIOygnO2SiCDsoIHsnqzsi6QnO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KGZvbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIERvY2tQcm9kdWN0TG9hZGluZ1BsYWNlLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRG9ja1Byb2R1Y3RMb2FkaW5nUGxhY2U7XHJcbn0odW5pdF8xLkZhY2lsaXR5KSk7XHJcbnZhciBFeHRlcm5hbERlc3RpbmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEV4dGVybmFsRGVzdGluYXRpb24sIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBFeHRlcm5hbERlc3RpbmF0aW9uKGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnRXh0ZXJuYWxEZXN0aW5hdGlvbic7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgRXh0ZXJuYWxEZXN0aW5hdGlvbi5wcm90b3R5cGUub25BZ2VudEluID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgRXh0ZXJuYWxEZXN0aW5hdGlvbi5wcm90b3R5cGUub25BZ2VudE91dCA9IGZ1bmN0aW9uIChhZ2VudCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIEV4dGVybmFsRGVzdGluYXRpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgcXVhZCA9IG5ldyBkcmF3ZXJfMS5RdWFkKHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhxdWFkKTtcclxuICAgICAgICB2YXIgZm9udCA9IG5ldyBkcmF3ZXJfMS5Gb250KHRoaXMudHJhbnNmb3JtKTtcclxuICAgICAgICBmb250LnRleHQgPSAn7Jm467aAIOuqqeyggeyngCc7XHJcbiAgICAgICAgY2FudmFzRGVsZWdhdG9yLmRyYXcoZm9udCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAb3ZlcnJpZGVcclxuICAgICAqL1xyXG4gICAgRXh0ZXJuYWxEZXN0aW5hdGlvbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBFeHRlcm5hbERlc3RpbmF0aW9uLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRXh0ZXJuYWxEZXN0aW5hdGlvbjtcclxufSh1bml0XzEuRmFjaWxpdHkpKTtcclxudmFyIFRydWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRydWNrLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVHJ1Y2soZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5jdXJyZW50Um9hZEluZGV4ID0gMDtcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdUcnVjayc7XHJcbiAgICAgICAgX3RoaXMudHJhbnNmb3JtLnNjYWxlID0gbmV3IHR5cGVzXzEuVmVjdG9yMihUcnVjay5XSURUSCwgVHJ1Y2suTEVOR1RIKTtcclxuICAgICAgICBfdGhpcy5keW5hbWljID0gbmV3IGNvbXBvbmVudF8xLkR5bmFtaWNzKCk7XHJcbiAgICAgICAgX3RoaXMuYWRkQ29tcG9uZW50KF90aGlzLmR5bmFtaWMpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog64+E66Gc7JyE7JeQIOyeiOydhCDrlYwg7ZWgIOydvOuTpCDsspjrpqxcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUcnVjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEZhY2lsaXR5IGluc3RhbmNlb2YgUm9hZCkge1xyXG4gICAgICAgICAgICB2YXIgcm9hZCA9IHRoaXMuY3VycmVudEZhY2lsaXR5O1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50UHJvZ3Jlc3MgPSB0eXBlc18xLlZlY3RvcjIuaW52ZXJzZUxlcnAocm9hZC5wb2ludExpc3RbdGhpcy5jdXJyZW50Um9hZEluZGV4XSwgcm9hZC5wb2ludExpc3RbdGhpcy5jdXJyZW50Um9hZEluZGV4ICsgMV0sIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRQcm9ncmVzcyA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvZ3Jlc3MgLT0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJvYWRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFJvYWRJbmRleCA9PT0gcm9hZC5wb2ludExpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJvYWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5keW5hbWljLnZlbG9jaXR5ID0gdHlwZXNfMS5WZWN0b3IyLlpFUk87XHJcbiAgICAgICAgICAgICAgICAgICAgcm9hZC5wb3J0TGlzdFswXS5hcHBlbmRBZ2VudCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9ncmVzcyA9IGN1cnJlbnRQcm9ncmVzcyAqIHR5cGVzXzEuVmVjdG9yMi5zdWJzdHJhY3Qocm9hZC5wb2ludExpc3RbdGhpcy5jdXJyZW50Um9hZEluZGV4IC0gMV0sIHJvYWQucG9pbnRMaXN0W3RoaXMuY3VycmVudFJvYWRJbmRleF0pLm1hZ25pdHVkZSAvIHR5cGVzXzEuVmVjdG9yMi5zdWJzdHJhY3Qocm9hZC5wb2ludExpc3RbdGhpcy5jdXJyZW50Um9hZEluZGV4XSwgcm9hZC5wb2ludExpc3RbdGhpcy5jdXJyZW50Um9hZEluZGV4ICsgMV0pLm1hZ25pdHVkZTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UHJvZ3Jlc3MgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24gPSB0eXBlc18xLlZlY3RvcjIubGVycChyb2FkLnBvaW50TGlzdFt0aGlzLmN1cnJlbnRSb2FkSW5kZXhdLCByb2FkLnBvaW50TGlzdFt0aGlzLmN1cnJlbnRSb2FkSW5kZXggKyAxXSwgY3VycmVudFByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDsnbTrtoDrtoQg7IiY7KCV7ZWE7JqUXHJcbiAgICAgKi9cclxuICAgIFRydWNrLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcm9hZCA9IHRoaXMuY3VycmVudEZhY2lsaXR5O1xyXG4gICAgICAgIHZhciBhbmdsZSA9IHJvYWQuZ2V0Um9hZEFuZ2xlKHRoaXMuY3VycmVudFJvYWRJbmRleCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0ucm90YXRpb24gPSBhbmdsZTtcclxuICAgICAgICB0aGlzLmR5bmFtaWMudmVsb2NpdHkgPSB0eXBlc18xLlZlY3RvcjIubXVsdGlwbHkodGhpcy50cmFuc2Zvcm0uZm9yd2FyZCgpLCAyLjcpO1xyXG4gICAgfTtcclxuICAgIFRydWNrLldJRFRIID0gMS44NTtcclxuICAgIFRydWNrLkxFTkdUSCA9IDQuMztcclxuICAgIHJldHVybiBUcnVjaztcclxufSh1bml0XzEuQWdlbnQpKTtcclxudmFyIFNlYUJ1bGtUcnVjayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhTZWFCdWxrVHJ1Y2ssIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWFCdWxrVHJ1Y2soZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdTZWFCdWxrVHJ1Y2snO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFNlYUJ1bGtUcnVjay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0sICdyZ2JhKDI1NiwgMCwgMCwgMC4yKScpO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFNlYUJ1bGtUcnVjay5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBTZWFCdWxrVHJ1Y2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUub25VcGRhdGUuY2FsbCh0aGlzKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlYUJ1bGtUcnVjaztcclxufShUcnVjaykpO1xyXG52YXIgVGFua0J1bGtUcnVjayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUYW5rQnVsa1RydWNrLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGFua0J1bGtUcnVjayhlbnZpcm9ubWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGVudmlyb25tZW50KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLl9uYW1lID0gJ1RhbmtCdWxrVHJ1Y2snO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRhbmtCdWxrVHJ1Y2sucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChjYW52YXNEZWxlZ2F0b3IpIHtcclxuICAgICAgICB2YXIgcXVhZCA9IG5ldyBkcmF3ZXJfMS5RdWFkKHRoaXMudHJhbnNmb3JtLCAncmdiYSgwLCAyNTYsIDAsIDAuMiknKTtcclxuICAgICAgICBjYW52YXNEZWxlZ2F0b3IuZHJhdyhxdWFkKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBUYW5rQnVsa1RydWNrLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIFRhbmtCdWxrVHJ1Y2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUub25VcGRhdGUuY2FsbCh0aGlzKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRhbmtCdWxrVHJ1Y2s7XHJcbn0oVHJ1Y2spKTtcclxudmFyIERvY2tUcnVjayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhEb2NrVHJ1Y2ssIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBEb2NrVHJ1Y2soZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdEb2NrVHJ1Y2snO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIERvY2tUcnVjay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGNhbnZhc0RlbGVnYXRvcikge1xyXG4gICAgICAgIHZhciBxdWFkID0gbmV3IGRyYXdlcl8xLlF1YWQodGhpcy50cmFuc2Zvcm0sICdyZ2JhKDAsIDAsIDI1NiwgMC4yKScpO1xyXG4gICAgICAgIGNhbnZhc0RlbGVnYXRvci5kcmF3KHF1YWQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIERvY2tUcnVjay5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBvdmVycmlkZVxyXG4gICAgICovXHJcbiAgICBEb2NrVHJ1Y2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUub25VcGRhdGUuY2FsbCh0aGlzKTtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERvY2tUcnVjaztcclxufShUcnVjaykpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZHJhd2VyXzEgPSByZXF1aXJlKFwiLi9kcmF3ZXJcIik7XHJcbnZhciBSZW5kZXJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlbmRlcmVyKGVudmlyb25tZW50LCBlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgICAgIHRoaXMuY2FudmFzRGVsZWdhdG9yID0gbmV3IGRyYXdlcl8xLkNhbnZhc0RlbGVnYXRvcihlbGVtZW50KTtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vblVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlbmRlcmVyLnByb3RvdHlwZSwgXCJlbnZpcm9ubWVudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbnZpcm9ubWVudDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNEZWxlZ2F0b3IudXBkYXRlKHRoaXMuZW52aXJvbm1lbnQudW5pdExpc3QpO1xyXG4gICAgfTtcclxuICAgIFJlbmRlcmVyLk1BWF9XSURUSCA9IDEwMDA7XHJcbiAgICBSZW5kZXJlci5NQVhfSEVJR0hUID0gMTAwMDtcclxuICAgIHJldHVybiBSZW5kZXJlcjtcclxufSgpKTtcclxuZXhwb3J0cy5SZW5kZXJlciA9IFJlbmRlcmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogMuywqOybkCDrsqHthLBcclxuICovXHJcbnZhciBWZWN0b3IyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVmVjdG9yMih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgVmVjdG9yMi5hZGQgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihhLnggKyBiLngsIGEueSArIGIueSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5zdWJzdHJhY3QgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihhLnggLSBiLngsIGEueSAtIGIueSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5tdWx0aXBseSA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGEueCAqIGIsIGEueSAqIGIpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuZGl2aXNpb24gPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihhLnggLyBiLCBhLnkgLyBiKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmxlcnAgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIHZhciB2ZWN0b3IgPSBWZWN0b3IyLmFkZChhLCBWZWN0b3IyLm11bHRpcGx5KFZlY3RvcjIuc3Vic3RyYWN0KGIsIGEpLCBjKSk7XHJcbiAgICAgICAgcmV0dXJuIHZlY3RvcjtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmludmVyc2VMZXJwID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuICAgICAgICB2YXIgdjEgPSBWZWN0b3IyLnN1YnN0cmFjdChjLCBhKTtcclxuICAgICAgICB2YXIgdjIgPSBWZWN0b3IyLnN1YnN0cmFjdChiLCBhKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHYxLnNxck1hZ25pdHVkZSAvIHYyLnNxck1hZ25pdHVkZSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcInNxck1hZ25pdHVkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwibWFnbml0dWRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnNxck1hZ25pdHVkZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBWZWN0b3IyLlpFUk8gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHJldHVybiBWZWN0b3IyO1xyXG59KCkpO1xyXG5leHBvcnRzLlZlY3RvcjIgPSBWZWN0b3IyO1xyXG4vKipcclxuICogVW5pdOydmCDsnITsuZgsIO2BrOq4sCwg6rCB64+E7KCV67O066W8IOqwluqzoOyeiOydjFxyXG4gKi9cclxudmFyIFRyYW5zZm9ybSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyYW5zZm9ybShwb3NpdGlvbiwgc2NhbGUsIHJvdGF0aW9uKSB7XHJcbiAgICAgICAgaWYgKHJvdGF0aW9uID09PSB2b2lkIDApIHsgcm90YXRpb24gPSAwOyB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOyVniDrsqHthLBcclxuICAgICAqL1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5mb3J3YXJkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yMihNYXRoLmNvcyh0aGlzLnJvdGF0aW9uKSwgTWF0aC5zaW4odGhpcy5yb3RhdGlvbikpO1xyXG4gICAgICAgIHJldHVybiB2ZWN0b3I7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDsmbzsqr0g67Kh7YSwXHJcbiAgICAgKi9cclxuICAgIFRyYW5zZm9ybS5wcm90b3R5cGUubGVmdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3RvcjIoTWF0aC5jb3ModGhpcy5yb3RhdGlvbiArIE1hdGguUEkgLyAyKSwgTWF0aC5zaW4odGhpcy5yb3RhdGlvbiArIE1hdGguUEkgLyAyKSk7XHJcbiAgICAgICAgcmV0dXJuIHZlY3RvcjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOyYpOuluOyqvSDrsqHthLBcclxuICAgICAqL1xyXG4gICAgVHJhbnNmb3JtLnByb3RvdHlwZS5yaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFZlY3RvcjIoTWF0aC5jb3ModGhpcy5yb3RhdGlvbiAtIE1hdGguUEkgLyAyKSwgTWF0aC5zaW4odGhpcy5yb3RhdGlvbiAtIE1hdGguUEkgLyAyKSk7XHJcbiAgICAgICAgcmV0dXJuIHZlY3RvcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJhbnNmb3JtO1xyXG59KCkpO1xyXG5leHBvcnRzLlRyYW5zZm9ybSA9IFRyYW5zZm9ybTtcclxuLyoqXHJcbiAqIO2KuOufrSDrj4TssKkg7Iuc6rCE7JeQIOq0gO2VnCDrjbDsnbTthLBcclxuICovXHJcbnZhciBUcnVja0Fycml2YWxEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJ1Y2tBcnJpdmFsRGF0YSh0aW1lLCBraW5kKSB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgICAgICB0aGlzLmtpbmQgPSBraW5kO1xyXG4gICAgICAgIHRoaXMuaXNBcnJpdmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBUcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfU0VBX0JVTEsgPSAxO1xyXG4gICAgVHJ1Y2tBcnJpdmFsRGF0YS5UUlVDS19LSU5EX1RBTktfQlVMSyA9IDI7XHJcbiAgICBUcnVja0Fycml2YWxEYXRhLlRSVUNLX0tJTkRfRE9LRSA9IDM7XHJcbiAgICByZXR1cm4gVHJ1Y2tBcnJpdmFsRGF0YTtcclxufSgpKTtcclxuZXhwb3J0cy5UcnVja0Fycml2YWxEYXRhID0gVHJ1Y2tBcnJpdmFsRGF0YTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbnZhciBFbnZpcm9ubWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVudmlyb25tZW50KCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fdGljayA9IDA7XHJcbiAgICAgICAgdGhpcy5fZWxhcHNlZFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy51bml0TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuX3RpY2sgKz0gRW52aXJvbm1lbnQuRVBTSUxPTl9ERUxBWTtcclxuICAgICAgICAgICAgX3RoaXMuX2RlbHRhVGltZSA9IF90aGlzLnRpbWVTY2FsZSAvIDYwO1xyXG4gICAgICAgICAgICBfdGhpcy5fZWxhcHNlZFRpbWUgKz0gX3RoaXMuZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX3RpY2sgPiAxNyAvIF90aGlzLnRpbWVTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX3RpY2sgPSAwO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudW5pdExpc3QuZm9yRWFjaChmdW5jdGlvbiAodW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bml0IGluc3RhbmNlb2YgQWdlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdC5hcHBseUNvbXBvbmVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pdC5vblVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBFbnZpcm9ubWVudC5FUFNJTE9OX0RFTEFZKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbnZpcm9ubWVudC5wcm90b3R5cGUsIFwiZWxhcHNlZFRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZWxhcHNlZFRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRW52aXJvbm1lbnQucHJvdG90eXBlLCBcInRpbWVTY2FsZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aW1lU2NhbGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGltZVNjYWxlID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVudmlyb25tZW50LnByb3RvdHlwZSwgXCJkZWx0YVRpbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVsdGFUaW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiDtlbTri7kg7ZmY6rK97JeQIOycoOuLmyDstpTqsIBcclxuICAgICAqIEBwYXJhbSB1bml0XHJcbiAgICAgKi9cclxuICAgIEVudmlyb25tZW50LnByb3RvdHlwZS5hcHBlbmRVbml0ID0gZnVuY3Rpb24gKHVuaXQpIHtcclxuICAgICAgICB1bml0Lm9uU3RhcnQoKTtcclxuICAgICAgICB0aGlzLnVuaXRMaXN0LnB1c2godW5pdCk7XHJcbiAgICB9O1xyXG4gICAgRW52aXJvbm1lbnQuRVBTSUxPTl9ERUxBWSA9IDU7XHJcbiAgICByZXR1cm4gRW52aXJvbm1lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRW52aXJvbm1lbnQgPSBFbnZpcm9ubWVudDtcclxudmFyIFVuaXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVbml0KGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9ICdVbml0JztcclxuICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSBuZXcgdHlwZXNfMS5UcmFuc2Zvcm0odHlwZXNfMS5WZWN0b3IyLlpFUk8sIG5ldyB0eXBlc18xLlZlY3RvcjIoMSwgMSksIDApO1xyXG4gICAgICAgIHRoaXMuX2Vudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVW5pdC5wcm90b3R5cGUsIFwibmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFVuaXQucHJvdG90eXBlLCBcInRyYW5zZm9ybVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVW5pdC5wcm90b3R5cGUsIFwiZW52aXJvbm1lbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW52aXJvbm1lbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBVbml0LnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50LmFwcGVuZFVuaXQodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFVuaXQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVW5pdCA9IFVuaXQ7XHJcbi8qKlxyXG4gKiDrqqjrk5wg7Iuc7ISk65Ok7J2YIOu2gOuqqCDtgbTrnpjsiqRcclxuICovXHJcbnZhciBGYWNpbGl0eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhGYWNpbGl0eSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZhY2lsaXR5KGVudmlyb25tZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZW52aXJvbm1lbnQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuX25hbWUgPSAnRmFjaWxpdHknO1xyXG4gICAgICAgIF90aGlzLmFnZW50TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIF90aGlzLl9wb3J0TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIF90aGlzLnRyYW5zZm9ybS5zY2FsZSA9IG5ldyB0eXBlc18xLlZlY3RvcjIoMjAsIDIwKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFjaWxpdHkucHJvdG90eXBlLCBcInBvcnRMaXN0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BvcnRMaXN0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZ2VudCDstpTqsIBcclxuICAgICAqIEBwYXJhbSBhZ2VudFxyXG4gICAgICovXHJcbiAgICBGYWNpbGl0eS5wcm90b3R5cGUuYXBwZW5kQWdlbnQgPSBmdW5jdGlvbiAoYWdlbnQpIHtcclxuICAgICAgICBpZiAoYWdlbnQuY3VycmVudEZhY2lsaXR5KSB7XHJcbiAgICAgICAgICAgIGFnZW50LmN1cnJlbnRGYWNpbGl0eS5yZW1vdmVBZ2VudChhZ2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWdlbnRMaXN0LnB1c2goYWdlbnQpO1xyXG4gICAgICAgIGFnZW50LmN1cnJlbnRGYWNpbGl0eSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vbkFnZW50SW4oYWdlbnQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWdlbnQg7IKt7KCcXHJcbiAgICAgKiBAcGFyYW0gYWdlbnRcclxuICAgICAqL1xyXG4gICAgRmFjaWxpdHkucHJvdG90eXBlLnJlbW92ZUFnZW50ID0gZnVuY3Rpb24gKGFnZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFnZW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZ2VudExpc3RbaV0gPT09IGFnZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFnZW50TGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWdlbnRPdXQoYWdlbnQpO1xyXG4gICAgICAgICAgICAgICAgYWdlbnQuY3VycmVudEZhY2lsaXR5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog7JiG66m0IOychOy5mCDqtaztlZjquLDsmqlcclxuICAgICAqIEBwYXJhbSBkaXJlY3RyaW9uIDA6IHJpZ2h0LCBwaTogbGVmdFxyXG4gICAgICovXHJcbiAgICBGYWNpbGl0eS5wcm90b3R5cGUuZ2V0U2lkZVBvc2l0aW9uID0gZnVuY3Rpb24gKGFuZ2xlKSB7XHJcbiAgICAgICAgdmFyIHZlY3RvciA9IHR5cGVzXzEuVmVjdG9yMi5hZGQodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24sIG5ldyB0eXBlc18xLlZlY3RvcjIodGhpcy50cmFuc2Zvcm0uc2NhbGUueCAvIDIgKiBNYXRoLmNvcyhhbmdsZSksIHRoaXMudHJhbnNmb3JtLnNjYWxlLnkgLyAyICogTWF0aC5zaW4oYW5nbGUpKSk7XHJcbiAgICAgICAgcmV0dXJuIHZlY3RvcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRmFjaWxpdHk7XHJcbn0oVW5pdCkpO1xyXG5leHBvcnRzLkZhY2lsaXR5ID0gRmFjaWxpdHk7XHJcbi8qKlxyXG4gKiDrqqjrk6AgQWdlbnTsnZgg67aA66qoIO2BtOuemOyKpFxyXG4gKi9cclxudmFyIEFnZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFnZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQWdlbnQoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBlbnZpcm9ubWVudCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5fbmFtZSA9ICdBZ2VudCc7XHJcbiAgICAgICAgX3RoaXMuX2N1cnJlbnRGYWNpbGl0eSA9IG51bGw7XHJcbiAgICAgICAgX3RoaXMuY29tcG9uZW50TGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBZ2VudC5wcm90b3R5cGUsIFwiY3VycmVudEZhY2lsaXR5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRGYWNpbGl0eTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RmFjaWxpdHkgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBBZ2VudC5wcm90b3R5cGUuYWRkQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50TGlzdC5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnQucHJvdG90eXBlLnJlbW92ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29tcG9uZW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0W2ldID09PSBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQWdlbnQucHJvdG90eXBlLmFwcGx5Q29tcG9uZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LmRvKF90aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQWdlbnQ7XHJcbn0oVW5pdCkpO1xyXG5leHBvcnRzLkFnZW50ID0gQWdlbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=