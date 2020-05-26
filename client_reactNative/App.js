import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import RNEventSource from 'react-native-event-source';

export default function App() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    function updateTimeList(time) {
      setData(oldArray => [...oldArray, time]);
    }

    function eventSource() {
      let eventSource = new RNEventSource(
        'https://SentimentalMidnightblueReality--five-nine.repl.co/getTime'
      );
      eventSource.addEventListener('message', event => {
        updateTimeList(JSON.parse(event.data));
      });
    }

    eventSource();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Time List (SSE):</Text>
      {data.map(data => {
        return <Text key={data} style={styles.paragraph}>{data}</Text>;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'grey',
    padding: 8,
  },
  title: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    margin:8
  },
  paragraph: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
