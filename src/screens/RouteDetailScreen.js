import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RouteDetailScreen = ({ route, navigation }) => {
  const { route: busRoute } = route.params;
  const [showLiveUpdates, setShowLiveUpdates] = useState(true);

  const mockLiveUpdates = [
    {
      id: 1,
      busNumber: `${busRoute.number}-A`,
      location: busRoute.startPoint,
      status: 'Departed',
      time: '2 mins ago'
    },
    {
      id: 2,
      busNumber: `${busRoute.number}-B`,
      location: 'En route',
      status: 'On time',
      time: '5 mins away'
    },
    {
      id: 3,
      busNumber: `${busRoute.number}-C`,
      location: busRoute.endPoint,
      status: 'Arriving',
      time: 'Now'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.routeNumber}>Route {busRoute.number}</Text>
            <Text style={styles.routeName}>{busRoute.name}</Text>
          </View>
          <TouchableOpacity
            style={styles.liveUpdatesButton}
            onPress={() => setShowLiveUpdates(!showLiveUpdates)}
          >
            <Icon name="notifications" size={20} color="#fff" />
            <Text style={styles.liveUpdatesText}>
              {showLiveUpdates ? 'Hide Updates' : 'Show Updates'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.routeInfo}>
          <View style={styles.routePoint}>
            <Icon name="trip-origin" size={20} color="#1a73e8" />
            <Text style={styles.routePointText}>{busRoute.startPoint}</Text>
          </View>
          <View style={styles.routeLine} />
          <View style={styles.routePoint}>
            <Icon name="place" size={20} color="#1a73e8" />
            <Text style={styles.routePointText}>{busRoute.endPoint}</Text>
          </View>
        </View>

        {showLiveUpdates && (
          <ScrollView style={styles.updatesContainer}>
            <Text style={styles.updatesTitle}>Live Updates</Text>
            {mockLiveUpdates.map(update => (
              <View key={update.id} style={styles.updateItem}>
                <Icon name="directions-bus" size={20} color="#1a73e8" />
                <View style={styles.updateInfo}>
                  <Text style={styles.updateBusNumber}>Bus {update.busNumber}</Text>
                  <Text style={styles.updateLocation}>{update.location}</Text>
                  <Text style={styles.updateTime}>{update.time}</Text>
                </View>
                <Text style={[
                  styles.updateStatus,
                  { color: update.status === 'On time' ? '#2e7d32' : '#1a73e8' }
                ]}>
                  {update.status}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  routeNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  routeName: {
    fontSize: 16,
    color: '#666',
  },
  liveUpdatesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a73e8',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  liveUpdatesText: {
    color: '#fff',
    marginLeft: 4,
  },
  routeInfo: {
    marginBottom: 16,
  },
  routePoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  routePointText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  routeLine: {
    width: 2,
    height: 24,
    backgroundColor: '#1a73e8',
    marginLeft: 9,
  },
  updatesContainer: {
    flex: 1,
  },
  updatesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  updateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 8,
  },
  updateInfo: {
    flex: 1,
    marginLeft: 12,
  },
  updateBusNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  updateLocation: {
    fontSize: 14,
    color: '#666',
  },
  updateTime: {
    fontSize: 12,
    color: '#999',
  },
  updateStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default RouteDetailScreen;
