## Installing
```bash
yarn
```

## Starting
```bash
yarn start # React | Port: 3000
yarn server # JSON Server | Port: 4000
```

## GMaps API Key
Replace `YOUR_API_KEY` at `src/components/mainContent/contacts/Contacts.tsx` on your API key
```ts
const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY'
})
```
