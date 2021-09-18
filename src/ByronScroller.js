import React from "react";
import {FlatList,View,Text,ActivityIndicator,StyleSheet} from 'react-native'
import RefreshNormalHeader from './RefreshNormalHeader'

export class ByronScroller extends React.PureComponent {
  listRef;
  isInit = false;
  state = {
    refreshing: false,
    footerLoading: false
  }
  // 结束下拉刷新
  endRefresh = () => {
    this.setState({refreshing: false})
  }
  // 结束上拉加载
  endLoading = (bool) => {
    this.setState({footerLoading: bool})
  }
  onRefresh = () => {
    if (this.state.refreshing) {
      return
    }
    this.setState({refreshing: true})
    this.props.onRefresh && this.props.onRefresh()
  }
  onEndReached = () => {
    if (this.state.footerLoading || !this.isInit || !this.props.onLoading) {
      return
    }
    this.setState({footerLoading: true})
    this.props.onLoading && this.props.onLoading()
  }
  renderItem = () => {
    return this.props.children
  }
  scrollTo = (params = {}) => {
    this.listRef.scrollToOffset({
      x: params.x || 0,
      y: params.y || 0,
      animated: params.animated || true
    })
    if (params.y && params.y < 0) {
      this.onRefresh()
    }
  }
  ListFooterComponent = () => {
    const {allLoaded} = this.props
    const {footerLoading} = this.state
    if (footerLoading && !allLoaded) {
      return <View style={styles.footer}>
      <ActivityIndicator size="small" color={'#333'} />
      <Text style={styles.footer_text}>{'努力加载中'}</Text>
    </View>
    }
    //  else if (!footerLoading && allLoaded) {
    //   return <View style={styles.footer}>
    //   <Text style={styles.footer_text}>{'已全部加载完毕'}</Text>
    // </View>
    // }
    return null
  }
  componentDidMount() {
    setTimeout(() => {
      this.isInit = true
    },300)
  }
  render() {
    const {style} = this.props
    const {refreshing} = this.state
    return <FlatList
              style={style}
              data={[{'list':'flat'}]} 
              refreshControl={
                <RefreshNormalHeader 
                  refreshing={refreshing} 
                  onRefresh={this.onRefresh}
                />
              }
              // onEndReachedThreshold={0.1} 
              onEndReached={this.onEndReached}
              keyExtractor={() => 'flatlist'}
              renderItem={this.renderItem}
              onScroll={this.props.onScroll}
              ref={(ref) => (this.listRef = ref)}
              ListFooterComponent={this.ListFooterComponent}
          />;
  }
}


const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  footer_text: {
    color: '#333',
    fontSize: 14,
    marginTop: 5,
  },
})