module.exports = {
  description: 'A layer with six points that all share the same key but each has a unique value (type string).',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'park_features',
        features: [
          {
            id: 1,
            tags: [0, 0],
            type: 1,
            geometry: [ 9, 50, 34 ]
          },
          {
            id: 2,
            tags: [0, 1],
            type: 1,
            geometry: [ 9, 52, 38 ]
          },
          {
            id: 3,
            tags: [0, 2],
            type: 1,
            geometry: [ 9, 54, 30 ]
          },
          {
            id: 4,
            tags: [0, 3],
            type: 1,
            geometry: [ 9, 120, 20 ]
          },
          {
            id: 5,
            tags: [0, 4],
            type: 1,
            geometry: [ 9, 88, 40 ]
          },
          {
            id: 6,
            tags: [0, 5],
            type: 1,
            geometry: [ 9, 46, 98 ]
          }
        ],
        keys: ['poi'],
        values: [
          { string_value: 'swing' },
          { string_value: 'water_fountain' },
          { string_value: 'slide' },
          { string_value: 'bathroom' },
          { string_value: 'tree' },
          { string_value: 'bench' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
