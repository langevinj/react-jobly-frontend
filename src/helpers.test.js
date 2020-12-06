import { renderJobButton, paginateData } from './helpers'

/** renderJobButton */
const applyForJob = () => {return ""}
const unApply = () => {return ""}
const applications = [1, 2, 3]

describe("renderJobButton", function () {
    test("returns an applied for job button correctly", function () {
        let res = renderJobButton(applications, 1, applyForJob, unApply)
        expect(res).toEqual(<button type="button" data-toggle="button" className="Apply btn-secondary rounded" onClick={unApply}>Applied</button>)
    });

    test("returns a not yet applied for job button correctly", function () {
        let res = renderJobButton(applications, 4, applyForJob, unApply)
        expect(res).toEqual(<button type="button" data-toggle="button" className="Apply btn-primary rounded" onClick={applyForJob}>Apply</button>);
    });
});

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
