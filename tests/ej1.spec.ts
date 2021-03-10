import 'mocha';
import {expect} from 'chai';
import {encodeMessage} from '../src/ej1';

describe ('encodeMessage function test', () => {
  it('encodeMessage("holapacocomoestas") returns "', () => {
    expect(encodeMessage("holapacocomoestas")).to.be.deep.equal(["slozk","zxlxl","nlvhg","zh"]);
  });
});
