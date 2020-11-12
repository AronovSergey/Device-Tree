import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchRoot } from './../redux/action';
import TabsBar from '../components/TabsBar';
import CustomTreeView from '../components/CustomTreeView';
import { showNotification } from './../UI/notificationToast';

import io from 'socket.io-client';
const socket = io('http://localhost:8080/');

const Main = () => {
  const dispatch = useDispatch();
  const [tabValue, setTabValue] = useState(0);
  
  useEffect(() => {
    socket.on('update', (message) => {
      showNotification(message, "success");
      dispatch(fetchRoot());
    })
    
    dispatch(fetchRoot());
  }, [dispatch]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <TabsBar handleTabChange={handleTabChange} tabValue={tabValue} />
      {<CustomTreeView tabValue={tabValue}/>}
    </div>
  );
};

export default Main;
