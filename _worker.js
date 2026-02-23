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

      // Serve room/index.html for any /room/{roomId} deep link path
      const roomMatch = url.pathname.match(/^\/room\/[A-Za-z0-9]+\/?$/);
      if (roomMatch) {
        rewritten.pathname = prefix + '/room/index.html';
      }

      const response = await env.ASSETS.fetch(new Request(rewritten, request));

      // Pages serves HTML fallback for missing files. If we requested a
      // non-HTML asset but got HTML back, the file doesn't exist in the
      // subfolder — fall back to the root path (shared assets like /assets/).
      const isAsset = /\.\w+$/.test(url.pathname) && !url.pathname.endsWith('.html');
      if (isAsset && response.headers.get('content-type')?.includes('text/html')) {
        return env.ASSETS.fetch(new Request(url, request));
      }

      return response;
    }

    return env.ASSETS.fetch(new Request(url, request));
  }
};
