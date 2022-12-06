/** @type {import("snowpack").SnowpackUserConfig } */
import httpProxy from ('http-proxy');
const proxy = httpProxy.createServer({ target: 'http://localhost:4000' })

export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
    {match: 'all', src: '/api/.*', dest: (req, res) => proxy.web(req, res)},

  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
