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
[026] 2026-07-03 Server-Sent Events (SSE) - https://chatgpt.com/c/6a478862-47c4-83e9-8bc9-56a0b6ecf0a2
[027] 2026-07-06 gRPC with @grpc/grpc-js - https://chatgpt.com/c/6a4bb920-9d18-83e9-bec0-d271d1444a72

Classes & OOP

[029] 2026-07-08 ES6 class syntax: constructor, methods, instantiation with new - https://chatgpt.com/c/6a4e4bec-9288-83e9-85c8-eb8029a6e9ff
[030] 2026-07-09 Prototypal inheritance underpinning classes (prototype chain, __proto__) - https://chatgpt.com/c/6a4f9554-25c4-83e9-9f5e-47d426ae8cde
[031] 2026-07-10 Inheritance with extends and super (constructor and method calls) - https://chatgpt.com/c/6a50e6ac-a5a4-83e9-9044-5ab90a293daa
[032] 2026-07-11 Private fields and methods with # (hard privacy vs _convention) - https://chatgpt.com/c/6a521ef5-ffb8-83e9-b3d8-63c71f2b5020
[033] 2026-07-13 Static members: static methods, fields, and static initialization blocks - https://chatgpt.com/c/6a54e429-7da0-83e9-b19d-96687a0a8af5
[034] 2026-07-14 Getters and setters with get / set accessors - https://chatgpt.com/c/6a5630a1-86cc-83e9-b378-e7e00c646b6b
[035] 2026-07-15 Instance vs static context and the this binding pitfall - https://chatgpt.com/c/6a577957-d1ec-83e9-a372-2eec207c0987
[036] 2026-07-16 Class fields and arrow methods for auto-bound handlers - https://chatgpt.com/c/6a58d306-217c-83e9-a83e-cdfc165bf490
[037] 2026-07-17 instanceof, constructor.name, and Symbol.hasInstance - https://chatgpt.com/c/6a5ac9ea-8488-83e9-9ac2-4b70652fcacf
[038] 2026-07-20 Abstract base classes and mixins (composition over inheritance) - https://chatgpt.com/c/6a5e1e76-36b8-83e9-876b-559834773d8a
[039] 2026-07-21 Custom error classes extending Error (name, cause, captureStackTrace) - https://chatgpt.com/c/6a5f6e13-ea60-83e9-b977-a463818e6819
[040] 2026-07-22 EventEmitter subclassing for event-driven objects - https://chatgpt.com/c/6a60bf7b-6514-83e9-8014-044474b80916
[041] 2026-07-23 When to prefer plain objects / factory functions over classes - https://chatgpt.com/c/6a620ccc-a390-83e9-a8b0-fab78b9bbd2e

Async Patterns

[028] 2026-07-07 Callbacks, Promises, async/await — evolution and trade-offs - https://chatgpt.com/c/6a4cd081-5298-83e9-b3c4-0a4e6200bd95
[042] 2026-07-24 Error-first callback convention - https://chatgpt.com/c/6a6361a9-cb88-83e9-b567-2c1eff6abb38
[043] 2026-07-26 Promise.all, allSettled, race, any - https://chatgpt.com/c/6a664312-2050-83e9-b725-3d3e9073a7c7
[044] 2026-07-27 Async iteration: for await...of - https://chatgpt.com/c/6a6733ae-ac08-83e9-85a6-492249c6dc67
[045] 2026-07-28 util.promisify and util.callbackify - https://chatgpt.com/c/6a68a4db-b1e8-83e9-887d-a707941c88ea
[046] 2026-07-29 Concurrency control: p-limit, p-queue - https://chatgpt.com/c/6a6a2fd6-fd80-83e9-a22c-150c55af9f69
[047] 2026-07-31 Avoiding unhandled promise rejections - https://chatgpt.com/c/6a6ca2ca-c0d0-83e9-b9f1-3143fd341a98
[048] 2026-08-03 AbortController and AbortSignal for cancellation - https://chatgpt.com/c/6a70cb50-7bf4-83e9-ae62-ef67d8ac86e7
[049] 2026-08-04 Async error handling patterns and propagation - https://chatgpt.com/c/6a721e83-9d14-83e9-9fc5-02bf87154015

Streams & Buffers

[050] 2026-08-05 Readable, Writable, Duplex, Transform stream types - https://chatgpt.com/c/6a7334be-ab00-83e9-9e1b-dafb5b0daee2
[051] 2026-08-06 Backpressure and highWaterMark - https://chatgpt.com/c/6a7486fd-2e80-83e9-ab56-ac1f42dba21c
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