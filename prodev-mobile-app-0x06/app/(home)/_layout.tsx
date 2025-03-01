import {AntDesign, EvilIcons, Feather, FontAwesome, Ionicons} from "@expo/vector-icons";
import {Tabs} from "expo-router";

const HomeRootLayout = ( )=> {
      return (
            <Tabs screenOptions={{
                  tabBarActiveTintColor: '#34967C',
                  headerShown: false,
            }}>
                  <Tabs.Screen  name="search" options={{
                        headerShown: true,
                        title: 'Search',
                        tabBarIcon:({color}) => <Feather name="search" size={24} color={color} />
                  }}/>
                  <Tabs.Screen name="save" options={{
                        title:'Saved',
                        headerShown:true,
                        tabBarIcon:({color})=> <EvilIcons name='heart' size={27} color={color}/>
                  }}/>
                  <Tabs.Screen name='inbox' options={{
                        title:'Inbox',
                        headerShown:true,
                        tabBarIcon: ({color}) => <Ionicons name='chatbubble-outline' size={24} color={color}/>
                  }}/>
                  <Tabs.Screen name='profile' options={{
                        title:'Profile',
                        tabBarIcon: ({color}) => <FontAwesome name='user-o' size={24} color={color}/>
                  }}/>
            </Tabs>
      )
}

export default HomeRootLayout;