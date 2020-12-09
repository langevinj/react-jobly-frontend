import { paginateData } from './helpers'

const arrayOfData = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayOfData2 = [1, 2, 3, 4, 5, 6, 7, 8]

describe('paginateData', () => {
    test("returns an array of arrays, with each child array being the correct size", function () {
        let res = paginateData(arrayOfData, 3);
        expect(res).toEqual([[1,2,3], [4,5,6], [7,8,9]]);
    });

    test("works with imperfect size", function () {
        let res = paginateData(arrayOfData2, 3);
        expect(res[2].length).toEqual(3)
        expect(res).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, undefined]])
    });
});
