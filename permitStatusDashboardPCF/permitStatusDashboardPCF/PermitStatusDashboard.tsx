import * as React from 'react';
import { Label } from '@fluentui/react-components';
import type { ReactElement } from "react";
import {
  DeclarativeChart,
  IDeclarativeChart,
  Schema,
} from "@fluentui/react-charts";
export interface IPermitStatusDashboardProps {
  name?: string;
}

export class PermitStatusDashboard extends React.Component<IPermitStatusDashboardProps> {
  public render(): React.ReactNode {
    return (
      <Label>
        Hello {this.props.name}!
      </Label>
    )
  }
}
