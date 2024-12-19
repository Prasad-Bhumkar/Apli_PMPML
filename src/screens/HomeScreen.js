import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { mockBusRoutes, mockBusStops } from '../data/mockData';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('routes'); // 'routes' or 'stops'

  const filteredRoutes = mockBusRoutes.filter(route =>
    route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    route.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStops = mockBusStops.filter(stop =>
    stop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    stop.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderRouteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.routeItem}
      onPress={() => navigation.navigate('RouteDetail', { route: item })}
    >
      <View style={styles.routeHeader}>
        <Text style={styles.routeNumber}>Route {item.number}</Text>
        <View style={styles.activeIndicator}>
          <Text style={styles.activeText}>Active</Text>
        </View>
      </View>
      <Text style={styles.routeName}>{item.name}</Text>
      <View style={styles.routeDetails}>
        <Icon name="location-on" size={16} color="#666" />
        <Text style={styles.routeEndpoints}>
          {item.startPoint} → {item.endPoint}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderStopItem = ({ item }) => (
    <TouchableOpacity style={styles.stopItem}>
      <Text style={styles.stopName}>{item.name}</Text>
      <Text style={styles.stopArea}>{item.area}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search routes or stops..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'routes' && styles.activeTab]}
          onPress={() => setSelectedTab('routes')}
        >
          <Icon name="directions-bus" size={24} color={selectedTab === 'routes' ? '#1a73e8' : '#666'} />
          <Text style={[styles.tabText, selectedTab === 'routes' && styles.activeTabText]}>Routes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'stops' && styles.activeTab]}
          onPress={() => setSelectedTab('stops')}
        >
          <Icon name="place" size={24} color={selectedTab === 'stops' ? '#1a73e8' : '#666'} />
          <Text style={[styles.tabText, selectedTab === 'stops' && styles.activeTabText]}>Stops</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={selectedTab === 'routes' ? filteredRoutes : filteredStops}
        renderItem={selectedTab === 'routes' ? renderRouteItem : renderStopItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 8,
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a73e8',
  },
  tabText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#1a73e8',
  },
  list: {
    flex: 1,
  },
  routeItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  routeNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  activeIndicator: {
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activeText: {
    color: '#2e7d32',
    fontSize: 12,
  },
  routeName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  routeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeEndpoints: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14,
  },
  stopItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  stopName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  stopArea: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
