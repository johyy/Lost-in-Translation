import { createHeaders } from "."

const apiUrl = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY

export const translationAdd = async (user, translation) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })

        if (!response.ok) {
            throw new Error("Could not update the translation")
        }

        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }
}

export const translationClearHistory =  userId => {
    fetch(`${apiUrl}/${userId}`, {
        method: 'PATCH',
        headers: {
            'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            translations: [] 
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not update translations history')
      }
      return response.json()
    })
    .then(updatedUser => {
    })
    .catch(error => {
    })
}