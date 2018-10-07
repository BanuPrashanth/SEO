import SEO from '../logic/search';

const keyword = 'testing companies in bangalore',
    companyToBeSearched = 'https://www.thoughtframeworks.com/';

describe('SEO', () => {
    it('Search & Fetch results', () => {
        const serialNumber = SEO(keyword, companyToBeSearched);
        console.log(serialNumber);
    });
})