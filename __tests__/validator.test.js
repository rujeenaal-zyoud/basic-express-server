
'use strict';
const validatorMuddleware = require('../src/middleware/validator');

describe('validatorMuddleware', () => {
    // let consoleSpy;
    // beforeEach(()=>{
    //     consoleSpy = jest.spyOn(console,'log').mockImplementation();
    //   })
    //   afterEach(()=>{
    //     consoleSpy.mockRestore();
    //   })
      it('returning the query name', () => {
        let req = {
          query: {
            name: 'rujeena',
          },
        };
        let res = {};
        let next = jest.fn();
        validatorMuddleware(req, res, next);
        expect(next).toHaveBeenCalled();
      });
  
      it('handling no query', () => {
        let req = {
          query: {
            name: '',
          },
        };
        let res = {};
        let next = jest.fn();
        validatorMuddleware(req, res, next);
        expect(next).toHaveBeenCalledWith('Dont Have name');
      });
    
});