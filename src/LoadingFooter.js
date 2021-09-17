/**
 * Author: Shi(bolan0000@icloud.com)
 * Date: 2019/1/18
 * Copyright (c) 2018, AoTang, Inc.
 *
 * Description:
 */

import React from "react";
import { Text } from "react-native";

export class LoadingFooter extends React.Component {
  static height = 80;

  static style = "stickyContent";

  constructor(props) {
    super(props);
    this.state = { status: props.allLoaded ? "allLoaded" : "waiting" };
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.allLoaded) return { status: "allLoaded" };
    return {};
  }

  changeToState(newStatus) {
    !this.props.allLoaded &&
      this.state.status !== newStatus &&
      this.onStateChange(this.state.status, newStatus);
  }

  onStateChange(oldStatus, newStatus) {
    this.setState({ status: newStatus });
  }

  render() {
    return (
      <Text
        style={{
          flex: 1,
          alignSelf: "center",
          lineHeight: this.props.maxHeight,
          textAlign: "center",
        }}
      >
        {this.state.status}
      </Text>
    );
  }
}
