import React from 'react';

import { TestWidget } from '../../../../widgets/TestWidget';
import { TestAsideWidget } from '../../../../widgets/TestAside';
import { uuidv4 } from '../../../../util';
import { emplaceWidget, WidgetContainer } from '../../../../components/Widget/WidgetContainer';


export const DataProfileView: React.FC<{}> = props => {
  const widgets = [
    emplaceWidget(0, 0, TestWidget),
    emplaceWidget(2, 0, TestAsideWidget),
    emplaceWidget(2, 1, TestAsideWidget),
  ]

  return (
    <WidgetContainer id={'test'} unitSize={300} widgets={widgets}></WidgetContainer>
  )
}
