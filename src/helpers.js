import React from 'react'

//given an array of values, paginate into the given childsize and return an array
function paginateData(arrayOfData, childSize=20){
    let count = 0;
    const parent = [];

    while(count < arrayOfData.length){
        let child = [];
        for(let i=0; i < childSize; i++){
            child.push(arrayOfData[count]);
            count++
        }
        //add the new group to the overall array and reset for the next set
        parent.push(child)
        child = []
    }
    return parent;
}


export { paginateData }