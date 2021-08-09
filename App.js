import React from 'react'
import { View, Text, TouchableOpacity,Image,Platform, PermissionsAndroid } from 'react-native'
import Home from './src/Screens/Home'
import Start from './src/Screens/start'
const App = () => {
  const Image_look='https://cdn.pixabay.com/photo/2021/08/03/17/48/sunflower-6520055_1280.jpg'
  const postichins=async()=>{
    if(platform.OS=='ios'){
      downloadedImage()
    }else{
      try {
        const Granted= await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title:'Storage Permissions Required',
            message:'App needs access to your storage to download Photos'
          }
        )
        if(Granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage Permissions Granted')
          downloadedImage()
        }else{
          alert('Storage Permissions Not Granted')
        }
      } catch (error) {
        console.warn(error)
      }
    }   
  }
  const downloadedImage=()=>{
    let data =new Data()
    let image_URL=Image_look
    let ext=getExtention(image_URL)
    ext = '.'+ext[0]
    // Get config and fs from RNFetchBlob
    const {config, fs} = RNFetchBlob
    let PictureDir=fs.dirs.PictureDir
    let Options ={
      fileCache: true,
      addAndroidDownload:{
        useDownloadManager: true,
        notification: true,
        path: PictureDir +'/image_'+
        Math.floor(date.getTime()+date.getSecond()/2)+ext,
        description:"Image"
      }
    }
    config(Options)
    .fetch('GET',image_URL)
    .then(res=>{
      console.log('res -> ',JSON.stringify(res))
      alert('Image Downloaded Successfully.')
    })
    }
  const getExtention=filename=>{
    return /[.]/.exec(filename) ?/[^.]+$/.exec(filename):undefined
  }
    return (
    <View style={{marginTop:45}}>
      <Image 
      source={{uri:Image_look}}
      style={{width:"100%",height:"50%"}}/>
      <TouchableOpacity
      onPress={postichins}
      style={{backgroundColor:"#ffb703",marginTop:5,width:"100%",height:30}}>
      <Text>Download Image</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App
