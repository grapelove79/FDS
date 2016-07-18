# CSS Selector 분류 표
유 형 | 선 택 자 | 설 명 | 버전
--- | --- | --- | ---
**유니버설 선택자** | * | 전체 요소 | 2
**타입 선택자** | E | E 요소 선택 | 1
**자손 선택자**| E(P) F(C) | E 요소 하위에 있는 F 요소 선택 | 1
**인접형제 선택자** | E + F | E 요소를 제외한 나머지 F 형제 요소들 선택 | 2
**일반형제 선택자** | E ~ F | E 요소를 제외한 나머지 F 형제 요소들 선택 | 3
**그룹 선택자** | E,E,E | E 요소의 그룹핑 |
**ID 선택자** | E#id-name | id 속성값이 일치하는 요소에 적용 | 1 
**CLASS 선택자** | E.class-name | class 속성값이 일치하는 요소에 적용 | 1 
**속성 선택자** | E[attr] | 'attr' 속성이 있느 E 요소 선택 | 2
 | E[attr="value"] | 'attr' 속성의 값이 'value'인 E 요소 선택 | 2
 | E[attr~="value"] | attr' 속성의 값에 'value'가 공백으로 구분되는 요소를 선택 | 2
 | E[attr^="value"] | 'attr' 속성의 값에 'value'로 ^시작하는 요소를 선택 | 3
 | E[attr$="value"] | 'attr' 속성의 값에 'value'로 $끝나는 요소를 선택 | 3
 | E[attr*="value"] | 'attr' 속성의 값에 'value'가 *포함되는 요소를 선택 | 3
 | E[attr&#124;="en"] | 'attr' 속성의 값에 'en'이 하이픈(-)으로 구분되는 요소를 선택 | 2
**폼 선택자** | E:checked | 선택된(checked) Form 컨트롤 선택 | 3
 | E:disabled | 사용 불가능한 Form 컨트롤 선택 | 3
 | E:enabled | 활성화한 Form 컨트롤 선택 | 3
**가상 클래스** | E:link | E 요소 중 하이퍼링크인 것으로 링크에 아직 방문하지 않은 것 | 1
 | E:hover | E 요소에 마우스를 올릴 때 적용 | 2
 | E:active | E 요소를 커서로 누를 때 적용 | 1
 | E:visited | E 요소의 방문한 링크에 적용 | 1
 | E:target | E 요소 중 참조 URI의 타켓이 되는 것 | 3
 | E:focus | E 요소를 키보드로 포커싱한 상태 | 1
 | E:lang(fr) | E 요소에서 언어가 'fr'인 것 | 3
 | E:empty | E 요소 중 텍스트 노드를 포함하여 자식 요소가 하나도 없는 것 | 3
 | E:root | E 요소, 문서의 root | 3
**자식 선택자** | E(P) > F(C) | E 요소의 자식이면 선택 | 2
 | E:first-child | E 요소가 첫 번째 자식이면 선택 | 2
 | E:last-child | E 요소가 마지막 자식이면 선택 | 3
 | E:only-child | E 요소가 유일한 자식이면 선택 | 3
 | E:nth-child(n) | E 요소가 n 번쩨 자식이면 선택 | 3
 | E:nth-child(n + b) | 부모 요소의 자식 요소 중, 수학 표현식에 따른 계산 결과를 처리 후 선택 |
 | E:nth-last-child(n) | 부모 요소의 자식 요소 중 E 요소가 n 번째 자식이면 선택 (뒤로부터 색인) | 
 | E:nth-last-child(n + b) | 부모 요소의 자식 요소 중, 수학 표현식에 따른 계산 결과를 처리 후 선택 (뒤로부터 색인) |
 | E:first-of-type | 형제들 중 첫 번째 E 요소를 선택 | 3
 | E:last-of-type | 형제들 중 마지막 E 요소를 선택 | 3
 | E:only-of-type | 형제들 중 E 요소가 유일한 타입이면 선택 | 3
 | E:nth-of-type(n) | 형제들 중 n 번째 E 요소를 선택 | 3
 | E:nth-of-type(an + b)	| 형제들 중, 수학 표현식에 따른 계산 결과를 처리 후 선택 | 
 | E:nth-last-of-type(an + b)	| 형제들 중, 수학 표현식에 따른 계산 결과를 처리 후 선택 (뒤로부터 색인) |
**부정 선택자**  | E:not(selector) | 제외한 요소 선택 | 3
**가상 요소** | E::first-line | E 요소의 첫번째 라인 형식 | 1
 | E::first-letter | E 요소의 첫번재 글자 형식 | 1
 | E::before | E 요소 전에 생선 된 내용 | 2
 | E::after | E 요소 후에 생성 된 내용 | 2
