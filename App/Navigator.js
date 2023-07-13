import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Page1 from './page1/Page1';
import Page2 from './page2/Page2';

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerStyle: headerStyle,
                    headerTintColor: 'white'
                }} name='Page1' component={Page1}/>
                <Stack.Screen options={{
                    headerStyle: headerStyle,
                    headerTintColor: 'white'
                }} name='Page2' component={Page2}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const headerStyle = {
    backgroundColor: 'black',
}

export default Navigator