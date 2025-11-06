# flex_cluster/flexcluster/TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-05 00:29](#error-2025-11-05t0029490000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/690a9a151df913421c5d1a46/flexClusters | dev | 0.08s

## Timeline
- 2025-10-07: MISSING
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
- 2025-10-31 PASS 2 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 2 seconds
- 2025-11-03 PASS 2 seconds
- 2025-11-04 PASS 2 seconds
- 2025-11-05
  - FAIL a moment

### Error 2025-11-05T00:29:49+00:00
```
2025-11-05T00:29:49.1241751Z === RUN   TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2025-11-05T00:29:49.1253494Z === CONT  TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2025-11-05T00:29:49.8615610Z   
2025-11-05T00:29:49.8616294Z     resource_test.go:39: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-11-05T00:29:49.8617021Z         
2025-11-05T00:29:49.8618994Z         Error: error creating flex cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/690a9a151df913421c5d1a46/flexClusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-11-05T00:29:49.8620394Z         
2025-11-05T00:29:49.8620706Z           with mongodbatlas_flex_cluster.test,
2025-11-05T00:29:49.8621274Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_flex_cluster" "test":
2025-11-05T00:29:49.8621799Z           12: 		resource "mongodbatlas_flex_cluster" "test" {
2025-11-05T00:29:49.8622107Z         
2025-11-05T00:29:49.8622526Z         Name: test-acc-tf-3613884006460657965, Project ID: 690a9a151df913421c5d1a46
2025-11-05T00:29:49.9109479Z --- FAIL: TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex (0.79s)
```

  - PASS 2 seconds
- 2025-11-06 PASS 2 seconds