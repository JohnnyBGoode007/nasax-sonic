import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Sonifications from './Sonifications';
import Profile from './Profile';
import SearchSonifications from './SearchSonifications';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




export default function Home() {
  return (
    //Para esconder a barra de voltar para tras e titulo colocada por defeito screenOptions={{ headerShown: false }}
    <Tab.Navigator screenOptions={{ headerShown: false,         tabBarActiveTintColor: '#32FF00',
}}>
      <Tab.Screen
        name="Sonifications"
        component={Sonifications}
        options={{
          tabBarLabel: 'Sonifications',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="music" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="space-shuttle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchSonifications"
        component={SearchSonifications}
        options={{
          tabBarLabel: 'Search Sonification',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
