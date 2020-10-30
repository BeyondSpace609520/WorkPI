import React from "react";
import { NavBar } from "../../../components/Navigation/NavBar";
import { emplaceWidget, WidgetContainer } from "../../../components/Widget/WidgetContainer";
import { EntitiesWidget } from "./Widgets/Entities";

export type EntitiesViewProps = {

}

export const EntitiesView: React.FC<EntitiesViewProps> = props => {
  const widgets = [
    emplaceWidget(0, 0, EntitiesWidget),
  ]

  return (
    <WidgetContainer id={'entities'} unitSize={300} widgets={widgets}></WidgetContainer>
  )
}
