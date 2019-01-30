import { Page } from '../../src/lib/Page';
import 'mocha';
import { expect } from 'chai';

describe('Page', () => {
  it('should be a constructor', () => {
    expect(Page).to.be.a('function');
    expect(Page).to.throw();
  });

  it('should be empty', () => {
    const page = new Page();
    const json = JSON.stringify({});
    const result = JSON.stringify(page.generate());
    expect(result).to.equal(json);
  });

  it('should generate qLeft', () => {
    const page = new Page();
    page.left = 1;
    const json = JSON.stringify({ qLeft: 1 });
    const result = JSON.stringify(page.generate());
    expect(result).to.equal(json);
  });

  it('should generate qTop', () => {
    const page = new Page();
    page.top = 1;
    const json = JSON.stringify({ qTop: 1 });
    const result = JSON.stringify(page.generate());
    expect(result).to.equal(json);
  });

  it('should generate qWidth', () => {
    const page = new Page();
    page.width = 1;
    const json = JSON.stringify({ qWidth: 1 });
    const result = JSON.stringify(page.generate());
    expect(result).to.equal(json);
  });

  it('should generate qHeight', () => {
    const page = new Page();
    page.height = 1;
    const json = JSON.stringify({ qHeight: 1 });
    const result = JSON.stringify(page.generate());
    expect(result).to.equal(json);
  });
});
