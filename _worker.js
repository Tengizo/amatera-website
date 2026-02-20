export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname;
    let prefix = null;

    if (hostname === 'speedoku.amatera.dev') {
      prefix = '/speedoku';
    } else if (hostname === 'alias.amatera.dev') {
      prefix = '/alias';
    }

    if (prefix) {
      const rewritten = new URL(url);
      rewritten.pathname = prefix + url.pathname;
      const response = await env.ASSETS.fetch(new Request(rewritten, request));
      if (response.status !== 404) return response;
    }

    return env.ASSETS.fetch(new Request(url, request));
  }
};
