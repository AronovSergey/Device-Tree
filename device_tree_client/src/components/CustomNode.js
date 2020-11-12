import React from 'react';

//MUI Stuff
import TreeItem from '@material-ui/lab/TreeItem';



const CustomNode = (props) => {
  const {id, vendorId, productId, deviceName, type, isAvailable, childrens } = props.data;

  return (
    <TreeItem nodeId={id + "1"} label={`${deviceName}`} >
      {type !== "Server" && type !== "Devices" && type !== "Hubs" && (<TreeItem nodeId={id + "2"} label={`vendorId : ${vendorId}`} />)}
      {type !== "Server" && type !== "Devices" && type !== "Hubs" && (<TreeItem nodeId={id + "3"} label={`productId : ${productId}`} />)}
      <TreeItem nodeId={id + "4"} label={`type : ${type}`} />
      <TreeItem nodeId={id + "5"} label={`status : ${isAvailable}`} />
      {childrens && childrens.map((child, index) => <CustomNode data={child} key={id+ index}/>)}
    </TreeItem>
  );
};

export default CustomNode;
