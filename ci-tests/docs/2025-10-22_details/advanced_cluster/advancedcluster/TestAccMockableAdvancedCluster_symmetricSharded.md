# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricSharded Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029490000) |  | qa | 6.03s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 44 minutes
- 2025-09-24 PASS 44 minutes
- 2025-09-25 PASS 46 minutes
- 2025-09-26 PASS 48 minutes
- 2025-09-27 PASS 34 minutes
- 2025-09-28 PASS 47 minutes
- 2025-09-29
  - PASS an hour
  - PASS 27 minutes
- 2025-09-30
  - PASS 27 minutes
  - PASS 30 minutes
  - PASS 34 minutes
  - PASS 27 minutes
  - PASS 30 minutes
- 2025-10-01
  - PASS 49 minutes
  - PASS 25 minutes
  - PASS 40 minutes
  - PASS 29 minutes
  - PASS 51 minutes
  - PASS 42 minutes
  - PASS 49 minutes
  - PASS 28 minutes
- 2025-10-02 PASS 35 minutes
- 2025-10-03 PASS 32 minutes
- 2025-10-04 PASS 32 minutes
- 2025-10-05

### Error 2025-10-05T00:29:49+00:00
```
2025-10-05T00:29:49.9078712Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-10-05T00:29:51.4043195Z     resource_test.go:678: Adding variable groupId=68e1bbfef758b3057a1af6cf
2025-10-05T00:29:51.4044569Z     resource_test.go:678: Adding variable clusterName=test-acc-tf-c-1147435126766380695
2025-10-05T00:31:26.4203553Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-10-05T00:31:30.9991644Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-10-05T00:31:30.9992582Z     resource_test.go:678: Step 1/3 error: Error running apply: exit status 1
2025-10-05T00:31:30.9993192Z         
2025-10-05T00:31:30.9993582Z         Error: Error in create
2025-10-05T00:31:30.9993960Z         
2025-10-05T00:31:31.0085262Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:31.0086502Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:31.0087571Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:31.0088138Z         
2025-10-05T00:31:31.0088899Z         cluster name: test-acc-tf-c-1147435126766380695, API error details:
2025-10-05T00:31:31.0090283Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfef758b3057a1af6cf/clusters
2025-10-05T00:31:31.0091240Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:31.0092154Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:31.0093215Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:31.0094385Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:31.0095179Z         BadRequestDetail: 
2025-10-05T00:31:31.0169635Z   
2025-10-05T00:31:31.2513495Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (6.34s)
```

- 2025-10-06 PASS 28 minutes
- 2025-10-07 PASS 32 minutes
- 2025-10-08 PASS 33 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 35 minutes
- 2025-10-11 PASS 34 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 49 minutes
- 2025-10-14 PASS 32 minutes
- 2025-10-15 PASS 30 minutes
- 2025-10-16 PASS 35 minutes
- 2025-10-17 PASS 30 minutes
- 2025-10-18 PASS 30 minutes
- 2025-10-19 PASS 30 minutes
- 2025-10-20
  - PASS an hour
  - PASS 26 minutes
- 2025-10-21 PASS 28 minutes
- 2025-10-22
  - PASS 41 minutes
  - PASS 27 minutes