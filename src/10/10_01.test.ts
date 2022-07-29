import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";
import {move} from "formik";

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }
    const awesomeUser = makeHairStyle(user, 2)
    user = awesomeUser

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    // expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgragde laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const userCopy = upgradeUserLaptop(user, 'Macbook')


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('change address', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const userCopy = moveUserToOtherHouse(user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).not.toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const userCopy = updateBook(user, 'js', 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }
    const userCopy = removeBook(user, 'js')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('update company', () => {
    let companies = {
        'Dimych': [{id: 1, title: 'Епам'}, {id: 2, title: 'It-Incubator'}],
        'Artem': [{id: 2, title: 'It-Incubator'}]
    }

    const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'EPAM')
    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('EPAM')
})