import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeRoute = () => <SafeAreaView><Text>Home</Text></SafeAreaView> ;
const SearchRoute = () => <SafeAreaView><Text>Search</Text></SafeAreaView> ;
const AccountRoute = () => <SafeAreaView><Text>Account</Text></SafeAreaView> ;

export const BottomTabNavigator = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'home', title: 'Favorites', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
      { key: 'search', title: 'Search', focusedIcon: 'magnify' },
      { key: 'account', title: 'Recents', focusedIcon: 'account' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
      home: HomeRoute,
      search: SearchRoute,
      account: AccountRoute
    });

    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
  };
