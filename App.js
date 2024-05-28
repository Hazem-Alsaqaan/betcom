import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/navigations/RootNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation/>
      <StatusBar style="auto" />
    </Provider>
  );
}
