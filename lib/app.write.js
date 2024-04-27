import { ID, Account, Client, Databases, Avatars } from 'react-native-appwrite';


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
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client)

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username)
        await signIn(email,password);
        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function signIn(email, password){
    try {
        const session = await account.createEmailSession(email, password)
        return session;
    } catch (error) {
        throw new Error(error);
    }
}
