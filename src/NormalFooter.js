/**
 * Author: Shi(bolan0000@icloud.com)
 * Date: 2019/1/18
 * Copyright (c) 2018, AoTang, Inc.
 *
 * Description:
 */

 import React from "react";
 import { LoadingFooter } from "./LoadingFooter";
 import {
   ActivityIndicator,
   Animated,
   View,
   StyleSheet,
   Text,
 } from "react-native";
 import Spinner from 'react-native-spinkit'
 
 export class NormalFooter extends LoadingFooter {
   static height = 80;
 
   static style = "stickyContent";
 
   render() {
     if (this.state.status === "allLoaded")
       return (
         <View style={styles.container}>
           <Text style={styles.text}>{this.getTitle()}</Text>
         </View>
       );
       if (this.state.status === "loading" || this.state.status === "cancelLoading" || this.state.status === "rebound") {
         return (<View style={styles.container}>
                 <Spinner color={"gray"} type={'FadingCircleAlt'} size={40} />
           </View>)
       }
     return (
       <View style={styles.container}>
         {this._renderIcon()}
         <View style={styles.rContainer}>
           <Text style={styles.text}>{this.getTitle()}</Text>
           {this.renderContent()}
         </View>
       </View>
     );
   }
 
   _renderIcon() {
     return null
   }
 
   renderContent() {
     return null;
   }
 
   getTitle() {
     const s = this.state.status;
     if (s === 'dragging' || s === 'waiting') {
       return '上拉加载更多';
     } else if (s === 'draggingEnough') {
       return '松开加载更多';
     } else if (s === 'loading') {
       return '正在加载数据...';
     } else if (s === 'draggingCancel') {
       return '放弃加载更多';
     } else if (s === 'rebound') {
       return '加载完成';
     } else if (s === 'allLoaded') {
       return '已经到底啦';
     }
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center",
     flexDirection: "row",
   },
   rContainer: {
     marginLeft: 20,
   },
   text: {
     marginVertical: 5,
     fontSize: 15,
     color: "#666",
     textAlign: "center",
     width: 140,
   },
 });
 