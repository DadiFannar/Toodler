import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Board from '../views/Board';
import List from '../views/List';
import Task from '../views/Task';

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Board">
            <Stack.Screen name="Board" component={Board}/>
            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="Task" component={Task}/>
        </Stack.Navigator>
    </NavigationContainer>
);
export default Routes;