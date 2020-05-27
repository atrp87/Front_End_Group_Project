import React, { Component } from 'react';
import Home from './screens/home';
import Navigator from './routes/homeStack';
import WelcomeScreen from './screens/WelcomeScreen.js';
import RegForm from './components/RegForm.js';
import LogForm from './components/LogForm.js';
import PrefSlider from './components/PrefSlider.js';

import { View, StyleSheet, Text } from 'react-native';
import MainContainer from './containers/MainContainer';
import HostContainer from './containers/HostContainer';

export default function App() {
	return (
		<View style={{flex: 1, backgroundColor: '#252422'}}>
			<LogForm />
		</View>
	);
}

// // const styles = StyleSheet.create({
// // 	container: {
// // 		flex: 1,
// // 		// backgroundColor: '#252422'
// // 	}
// });
