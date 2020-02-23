    npm i -g typescript
    npm i
    npm run-script 'webpack'
    npm run-script 'tsc build'
    npm start

## ./src/models
실제 구현한 모델 스크립트들이 들어있는 곳입니다.  

## ./src/pages
VueJS로 UI를 표시하기 위해 만들어진 공간입니다.  

## ./src/ts
해당 시뮬레이터의 엔진부분이라고 보시면 됩니다.  
Environment에 Unit가 추가되어 renderer가 화면에 렌더링하는 방식입니다.  
하위 파일들에 있는 클래스끼리는 의존성을 가질 수 있습니다.   
그러나 .src/models 밑의 클래스에게 의존성을 갖지 않습니다.   

### components.ts
Agent에 추가기능으로 들어가는 컴포넌트가 구현된 곳입니다.  
모두 Component 클래스를 상속받습니다.

### drawer.ts
renderer에 의해 그려지는 객체들입니다.  
Quad, Path, Circle, Font 가 있습니다.

### model.ts
모델 스크립트를 짜기 위한 추상 클래스입니다.  
./src/models 안의 스크립트들은 이 파일의 Model을 상속받은 클래스로 구현되었습니다.

### renderer.ts
실제로 보이는 부분을 그리는 부분입니다.  
Unit에게 Renderer인스턴스를 넘겨주어 Unit의 render 메소드에서 해당 오브젝트의 형체를 그릴 수 있습니다.  
마우스 드래그 및 줌인/줌아웃 등 여러가지 보이는 부분에 대해서는 이쪽에서 담당합니다.

### types.ts
엔진에서 쓰이는 타입들입니다. 벡터 및 Unit의 위치, 크기, 회전 등을 설정할 수 있는 클래스가 있습니다.

### unit.ts
Environment 및 기본적인 Unit이 정의되어 있습니다.

    Environment  
    Unit  
    └Facility  
     └Road  
      └Intersection
     └ControlTower
    └Agent  
구조의 상속관계를 가집니다.

- Environment: 실제 환경을 관리하는 클래스입니다.
- Unit: Environment에 들어가는 모든 오브젝트의 부모클래스입니다.
- Facility: 기본적으로 움직이지 않고 Agent가 드나들 수 있는 Unit입니다. 이 Unit에는 Component 추가가 불가능합니다.
- Agent: 움직일수 있고 Facility에 드나들 수 있는 Unit입니다. 이 Unit에는 Component 추가가 가능합니다.
- Road: 차량이 다니는 길 입니다.
- Intersection: 차량이 다니는 길 중 교차로입니다. ControlTower의 통제를 받습니다.
- ControlTower: 교차로를 통제하는 관제탑입니다. 내부 로직을 구현하여 교차로를 통제합니다.
    
### util.ts
유용한 기능들을 한곳에 모아두기 위해 만든 파일입니다.