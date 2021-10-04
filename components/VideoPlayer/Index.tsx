import React, {useRef, useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Episode} from '../../types'
import { Audio, Video } from 'expo-av';
import styles from '../VideoPlayer/styles'
import { Playback } from 'expo-av/build/AV';


interface VideoPlayerProps{
    episode: Episode;
}
const VideoPlayer = (props:VideoPlayerProps) => {
    const {episode} = props;

    
    const [status, setStatus] =useState({});


    const video = useRef<Playback>(null);
    
    useEffect(() => {
        if(!video){
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync({
                uri:episode.video},{},false
            );
        })();
    }, [episode])

    return (
        <View>
            <Video
                ref={video}
                style={styles.video}
                source={{
                uri: episode.video,
                }}
                posterSource={{
                    uri: episode.poster,
                }}
                posterStyle={{
                    resizeMode:'cover'
                }}
                usePoster={true} 
                useNativeControls
                resizeMode="contain"
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </View>
    )
}

export default VideoPlayer; 
