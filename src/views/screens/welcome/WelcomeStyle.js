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
  bgLogo: {
    textAlign: 'center',
  },
  bgLogoImg: {
    width: 300,
    height: 300,
    borderRadius: 400,
    resizeMode: 'contain',
    margin: 'auto',
  },
  termText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  },
  restore: {
    marginBottom: 20,
    backgroundColor: '#0000ff',
    color: '#fff',
  },
  restoreText: {
    fontWeight: '500',
    color: '#fff',
    textTransform: 'uppercase',
  },
  agree: {
    marginBottom: 20,
    backgroundColor: '#00008b',
    color: '#fff',
  },
  agreeText: {
    fontWeight: '500',
    color: '#fff',
    textTransform: 'uppercase',
  },
});
