import {load, keywordToBeSearched, click, pause, getText} from '../utils/helpers';

const search = (keyword) => {
    load('/');
    keywordToBeSearched(keyword);
    click(`[value='Google Search']`);
};

const searchCompany = () => {
    return getText('cite');
};

const getTheSerialNo = (companyUrl) => {
    let temp = 1;
    for(let i=2; i<=10;i++){
        let array = searchCompany();
        for(let j=0; j<array.length; j++){
            if(array[j].includes(companyUrl)){
                return j+temp;
            }
        }
        click(`[aria-label='Page ${i}']`);
        temp+=10;
        pause(2000);
    }
};

export default (keyword, companyUrl) =>{
    search(keyword);
    const index = getTheSerialNo(companyUrl);
    return index ? index : 'Your Website is not present in the first 10 pages';
}
