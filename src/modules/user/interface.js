import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

export const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    console.log("NodeDefinitions (globalId), id:", id);
    console.log("NodeDefinitions (globalId), type:", type);
    return fasdfas
  },
  (obj) => {
    return null;
  }
);