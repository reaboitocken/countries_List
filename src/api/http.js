export const BASE_URL = "https://restcountries.com";

export const LS_SESS_KEY = "appSession";
export const LS_SESS_TOKEN_ACCS = "tokenAccess";
export const LS_SESS_TOKEN_REFR = "tokenRefresh";

export const req = async (path, opts = {}) => {
  if (opts.body) {
    if (opts.body.file) {
      const formData = new FormData();
      formData.append("file", opts.body.file);
      opts.body = formData;
    } else {
      opts.body = JSON.stringify(opts.body);
      opts.headers = {
        "Content-Type": "application/json",
      };
    }
  }

  const response = await fetch(`${BASE_URL}/${path}`, {
    ...opts,
    credentials: "include",
  });

  const result = {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    body: {},
  };

  const text = await response.text();
  const body = !!text ? JSON.parse(text) : {};

  result.body = body;

  return result;
};
