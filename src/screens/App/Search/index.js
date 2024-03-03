import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {ListCard, ScreenHeader, SearchSec1} from '../../../components';
import {appImages, colors, commonstyles} from '../../../utilities';

const Search = ({navigation, route}) => {
  const list = route?.params?.list || [];
  const recentList = route?.params?.recentList || [];

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState(list);

  const searchFilter = text => {
    if (text) {
      const newData = masterDataSource?.filter(item => {
        return item?.name
          .toLowerCase()
          .trim()
          .includes(text.toLowerCase().trim());
      });

      setFilteredDataSource(newData);
    } else {
      setFilteredDataSource([]);
    }

    setSearch(text);
  };

  return (
    <View style={commonstyles.main}>
      <SearchSec1 onChangeText={text => searchFilter(text)} value={search} />
      <ScrollView style={commonstyles.contentContainer(colors.g6)}>
        {filteredDataSource.length > 0 && (
          <View style={styles.searchCon}>
            <FlatList
              data={filteredDataSource}
              renderItem={({item, index}) => (
                <ListCard
                  imageUri={appImages.profileImage}
                  title={item?.name}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}

        {!search.length > 0 && (
          <>
            <ScreenHeader title={'Recent Searches'} />
            <FlatList
              data={recentList}
              renderItem={({item, index}) => (
                <ListCard
                  imageUri={appImages.profileImage}
                  title={item?.name}
                  showCloseIcon
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchCon: {
    marginTop: 15,
  },
});
