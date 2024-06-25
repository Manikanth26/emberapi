import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ObjectsSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // console.log(payload);

    if (requestType === 'findRecord') {
      let color = null;
      let capacity = null;
      let Description = null;
      let price = null;
      let generation = null;
      let year = null;
      if (payload.data) {
        color = payload.data.color || null;
        capacity = payload.data.capacity || null;
        Description = payload.data.Description || null;
        price = payload.data.price || null;
        generation = payload.data.generation || payload.data.Generation || null;
        year = payload.data.year || null;
      }
      let normalizedPayload = {
        id: payload.id,
        type: primaryModelClass.modelName,
        attributes: {
          name: payload.name,
          color: color,
          capacity: capacity,
          Description: Description,
          price: price,
          generation: generation,
          year: year,
        },
      };
      return {
        data: normalizedPayload,
      };
    } else {
      let normalizedPayload = payload.map((item) => {
        let color = null;
        if (item.data) {
          color = item.data.color || null;
        }
        return {
          id: item.id,
          type: primaryModelClass.modelName,
          attributes: {
            name: item.name,
            color: color,
          },
        };
      });
      return {
        data: normalizedPayload,
      };
    }
  }
}
