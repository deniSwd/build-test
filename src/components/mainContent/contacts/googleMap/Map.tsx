import {FC} from 'react'
import {GoogleMap, MarkerF} from '@react-google-maps/api'
import markerImg from '../../../../assets/Map-Marker-PNG-Pic.png'

const containerStyle = {
  width: '100%',
  height: '100%'
}
const center = {
  lat: 42.43174133565352,
  lng: 19.255100726077973
}

export const Map: FC = () => {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}>
      <MarkerF position={center} icon={markerImg}/>
    </GoogleMap>
  )
}