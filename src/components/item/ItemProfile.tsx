import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextBold from 'components/fonts/TextBold'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ItemProfileProps } from 'interfaces/Components'
import TextRegular from 'components/fonts/TextRegular'

const ItemProfile = ({
  icon,
  isSubtitle,
  onPress,
  subtitle,
  subtitleColor,
  title,
}: ItemProfileProps) => (
  <TouchableOpacity
    style={{
      width: '100%',
      height: 50,
      alignItems: 'center',
      shadowColor: '#000',
      backgroundColor: '#fff',
      elevation: 5,
      marginVertical: 7,
      borderRadius: 10,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 5,
      shadowOpacity: 1.0,
      flexDirection: 'row',
      padding: 10,
    }}
    onPress={onPress}
  >
    <Icon name={icon} size={25} color="#000" />
    <View style={{ marginHorizontal: 5 }} />
    <TextBold color="#000" size={16} value={title} />
    <View style={{ marginHorizontal: 3 }} />
    {isSubtitle ? (
      <TextRegular
        color="#000"
        size={10}
        value={subtitle}
        options={{ backgroundColor: subtitleColor, padding: 2 }}
      />
    ) : null}
  </TouchableOpacity>
)

export default ItemProfile
