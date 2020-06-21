import * as AWS from "aws-sdk";

interface User {
  id: number;
  userName?: string | null;
}

const user1: User = {
  id: 1,
  userName: "佐藤花子"
};

AWS.config.update({
  region: "ap-northeast-1",
  accessKeyId: "AKIAUGSKAHIUPD2UZQAZ",
  secretAccessKey: "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();

async function putUser(user: User) {
  const params = {
    TableName: "voice-list",
    Item: user
  };
  await docClient.put(params).promise();
}

export async function testPut() {
  await putUser(user1);
  console.log("End create 1 user");
}

async function getUser(user: User) {
  const params = {
    TableName: "voice-list",
    Key: {
      id: 1
    }
  };
  const data = await docClient.get(params).promise();
  console.log(data.Item);
}

export async function testGet() {
  await getUser(user1);
  console.log("End get 1 user");
}
