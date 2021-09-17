import React from "react";

export class ByronScroller extends React.PureComponent {
  render() {
    return null;
  }
}

// 使用Normal Header，兼容刘海屏情况
// Normal Header支持属性：refreshing, onRefresh, children, activityIndicatorProps, arrowIcon, containerStyle, titleStyle, timeStyle, leftContainerStyle, rightContainerStyle, imageStyle，参考源码
{/* <ScrollView
  // onRefresh={onRefresh}
  // offsetTop={245}
  refreshControl={
  <RefreshNormalHeader
    refreshing={isRefreshing}
    onRefresh={onRefresh}
    containerStyle={{ marginBottom: 20, alignItems: 'flex-end' }}
    titleStyle={{ fontSize: 14 }}
    timeStyle={{ fontSize: 14 }}
    leftContainerStyle={{ marginBottom: 8 }}
    activityIndicatorProps={{ color: Colors.SunColor }}
   />
  }
>
</ScrollView> */}