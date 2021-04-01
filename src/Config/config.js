const config = {
  local: {
    URI: "https://localhost",
  },
  production: {
    URI: "https://production",
  },
  FIRST_NAME: "Hiroko",
  LAST_NAME: "Yamaji",
};

export default {
  ...config,
  ...config[process.env.REACT_APP_STAGE],
};

//HOT TO USE
// import config from "Config/config";

// config.URI;
// config.FIRST_NAME;
// config.LAST_NAME;

// Do NOT USE "config.local.URI"
