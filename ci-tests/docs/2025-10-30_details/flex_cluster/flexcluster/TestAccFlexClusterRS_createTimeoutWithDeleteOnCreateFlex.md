# flex_cluster/flexcluster/TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 09:11](#error-2025-10-01t0911290000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68dcefd65b2d552e98fbf423/flexClusters | dev | 0.07s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - FAIL a moment

### Error 2025-10-01T09:11:29+00:00
```
2025-10-01T09:11:29.9101583Z === RUN   TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2025-10-01T09:11:29.9107004Z === CONT  TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2025-10-01T09:11:30.5711973Z   
2025-10-01T09:11:30.5712902Z     resource_test.go:39: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-01T09:11:30.5713676Z         
2025-10-01T09:11:30.5717350Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcefd65b2d552e98fbf423/flexClusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-10-01T09:11:30.5719970Z         
2025-10-01T09:11:30.5720765Z           with mongodbatlas_flex_cluster.test,
2025-10-01T09:11:30.5721844Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_flex_cluster" "test":
2025-10-01T09:11:30.5722817Z           12: 		resource "mongodbatlas_flex_cluster" "test" {
2025-10-01T09:11:30.5723314Z         
2025-10-01T09:11:30.5724094Z         Name: test-acc-tf-7336482597707336806, Project ID: 68dcefd65b2d552e98fbf423
2025-10-01T09:11:30.6184057Z --- FAIL: TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex (0.71s)
```

  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-10-02 PASS 2 seconds
- 2025-10-03 PASS 2 seconds
- 2025-10-04 PASS a second
- 2025-10-05 PASS 2 seconds
- 2025-10-06 PASS 2 seconds
- 2025-10-07 PASS 2 seconds
- 2025-10-08 PASS 2 seconds
- 2025-10-09 PASS 2 seconds
- 2025-10-10 PASS 2 seconds
- 2025-10-11 PASS 2 seconds
- 2025-10-12 PASS 2 seconds
- 2025-10-13 PASS 2 seconds
- 2025-10-14 PASS 2 seconds
- 2025-10-15 PASS 2 seconds
- 2025-10-16 PASS 2 seconds
- 2025-10-17 PASS 2 seconds
- 2025-10-18 PASS 2 seconds
- 2025-10-19 PASS a second
- 2025-10-20
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-10-21 PASS 2 seconds
- 2025-10-22
  - PASS 2 seconds
  - PASS a second
- 2025-10-23 PASS 2 seconds
- 2025-10-24 PASS 2 seconds
- 2025-10-25 PASS 2 seconds
- 2025-10-26 PASS 2 seconds
- 2025-10-27 PASS 2 seconds
- 2025-10-28 PASS 2 seconds
- 2025-10-29 PASS 2 seconds
- 2025-10-30 PASS 2 seconds