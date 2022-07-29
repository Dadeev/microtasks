export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    copy.hair = u.hair / 2
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) {
    return {
        ...u,
        books: [...u.books, newBooks]
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, book: string, newBooks: string) {
    return {
        ...u,
        books: u.books.map(b => b === book ? newBooks : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }
}

export function updateCompanyTitle(u: WithCompaniesType, CompanyId: number, companyTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === CompanyId ? {...c, title: companyTitle} : c)
    }
}

export function updateCompanyTitle2(company: { [key: string]: CompanyType[] }, userName: string, companyId: number, newTitle: string) {
    let companyCopy = {...company}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy;
}
