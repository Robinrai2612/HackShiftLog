const AWS = require("aws-sdk");
require("dotenv").config();
AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  endpoint: process.env.AWS_ENDPOINT,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Assets";
const getasset = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const asset = await dynamoClient.scan(params).promise();
  return asset;
};
const getassetById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  return await dynamoClient.get(params).promise();
};
const createorUpdateasset = async (asset) => {
  const params = {
    TableName: TABLE_NAME,
    Item: asset,
  };
  return await dynamoClient.put(params).promise();
};
const deleteassetById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  return await dynamoClient.delete(params).promise();
};

// task 

const TABLE_NAME_2 = "Task";
const getTask = async () => {
  const params = {
    TableName: TABLE_NAME_2,
  };
  const task = await dynamoClient.scan(params).promise();
  return task;
};
const getTaskById = async (id) => {
  const params = {
    TableName: TABLE_NAME_2,
    Key: {
      id,
    },
  };
  return await dynamoClient.get(params).promise();
};
const createorUpdateTask = async (task) => {
  const params = {
    TableName: TABLE_NAME_2,
    Item: task,
  };
  return await dynamoClient.put(params).promise();
};
const deleteTaskById = async (id) => {
  const params = {
    TableName: TABLE_NAME_2,
    Key: {
      id,
    },
  };
  return await dynamoClient.delete(params).promise();
};


// round


const TABLE_NAME_3 = "Rounds";
const getround = async () => {
  const params = {
    TableName: TABLE_NAME_3,
  };
  const round = await dynamoClient.scan(params).promise();
  return round;
};
const getroundById = async (id) => {
  const params = {
    TableName: TABLE_NAME_3,
    Key: {
      id,
    },
  };
  return await dynamoClient.get(params).promise();
};
const createorUpdateround = async (round) => {
  const params = {
    TableName: TABLE_NAME_3,
    Item: round,
  };
  return await dynamoClient.put(params).promise();
};
const deleteroundById = async (id) => {
  const params = {
    TableName: TABLE_NAME_3,
    Key: {
      id,
    },
  };
  return await dynamoClient.delete(params).promise();
};


//shiftlog


const TABLE_NAME_4 = "ShiftLog";
const getshiftlog = async () => {
  const params = {
    TableName: TABLE_NAME_4,
  };
  const shiftlog = await dynamoClient.scan(params).promise();
  return shiftlog;
};
const getshiftlogById = async (id) => {
  const params = {
    TableName: TABLE_NAME_4,
    Key: {
      id,
    },
  };
  return await dynamoClient.get(params).promise();
};
const createorUpdateshiftlog = async (round) => {
  const params = {
    TableName: TABLE_NAME_4,
    Item: round,
  };
  return await dynamoClient.put(params).promise();
};
const deleteshiftlogById = async (id) => {
  const params = {
    TableName: TABLE_NAME_4,
    Key: {
      id,
    },
  };
  return await dynamoClient.delete(params).promise();
};


module.exports = {
  dynamoClient,
  getTask,
  createorUpdateTask,
  getTaskById,
  deleteTaskById,
  getasset,
  createorUpdateasset,
  getassetById,
  deleteassetById,
  getround,
  createorUpdateround,
  getroundById,
  deleteroundById,
  getshiftlog,
  createorUpdateshiftlog,
  getshiftlogById,
  deleteshiftlogById,

};

