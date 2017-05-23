import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Home from '../containers/home.js'
import Vibe from '../containers/vibe/vibe.js'
import VibeDetails from '../containers/vibe/vibe-details.js'

import Sidebar from '../components/sidebar.js'

const VibeRoutes = StackNavigator({
  Vibe: { screen: Vibe },
  VibeDetails: { screen: VibeDetails }
})

const MainRoutes = DrawerNavigator({
  Home: { screen: Home },
  Vibe: { screen: VibeRoutes }
}, {
  contentComponent: props => <Sidebar {...props} />
})


export default MainRoutes
