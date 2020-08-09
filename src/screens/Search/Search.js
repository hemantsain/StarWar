import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Styles} from '../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {doPlanetSearchRequest} from '../../state/actions';

export default function Search(props) {
  const [DATA, setDATA] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.appReducer);

  useEffect(() => {
    dispatch(doPlanetSearchRequest());
  }, [dispatch]);

  useEffect(() => {
    setDATA(searchResult.planetSearchResult);
  }, [searchResult]);

  const updateSearch = (text) => {
    setSearch(text);
    const filter = DATA.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilterData(filter);
  };

  const renderListItem = ({item}) => {
    return (
      <View style={{...Styles.cardStyle, marginVertical: 10}}>
        <View style={Styles.innerViewStyle}>
          <Text style={Styles.titleStyle}>Name: {item.name}</Text>
          <Text style={Styles.subTitleStyle}>Climate: {item.climate}</Text>
          <Text style={Styles.subTitleStyle}>
            Population: {item.population}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={Styles.rootContainer}>
      <View style={Styles.appContainer}>
        <SearchBar
          placeholder="Search Here..."
          onChangeText={(text) => updateSearch(text)}
          value={search}
        />
        {searchResult && searchResult.isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={filterData && filterData.length > 0 ? filterData : DATA}
            renderItem={renderListItem}
            keyExtractor={(item) => item.name.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
