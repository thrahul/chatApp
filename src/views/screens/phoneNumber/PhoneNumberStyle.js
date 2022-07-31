import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  headingText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
  },
  nextBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
   
  },
  nextText: {
    width: 100,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
  },
  nextBtnn:{
    backgroundColor: '#0000ff',
  },
  msgText: {
    fontSize: 14,
    textAlign: 'left',
  },
  copyBtn: {
    marginVertical: 20,
    backgroundColor: '#808080',
    color: '#fff',
  },
  copyBtnText: {
    fontWeight: '500',
    color: '#fff',
    textTransform: 'uppercase',
  },
  otpBox: {
      marginTop: 15,
      paddingHorizontal: 30,
  }
});
