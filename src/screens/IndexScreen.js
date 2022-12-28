import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = (props) => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
