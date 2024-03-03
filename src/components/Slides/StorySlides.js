import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {StoryView} from './StoryView';

export const StorySlider = ({
  selectedData,
  onClose,
  setIsModalOpen,
  isModalOpen = false,
  swipeText,
  customSwipeUpComponent,
  customCloseComponent,
}) => {
  console.log(selectedData);
  return (
    <View>
      <StoryView
        selectedData={selectedData}
        onClose={onClose}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        swipeText={swipeText}
        customSwipeUpComponent={customSwipeUpComponent}
        customCloseComponent={customCloseComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
