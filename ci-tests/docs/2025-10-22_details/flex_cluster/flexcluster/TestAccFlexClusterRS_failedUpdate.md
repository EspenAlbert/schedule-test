# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 32) FAIL(x 9)
Success rate: 78.05%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-23 00:28](#error-2025-09-23t0028180000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 54.02s
[2025-10-01 00:28](#error-2025-10-01t0028320000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 26,27,38 | dev | 51.06s
[2025-10-01 04:55](#error-2025-10-01t0455120000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 26,27,38 | dev | 41.08s
[2025-10-01 07:29](#error-2025-10-01t0729090000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 53.03s
[2025-10-01 09:10](#error-2025-10-01t0910360000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 53.04s
[2025-10-01 11:49](#error-2025-10-01t1149210000) | CheckFailure for flex_cluster.test at Step: 1 Checks: 6,18,30 | dev | 41.02s
[2025-10-03 00:26](#error-2025-10-03t0026110000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 38 | dev | 51.08s
[2025-10-04 00:26](#error-2025-10-04t0026060000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 25,26,38 | dev | 51.07s
[2025-10-11 00:27](#error-2025-10-11t0027370000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68e9a408e5f7141b76bfb08f/flexClusters | dev | 0.07s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23

### Error 2025-09-23T00:28:18+00:00
```
2025-09-23T00:28:18.3901667Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-09-23T00:28:29.8431554Z    test_terraform_path=/home/runner/work/_temp/3a10b76c-b76f-4ead-a2e5-ec2ea36ed0db/terraform test_name=TestAccFlexClusterRS_failedUpdate
2025-09-23T00:28:29.8433880Z     resource_test.go:27: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-23T00:28:29.8435921Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-23T00:28:29.8437698Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-23T00:29:12.6378169Z --- FAIL: TestAccFlexClusterRS_failedUpdate (54.25s)
```

- 2025-09-24 PASS a minute
- 2025-09-25 PASS 45 seconds
- 2025-09-26 PASS 53 seconds
- 2025-09-27 PASS 52 seconds
- 2025-09-28 PASS a minute
- 2025-09-29 PASS 55 seconds
- 2025-09-30
  - PASS 43 seconds
  - PASS 45 seconds
  - PASS 55 seconds
- 2025-10-01
  - FAIL 51 seconds

### Error 2025-10-01T00:28:32+00:00
```
2025-10-01T00:28:32.3375800Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-01T00:28:42.6488840Z   
2025-10-01T00:28:42.6490610Z     resource_test.go:27: Step 1/5 error: Check failed: Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-6791262378077496484", got "test-acc-tf-7968022917237464223"
2025-10-01T00:28:42.6493004Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-10-01T00:28:42.6494640Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-10-01T00:29:23.9066283Z --- FAIL: TestAccFlexClusterRS_failedUpdate (51.57s)
```

  - PASS 44 seconds
  - FAIL 41 seconds

### Error 2025-10-01T04:55:12+00:00
```
2025-10-01T04:55:12.6195792Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-01T04:55:23.2168780Z   
2025-10-01T04:55:23.2170169Z     resource_test.go:27: Step 1/5 error: Check failed: Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-2048309513682489968", got "test-acc-tf-4910701523154029188"
2025-10-01T04:55:23.2171863Z         Check 27/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-10-01T04:55:23.2173183Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-10-01T04:55:54.4353448Z --- FAIL: TestAccFlexClusterRS_failedUpdate (41.82s)
```

  - FAIL 53 seconds

### Error 2025-10-01T07:29:09+00:00
```
2025-10-01T07:29:09.8163728Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-01T07:29:20.8906032Z   
2025-10-01T07:29:20.8907442Z     resource_test.go:27: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T07:29:20.8909579Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T07:29:20.8911503Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T07:30:03.1071875Z --- FAIL: TestAccFlexClusterRS_failedUpdate (53.29s)
```

  - FAIL 53 seconds

### Error 2025-10-01T09:10:36+00:00
```
2025-10-01T09:10:36.5453351Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-01T09:10:47.5741114Z    test_name=TestAccFlexClusterRS_failedUpdate test_terraform_path=/home/runner/work/_temp/072d2d98-cce6-4a5f-a15a-53050e843c89/terraform test_step_number=1
2025-10-01T09:10:47.5744570Z     resource_test.go:27: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T09:10:47.5746369Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T09:10:47.5748245Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T09:11:29.9100398Z --- FAIL: TestAccFlexClusterRS_failedUpdate (53.36s)
```

  - PASS 43 seconds
  - FAIL 41 seconds

### Error 2025-10-01T11:49:21+00:00
```
2025-10-01T11:49:21.1209989Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-01T11:49:31.4818625Z    test_step_number=1 test_name=TestAccFlexClusterRS_failedUpdate test_terraform_path=/home/runner/work/_temp/05e6d89f-f8fa-4dbf-97d4-01857aa349a7/terraform test_working_directory=/tmp/plugintest3720859401
2025-10-01T11:49:31.4822976Z     resource_test.go:27: Step 1/5 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T11:49:31.4824939Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T11:49:31.4826522Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T11:50:02.3053263Z --- FAIL: TestAccFlexClusterRS_failedUpdate (41.18s)
```

  - PASS 44 seconds
- 2025-10-02 PASS 55 seconds
- 2025-10-03

### Error 2025-10-03T00:26:11+00:00
```
2025-10-03T00:26:11.3092975Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-03T00:26:31.6374825Z     resource_test.go:27: Step 1/5 error: Check failed: Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-10-03T00:27:03.1314213Z --- FAIL: TestAccFlexClusterRS_failedUpdate (51.82s)
```

- 2025-10-04

### Error 2025-10-04T00:26:06+00:00
```
2025-10-04T00:26:06.1124336Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-04T00:26:16.3549627Z   
2025-10-04T00:26:16.3551592Z     resource_test.go:27: Step 1/5 error: Check failed: Check 25/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.name' expected "test-acc-tf-3102565408120200752", got "test-acc-tf-2360067833932784860"
2025-10-04T00:26:16.3554349Z         Check 26/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.termination_protection_enabled' expected "false", got "true"
2025-10-04T00:26:16.3556212Z         Check 38/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.#' expected "1", got "2"
2025-10-04T00:26:57.7679221Z --- FAIL: TestAccFlexClusterRS_failedUpdate (51.66s)
```

- 2025-10-05 PASS 41 seconds
- 2025-10-06 PASS 54 seconds
- 2025-10-07 PASS a minute
- 2025-10-08 PASS a minute
- 2025-10-09 PASS 9 minutes
- 2025-10-10 PASS a minute
- 2025-10-11

### Error 2025-10-11T00:27:37+00:00
```
2025-10-11T00:27:37.6187860Z === RUN   TestAccFlexClusterRS_failedUpdate
2025-10-11T00:27:38.2579474Z    test_terraform_path=/home/runner/work/_temp/2c8726b4-ab43-4ba7-b40e-493a642266d1/terraform test_working_directory=/tmp/plugintest2505406268
2025-10-11T00:27:38.2580498Z     resource_test.go:27: Step 1/5 error: Error running apply: exit status 1
2025-10-11T00:27:38.2580870Z         
2025-10-11T00:27:38.2583412Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e9a408e5f7141b76bfb08f/flexClusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-10-11T00:27:38.2585036Z         
2025-10-11T00:27:38.2585387Z           with mongodbatlas_flex_cluster.test,
2025-10-11T00:27:38.2586019Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_flex_cluster" "test":
2025-10-11T00:27:38.2586604Z           12: 		resource "mongodbatlas_flex_cluster" "test" {
2025-10-11T00:27:38.2586909Z         
2025-10-11T00:27:38.2587357Z         Name: test-acc-tf-5509583855539889076, Project ID: 68e9a408e5f7141b76bfb08f
2025-10-11T00:27:38.3067155Z --- FAIL: TestAccFlexClusterRS_failedUpdate (0.69s)
```

- 2025-10-12 PASS 42 seconds
- 2025-10-13 PASS 45 seconds
- 2025-10-14 PASS 54 seconds
- 2025-10-15 PASS 43 seconds
- 2025-10-16 PASS a minute
- 2025-10-17 PASS 54 seconds
- 2025-10-18 PASS 55 seconds
- 2025-10-19 PASS 52 seconds
- 2025-10-20
  - PASS 53 seconds
  - PASS a minute
- 2025-10-21 PASS 54 seconds
- 2025-10-22
  - PASS a minute
  - PASS 42 seconds