import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, ScrollView } from 'react-native';

export default function App() {
  const [entertext, setEnteText] = useState('');
  const [listtxt, setListTxt] = useState([]);
  function add_text_hendel(e) {
    setEnteText(e);
  }
  function add_action() {
    setListTxt((courentText) => [...courentText, { text: entertext, id: Math.random().toString() }]);

  }
  function delete_action(id) {
    setListTxt((courentText) => {
      return courentText.filter((data) => data.id !== id);
    })
    // console.log(id, listtxt);

  }
  return (
    <View style={styles.app}>
      <View style={styles.appcont}>
        <View style={styles.datainput}>
          <TextInput placeholder='Dodaj zadanie' style={styles.datainputtext} onChangeText={add_text_hendel} />
        </View>
        <View style={styles.buttoninput}>
          <Text style={styles.buttontext} onPress={add_action}>Dodaj zadanie</Text>
        </View>
      </View>
      <View style={{ marginLeft: 20, padding: 10, }}>
        <ScrollView>
          {listtxt.map((data) =>
            <Pressable
              key={data.id}
              onPress={() => delete_action(data.id)}
              android_ripple={{ color: '#672B6D' }}
              style={({ pressed }) => pressed && styles.pressedItems}
            >
              <View style={{ padding: 10, }}>
                <Text style={styles.displaytext} >{data.text}</Text>
                <View
                  style={{
                    borderBottomColor: '#8d8d18',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 7,
                    flex: 1,
                    height: 1,
                    borderStyle: 'dotted',
                  }}
                />
              </View>

            </Pressable>

          )
          }
        </ScrollView>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#2E847E',
    marginTop: 40

  },
  appcont: {
    flexDirection: 'column', margin: 50,
  },
  pressedItems: {
    opacity: 0.3
  },
  datainput: {
    // backgroundColor: '#672B6D',
    backgroundColor: '#2F9C94',
    borderRadius: 10,
  },
  datainputtext: {
    color: '#ffff',
    fontSize: 25,
    padding: 5,
    marginRight: 10
  },

  buttoninput: {
    // backgroundColor: '#79752C',
    backgroundColor: '#672B6D',
    marginTop: 7,
    borderRadius: 10,

  },
  buttontext: {
    color: '#ffff'
    ,
    padding: 5,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center'
  },
  displaytext: {
    color: '#ffff',
    fontSize: 18,
    padding: 2,

  }
});
