import { HypercubeDefinition } from '../../src/lib/HypercubeDefinition';
import { Dimension } from '../../src/lib/Dimension';
import { Measure } from '../../src/lib/Measure';
import { Page } from '../../src/lib/Page';

import 'mocha';
import { expect } from 'chai';

describe('HypercubeDefinition', () => {
  it('should be a constructor', () => {
    expect(HypercubeDefinition).to.be.a('function');
  });

  it('should be empty', () => {
    const hypercubeDefinition = new HypercubeDefinition();
    const json = JSON.stringify({
      qInitialDataFetch: [{ qTop: 0, qLeft: 0, qWidth: 1, qHeight: 10000 }],
    });
    const result = JSON.stringify(hypercubeDefinition.generate());
    expect(result).to.equal(json);
  });

  it('should generate qNoOfLeftDims', () => {
    const hypercubeDefinition = new HypercubeDefinition();
    hypercubeDefinition.numberOfLeftDimensions = 0;
    const json = JSON.stringify({
      qNoOfLeftDims: 0,
      qInitialDataFetch: [{ qTop: 0, qLeft: 0, qWidth: 1, qHeight: 10000 }],
    });
    const result = JSON.stringify(hypercubeDefinition.generate());
    expect(result).to.equal(json);
  });

  it('should generate qPseudoDimPos', () => {
    const hypercubeDefinition = new HypercubeDefinition();
    hypercubeDefinition.pseudoDimPosition = 0;
    const json = JSON.stringify({
      qPseudoDimPos: 0,
      qInitialDataFetch: [{ qTop: 0, qLeft: 0, qWidth: 1, qHeight: 10000 }],
    });
    const result = JSON.stringify(hypercubeDefinition.generate());
    expect(result).to.equal(json);
  });

  it('should generate with dimensions and measures', () => {
    const hypercubeDefinition = new HypercubeDefinition();
    hypercubeDefinition.dimensions.push(new Dimension('First Dimension'));
    hypercubeDefinition.measures.push(new Measure('=Count(Identifier)'));
    const hypercubePage = new Page();
    hypercubePage.top = 0;
    hypercubePage.left = 0;
    hypercubePage.width = 2;
    hypercubePage.height = 5000;
    hypercubeDefinition.initialDataFetch.push(hypercubePage);
    const json = JSON.stringify({
      qDimensions: [
        {
          qDef: {
            qFieldDefs: ['First Dimension'],
          },
        },
      ],
      qMeasures: [
        {
          qDef: {
            qDef: '=Count(Identifier)',
          },
        },
      ],
      qInitialDataFetch: [
        {
          qTop: 0,
          qLeft: 0,
          qWidth: 2,
          qHeight: 5000,
        },
      ],
    });
    const result = JSON.stringify(hypercubeDefinition.generate());
    expect(result).to.equal(json);
  });
});
