module.exports = function(schema) {
  return {
    description: 'A single point feature with a missing geometry type. From the spec, "A feature MUST contain a type field as described in the Geometry Types section."',
    specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L41',
    validity: {
      v1: false,
      v2: false,
      error: 'recoverable'
    },
    json: {
      layers: [
        {
          version: 2,
          name: 'hello',
          features: [
            {
              id: 1,
              tags: [],
              // type: schema.Tile.GeomType.POINT.value,
              geometry: [ 9, 50, 34 ]
            }
          ],
          keys: {},
          values: {},
          extent: 4096
        }
      ]
    },
    manipulate: function(buffer) {
      // stuff here
      return buffer;
    }
  }
};
