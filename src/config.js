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
    BUCKET: "tmw-trial-prod-attachmentsbucket-1coz24xpen9rr"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://t4hb6w0mi1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6CtvhbVBE",
    APP_CLIENT_ID: "6vtqdfvlie2f944qevkrvb8p0d",
    IDENTITY_POOL_ID: "us-east-1:de796c2c-ef6e-4d98-b42c-9409ef182e8f"
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
