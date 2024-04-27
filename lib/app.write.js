import { Client } from 'react-native-appwrite';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.ryme.aora',
    projectId: '6622c3f2cfe492b1120c',
    databaseId: '6622c4f519fb25ccc74a',
    userCollectionId: '6622c516f309c54a3244',
    videoCollectionId: '6622c516f309c54a3244',
    storageId: '6622c752c11c59cd09e8',
}

// Init your react-native SDK 
const client = new Client();

client
    .setEndpoint(config.endpoint) // Appwrite Endpoint
    .setProject(config.projectid) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

;