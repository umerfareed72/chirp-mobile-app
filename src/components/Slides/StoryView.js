import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {isNullOrWhitespace} from '../../utilities';
import CubeNavigationHorizontal from './CubeNavigationHorizontal';
import AndroidCubeEffect from './AndroidCubeEffect';
import StoryListItem from './StoryListItem';

export const StoryView = ({
  selectedData,
  onClose,
  setIsModalOpen,
  isModalOpen = false,
  swipeText,
  customSwipeUpComponent,
  customCloseComponent,
}) => {
  const cube = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  function onStoryFinish(state) {
    if (!isNullOrWhitespace(state)) {
      if (state == 'next') {
        const newPage = currentPage + 1;
        if (newPage < selectedData.length) {
          setCurrentPage(newPage);
          cube?.current?.scrollTo(newPage);
        } else {
          setCurrentPage(0);
          if (onClose) {
            onClose(selectedData[selectedData.length - 1]);
          }
        }
      } else if (state == 'previous') {
        const newPage = currentPage - 1;
        if (newPage < 0) {
          setIsModalOpen(false);
          setCurrentPage(0);
        } else {
          setCurrentPage(newPage);
          cube?.current?.scrollTo(newPage);
        }
      }
    }
  }
  const renderStoryList = () =>
    selectedData?.map((x, i) => {
      return (
        <StoryListItem
          duration={10 * 1000}
          key={i}
          profileName={x?.user_name}
          profileImage={x?.user_image}
          stories={x?.stories}
          currentPage={currentPage}
          onFinish={onStoryFinish}
          swipeText={swipeText}
          onClosePress={() => {
            setIsModalOpen(false);
            if (onClose) {
              onClose(x);
            }
          }}
          index={i}
          customSwipeUpComponent={customSwipeUpComponent}
          customCloseComponent={customCloseComponent}
        />
      );
    });
  const renderCube = () => {
    if (Platform.OS == 'ios') {
      return (
        <CubeNavigationHorizontal
          ref={cube}
          callBackAfterSwipe={x => {
            if (x != currentPage) {
              setCurrentPage(parseInt(x));
            }
          }}>
          {renderStoryList()}
        </CubeNavigationHorizontal>
      );
    } else {
      return (
        <AndroidCubeEffect
          ref={cube}
          callBackAfterSwipe={x => {
            if (x != currentPage) {
              setCurrentPage(parseInt(x));
            }
          }}>
          {renderStoryList()}
        </AndroidCubeEffect>
      );
    }
  };
  return (
    <Modal visible={isModalOpen} onRequestClose={setIsModalOpen}>
      {renderCube()}
    </Modal>
  );
};

const styles = StyleSheet.create({});
