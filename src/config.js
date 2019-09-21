const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "tmw-trial-dev-attachmentsbucket-11hzeopnti7f8"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://b6ze11p92i.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_wFc82y6m1",
    APP_CLIENT_ID: "20jgitoj4l4b9bcosqlt2bi01d",
    IDENTITY_POOL_ID: "us-east-1:52ae09f0-7df7-4b21-abd2-c1bc2867b143"
  }
};

// BUGBUG - We need to get these, probably by following the serverless tutorial
// regarding promoting via Seed and looking at the log output.
const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploadsXXXXX"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5by75p4gn3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_udmFFSb92",
    APP_CLIENT_ID: "4hmari2sqvskrup67crkqa4rmo",
    IDENTITY_POOL_ID: "us-east-1:ceef8ccc-0a19-4616-9067-854dc69c2d82"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod 
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
