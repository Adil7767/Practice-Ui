
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
  SafeAreaView,
  ListRenderItem,
  StatusBar,
  ScrollView
} from 'react-native';
import CircularProgress from '../Components/CircularProgress';
import CustomButton_MUI from '../Components/CustomButton_MUI';
import RadioButton from '../Components/RadioButton';
interface MeetingTime {
  id: string;
  date: string;
  time: string;
}
const meetingTimes: MeetingTime[] = [
  { id: '1', date: 'Saturday, September 21st', time: '7:00 pm' },
  { id: '2', date: 'Sunday, September 22nd', time: '7:00 pm' },
  { id: '3', date: 'Saturday, October 5th', time: '7:00 pm' },
];
const Home: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<string>('');
  const [show, setShow] = React.useState<boolean>(false);
  const handleRadioPress = (id: string) => {
    setSelectedDate((prev) => (prev === id ? '' : id));
  };
  const renderMeetingTimes: ListRenderItem<MeetingTime> = ({ item }) => (
    <View style={styles.meetingContainer}>
      <RadioButton
        selected={selectedDate === item.id}
        onPress={() => handleRadioPress(item.id)}
        outerColor={selectedDate === item.id ? '#00BA6B' : 'gray'}
        innerColor={selectedDate === item.id ? 'green' : 'gray'}
      />
      <TouchableOpacity style={styles.meetingItem} onPress={() => handleRadioPress(item.id)}>
        <Text style={styles.meetingText}>{item.date}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#000"
      />
      <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={[
              
              {
                flexGrow: 1,
              },
            ]}>
      <ImageBackground
        source={require('../asset/image.png')}
        style={styles.backgroundImage}>
        <View style={styles.header}>
          <Image
            source={require('../asset/Logo.png')}
            resizeMode="cover"
          />
        </View>
        {show &&
        <View style={styles.progressContainer}>
          <CircularProgress
            strokeWidth={7}
            size={70}
            progress={4 / 6}
            color={'#00BA6B'}
            backgroundColor={'#333333'}>
            <Text style={styles.progressText}>4/6</Text>
          </CircularProgress>
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressHeader}>You're almost there!</Text>
            <Text style={styles.progressSubtext}>Complete your profile to start booking meetings</Text>
          </View>
          <Image
            source={require('../asset/icon.png')}
            style={{bottom:24}}
            resizeMode="cover" />
        </View>
}
        <View style={styles.riyadText}>
          <Image
            source={require('../asset/Riyadh.png')}
            style={{ marginBottom:5 }}
            resizeMode="cover"
          />
          <Text style={styles.subText}>Saudi Arabia</Text>
          <TouchableOpacity style={{ flexDirection: 'row',marginTop:4 }}>
            <Image
              source={require('../asset/location.png')}
              style={styles.locationIcon}
              resizeMode="cover"
            />
            <Text style={styles.changeLocation}>Change Location</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.body}>
        <Text style={styles.meetingLabel}>
          Select a date for an online meeting with 4 founders selected by our
          algorithm
        </Text>
        <FlatList
          data={meetingTimes}
          renderItem={renderMeetingTimes}
          keyExtractor={item => item.id}
          style={styles.meetingList}
        />
        {selectedDate &&
        <View style={{position:"absolute",bottom:20,width:"100%",alignSelf:"center"}}>
          <CustomButton_MUI
            disabled={false}
            text={'Book My Seat'}
            variant={'contained'}
            color={'#00BA6B'}
            textColor={'#fff'}
          onClick={() => {setShow(true);setSelectedDate("")}}
          /></View>}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    marginTop:"20%",
    backgroundColor: '#000000',
    opacity: 0.8,
    elevation:5
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    marginTop: -10,
    alignSelf: 'center',
    width: 100,
    height: 40,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
  },
  locationText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '500',
    marginBottom:5
  },
  changeLocation: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  meetingLabel: {
    color: '#79747E',
    paddingTop: 16,
  },
  meetingList: {
    marginTop: 10,
  },
  meetingItem: {
    flex: 1,
    paddingLeft: 18,
    paddingVertical: 12,
  },
  meetingText: {
    fontSize: 18,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'black',
  },
  footerImage: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  riyadText: { marginLeft: 16, marginTop: 230},
  locationIcon: { marginTop: 3, marginRight: 6 },
  meetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginHorizontal: 16,
  },
  timeText: {
    fontSize: 14,
    color: 'gray',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#fff",
    opacity: 0.8,
    height: 96,
    width: "90%",
    borderRadius: 8,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    alignSelf: "center",
    top:60,
    position: "absolute"
  },
  progressText: {
    color: '#00BA6B',
    fontSize: 16,
    fontWeight: "bold",
  },
  progressTextContainer: {
    marginLeft: 16,
    justifyContent: 'center',
    width: "70%"
  },
  progressHeader: {
    color: '#000',
    fontSize: 16,
    fontWeight: "bold",
  },
  progressSubtext: {
    color: '#49454F',
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    // width:"70%"
  },
});
