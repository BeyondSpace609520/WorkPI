import React from "react";
import { buildWidget } from "../components/Widget/WidgetContainer";
import { WidgetFrame } from "../components/Widget/WidgetFrame";


export const TasksWidget = buildWidget(
  <WidgetFrame title={'Tasks'}>content</WidgetFrame>,
  2,
  2
)