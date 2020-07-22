/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView ,View ,Text ,StatusBar} from 'react-native';
import MenuUtama from "./Component/MenuUtama";
import MenuGame from "./Component/MenuGame";
import MenuBerita from "./Component/MenuBerita";
import MenuHits from "./Component/MenuHits";

const Header = () => {
  return (
    <View>
    <Text> Halaman Header </Text>
    </View>
    );
};

const Footer = () => {
  return (
    <View>
    <Text> Footer @Niomic </Text>
    </View>
    );
};


export default class App extends Component {
  render () {
    return (
      <View>
      <StatusBar backgroundColor = "green" />
      <Text> Tugas 1 React Native</Text>
      <Text> Himawan Nurcahyanto</Text>
      <Header/>
      <MenuUtama/>
      <MenuGame/>
      <MenuBerita/>
      <MenuHits/>
      <Footer/>
      </View>
      );
  };
};
