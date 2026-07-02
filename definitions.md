Node.js — Senior Developer Topics
Comprehensive reference for advanced Node.js engineering. Create for me a path to learn about the concepts and a step by step to put it in practice.

Core Architecture

[001] 2026-06-18 Event loop phases: timers, I/O callbacks, idle, poll, check, close - https://chatgpt.com/c/6a33cb43-6310-83e9-be6e-a51601279253
[002] 2026-06-19 libuv thread pool and async I/O model - https://chatgpt.com/c/6a353598-3b48-83e9-8396-1fc7f51c72d7
[003] 2026-06-21 Call stack, microtask queue, macrotask queue - https://chatgpt.com/c/6a3845af-8408-83e9-9a19-b804887dafd6
[004] 2026-06-21 process.nextTick vs queueMicrotask vs setImmediate - https://chatgpt.com/c/6a38476f-1008-83e9-93a2-9ce4bc2c0460
[005] 2026-06-22 Single-threaded concurrency model and its implications - https://chatgpt.com/c/6a394b3b-f3e0-83e9-90eb-13fe10bfc6d2
[006] 2026-06-22 Non-blocking I/O and the reactor pattern - https://chatgpt.com/c/6a39c7c0-8fe4-83e9-8fe2-6225aa731579
[007] 2026-06-22 V8 engine internals: JIT compilation, garbage collection - https://chatgpt.com/c/6a39ca61-a968-83e9-9fa2-16db1c363495
[008] 2026-06-22 Memory model: heap, stack, and off-heap buffers - https://chatgpt.com/c/6a39d358-19ac-83e9-8593-acdd25e445f5

Module System

[009] 2026-06-22 - CommonJS (require / module.exports) — caching and resolution - https://chatgpt.com/c/6a39d68e-178c-83e9-bb61-1801c1636f25
[010] 2026-06-23 ES Modules (import / export) — static analysis, tree-shaking - https://chatgpt.com/c/6a3aef31-f2cc-83e9-b6db-8fcebcce2d83
[011] 2026-06-24 CJS vs ESM interop: .cjs, .mjs, type: "module" - https://chatgpt.com/c/6a3bd2f9-2e80-83e9-ad97-07a5c5a0f1da 
[012] 2026-06-25 Module resolution algorithm: node_modules traversal - https://chatgpt.com/c/6a3d1de7-542c-83e9-9865-c8a1d346d130
[013] 2026-06-25 Conditional exports and package.json exports field - https://chatgpt.com/c/6a3d8e3e-30d4-83e9-b8f9-7854f585ab4b
[014] 2026-06-26 Circular dependency pitfalls and detection - https://chatgpt.com/c/6a3e8018-e208-83e9-8e43-515c84c2058e
[015] 2026-06-26 Dynamic import() for lazy loading - https://chatgpt.com/c/6a3e82ec-58a8-83e9-a721-f026e2f88c3f
[016] 2026-06-27 Built-in modules: fs, path, os, url, crypto, util - https://chatgpt.com/c/6a40324e-4cb4-83e9-b609-c4046db370b7

HTTP & Servers

[017] 2026-06-27 Raw http / https module internals - https://chatgpt.com/c/6a40388f-ac28-83e9-9355-3121473126c0
[018] 2026-06-28 Express.js: middleware chain, routing, error handling - https://chatgpt.com/c/6a416cc0-f2b4-83e9-a3b3-2ed65b73f6f1
[019] 2026-06-28 Fastify: schema-based validation, plugin system, lifecycle hooks - https://chatgpt.com/c/6a416f14-9a1c-83e9-b8a8-64ae674f56cf
[020] 2026-06-29 Hono / Koa — modern lightweight alternatives - https://chatgpt.com/c/6a427697-4028-83e9-bd04-e2f8e97e5fcc
[021] 2026-06-30 Middleware composition and order of execution - https://chatgpt.com/c/6a43978a-e594-83e9-8496-07a890812149
[023] 2026-06-30 HTTP/2 and HTTP/3 support - https://chatgpt.com/c/6a43cebb-8368-83e9-a5a8-03c0b1bd327e
[024] 2026-07-01 Keep-alive connections, connection pooling - https://chatgpt.com/c/6a450b66-e23c-83e9-85da-b75a919eac81
[025] 2026-07-02 WebSocket servers with ws or socket.io - https://chatgpt.com/c/6a469e57-892c-83e9-91c4-df2cdc37b3d5
Server-Sent Events (SSE)
gRPC with @grpc/grpc-js

