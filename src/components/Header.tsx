import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

interface HeaderProps {
  changeThemeMode: () => void;
  isDark: boolean;
}
export function Header({changeThemeMode, isDark}: HeaderProps) {
  console.log(isDark);
  return (
    <View style={[styles.header,  {backgroundColor: (isDark) ? '#282B5A' : '#273FAD'}]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <TouchableOpacity 
          style={[styles.changeThemeButton, {backgroundColor: (isDark) ? '#181818' : '#3FAD27'}]}
          activeOpacity={0.7}
          onPress={changeThemeMode}
          >
            <Text style={styles.headerText}>{isDark ? 'Light': 'Dark'}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  changeThemeButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 10
  },
  changeThemeButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
