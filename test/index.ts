import { HypercubeDefinition, Dimension, Measure } from '../lib/'

let hyperCube = new HypercubeDefinition()
hyperCube.Dimensions.push(new Dimension('Ocean Basins'))
hyperCube.Dimensions.push(new Dimension('Some other Dimension'))
hyperCube.Measures.push(new Measure('=Count(Ocean Basins)'))
console.log(JSON.stringify(hyperCube.generate()))
