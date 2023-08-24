const data = {
    tree: [{
            name: 'name1',
            tree_1: [{
                    name: 'name2'
                },
                {
                    name: 'name3'
                },
                {
                    name: 'name4',
                    tree_2: [{
                            name: 'name5'
                        },
                        {
                            name: 'name6'
                        },
                        {
                            tree_3: [{
                                    name: undefined
                                },
                                {
                                    name: 'name7',
                                    age: 20
                                },
                                {
                                    name: 'name8',
                                    age: 15
                                },
                                {
                                    name: 'name9',
                                    age: 31
                                },
                                {
                                    name: 'name10',
                                    age: 30
                                },
                                {
                                    name: undefined,
                                    age: undefined
                                },
                                {
                                    name: 'empty',
                                    age: 'empty'
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'name11'
                },
            ],
        },
        {
            name: 'name12',
            tree_4: [{
                name: 'name3'
            }],
        },
    ],
};

function findName(obj, searchName) {
    let result = null;

    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            result = findName(obj[i], searchName);
            if (result) break;
        }
    } else if (typeof obj === 'object') {
        let objKeys = Object.keys(obj);

        for (let i = 0; i < objKeys.length; i++) {
            if (objKeys[i] === searchName) {
                result = obj[objKeys[i]];
                break;
            }

            result = findName(obj[objKeys[i]], searchName);
        }
    }

    return result;
}

function findNameInObj (obj, searchName) {
    let finded = findName(obj, searchName);

    if (Array.isArray(finded)) {
        finded = finded.filter(item => item.name && item.name !== 'empty').sort((a, b) => b.name.match(/\d+/) - a.name.match(/\d+/));
    }

    return finded;
}

console.log(findNameInObj(data, 'tree_3'))