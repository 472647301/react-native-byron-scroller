/**
 * Author: Shi(bolan0000@icloud.com)
 * Date: 2019/1/18
 * Copyright (c) 2018, AoTang, Inc.
 *
 * Description:
 */

import React from "react";
import { Text, View } from "react-native";

export class RefreshHeader extends React.Component {
  static height = 80;

  static style = "stickyContent";

  constructor(props) {
    super(props);
    this.state = { status: "waiting" };
  }

  changeToState(newStatus) {
    this.state.status !== newStatus &&
      this.onStateChange(this.state.status, newStatus);
  }

  onStateChange(oldStatus, newStatus) {
    this.setState({ status: newStatus });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>{this.state.status}</Text>
      </View>
    );
  }
}
