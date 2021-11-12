import React, {useEffect,useState}from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import * as Analytics from 'expo-firebase-analytics';
import { setScoreRTDB, subscribeToUserRTDB } from '../services/firebaseService';
const RootScreen = () => {
  const [localScore, setLocalScore] = React.useState(0);
    useEffect(() => {
        Analytics.setCurrentScreen("RootScreen");
        subscribeToUserRTDB("Jaya",(score) => setLocalScore(score));
       }, [])
    return (
        <View style={styles.container}>
          <Text>Jaya's Score</Text>
          <Text>{localScore}</Text>
          <Button title = "Add 1 to the score" onPress={() =>{
                  Analytics.logEvent("buttonPressed");
                  setScoreRTDB("Jaya", localScore+1 )
                  setLocalScore(localScore+1);
          }}>
          </Button>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default RootScreen;