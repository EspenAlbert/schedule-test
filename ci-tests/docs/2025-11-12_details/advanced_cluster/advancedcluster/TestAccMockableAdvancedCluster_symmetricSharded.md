# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricSharded Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029490000) |  | qa | 6.03s
[2025-10-30 00:28](#error-2025-10-30t0028200000) |  | dev | 10805.00s
[2025-11-02 00:29](#error-2025-11-02t0029450000) |  | qa | 8.09s

## Timeline
- 2025-10-03: MISSING
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
- 2025-10-23 PASS an hour
- 2025-10-24 PASS 32 minutes
- 2025-10-25 PASS 46 minutes
- 2025-10-26 PASS 26 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 31 minutes
- 2025-10-29 PASS 37 minutes
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8271025Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-10-30T00:28:22.2607197Z     resource_test.go:668: Adding variable clusterName=test-acc-tf-c-5672443510620728175
2025-10-30T00:28:22.2608232Z     resource_test.go:668: Adding variable groupId=6902b124abf4374f3299781b
2025-10-30T00:29:52.4724699Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-10-30T03:29:56.0075063Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-10-30T03:29:56.0075833Z     resource_test.go:668: Step 1/3 error: Error running apply: exit status 1
2025-10-30T03:29:56.0076274Z         
2025-10-30T03:29:56.0076571Z         Error: Error in create
2025-10-30T03:29:56.0076866Z         
2025-10-30T03:29:56.0077256Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:29:56.0078052Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:29:56.0079102Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:29:56.0079551Z         
2025-10-30T03:29:56.0080240Z         cluster=test-acc-tf-c-5672443510620728175 didn't reach desired state: IDLE,
2025-10-30T03:29:56.0080805Z         error: context deadline exceeded
2025-10-30T03:29:56.0629157Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10805.03s)
```

- 2025-10-31 PASS 52 minutes
- 2025-11-01: MISSING
- 2025-11-02

### Error 2025-11-02T00:29:45+00:00
```
2025-11-02T00:29:45.9169094Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2025-11-02T00:29:49.6921639Z     resource_test.go:668: Adding variable groupId=6906a5fa5ace12378d296111
2025-11-02T00:29:49.6922519Z     resource_test.go:668: Adding variable clusterName=test-acc-tf-c-5703062514407935548
2025-11-02T00:31:20.5638343Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-02T00:31:25.4869601Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2025-11-02T00:31:25.4870886Z     resource_test.go:668: Step 1/3 error: Error running apply: exit status 1
2025-11-02T00:31:25.4871528Z         
2025-11-02T00:31:25.4871958Z         Error: Error in create
2025-11-02T00:31:25.4872367Z         
2025-11-02T00:31:25.4872921Z           with mongodbatlas_advanced_cluster.test,
2025-11-02T00:31:25.4874073Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-02T00:31:25.4875188Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-02T00:31:25.4875930Z         
2025-11-02T00:31:25.4876644Z         cluster name: test-acc-tf-c-5703062514407935548, API error details:
2025-11-02T00:31:25.4938235Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6906a5fa5ace12378d296111/clusters
2025-11-02T00:31:25.4939283Z         POST: HTTP 403 Forbidden (Error code:
2025-11-02T00:31:25.4940171Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-11-02T00:31:25.4941227Z         Configuration. Contains selections that are unavailable due to your
2025-11-02T00:31:25.4942261Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-11-02T00:31:25.4942981Z         BadRequestDetail: 
2025-11-02T00:31:25.7230477Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (8.94s)
```

- 2025-11-03 PASS 33 minutes
- 2025-11-04 PASS 35 minutes
- 2025-11-05
  - PASS 45 minutes
  - PASS 30 minutes
- 2025-11-06 PASS 37 minutes
- 2025-11-07 PASS 31 minutes
- 2025-11-08 PASS 55 minutes
- 2025-11-09 PASS 28 minutes
- 2025-11-10 PASS 31 minutes
- 2025-11-11 PASS 31 minutes
- 2025-11-12 PASS 31 minutes