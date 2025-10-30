# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 39) FAIL
Success rate: 97.50%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-05 00:31](#error-2025-10-05t0031260000) |  | qa | 4.03s

## Timeline
- 2025-09-30 PASS 5 seconds
- 2025-10-01
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 5 seconds
- 2025-10-03 PASS 5 seconds
- 2025-10-04 PASS 4 seconds
- 2025-10-05

### Error 2025-10-05T00:31:26+00:00
```
2025-10-05T00:31:26.3834687Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-10-05T00:31:26.4137026Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-10-05T00:31:30.6078662Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-10-05T00:31:30.6080411Z     resource_test.go:2877: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-05T00:31:30.6081265Z         
2025-10-05T00:31:30.6082521Z         Error: error creating flex cluster: Cluster name test-acc-tf-42485559640192341 (project_id=68e1bc02f758b3057a1af960).
2025-10-05T00:31:30.6083445Z         
2025-10-05T00:31:30.6084177Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:30.6085372Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:30.6086475Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:30.6087025Z         
2025-10-05T00:31:30.6088009Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bc02f758b3057a1af960/flexClusters
2025-10-05T00:31:30.6088965Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:30.6089878Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:30.6090945Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:30.6092021Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:30.6092777Z         BadRequestDetail: 
2025-10-05T00:31:30.6818507Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (4.29s)
```

- 2025-10-06 PASS 5 seconds
- 2025-10-07 PASS 5 seconds
- 2025-10-08 PASS 5 seconds
- 2025-10-09 PASS 4 seconds
- 2025-10-10 PASS 5 seconds
- 2025-10-11 PASS 5 seconds
- 2025-10-12 PASS 5 seconds
- 2025-10-13 PASS 5 seconds
- 2025-10-14 PASS 4 seconds
- 2025-10-15 PASS 5 seconds
- 2025-10-16 PASS 5 seconds
- 2025-10-17 PASS 4 seconds
- 2025-10-18 PASS 4 seconds
- 2025-10-19 PASS 5 seconds
- 2025-10-20
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-10-21 PASS 4 seconds
- 2025-10-22
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-10-23 PASS 4 seconds
- 2025-10-24 PASS 5 seconds
- 2025-10-25 PASS 4 seconds
- 2025-10-26 PASS 5 seconds
- 2025-10-27 PASS 5 seconds
- 2025-10-28 PASS 4 seconds
- 2025-10-29 PASS 5 seconds
- 2025-10-30 PASS 4 seconds