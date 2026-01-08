# cluster/cluster/TestAccCluster_tenant Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 21) FAIL(x 10)
Success rate: 67.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-10 00:31](#error-2025-12-10t0031540000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2104.08s
[2025-12-13 00:29](#error-2025-12-13t0029410000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2106.02s
[2025-12-15 00:33](#error-2025-12-15t0033060000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2102.05s
[2025-12-18 00:27](#error-2025-12-18t0027530000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2135.07s
[2025-12-19 00:31](#error-2025-12-19t0031240000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2174.05s
[2026-01-05 00:34](#error-2026-01-05t0034110000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | flaky_check | 2101.08s
[2026-01-06 00:31](#error-2026-01-06t0031510000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2109.09s
[2026-01-07 00:30](#error-2026-01-07t0030390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-6769390711189338181 | dev | flaky_500 | 182.07s

### Timeline
- 2025-12-09: MISSING
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
- 2026-01-03 PASS 23 minutes
- 2026-01-04: MISSING
- 2026-01-05

### Error 2026-01-05T00:34:11+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2026-01-05T00:34:11.690000+00:00-TestAccCluster_tenant',confidence=1.0,ts_when='3 days ago')
CheckFailure for cluster.tenant at Step: 2 Checks: 4
```
2026-01-05T00:34:11.6902628Z === RUN   TestAccCluster_tenant
2026-01-05T00:34:11.6921223Z === CONT  TestAccCluster_tenant
2026-01-05T01:08:12.8275902Z === NAME  TestAccCluster_tenant
2026-01-05T01:08:12.8277385Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2026-01-05T01:09:13.4571093Z --- FAIL: TestAccCluster_tenant (2101.77s)
```

- 2026-01-06

### Error 2026-01-06T00:31:51+00:00
```
2026-01-06T00:31:51.9366641Z === RUN   TestAccCluster_tenant
2026-01-06T00:31:51.9555296Z === CONT  TestAccCluster_tenant
2026-01-06T01:06:00.6272581Z === NAME  TestAccCluster_tenant
2026-01-06T01:06:00.6273479Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2026-01-06T01:07:01.8042004Z --- FAIL: TestAccCluster_tenant (2109.87s)
```

- 2026-01-07

### Error 2026-01-07T00:30:39+00:00
```
2026-01-07T00:30:39.8810239Z === RUN   TestAccCluster_tenant
2026-01-07T00:30:39.8828483Z === CONT  TestAccCluster_tenant
2026-01-07T00:33:42.5199162Z === NAME  TestAccCluster_tenant
2026-01-07T00:33:42.5199690Z     resource_cluster_test.go:1027: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:33:42.5200294Z         
2026-01-07T00:33:42.5202671Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-6769390711189338181 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:42.5204560Z         
2026-01-07T00:33:42.5204861Z           with mongodbatlas_cluster.tenant,
2026-01-07T00:33:42.5205633Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "tenant":
2026-01-07T00:33:42.5206178Z           12: 	resource "mongodbatlas_cluster" "tenant" {
2026-01-07T00:33:42.5206460Z         
2026-01-07T00:33:42.5645379Z --- FAIL: TestAccCluster_tenant (182.68s)
```

- 2026-01-08 PASS 25 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-04 00:34](#error-2026-01-04t0034470000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2102.03s
[2026-01-08 06:24](#error-2026-01-08t0624580000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa | 2109.03s

### Timeline
- 2025-12-09: MISSING
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
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08

### Error 2026-01-08T06:24:58+00:00
```
2026-01-08T06:24:58.5443321Z === RUN   TestAccCluster_tenant
2026-01-08T06:24:58.5561775Z === CONT  TestAccCluster_tenant
2026-01-08T06:59:06.7780612Z === NAME  TestAccCluster_tenant
2026-01-08T06:59:06.7781661Z     resource_cluster_test.go:1027: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2026-01-08T07:00:07.8464191Z --- FAIL: TestAccCluster_tenant (2109.29s)
```

