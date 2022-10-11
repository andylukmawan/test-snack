import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

const data = [
  {
    id: 1,
    food_name: 'cookies',
    url_image_absolute:
      'https://cdn.pixabay.com/photo/2015/11/19/20/17/cookies-1051884_960_720.jpg',
  },
  {
    id: 2,
    food_name: 'vegetables',
    url_image_absolute:
      'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg',
  },
  {
    id: 3,
    food_name: 'pizza',
    url_image_absolute:
      'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg',
  },
  {
    id: 4,
    food_name: 'grapes',
    url_image_absolute:
      'https://cdn.pixabay.com/photo/2018/08/22/13/58/grapes-3623694_960_720.jpg',
  },
  {
    id: 5,
    food_name: 'egg',
    url_image_absolute:
      'https://cdn.pixabay.com/photo/2015/09/17/17/19/eggs-944495_960_720.jpg',
  },
  {
    id: 6,
    food_name: 'donut',
    url_image_absolute:
      'https://cdn.pixabay.com/photo/2018/09/16/07/21/donut-3680829_960_720.jpg',
  },
  {
    id: 7,
    food_name: 'apple',
    url_image_absolute:
      'https://cdn.pixabay.com/photo/2015/02/13/00/43/apples-634572_960_720.jpg',
  },
  {
    id: 8,
    food_name: 'spagethi',
    url_image_absolute:
      'https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg',
  },
  {
    id: 9,
    food_name: 'beef steak',
    url_image_absolute:
      'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg',
  },
  {
    id: 10,
    food_name: 'pear',
    url_image_absolute:
      'https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_960_720.jpg',
  },
];

export default function App() {
  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>
          {item.food_name}
        </Text>
        <Image
          source={{ uri: item.url_image_absolute }}
          style={{ width: '100%', height: 300 }}
        />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList numColumns={2} data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
