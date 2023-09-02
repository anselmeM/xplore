import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


export default function googleMapView() {
  return (
    <View style= {{marginTop: 20}}>
      <MapView 
          style = {{
             width: Dimensions.get('screen').width*0.80,
             height: Dimensions.get('screen').height*0.25,
          }}

          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
    
      >

      </MapView>

    </View>
  )
}