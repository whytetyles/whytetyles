import React, {useState} from 'react'
import { MaterialIcons, Entypo, AntDesign, Feather, Ionicons} from '@expo/vector-icons';
import {Image, Pressable, FlatList} from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './Styles';
import movie from '../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem/Index';
import {Picker} from '@react-native-picker/picker';
import VideoPlayer from '../../components/VideoPlayer/Index'; 


const firstSeason = movie.seasons.items[0];

const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen =() => {
    /* Mapping  for each season we get only the season name*/
    const seasonNames = movie.seasons.items.map(season => season.name);
    const [currentEpisode , setCurrentEpisode] =useState(firstSeason.episodes.items[0]);
    const [currentSeason, setCurrentSeason] = useState(firstSeason);
    return (
        <View>
            <VideoPlayer episode={currentEpisode} />
            <FlatList 
                data={currentSeason.episodes.items}
                renderItem={({item}) => <EpisodeItem episode= {item} onPress={setCurrentEpisode} />} 
                style={{marginBottom:250}}
                ListHeaderComponent={(
                    <View style={{padding:12}}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={{flexDirection : 'row'}}>
                    <Text style={styles.match}> 98% match</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                    <View style={styles.ageContainer}>
                        <Text style={styles.age}>12+</Text>
                    </View>

                    <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                    <MaterialIcons name="hd" size={24} color ="black"/>
                </View>
                { /*Play Button */}
                <Pressable onPress = {() => {console.warn('Play')}} style ={styles.playButton} >
                    <Text style={styles.playButtonText}>
                        <Entypo  name="controller-play" size={16} color="black"/> Play
                    </Text>
                </Pressable>

                { /*Download Button */}
                <Pressable onPress = {() => {console.warn('Download')}} style ={styles.downloadButton} >
                    <Text style={styles.downloadButtonText}>
                        <AntDesign  name="download" size={14} color="white"/> Download
                    </Text>
                </Pressable>
                
                <Text style={{marginVertical:10}}>{movie.plot}</Text>
                    
                <Text style={styles.year}>Cast: {movie.cast}</Text>
                <Text style={styles.year}>Creator: {movie.creator}</Text>


                {/* Row with icon buttons */}

                <View style={{flexDirection:'row',marginVertical:10}}>
                    <View style={{alignItems:'center', marginHorizontal:20}}>
                        <AntDesign name="plus" size={20} color={'black'}/>
                        <Text style={{color:'darkgrey'}}>My List</Text>
                    </View>

                    <View style={{alignItems:'center', marginHorizontal:20}}>
                        <Feather name="thumbs-up" size={20} color={'black'}/>
                        <Text style={{color:'darkgrey'}}>Like</Text>
                    </View>

                    <View style={{alignItems:'center', marginHorizontal:20}}>
                        <Ionicons name="share-social" size={20} color={'black'}/>
                        <Text style={{color:'darkgrey'}}>Share</Text>
                    </View>
                </View>
                <Picker
                    style={{width:130}}
                    selectedValue={currentSeason.name}
                    onValueChange={(itemValue, itemIndex) =>{ setCurrentSeason(movie.seasons.items[itemIndex])}}>
                    {seasonNames.map(seasonName =>(
                        <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                    ))}
                    
                </Picker>
            </View>
                )}
            />
        </View>
    )
};

export default MovieDetailsScreen
