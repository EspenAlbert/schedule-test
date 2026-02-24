# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035310000) |  | dev | timeout | 6188.07s
[2026-02-02 00:38](#error-2026-02-02t0038590000) |  | dev | timeout | 6189.09s
[2026-02-03 00:39](#error-2026-02-03t0039410000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143cbe3c7fce2317eb000/clusters | dev | out_of_capacity | 6.05s
[2026-02-24 00:37](#error-2026-02-24t0037170000) |  | dev | flaky_500 | 1307.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 20 minutes
- 2026-01-27 PASS 22 minutes
- 2026-01-28 PASS 22 minutes
- 2026-01-29 PASS 27 minutes
- 2026-01-30 PASS 33 minutes
- 2026-01-31

### Error 2026-01-31T00:35:31+00:00
```
2026-01-31T00:35:31.9015952Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-31T00:36:56.1523979Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-31T02:20:04.7870582Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-31T02:20:04.7871334Z     resource_test.go:1068: Step 2/6 error: Error running apply: exit status 1
2026-01-31T02:20:04.7871858Z         
2026-01-31T02:20:04.7872224Z         Error: Error in create
2026-01-31T02:20:04.7872481Z         
2026-01-31T02:20:04.7872813Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T02:20:04.7873907Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T02:20:04.7874676Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T02:20:04.7875041Z         
2026-01-31T02:20:04.7875639Z         cluster=test-acc-tf-c-1572093350724183005 didn't reach desired state: IDLE,
2026-01-31T02:20:04.7876143Z         error: context deadline exceeded
2026-01-31T02:20:04.8322945Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (6188.68s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:59+00:00
```
2026-02-02T00:38:59.2757110Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-02T00:40:19.9752712Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-02T02:23:29.8146818Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-02T02:23:29.8148197Z     resource_test.go:1068: Step 2/6 error: Error running apply: exit status 1
2026-02-02T02:23:29.8149034Z         
2026-02-02T02:23:29.8149691Z         Error: Error in create
2026-02-02T02:23:29.8150210Z         
2026-02-02T02:23:29.8150902Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T02:23:29.8152676Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T02:23:29.8154003Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T02:23:29.8154865Z         
2026-02-02T02:23:29.8155750Z         cluster=test-acc-tf-c-8962955885379956941 didn't reach desired state: IDLE,
2026-02-02T02:23:29.8156664Z         error: context deadline exceeded
2026-02-02T02:23:29.8722019Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (6189.94s)
```

- 2026-02-03

### Error 2026-02-03T00:39:41+00:00
```
2026-02-03T00:39:41.9884231Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-03T00:42:03.6663983Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-03T00:42:09.7828683Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-03T00:42:09.7834077Z     resource_test.go:1068: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:42:09.7834928Z         
2026-02-03T00:42:09.7835394Z         Error: Error in create
2026-02-03T00:42:09.7835825Z         
2026-02-03T00:42:09.7836416Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.7837627Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.7838768Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.7839429Z         
2026-02-03T00:42:09.7840176Z         cluster name: test-acc-tf-c-7546952514281051706, API error details:
2026-02-03T00:42:09.7841399Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143cbe3c7fce2317eb000/clusters
2026-02-03T00:42:09.7842638Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.7844037Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.7844910Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.8004621Z   
2026-02-03T00:42:10.1682608Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (6.51s)
```

- 2026-02-04 PASS 19 minutes
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 21 minutes
- 2026-02-07 PASS 20 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 20 minutes
- 2026-02-11 PASS 21 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 20 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 23 minutes
- 2026-02-17 PASS 20 minutes
- 2026-02-18 PASS 24 minutes
- 2026-02-19 PASS 29 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:37:17+00:00
```
2026-02-24T00:37:17.1466553Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-24T00:40:00.5491446Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-24T00:57:41.7375223Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-24T00:57:41.7375886Z     resource_test.go:1067: Step 2/6 error: Error running apply: exit status 1
2026-02-24T00:57:41.7376276Z         
2026-02-24T00:57:41.7376596Z         Error: error reading advanced cluster list
2026-02-24T00:57:41.7376888Z         
2026-02-24T00:57:41.7377266Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:41.7378157Z           on terraform_plugin_test.tf line 48, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:41.7378772Z           48: 	data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:41.7379081Z         
2026-02-24T00:57:41.7379673Z         project ID 699cf2bb8dfec41eaa859d9c. Error (503 Service Unavailable) failed
2026-02-24T00:57:41.7380240Z         to decode response body: undefined response type
2026-02-24T00:57:55.1779418Z    test_working_directory=/tmp/plugintest3119289624 test_name=TestAccClusterAdvancedCluster_pausedToUnpaused test_terraform_path=/home/runner/work/_temp/5c6ed455-a3dd-498c-9d5a-daa41eb22591/terraform test_step_number=1
2026-02-24T01:01:48.0728893Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (1307.53s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 23 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 22 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 19 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
