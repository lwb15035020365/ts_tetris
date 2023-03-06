import { SquareGroup } from "./core/SquareGroup";
import { createTeris } from "./core/Teris";
import { TerisRule } from "./core/TerisRule";
import { MoveDirection } from "./core/types";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";

const teris = createTeris({ x: 3, y: 2 });
teris.squares.forEach(sq => {
  sq.viewer = new SquarePageViewer(sq, $('#root'));
})

$("#btnDown").click(function () {
  //更改中心点坐标
  TerisRule.move(teris, MoveDirection.down);
})

$("#btnUp").click(function () {
  //更改中心点坐标
  TerisRule.move(teris, {
    x: teris.centerPoint.x,
    y: teris.centerPoint.y - 1
  });
})

$("#btnLeft").click(function () {
  //更改中心点坐标
  TerisRule.move(teris, MoveDirection.left);
})

$("#btnRight").click(function () {
  //更改中心点坐标
  TerisRule.move(teris, MoveDirection.right);
})