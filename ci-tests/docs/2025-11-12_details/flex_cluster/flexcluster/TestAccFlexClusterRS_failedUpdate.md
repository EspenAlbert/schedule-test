# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-04 00:26](#error-2025-10-04t0026060000) | CheckFailure for flex_clusters.test at Step: 1 Checks: 25,26,38 | dev | 51.07s
[2025-10-11 00:27](#error-2025-10-11t0027370000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68e9a408e5f7141b76bfb08f/flexClusters | dev | 0.07s

## Timeline
- 2025-10-03: MISSING
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
- 2025-10-23 PASS a minute
- 2025-10-24 PASS 54 seconds
- 2025-10-25 PASS a minute
- 2025-10-26 PASS 42 seconds
- 2025-10-27 PASS a minute
- 2025-10-28 PASS a minute
- 2025-10-29 PASS 53 seconds
- 2025-10-30 PASS 47 seconds
- 2025-10-31 PASS 42 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 44 seconds
- 2025-11-03 PASS 44 seconds
- 2025-11-04 PASS 43 seconds
- 2025-11-05
  - PASS 55 seconds
  - PASS 56 seconds
- 2025-11-06 PASS 54 seconds
- 2025-11-07 PASS 53 seconds
- 2025-11-08 PASS 53 seconds
- 2025-11-09 PASS 38 seconds
- 2025-11-10 PASS 55 seconds
- 2025-11-11 PASS a minute
- 2025-11-12 PASS 56 seconds