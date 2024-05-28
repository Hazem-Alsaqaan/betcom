import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/navigations/RootNavigation';

export default function App() {
  return (
    <>
      <RootNavigation/>
      <StatusBar style="auto" />
    </>
  );
}
