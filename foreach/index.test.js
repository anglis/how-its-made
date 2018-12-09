const messages = require("./error.messages");
const createForEachCustomFunction = require("./index");

describe('Test suite for forEach implementation', () => {
    let array;
    let callback;
    let object = jest.fn(Object);

    beforeEach(() => {
        array = [1, 2, 3, 4];
        callback = jest.fn(function(element, index, arr) {
            return {
                element,
                index,
                array: arr,
            }
        });

        createForEachCustomFunction.call(undefined, object);
    });

    it('Test if forEachCustom exists', () => {
        expect(typeof array.forEachCustom).toBe('function');
    });

    it('Test if returns undefined', () => {
        expect(array.forEachCustom(callback)).toBeUndefined();
    });

    it('Test if object is called', () => {
        expect(object.mock.calls[0].length).toBe(1);
    });

    describe('Test suit for calling forEachCustom without callback', () => {
        it('Test if throw error if not passed callback', () => {
            expect(array.forEachCustom).toThrow(messages.NO_CALLBACK);
        })
    })

    describe('Test suite if called on empty array', () => {
        beforeEach(() => {
            array = [];
        });

        it('Test call back is not called', () => {
            expect(callback.mock.calls.length).toBe(0);
        });
    });

});