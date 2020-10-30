import React from "react";
import { buildWidget } from "../components/Widget/WidgetContainer";
import { WidgetFrame } from "../components/Widget/WidgetFrame";



export const TestWidget = buildWidget(
  <WidgetFrame title={'Test'}>content</WidgetFrame>,
  2,
  2
)