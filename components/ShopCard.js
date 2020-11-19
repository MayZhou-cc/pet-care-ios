import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar, Card } from 'react-native-paper';

const ShopCard = (props) => {
    const { title, subTitle, url, coversUrl, style = {} } = props;

    const onPress = () => Linking.canOpenURL(url).then(() => {
        Linking.openURL(url);
    });

    const starContent = props => <Avatar.Icon {...props} icon="star" color="orange" backgroundColor="white" />

    return (
        <TouchableOpacity onPress={onPress}>
            <Card style={[styles.card, style]}>
                <Card.Title title={title} subtitle="Click and go to the shop website" left={starContent} />
                <Card.Cover style={{ height: hp('15%') }} source={{ url: coversUrl }} />
                <Card.Actions style={{ justifyContent: "center" }}>
                </Card.Actions>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        marginHorizontal: wp('8%'),
        marginVertical: hp('2%')
    },
});

export default ShopCard;