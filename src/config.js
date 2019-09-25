const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "tmw-trial-dev-attachmentsbucket-1eb6t3sew79tw"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://l1kjozpp49.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_z5me573dO",
    APP_CLIENT_ID: "7pthaavld7dolh4vak8rebjt0f",
    IDENTITY_POOL_ID: "us-east-1:6dbcf5d3-75df-4f4f-b430-a068f0397485"
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
