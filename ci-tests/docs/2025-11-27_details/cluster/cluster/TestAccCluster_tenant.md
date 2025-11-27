# cluster/cluster/TestAccCluster_tenant Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4) TIMEOUT
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 17992.00s
[2025-11-15 00:27](#error-2025-11-15t0027180000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2109.03s
[2025-11-21 00:28](#error-2025-11-21t0028210000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2114.10s
[2025-11-26 00:28](#error-2025-11-26t0028270000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2102.07s
[2025-11-27 00:28](#error-2025-11-27t0028150000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2108.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 30 minutes
- 2025-10-30

### Error 2025-10-30T00:28:10+00:00
```
2025-10-30T00:28:10.4921099Z === RUN   TestAccCluster_tenant
2025-10-30T00:28:10.5034170Z === CONT  TestAccCluster_tenant
2025-10-30T03:31:16.5280334Z === NAME  TestAccCluster_tenant
2025-10-30T03:31:16.5281178Z     resource_cluster_test.go:1028: Step 2/2 error: Error running apply: exit status 1
2025-10-30T03:31:16.5281851Z         
2025-10-30T03:31:16.5283510Z         Error: error updating MongoDB Cluster (test-acc-tf-c-2488976702457774330): timeout while waiting for state to become 'IDLE' (last state: 'UPDATING', timeout: 3h0m0s)
2025-10-30T03:31:16.5284213Z         
2025-10-30T03:31:16.5284529Z           with mongodbatlas_cluster.tenant,
2025-10-30T03:31:16.5285145Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "tenant":
2025-10-30T03:31:16.5285699Z           12: 	resource "mongodbatlas_cluster" "tenant" {
2025-10-30T03:31:16.5285993Z         
2025-10-30T03:38:08.8406395Z    test_name=TestAccCluster_MultiRegion test_terraform_path=/home/runner/work/_temp/6b18102a-be0c-40d5-a671-32aa7fa4c5b9/terraform test_working_directory=/tmp/plugintest4280746236
2025-10-30T05:28:02.7479168Z 		TestAccCluster_RegionsConfig (4h59m52s)
2025-10-30T05:28:02.7480088Z 		TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4h59m52s)
2025-10-30T05:28:02.7480819Z 		TestAccCluster_tenant (4h59m52s)
```

- 2025-10-31 PASS 22 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 18 minutes
- 2025-11-04 PASS 24 minutes
- 2025-11-05
  - PASS 22 minutes
  - PASS 22 minutes
- 2025-11-06 PASS 28 minutes
- 2025-11-07 PASS 26 minutes
- 2025-11-08 PASS 43 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 23 minutes
- 2025-11-11 PASS 22 minutes
- 2025-11-12 PASS 27 minutes
- 2025-11-13 PASS 28 minutes
- 2025-11-14 PASS 32 minutes
- 2025-11-15

### Error 2025-11-15T00:27:18+00:00
```
2025-11-15T00:27:18.4397913Z === RUN   TestAccCluster_tenant
2025-11-15T00:27:18.4526468Z === CONT  TestAccCluster_tenant
2025-11-15T01:01:26.6407065Z === NAME  TestAccCluster_tenant
2025-11-15T01:01:26.6408094Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-11-15T01:02:27.7043793Z --- FAIL: TestAccCluster_tenant (2109.25s)
```

- 2025-11-16: MISSING
- 2025-11-17 PASS 26 minutes
- 2025-11-18 PASS 24 minutes
- 2025-11-19
  - PASS 28 minutes
  - PASS 22 minutes
- 2025-11-20 PASS 30 minutes
- 2025-11-21

### Error 2025-11-21T00:28:21+00:00
```
2025-11-21T00:28:21.3756667Z === RUN   TestAccCluster_tenant
2025-11-21T00:28:21.3824610Z === CONT  TestAccCluster_tenant
2025-11-21T01:02:35.6472914Z === NAME  TestAccCluster_tenant
2025-11-21T01:02:35.6475014Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-11-21T01:03:36.3452732Z --- FAIL: TestAccCluster_tenant (2114.97s)
```

- 2025-11-22 PASS 23 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 23 minutes
- 2025-11-25 PASS 27 minutes
- 2025-11-26

### Error 2025-11-26T00:28:27+00:00
```
2025-11-26T00:28:27.5542805Z === RUN   TestAccCluster_tenant
2025-11-26T00:28:27.5634850Z === CONT  TestAccCluster_tenant
2025-11-26T01:02:29.5255961Z === NAME  TestAccCluster_tenant
2025-11-26T01:02:29.5257360Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-11-26T01:03:30.3200130Z --- FAIL: TestAccCluster_tenant (2102.75s)
```

- 2025-11-27

### Error 2025-11-27T00:28:15+00:00
```
2025-11-27T00:28:15.4724639Z === RUN   TestAccCluster_tenant
2025-11-27T00:28:15.4832434Z === CONT  TestAccCluster_tenant
2025-11-27T01:02:22.6355025Z === NAME  TestAccCluster_tenant
2025-11-27T01:02:22.6355904Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-11-27T01:03:23.5609516Z --- FAIL: TestAccCluster_tenant (2108.08s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 22 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 20 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 22 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 26 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 25 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
