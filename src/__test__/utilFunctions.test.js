import { shortenText } from './../../src/utils/functions'
import { wordCount, attachUserName } from './../../server/utils'
import { shortText, longText, posts, users } from './__data__/testData'

it('shorten text should not alter a string with less than 100 char', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

it(' text shortener', () => {
    const shortened = shortenText(longText)
    expect(shortenText(shortText)).toHaveLength(29)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

it('word counter', () => {
    expect(wordCount(posts)).toBe(233)
})

it('attach Userz', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts[0]).not.toContainEqual(deletedPost)
})
