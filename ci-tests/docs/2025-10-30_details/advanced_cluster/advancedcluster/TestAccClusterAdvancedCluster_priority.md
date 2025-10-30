# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priority Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 4)
Success rate: 90.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 11:48](#error-2025-10-01t1148390000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68dd151577784f3f4723de21/clusters | dev | out_of_capacity | 4.01s
[2025-10-05 00:29](#error-2025-10-05t0029510000) |  | qa |  | 4.09s
[2025-10-07 00:27](#error-2025-10-07t0027490000) |  | dev |  | 10804.08s
[2025-10-30 00:28](#error-2025-10-30t0028220000) |  | dev | timeout | 11771.07s

## Timeline
- 2025-09-30 PASS 11 minutes
- 2025-10-01
  - PASS 34 minutes
  - PASS an hour
  - PASS 47 minutes
  - PASS an hour
  - PASS 12 minutes
  - PASS 13 minutes
  - FAIL 4 seconds

### Error 2025-10-01T11:48:39+00:00
```
2025-10-01T11:48:39.3595785Z === RUN   TestAccClusterAdvancedCluster_priority
2025-10-01T11:50:16.3024314Z === CONT  TestAccClusterAdvancedCluster_priority
2025-10-01T11:50:20.3758736Z === NAME  TestAccClusterAdvancedCluster_priority
2025-10-01T11:50:20.3759662Z     resource_test.go:842: Step 2/4 error: Error running apply: exit status 1
2025-10-01T11:50:20.3760322Z         
2025-10-01T11:50:20.3760920Z         Error: Error in create
2025-10-01T11:50:20.3761356Z         
2025-10-01T11:50:20.3761940Z           with mongodbatlas_advanced_cluster.test,
2025-10-01T11:50:20.3765033Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-01T11:50:20.3766310Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-01T11:50:20.3767082Z         
2025-10-01T11:50:20.3768055Z         cluster name: test-acc-tf-c-3426530252297919254, API error details:
2025-10-01T11:50:20.3769922Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd151577784f3f4723de21/clusters
2025-10-01T11:50:20.3772360Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-01T11:50:20.3774409Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-01T11:50:20.3775703Z         Conflict. Params: [], BadRequestDetail: 
2025-10-01T11:50:20.4532450Z --- FAIL: TestAccClusterAdvancedCluster_priority (4.15s)
```

  - PASS 13 minutes
- 2025-10-02 PASS 21 minutes
- 2025-10-03 PASS 39 minutes
- 2025-10-04 PASS 2 hours
- 2025-10-05

### Error 2025-10-05T00:29:51+00:00
```
2025-10-05T00:29:51.4059799Z === RUN   TestAccClusterAdvancedCluster_priority
2025-10-05T00:31:26.4131176Z === CONT  TestAccClusterAdvancedCluster_priority
2025-10-05T00:31:31.0170049Z === NAME  TestAccClusterAdvancedCluster_priority
2025-10-05T00:31:31.0170944Z     resource_test.go:842: Step 2/4 error: Error running apply: exit status 1
2025-10-05T00:31:31.0171590Z         
2025-10-05T00:31:31.0171995Z         Error: Error in create
2025-10-05T00:31:31.0172419Z         
2025-10-05T00:31:31.0172968Z           with mongodbatlas_advanced_cluster.test,
2025-10-05T00:31:31.0299181Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-05T00:31:31.0300587Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-05T00:31:31.0301125Z         
2025-10-05T00:31:31.0301853Z         cluster name: test-acc-tf-c-896611171816463067, API error details:
2025-10-05T00:31:31.0303052Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfef758b3057a1af6cf/clusters
2025-10-05T00:31:31.0303966Z         POST: HTTP 403 Forbidden (Error code:
2025-10-05T00:31:31.0305058Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-05T00:31:31.0306140Z         Configuration. Contains selections that are unavailable due to your
2025-10-05T00:31:31.0319727Z    test_step_number=1 test_name=TestAccClusterAdvancedClusterConfig_selfManagedSharding test_terraform_path=/home/runner/work/_temp/d6726d11-c2b5-40bc-b1fa-9f3e3dd393d4/terraform test_working_directory=/tmp/plugintest1472787998
2025-10-05T00:31:31.0321751Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-05T00:31:31.0322476Z         BadRequestDetail: 
2025-10-05T00:31:31.2481649Z --- FAIL: TestAccClusterAdvancedCluster_priority (4.86s)
```

- 2025-10-06 PASS 13 minutes
- 2025-10-07

### Error 2025-10-07T00:27:49+00:00
```
2025-10-07T00:27:49.5423436Z === RUN   TestAccClusterAdvancedCluster_priority
2025-10-07T00:30:14.9706800Z === CONT  TestAccClusterAdvancedCluster_priority
2025-10-07T03:30:19.7274494Z === NAME  TestAccClusterAdvancedCluster_priority
2025-10-07T03:30:19.7275563Z     resource_test.go:842: Step 2/4 error: Error running apply: exit status 1
2025-10-07T03:30:19.7276209Z         
2025-10-07T03:30:19.7276625Z         Error: Error in create
2025-10-07T03:30:19.7277027Z         
2025-10-07T03:30:19.7277596Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:30:19.7278703Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:30:19.7279767Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:30:19.7280307Z         
2025-10-07T03:30:19.7281121Z         cluster=test-acc-tf-c-1157572675520581741 didn't reach desired state: IDLE,
2025-10-07T03:30:19.7281962Z         error: context deadline exceeded
2025-10-07T03:30:19.7836745Z --- FAIL: TestAccClusterAdvancedCluster_priority (10804.83s)
```

- 2025-10-08 PASS 16 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 18 minutes
- 2025-10-11 PASS 14 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 18 minutes
- 2025-10-14 PASS 17 minutes
- 2025-10-15 PASS 13 minutes
- 2025-10-16 PASS 32 minutes
- 2025-10-17 PASS 14 minutes
- 2025-10-18 PASS 14 minutes
- 2025-10-19 PASS 13 minutes
- 2025-10-20
  - PASS 12 minutes
  - PASS an hour
- 2025-10-21 PASS 12 minutes
- 2025-10-22
  - PASS 18 minutes
  - PASS 11 minutes
- 2025-10-23 PASS 18 minutes
- 2025-10-24 PASS 14 minutes
- 2025-10-25 PASS 18 minutes
- 2025-10-26 PASS 13 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 13 minutes
- 2025-10-29 PASS 18 minutes
- 2025-10-30

### Error 2025-10-30T00:28:22+00:00
```
2025-10-30T00:28:22.2621843Z === RUN   TestAccClusterAdvancedCluster_priority
2025-10-30T00:29:52.4740035Z === CONT  TestAccClusterAdvancedCluster_priority
2025-10-30T03:46:04.1876497Z === NAME  TestAccClusterAdvancedCluster_priority
2025-10-30T03:46:04.1877575Z     resource_test.go:832: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:46:04.1878350Z         
2025-10-30T03:46:04.1878764Z         Error: Error in delete
2025-10-30T03:46:04.1879159Z         
2025-10-30T03:46:04.1879907Z         cluster=test-acc-tf-c-3849941630781613185 didn't reach desired state:
2025-10-30T03:46:04.1881062Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T03:46:04.1882146Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:46:04.1882830Z --- FAIL: TestAccClusterAdvancedCluster_priority (11771.71s)
```
