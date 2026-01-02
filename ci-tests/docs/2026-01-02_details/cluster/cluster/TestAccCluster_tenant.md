# cluster/cluster/TestAccCluster_tenant Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-05 00:30](#error-2025-12-05t0030400000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 5165.08s
[2025-12-09 00:30](#error-2025-12-09t0030510000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2104.09s
[2025-12-10 00:31](#error-2025-12-10t0031540000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2104.08s
[2025-12-13 00:29](#error-2025-12-13t0029410000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2106.02s
[2025-12-15 00:33](#error-2025-12-15t0033060000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2102.05s
[2025-12-18 00:27](#error-2025-12-18t0027530000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2135.07s
[2025-12-19 00:31](#error-2025-12-19t0031240000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | 2174.05s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 36 minutes
- 2025-12-05

### Error 2025-12-05T00:30:40+00:00
```
2025-12-05T00:30:40.0278366Z === RUN   TestAccCluster_tenant
2025-12-05T00:30:40.0331670Z === CONT  TestAccCluster_tenant
2025-12-05T01:53:52.3474112Z === NAME  TestAccCluster_tenant
2025-12-05T01:53:52.3475697Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-12-05T01:56:45.8636941Z --- FAIL: TestAccCluster_tenant (5165.83s)
```

- 2025-12-06 PASS 24 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 27 minutes
- 2025-12-09

### Error 2025-12-09T00:30:51+00:00
```
2025-12-09T00:30:51.9370002Z === RUN   TestAccCluster_tenant
2025-12-09T00:30:51.9388129Z === CONT  TestAccCluster_tenant
2025-12-09T01:04:56.1116520Z === NAME  TestAccCluster_tenant
2025-12-09T01:04:56.1117617Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-12-09T01:05:56.8568024Z --- FAIL: TestAccCluster_tenant (2104.92s)
```

- 2025-12-10
  - FAIL 35 minutes

### Error 2025-12-10T00:31:54+00:00
```
2025-12-10T00:31:54.7224321Z === RUN   TestAccCluster_tenant
2025-12-10T00:31:54.7673114Z === CONT  TestAccCluster_tenant
2025-12-10T01:05:58.8138456Z === NAME  TestAccCluster_tenant
2025-12-10T01:05:58.8140162Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-12-10T01:06:59.5296876Z --- FAIL: TestAccCluster_tenant (2104.77s)
```

  - PASS 22 minutes
- 2025-12-11 PASS 28 minutes
- 2025-12-12 PASS 26 minutes
- 2025-12-13

### Error 2025-12-13T00:29:41+00:00
```
2025-12-13T00:29:41.5119310Z === RUN   TestAccCluster_tenant
2025-12-13T00:29:41.5212999Z === CONT  TestAccCluster_tenant
2025-12-13T01:03:46.9150109Z === NAME  TestAccCluster_tenant
2025-12-13T01:03:46.9151241Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-12-13T01:04:47.7390778Z --- FAIL: TestAccCluster_tenant (2106.22s)
```

- 2025-12-14: MISSING
- 2025-12-15

### Error 2025-12-15T00:33:06+00:00
```
2025-12-15T00:33:06.8934549Z === RUN   TestAccCluster_tenant
2025-12-15T00:33:06.8953157Z === CONT  TestAccCluster_tenant
2025-12-15T01:07:08.6958216Z === NAME  TestAccCluster_tenant
2025-12-15T01:07:08.6959278Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-12-15T01:08:09.4165200Z --- FAIL: TestAccCluster_tenant (2102.52s)
```

- 2025-12-16 PASS 27 minutes
- 2025-12-17 PASS 27 minutes
- 2025-12-18

### Error 2025-12-18T00:27:53+00:00
```
2025-12-18T00:27:53.1335735Z === RUN   TestAccCluster_tenant
2025-12-18T00:27:53.1578764Z === CONT  TestAccCluster_tenant
2025-12-18T01:01:57.6092841Z === NAME  TestAccCluster_tenant
2025-12-18T01:01:57.6094223Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-12-18T01:03:28.8074573Z --- FAIL: TestAccCluster_tenant (2135.66s)
```

- 2025-12-19

### Error 2025-12-19T00:31:24+00:00
```
2025-12-19T00:31:24.3516780Z === RUN   TestAccCluster_tenant
2025-12-19T00:31:24.3652418Z === CONT  TestAccCluster_tenant
2025-12-19T01:06:38.1965563Z === NAME  TestAccCluster_tenant
2025-12-19T01:06:38.1966806Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-12-19T01:07:38.8657868Z --- FAIL: TestAccCluster_tenant (2174.50s)
```

- 2025-12-20 PASS 23 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 30 minutes
- 2025-12-23 PASS 25 minutes
- 2025-12-24 PASS 31 minutes
- 2025-12-25 PASS 48 minutes
- 2025-12-26 PASS 25 minutes
- 2025-12-27 PASS 23 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 23 minutes
- 2025-12-31 PASS 29 minutes
- 2026-01-01 PASS 25 minutes
- 2026-01-02 PASS 27 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 22 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 22 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 26 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 23 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 24 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
