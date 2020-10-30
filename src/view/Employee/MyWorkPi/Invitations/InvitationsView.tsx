import React from 'react';

import { TestWidget } from '../../../../widgets/TestWidget';
import { TestAsideWidget } from '../../../../widgets/TestAside';
import { uuidv4 } from '../../../../util';
import { TasksWidget } from '../../../../widgets/TasksWidget';
import { AssessmentWidget } from '../../../../widgets/AssessmentsWidget';
import { MenuItem } from '../../../../components/Menu/Menu';
import { NavBar } from '../../../../components/Navigation/NavBar';
import { emplaceWidget, WidgetContainer } from '../../../../components/Widget/WidgetContainer';


export const InvitationsView: React.FC<{}> = props => {
  const menu: MenuItem[] = [
    { id: 'myworkpi-inv', label: 'Invitations', path: '/myworkpi/invitations' },
    { id: 'myworkpi-profile', label: 'Data Profile', path: '/myworkpi/data-profile' },
    { id: 'myworkpi-jobs', label: 'Jobs', path: '/myworkpi/jobs' },
    { id: 'myworkpi-dev', label: 'Development', path: '/myworkpi/development' },
  ]
  const widgets = [
    emplaceWidget(0, 0, AssessmentWidget),
    emplaceWidget(0, 0, TasksWidget),
    emplaceWidget(2, 0, TestAsideWidget),
    emplaceWidget(2, 1, TestAsideWidget),
  ]

  return (
    <>
    <NavBar items={menu}></NavBar>,
    <WidgetContainer id={'test'} unitSize={300} widgets={widgets}></WidgetContainer>
    </>
  )
}
