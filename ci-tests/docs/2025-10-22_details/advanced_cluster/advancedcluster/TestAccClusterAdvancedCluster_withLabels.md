# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027440000) |  | dev | flaky_500 | 12608.03s
[2025-10-20 10:26](#error-2025-10-20t1026350000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60ecfde46041f566a7a2f/clusters | dev | out_of_capacity | 8.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 17 minutes
- 2025-09-24 PASS 18 minutes
- 2025-09-25 PASS 25 minutes
- 2025-09-26 PASS 37 minutes
- 2025-09-27 PASS 16 minutes
- 2025-09-28 PASS 13 minutes
- 2025-09-29
  - PASS 20 minutes
  - PASS 14 minutes
- 2025-09-30
  - PASS 17 minutes
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-10-01
  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS an hour
  - PASS 17 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 35 minutes
- 2025-10-02 PASS 2 hours
- 2025-10-03 PASS 2 hours
- 2025-10-04 PASS 2 hours
- 2025-10-05 PASS 16 minutes
- 2025-10-06 PASS 15 minutes
- 2025-10-07

### Error 2025-10-07T00:27:44+00:00
```
2025-10-07T00:27:44.7834143Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-10-07T00:30:14.9368110Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-10-07T03:30:23.0144678Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-10-07T03:30:23.0145838Z     resource_test.go:585: Step 1/4 error: Error running apply: exit status 1
2025-10-07T03:30:23.0146494Z         
2025-10-07T03:30:23.0146903Z         Error: Error in create
2025-10-07T03:30:23.0147305Z         
2025-10-07T03:30:23.0147648Z           with mongodbatlas_advanced_cluster.test,
2025-10-07T03:30:23.0148330Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-07T03:30:23.0148973Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-07T03:30:23.0149525Z         
2025-10-07T03:30:23.0150065Z         cluster=test-acc-tf-c-2225160264212821511 didn't reach desired state: IDLE,
2025-10-07T03:30:23.0150558Z         error: context deadline exceeded
2025-10-07T03:30:55.4886351Z    test_step_number=2 test_name=TestAccMockableAdvancedCluster_tenantUpgrade test_terraform_path=/home/runner/work/_temp/32ca5894-9082-4cab-8bcf-6d8bb695d35b/terraform
2025-10-07T04:00:23.1962967Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-10-07T04:00:23.1964180Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-07T04:00:23.1964885Z         
2025-10-07T04:00:23.1965714Z         Error: error when destroying resource
2025-10-07T04:00:23.1966026Z         
2025-10-07T04:00:23.1966403Z         error deleting project (68e45f1b507f48738a098edd):
2025-10-07T04:00:23.1967046Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e45f1b507f48738a098edd
2025-10-07T04:00:23.1967762Z         DELETE: HTTP 409 Conflict (Error code:
2025-10-07T04:00:23.1968367Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-10-07T04:00:23.1969068Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-10-07T04:00:23.1969576Z         Params: [], BadRequestDetail: 
2025-10-07T04:00:23.1969979Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (12608.26s)
```

- 2025-10-08 PASS 20 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 21 minutes
- 2025-10-11 PASS 21 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 22 minutes
- 2025-10-14 PASS 19 minutes
- 2025-10-15 PASS 16 minutes
- 2025-10-16 PASS 29 minutes
- 2025-10-17 PASS 21 minutes
- 2025-10-18 PASS 17 minutes
- 2025-10-19 PASS 18 minutes
- 2025-10-20
  - PASS 15 minutes
  - FAIL 8 seconds

### Error 2025-10-20T10:26:35+00:00
```
2025-10-20T10:26:35.5286428Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-10-20T10:28:27.7212936Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-10-20T10:28:35.6461099Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-10-20T10:28:35.6461745Z     resource_test.go:575: Step 1/4 error: Error running apply: exit status 1
2025-10-20T10:28:35.6462445Z         
2025-10-20T10:28:35.6462732Z         Error: Error in create
2025-10-20T10:28:35.6462985Z         
2025-10-20T10:28:35.6463342Z           with mongodbatlas_advanced_cluster.test,
2025-10-20T10:28:35.6464001Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-20T10:28:35.6464616Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-20T10:28:35.6464935Z         
2025-10-20T10:28:35.6465349Z         cluster name: test-acc-tf-c-238945670198539484, API error details:
2025-10-20T10:28:35.6466243Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60ecfde46041f566a7a2f/clusters
2025-10-20T10:28:35.6466934Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:28:35.6467572Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:28:35.6468064Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:28:36.3111227Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (8.59s)
```

- 2025-10-21 PASS 17 minutes
- 2025-10-22
  - PASS 20 minutes
  - PASS 13 minutes