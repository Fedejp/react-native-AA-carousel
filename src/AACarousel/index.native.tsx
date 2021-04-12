import * as React from 'react';
import {View, Dimensions, FlatList, Image } from 'react-native'

interface SlideProps {
    url: string
}

interface CarouselProps {
    images: string[]
}

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

  const Slide= (data: SlideProps) => {
    return (
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: data.url}}
          style={{ width: windowWidth * 0.9, height: windowHeight * 0.9 }}
        ></Image>
      </View>
    );
  }
  
const AACarouselNative = (props: CarouselProps) => {
    return (
      <FlatList
        data={props.images}
        style={{ flex: 1 }}
        renderItem={({ item }) => 
           <Slide url={ item } />
        }
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    );
  }
  
export default AACarouselNative;