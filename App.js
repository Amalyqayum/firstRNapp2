/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  console.log('I am a console statement');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.highlight}>Welcome to Republic Polytechnic</Text>
              <Text style={styles.sectionTitle}>About Us</Text>
              <Text style={styles.sectionDescription}>At <Text style={styles.highlight}>Republic Polytechnic</Text>, we will help you to Discover your potential, Transform opportunities into realities and Achieve your goals. We will support you on your unique learning journey, every step of the way.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Engaging Learning Experience</Text>
              <Text style={styles.sectionDescription}>Fun, active, engaging and goes beyond listening to lectures and memorising facts. Through our <Text style={styles.highlight}>Problem-based Learning (PBL)</Text> and other learner-centred approaches, you will have the opportunity to think critically, analyse problems and develop solutions while working in groups.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Further Studies</Text>
              <Text style={styles.sectionDescription}>As an RP graduate, you will have skills that will resonate throughout your entire life. Your professionalism, problem-solving skills and passion for life will give you an edge in any career you choose to pursue. Many RP graduates have gained recognition in various industries, both locally and overseas.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See more at</Text>
              <Text style={styles.sectionDescription}>
                https://www.rp.edu.sg/home
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
