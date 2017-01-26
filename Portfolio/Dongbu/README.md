# 동부화재
![open-img](assets/dongbu.jpg)

### 문제에 대한 해결
##### 백그라운드 이미지 적용

- [문제]
	- 백그라운 위에 여백이 생김
	<img src="assets/background-no.jpg" alt="" width="500" height="240">

```html
.porduct-top
	background: url(../images/product/bg_top.jpg) center top no-repeat
	height: 445px
	width: 100%
	margin: 0 0 30px
	text-align: center
```
- [해결]
	- `overflow: hidden` 추가해 줌
	<img src="assets/background.jpg" alt="" width="500" height="240">

```html
.porduct-top
	overflow: hidden
	background: url(../images/product/bg_top.jpg) center top no-repeat
	height: 445px
	width: 100%
	margin: 0 0 30px
	text-align: center
```