Async Patterns
Callbacks, Promises, async/await — evolution and trade-offs
Error-first callback convention
Promise.all, allSettled, race, any
Async iteration: for await...of
util.promisify and util.callbackify
Concurrency control: p-limit, p-queue
Avoiding unhandled promise rejections
AbortController and AbortSignal for cancellation
Async error handling patterns and propagation

Streams & Buffers
Readable, Writable, Duplex, Transform stream types
Backpressure and highWaterMark
pipe vs pipeline (error-safe)
Object mode streams
stream.Readable.from and async generators as streams
Buffer vs TypedArray vs ArrayBuffer
Encoding: UTF-8, base64, hex
Large file handling without memory overflow
Compression streams: zlib, createGzip

Data & Storage
SQL with pg / mysql2: connection pooling, parameterized queries
ORMs: Prisma, TypeORM, Drizzle — trade-offs
Query builders: Knex.js
MongoDB with Mongoose or native driver
Redis for caching, pub/sub, rate limiting
DynamoDB with AWS SDK v3
Migrations, schema management, seeds
N+1 query detection and prevention
Transaction management and isolation levels

Concurrency & Workers
cluster module — multi-process load balancing
worker_threads — true parallelism for CPU-bound tasks
Shared memory with SharedArrayBuffer and Atomics
Child processes: spawn, exec, fork
Thread pool sizing via UV_THREADPOOL_SIZE
IPC (inter-process communication) patterns
Offloading heavy computation to avoid event loop blocking

Performance
Event loop lag measurement: perf_hooks, --inspect
Profiling with Chrome DevTools / clinic.js
Memory leak detection: heap snapshots, v8.writeHeapSnapshot
Flame graphs with 0x or clinic flame
Caching strategies: in-memory, Redis, CDN
Response compression: gzip, Brotli
Connection reuse and keep-alive tuning
Avoiding synchronous fs methods in hot paths
Benchmarking with autocannon or wrk
V8 optimization hints and hidden class stability

Security
Input validation and sanitization (Zod, Joi)
SQL injection and NoSQL injection prevention
Helmet.js for HTTP security headers
Rate limiting: express-rate-limit, Redis sliding window
JWT authentication: signing, verification, expiry
Secrets management: env vars, AWS Secrets Manager, Vault
Dependency auditing: npm audit, Snyk, Dependabot
CORS configuration and pitfalls
Prototype pollution prevention
Path traversal and SSRF mitigations

Error Handling & Logging
Operational vs programmer errors distinction
Custom error classes extending Error
Centralized error middleware in Express / Fastify
process.on('uncaughtException') and 'unhandledRejection'
Graceful shutdown: draining connections before exit
Structured logging with pino or winston
Log levels, correlation IDs, request tracing
Error serialization and stack trace capture

Testing
Unit testing with Jest / Vitest / Node test runner
Integration testing with Supertest
Mocking: jest.mock, nock, msw
Database testing with test containers or in-memory DBs
E2E testing with Playwright
Test coverage: Istanbul / c8
Contract testing with Pact
Load and stress testing with autocannon
Snapshot testing for serialized output

TypeScript with Node.js
tsconfig.json: moduleResolution, target, strict mode
Path aliases and tsconfig-paths
Typing process.env with declaration merging
Typing Express Request and Response extensions
Running TS directly: tsx, ts-node, --experimental-strip-types
Build pipelines: tsc, esbuild, swc
Declaration files and @types/* packages
Zod for runtime validation aligned with TypeScript types

Deployment & Infrastructure
Docker: multi-stage builds, .dockerignore, non-root user
Environment-specific config: dotenv, convict
PM2 for process management and clustering
Health check endpoints and readiness/liveness probes
Zero-downtime deploys: graceful shutdown with SIGTERM
AWS Lambda with Node.js: cold starts, layer optimization
Containerized apps on ECS / Kubernetes
CI/CD with GitHub Actions, semantic versioning

Microservices & Messaging
REST API design: versioning, pagination, HATEOAS
Message queues: SQS, RabbitMQ, Kafka
Event-driven architecture: publishers, consumers, event schemas
NestJS: modules, DI container, decorators, interceptors
Service discovery and API gateways
Circuit breaker pattern (opossum)
Idempotency and at-least-once delivery handling
Distributed tracing: OpenTelemetry, Jaeger

Tooling & Ecosystem
Package managers: npm, pnpm, yarn — workspaces and lockfiles
Monorepos: Turborepo, Nx
ESLint with eslint-plugin-node and import rules
Prettier, EditorConfig for code consistency
Husky + lint-staged for pre-commit hooks
Semantic release and conventional commits
Node version management: nvm, fnm, volta
Bundlers: esbuild, rollup, tsup for library output
nodemon / --watch flag for dev reload