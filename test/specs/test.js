import SEO from '../logic/search';

const keyword = browser.keyword,
    companyToBeSearched = browser.company;

describe('SEO', () => {
    it('Search & Fetch results', () => {
        const serialNumber = SEO(keyword, companyToBeSearched);
        console.log(serialNumber);
    });
})