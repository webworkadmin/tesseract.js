# Qlik Hypercube Definition Generator

This library is built with the express intent of making a developers life easier by not forcing them to write out all the JSON necessary to get a hypercube definition.

# Usage

```
let hCube = require('./dist/')
let HypercubeDefinition = hCube.HypercubeDefinition
let Dimension = hCube.Dimension
let Measure = hCube.Measure

let hypercubeDefinition = new HypercubeDefinition()
hypercubeDefinition.Dimensions.push(new Dimension('First Dimension'))
hypercubeDefinition.Dimensions.push(new Dimension('Second Dimension'))
hypercubeDefinition.Measures.push(new Measure('=Count(Identifier)'))

console.log(JSON.stringify(hypercubeDefinition.generate()))

// Result
/* 
{  
   "qDimensions":[  
      {  
         "qDef":{  
            "qFieldDefs":[  
               "First Dimension"
            ]
         }
      },
      {  
         "qDef":{  
            "qFieldDefs":[  
               "Second Dimension"
            ]
         }
      }
   ],
   "qMeasures":[  
      {  
         "qDef":{  
            "qDef":"=Count(Identifier)"
         }
      }
   ],
   "qInitialDataFetch":{  
      "qTop":0,
      "qLeft":0,
      "qWidth":3,
      "qHeight":3333
   }
}
*/
```