import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet } from "react-native";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

const styles = StyleSheet.create({
  appStyle: {
    backgroundColor: "red",
    padding: 20,
  },
});

export default () => {
  return (
    <BlogProvider>
      <App style={styles.appStyle} />
    </BlogProvider>
  );
};
