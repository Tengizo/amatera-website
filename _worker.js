export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname;

    if (hostname === 'speedoku.amatera.dev') {
      url.pathname = '/speedoku' + url.pathname;
    } else if (hostname === 'alias.amatera.dev') {
      url.pathname = '/alias' + url.pathname;
    }

    return env.ASSETS.fetch(new Request(url, request));
  }
};
