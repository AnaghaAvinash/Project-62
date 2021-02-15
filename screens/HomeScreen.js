import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';
import db from '../components/config';

var present;
var absent;
var today;

export default class ListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      all_students: [],
      presentPressedList: [],
      absentPressedList: [],
      stu1: true,
      stu2: true,
      stu3: true,
      stu4: true,
      stu5: true,
      stu6: true,
      stu7: true,
      stu8: true,
      stu9: true,
      stu10: true,
    };
  }

  componentDidMount = async () => {
    var bRef = db.ref("class/");
    bRef.on("value", data =>{
      var details = data.val();
      this.setState({
        stu1: details.enabled.enabled1,
        stu2: details.enabled.enabled2,
        alex: details.enabled.enabled3,
        stu4: details.enabled.enabled4,
        stu5: details.enabled.enabled5,
        stu6: details.enabled.enabled6,
        stu7: details.enabled.enabled7,
        stu8: details.enabled.enabled8,
        stu9: details.enabled.enabled9,
        stu10: details.enabled.enabled10,
      });
    });

    var class_ref = await db.ref('/').on('value', (data) => {
      // class_ref.on('value', (data) => {
      var all_students = [];
      var class_a = data.val().class_A;
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({ all_students: all_students });
    });

    today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    today = date + '-' + month + '-' + year;
    return today;   
  };

  reset=()=>{
    db.ref("class/enabled/").set({
      enabled1: false,
      enabled2: false,
      enabled3: false,
      enabled4: false,
      enabled5: false,
      enabled6: false,
      enabled7: false,
      enabled8: false,
      enabled9: false,
      enabled10: false,            
    })
  }

  goToSummary = () => {
    this.props.navigation.navigate('SummaryScreen');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.grid}>
            <Text style={styles.name}>1     Student A</Text>
            <TouchableOpacity
            disabled={this.state.stu1}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Present',
                  name: 'Student A',
                  roll_no: 1,
                });
                db.ref("class/enabled/").update({
                  enabled1: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.stu1}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Absent',
                  name: 'Student A',
                  roll_no: 1,
                }),
                  db.ref("class/enabled/").update({
                  enabled1: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>2     Student B</Text>
            <TouchableOpacity
            disabled={this.state.stu2}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Present',
                  name: 'Student B',
                  roll_no: 2,
                });
                db.ref("class/enabled/").update({
                  enabled2: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.stu2}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Absent',
                  name: 'Student B',
                  roll_no: 2,
                });
                db.ref("class/enabled/").update({
                  enabled2: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>3     Student C</Text>
            <TouchableOpacity
            disabled={this.state.stu3}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Present',
                  name: 'Student C',
                  roll_no: 3,
                });
                db.ref("class/enabled/").update({
                  enabled3: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.stu3}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Absent',
                  name: 'Student C',
                  roll_no: 3,
               });
               db.ref("class/enabled/").update({
                  enabled3: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>4     Student D</Text>
            <TouchableOpacity
            disabled={this.state.stu4}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Present',
                  name: 'Student D',
                  roll_no: 4,
                });
                db.ref("class/enabled/").update({
                  enabled4: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.stu4}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Absent',
                  name: 'Student D',
                  roll_no: 4,
                });
                db.ref("class/enabled/").update({
                  enabled4: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>5     Student E</Text>
            <TouchableOpacity
            disabled={this.state.stu5}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/05/').update({
                  [today]: 'Present',
                  name: 'Student E',
                  roll_no: 5,
                });
                db.ref("class/enabled/").update({
                  enabled5: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.stu5}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/05/').update({
                  [today]: 'Absent',
                  name: 'Student E',
                  roll_no: 5,
                });
                db.ref("class/enabled/").update({
                  enabled5: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>6     Student F</Text>
            <TouchableOpacity
            disabled={this.state.stu5}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/06/').update({
                  [today]: 'Present',
                  name: 'Student F',
                  roll_no: 6,
                });
                db.ref("class/enabled/").update({
                  enabled6: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.stu5}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/06/').update({
                  [today]: 'Absent',
                  name: 'Student F',
                  roll_no: 6,
                });
                db.ref("class/enabled/").update({
                  enabled6: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>7    Student G</Text>
            <TouchableOpacity
            disabled={this.state.stu7}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/07/').update({
                  [today]: 'Present',
                  name: 'Student G',
                  roll_no: 7,
                });
                db.ref("class/enabled/").update({
                  enabled7: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.stu7}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/07/').update({
                  [today]: 'Absent',
                  name: 'Student G',
                  roll_no: 7,
                });
                db.ref("class/enabled/").update({
                  enabled7: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>8    Student H</Text>
            <TouchableOpacity
            disabled={this.state.stu8}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/08/').update({
                  [today]: 'Present',
                  name: 'Student H',
                  roll_no: 8,
                });
                db.ref("class/enabled/").update({
                  enabled8: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.stu8}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/08/').update({
                  [today]: 'Absent',
                  name: 'Student H',
                  roll_no: 8,
                });
                db.ref("class/enabled/").update({
                  enabled8: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>9     Student I</Text>
            <TouchableOpacity
            disabled={this.state.stu9}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/09/').update({
                  [today]: 'Present',
                  name: 'Student I',
                  roll_no: 9,
                });
                db.ref("class/enabled/").update({
                  enabled9: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.stu9}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/09/').update({
                  [today]: 'Absent',
                  name: 'Student I',
                  roll_no: 9,
                });
                db.ref("class/enabled/").update({
                  enabled9: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>10   Student J</Text>
            <TouchableOpacity
            disabled={this.state.stu10}
              style={styles.buttons}
              onPress={() => {
                db.ref('class/10/').update({
                  [today]: 'Present',
                  name: 'Student J',
                  roll_no: 10,
                });
                db.ref("class/enabled/").update({
                  enabled10: true,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.stu10}
              style={styles.Abuttons}
              onPress={() => {
                db.ref('class/10/').update({
                  [today]: 'Absent',
                  name: 'Student J',
                  roll_no: 10,
                });
                db.ref("class/enabled/").update({
                  enabled10: true,
                });
              }}>
              <Text style={styles.Atext}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid1}>
          <TouchableOpacity style={styles.buttons1} onPress={this.goToSummary}>
            <Text style={styles.text1}>SUBMIT</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttons1} 
            onPress={this.reset}>
            <Text style={styles.text1}>RESET</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: '#00e381',
    borderWidth: 2,
    borderColor: "green",
    width: 70,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  Abuttons: {
    backgroundColor: '#ff004c',
    borderWidth: 2,
    borderColor: "brown",
    width: 70,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: "black",
  },
  Atext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: "black",
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    padding: 5,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
  },
  grid1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
  },
  buttons1: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderWidth: 3,
    width: 100,
    left: 20,
    marginTop: 20,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
