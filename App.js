import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MapContainer, TileLayer, Marker } from 'react-native-leaflet-kit';

export default function App() {
  const [screen, setScreen] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      setScreen('home');
    }
  };

  if (screen === 'login') {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.loginContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Text style={styles.title}>Login to Open Map</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#999"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <StatusBar style="light" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeHeader}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Press the map icon to open the map</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => setShowMap(true)}>
          <Image source={require('./assets/googlemap.jpg')} style={styles.iconImage} />
          <Text style={styles.iconLabel}>Open Map</Text>
        </TouchableOpacity>
      </View>
      {showMap ? (
        <View style={styles.mapWrapper}>
          <MapContainer
            center={{ lat: 31.5204, lng: 74.3587 }}
            zoom={13}
            isDark={true}
            attributionControl={false}
            prefix={false}
            style={styles.map}
          >
            <TileLayer />
            <Marker id="Lahore" position={{ lat: 31.5204, lng: 74.3587 }} title="Lahore" />
          </MapContainer>
        </View>
      ) : (
        <View style={styles.emptyMapPlaceholder}>
          <Text style={styles.placeholderText}>Map will open here</Text>
        </View>
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: '#dddddd',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#111111',
    color: '#ffffff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  button: {
    backgroundColor: '#1a73e8',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  homeHeader: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  iconContainer: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  iconButton: {
    alignItems: 'center',
  },
  iconImage: {
    width: 130,
    height: 130,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  iconLabel: {
    color: '#ffffff',
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  mapWrapper: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#000000',
  },
  map: {
    flex: 1,
  },
  emptyMapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#888888',
    fontSize: 16,
  },
});


