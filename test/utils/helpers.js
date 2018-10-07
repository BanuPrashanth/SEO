export const load = (url) => {
    browser.url(url);
};

const wait = (selector) => {
    const element = $(selector);
    element.waitForVisible(5000);
};

const waitForClickable = (selector) => {
    wait(selector);
    browser.waitForEnabled(selector);
};

export const pause = (timeout=1000) => {
    browser.pause(timeout);
};

export const keywordToBeSearched = (keyword) => {
    wait(`[name='q']`);
    const element = $(`[name='q']`);
    element.setValue(keyword);
};

export const click = (selector) => {
    waitForClickable(selector);
    const element = $(selector);
    element.click();
};

export const getText = (selector) => {
    const elements = $$(selector);
    return elements.map((element) => {
        pause(300);
        return element.getText();
    });
};