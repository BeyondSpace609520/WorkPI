import React from "react";
import { buildWidget } from "../components/Widget/WidgetContainer";
import { WidgetFrame } from "../components/Widget/WidgetFrame";



export const TestAsideWidget = buildWidget(
  <WidgetFrame title={'Test'} role={'aside'}>content</WidgetFrame>,
  1,
  1
)