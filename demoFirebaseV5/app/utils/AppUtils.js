import { Linking } from 'react-native'

//check Map application install or not on user's device
export default function isAppInstalled(app) {
    return new Promise((resolve) => {
        Linking.canOpenURL(app)
            .then((result) => {
                resolve(!!result)
            })
            .catch(() => resolve(false))
    })
}