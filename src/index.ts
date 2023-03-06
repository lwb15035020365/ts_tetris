import { SquareGroup } from "./core/SquareGroup";
import { createTeris } from "./core/Teris";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery"

const teris = createTeris({ x: 3, y: 2 });
teris.squares.forEach(sq => {
  sq.viewer = new SquarePageViewer(sq, $('#root'));
})

$("#btnDown").click(function () {
  //更改中心点坐标
  teris.centerPoint = {
    x: teris.centerPoint.x,
    y: teris.centerPoint.y + 1
  }
})

$("#btnUp").click(function () {
  //更改中心点坐标
  teris.centerPoint = {
    x: teris.centerPoint.x,
    y: teris.centerPoint.y - 1
  }
})

$("#btnLeft").click(function () {
  //更改中心点坐标
  teris.centerPoint = {
    x: teris.centerPoint.x - 1,
    y: teris.centerPoint.y
  }
})

$("#btnRight").click(function () {
  //更改中心点坐标
  teris.centerPoint = {
    x: teris.centerPoint.x + 1,
    y: teris.centerPoint.y
  }
})