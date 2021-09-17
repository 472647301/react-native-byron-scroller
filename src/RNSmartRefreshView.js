import React from "react";
import { View, requireNativeComponent, StyleSheet } from "react-native";
import PropTypes from "prop-types";
const RNSmartRefresh = requireNativeComponent("RNSmartRefreshView");
const RNSmartRefreshHeader = requireNativeComponent("RNRefreshHeader");

export class SmartRefresh extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    style: PropTypes.object,
    onRefresh: PropTypes.func,
    onChangeState: PropTypes.func,
    onChangeOffset: PropTypes.func,
    refreshing: PropTypes.bool,
  };
  static defaultProps = {
    style: { flex: 1 },
    onRefresh: () => {},
    onChangeOffset: () => {},
    refreshing: false,
  };
  render() {
    const { children } = this.props;
    <View style={{ flex: 1, overflow: "hidden" }}>
      <RNSmartRefresh {...this.props}>{children}</RNSmartRefresh>
    </View>;
  }
}

export class SmartRefreshHeader extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { children, style } = this.props;
    return (
      <RNSmartRefreshHeader>
        <View style={StyleSheet.compose({ height: 100 }, style)}>
          {children}
        </View>
      </RNSmartRefreshHeader>
    );
  }
}

export { RefreshNormalHeader } from "./RefreshNormalHeader";
