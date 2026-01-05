# cluster/cluster/TestAccCluster_tenant Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 5) FAIL(x 2)
Success rate: 71.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-05 00:34](#error-2026-01-05t0034110000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | flaky_check | 2101.08s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30 PASS 23 minutes
- 2025-12-31 PASS 29 minutes
- 2026-01-01 PASS 25 minutes
- 2026-01-02 PASS 27 minutes
- 2026-01-03 PASS 23 minutes
- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T00:34:11+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2026-01-05T00:34:11.690000+00:00-TestAccCluster_tenant',confidence=1.0,ts_when='37 minutes ago')
CheckFailure for cluster.tenant at Step: 2 Checks: 4
```
2026-01-05T00:34:11.6902628Z === RUN   TestAccCluster_tenant
2026-01-05T00:34:11.6921223Z === CONT  TestAccCluster_tenant
2026-01-05T01:08:12.8275902Z === NAME  TestAccCluster_tenant
2026-01-05T01:08:12.8277385Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2026-01-05T01:09:13.4571093Z --- FAIL: TestAccCluster_tenant (2101.77s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-04 00:34](#error-2026-01-04t0034470000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2102.03s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04

### Error 2026-01-04T00:34:47+00:00
```
2026-01-04T00:34:47.3696884Z === RUN   TestAccCluster_tenant
2026-01-04T00:34:47.3719502Z === CONT  TestAccCluster_tenant
2026-01-04T01:08:49.0041110Z === NAME  TestAccCluster_tenant
2026-01-04T01:08:49.0043169Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2026-01-04T01:09:49.6608112Z --- FAIL: TestAccCluster_tenant (2102.29s)
```

- 2026-01-05: MISSING
