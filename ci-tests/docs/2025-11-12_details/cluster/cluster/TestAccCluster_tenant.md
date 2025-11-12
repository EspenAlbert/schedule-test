# cluster/cluster/TestAccCluster_tenant Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 35) FAIL(x 6) TIMEOUT
Success rate: 85.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-04 00:25](#error-2025-10-04t0025510000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2100.04s
[2025-10-05 00:29](#error-2025-10-05t0029350000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | qa |  | 2106.08s
[2025-10-06 00:28](#error-2025-10-06t0028060000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2100.02s
[2025-10-13 00:29](#error-2025-10-13t0029310000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2432.06s
[2025-10-23 00:28](#error-2025-10-23t0028170000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev | flaky_check | 2444.09s
[2025-10-25 00:27](#error-2025-10-25t0027490000) | CheckFailure for cluster.tenant at Step: 2 Checks: 4 | dev |  | 2107.03s
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 17992.00s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04

### Error 2025-10-04T00:25:51+00:00
```
2025-10-04T00:25:51.4625904Z === RUN   TestAccCluster_tenant
2025-10-04T00:25:51.4717162Z === CONT  TestAccCluster_tenant
2025-10-04T00:59:51.3692553Z === NAME  TestAccCluster_tenant
2025-10-04T00:59:51.3693988Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-04T01:00:51.8984268Z --- FAIL: TestAccCluster_tenant (2100.43s)
```

- 2025-10-05

### Error 2025-10-05T00:29:35+00:00
```
2025-10-05T00:29:35.4861679Z === RUN   TestAccCluster_tenant
2025-10-05T00:29:35.5044552Z === CONT  TestAccCluster_tenant
2025-10-05T01:03:41.3800003Z === NAME  TestAccCluster_tenant
2025-10-05T01:03:41.3801343Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-05T01:04:42.2677565Z --- FAIL: TestAccCluster_tenant (2106.76s)
```

- 2025-10-06

### Error 2025-10-06T00:28:06+00:00
```
2025-10-06T00:28:06.3849456Z === RUN   TestAccCluster_tenant
2025-10-06T00:28:06.3908315Z === CONT  TestAccCluster_tenant
2025-10-06T01:02:06.0613243Z === NAME  TestAccCluster_tenant
2025-10-06T01:02:06.0614680Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-06T01:03:06.5849059Z --- FAIL: TestAccCluster_tenant (2100.20s)
```

- 2025-10-07 PASS 25 minutes
- 2025-10-08 PASS 26 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 25 minutes
- 2025-10-11 PASS 25 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13

### Error 2025-10-13T00:29:31+00:00
```
2025-10-13T00:29:31.6706802Z === RUN   TestAccCluster_tenant
2025-10-13T00:29:31.6724744Z === CONT  TestAccCluster_tenant
2025-10-13T01:03:37.6223451Z === NAME  TestAccCluster_tenant
2025-10-13T01:03:37.6224834Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-13T01:10:04.2669487Z --- FAIL: TestAccCluster_tenant (2432.60s)
```

- 2025-10-14 PASS 31 minutes
- 2025-10-15 PASS 23 minutes
- 2025-10-16 PASS 36 minutes
- 2025-10-17 PASS 26 minutes
- 2025-10-18 PASS 23 minutes
- 2025-10-19 PASS 22 minutes
- 2025-10-20
  - PASS 35 minutes
  - PASS 19 minutes
- 2025-10-21 PASS 21 minutes
- 2025-10-22
  - PASS 31 minutes
  - PASS 18 minutes
- 2025-10-23

### Error 2025-10-23T00:28:17+00:00
GoTestErrorClassification(error_class='flaky_check',author='similar',run_id='2025-10-23T00:28:17.670000+00:00-TestAccCluster_tenant',confidence=1.0,ts_when='20 days ago')
CheckFailure for cluster.tenant at Step: 2 Checks: 4
```
2025-10-23T00:28:17.6702541Z === RUN   TestAccCluster_tenant
2025-10-23T00:28:17.6814517Z === CONT  TestAccCluster_tenant
2025-10-23T01:04:46.8737295Z === NAME  TestAccCluster_tenant
2025-10-23T01:04:46.8738576Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-23T01:09:02.6295717Z --- FAIL: TestAccCluster_tenant (2444.95s)
```

- 2025-10-24 PASS 36 minutes
- 2025-10-25

### Error 2025-10-25T00:27:49+00:00
```
2025-10-25T00:27:49.6757654Z === RUN   TestAccCluster_tenant
2025-10-25T00:27:49.6818283Z === CONT  TestAccCluster_tenant
2025-10-25T01:01:56.0488413Z === NAME  TestAccCluster_tenant
2025-10-25T01:01:56.0489962Z     resource_cluster_test.go:1028: Step 2/2 error: Check failed: Check 4/5 error: mongodbatlas_cluster.tenant: Attribute 'disk_size_gb' expected "10", got "5"
2025-10-25T01:02:56.9283671Z --- FAIL: TestAccCluster_tenant (2107.25s)
```

- 2025-10-26 PASS 23 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 22 minutes
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
- 2025-11-02 PASS 22 minutes
- 2025-11-03 PASS 18 minutes
- 2025-11-04 PASS 24 minutes
- 2025-11-05
  - PASS 22 minutes
  - PASS 22 minutes
- 2025-11-06 PASS 28 minutes
- 2025-11-07 PASS 26 minutes
- 2025-11-08 PASS 43 minutes
- 2025-11-09 PASS 20 minutes
- 2025-11-10 PASS 23 minutes
- 2025-11-11 PASS 22 minutes
- 2025-11-12 PASS 27 minutes