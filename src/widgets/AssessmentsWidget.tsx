import React from "react";
import { buildWidget } from "../components/Widget/WidgetContainer";
import { WidgetFrame } from "../components/Widget/WidgetFrame";


export const AssessmentWidget = buildWidget(
  <WidgetFrame title={'Assessment'} actions={[
    <div>[+]</div>
  ]}>
    
  </WidgetFrame>,
  2,
  2
)