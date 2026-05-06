# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-10 00:44](#error-2026-04-10t0044400000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d847f6dd8d8b3ecd3a5b15/clusters | dev | out_of_capacity | 6.03s
[2026-04-11 00:48](#error-2026-04-11t0048260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d99a56a916b4e1179af72f/clusters | dev | out_of_capacity | 5.09s
[2026-04-16 00:53](#error-2026-04-16t0053180000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032fc1ec945fedc7326a3/clusters | dev | out_of_capacity | 5.05s
[2026-04-22 00:46](#error-2026-04-22t0046230000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/69e81a5d632b92cc72e4c742/clusters | dev |  | 189.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 48 minutes
- 2026-04-08 PASS 21 minutes
- 2026-04-09 PASS 26 minutes
- 2026-04-10

### Error 2026-04-10T00:44:40+00:00
```
2026-04-10T00:44:40.3816107Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-10T00:46:02.4039248Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-10T00:46:08.5035696Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-10T00:46:08.5064398Z     resource_test.go:1069: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-10T00:46:08.5084921Z         
2026-04-10T00:46:08.5119260Z         Error: Error in create
2026-04-10T00:46:08.5125774Z         
2026-04-10T00:46:08.5139058Z           with mongodbatlas_advanced_cluster.test,
2026-04-10T00:46:08.5140934Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-10T00:46:08.5142428Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-10T00:46:08.5143394Z         
2026-04-10T00:46:08.5144336Z         cluster name: test-acc-tf-c-4697451054986646534, API error details:
2026-04-10T00:46:08.5146201Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d847f6dd8d8b3ecd3a5b15/clusters
2026-04-10T00:46:08.5147865Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-10T00:46:08.5150628Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-10T00:46:08.5152741Z         Conflict. Params: [], BadRequestDetail: 
2026-04-10T00:46:08.5567177Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (6.33s)
```

- 2026-04-11

### Error 2026-04-11T00:48:26+00:00
```
2026-04-11T00:48:26.1523018Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-11T00:49:46.1287937Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-11T00:49:51.2716492Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-11T00:49:51.2717632Z     resource_test.go:1069: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-11T00:49:51.2718589Z         
2026-04-11T00:49:51.2719005Z         Error: Error in create
2026-04-11T00:49:51.2719364Z         
2026-04-11T00:49:51.2719897Z           with mongodbatlas_advanced_cluster.test,
2026-04-11T00:49:51.2721014Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-11T00:49:51.2722456Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-11T00:49:51.2723053Z         
2026-04-11T00:49:51.2723826Z         cluster name: test-acc-tf-c-6937543076620716446, API error details:
2026-04-11T00:49:51.2725129Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d99a56a916b4e1179af72f/clusters
2026-04-11T00:49:51.2726506Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-11T00:49:51.2727813Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-11T00:49:51.2728805Z         Conflict. Params: [], BadRequestDetail: 
2026-04-11T00:49:51.2750082Z   
2026-04-11T00:49:51.3638707Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (5.86s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 27 minutes
- 2026-04-14 PASS 19 minutes
- 2026-04-15 PASS 21 minutes
- 2026-04-16

### Error 2026-04-16T00:53:18+00:00
```
2026-04-16T00:53:18.1999747Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-16T00:54:54.4015440Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-16T00:54:59.3514479Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-16T00:54:59.3516277Z     resource_test.go:1069: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T00:54:59.3517446Z         
2026-04-16T00:54:59.3518066Z         Error: Error in create
2026-04-16T00:54:59.3518667Z         
2026-04-16T00:54:59.3519436Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:54:59.3520866Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:54:59.3522287Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:54:59.3523073Z         
2026-04-16T00:54:59.3524230Z         cluster name: test-acc-tf-c-6475126548113508159, API error details:
2026-04-16T00:54:59.3525791Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032fc1ec945fedc7326a3/clusters
2026-04-16T00:54:59.3527329Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:54:59.3529120Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:54:59.3530677Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:54:59.3567789Z   
2026-04-16T00:54:59.6385126Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (5.53s)
```

- 2026-04-17 PASS 21 minutes
- 2026-04-18 PASS 27 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 24 minutes
- 2026-04-22

### Error 2026-04-22T00:46:23+00:00
```
2026-04-22T00:46:23.0865193Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-22T01:18:57.8851948Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-22T01:22:06.2551892Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-04-22T01:22:06.2553012Z     resource_test.go:1069: Step 2/6 error: Error running apply: exit status 1
2026-04-22T01:22:06.2553608Z         
2026-04-22T01:22:06.2554015Z         Error: Error in create
2026-04-22T01:22:06.2554372Z         
2026-04-22T01:22:06.2554802Z           with mongodbatlas_advanced_cluster.test,
2026-04-22T01:22:06.2555784Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-22T01:22:06.2556734Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-22T01:22:06.2557619Z         
2026-04-22T01:22:06.2558371Z         cluster name: test-acc-tf-c-521276893526002306, API error details:
2026-04-22T01:22:06.2559527Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a5d632b92cc72e4c742/clusters
2026-04-22T01:22:06.2560744Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2026-04-22T01:22:06.2561794Z         cluster or serverless instance named test-acc-tf-c-521276893526002306 is
2026-04-22T01:22:06.2562832Z         already present in group 69e81a5d632b92cc72e4c742. Reason: Bad Request.
2026-04-22T01:22:06.2563839Z         Params: [cluster or serverless instance test-acc-tf-c-521276893526002306
2026-04-22T01:22:06.2564682Z         69e81a5d632b92cc72e4c742], BadRequestDetail: 
2026-04-22T01:22:06.3038258Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (189.13s)
```

- 2026-04-23 PASS 36 minutes
- 2026-04-24 PASS 22 minutes
- 2026-04-25 PASS 24 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 21 minutes
- 2026-04-28 PASS 23 minutes
- 2026-04-29 PASS 23 minutes
- 2026-04-30 PASS 25 minutes
- 2026-05-01 PASS 22 minutes
- 2026-05-02 PASS 19 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 minutes
- 2026-05-05 PASS 33 minutes
- 2026-05-06 PASS 35 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 18 minutes
  - PASS 16 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 18 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 19 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 22 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 19 minutes
- 2026-05-04 PASS 20 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 17 minutes
