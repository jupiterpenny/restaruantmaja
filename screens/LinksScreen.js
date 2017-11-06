import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text, TouchableOpacity, Image} from 'react-native';
import { WebBrowser } from 'expo';


var food = require('../food');

const SCREEN_WIDTH = Dimensions.get('window').width;

var url1 = 'https://www.google.com/maps/search/google+maps+';



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        this.state = {
            data: food.data,
            modal: false
        };
    }

    getItemLayout = (data, index) => (
        { length: 150, offset: 150 * index, index }
    )


    _renderRow(items) {

        return (



              <TouchableOpacity onPress={()=> {
                  WebBrowser.openBrowserAsync(
                      url1 + items.item.name
                  );
              }}>

              <Image source={items.item.src} style={{width: (SCREEN_WIDTH), height: 150}}/>
            </TouchableOpacity>

        );

    }

    render() {
        //console.log();
        //console.log(food.data[0]);
        return (

            <View style={styles.scroll}>
              <Text style={styles.container}>Tap What looks good</Text>

              <FlatList


                  data={this.state.data}
                  keyExtractor={(item, index) => item.id}
                  renderItem={this._renderRow}
                  style={styles.list}
                  getItemLayout={this.getItemLayout}

                  initialNumToRender={4}




              />

            </View>



        )
    }
}


// _handleFoodPress = () => {
//     WebBrowser.openBrowserAsync(
//         'https://www.google.com/search?ei=kar8WdKSDYjSmwHT072QBA&q=popular+restaurants+near+me&oq=popular+restaurants'
//     );
// };




const styles = StyleSheet.create({
  container: {
      marginTop: 0,
      textAlign: 'center',
      fontSize: 30
  },
});
