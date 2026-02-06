# advanced_cluster/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-15 00:30](#error-2026-01-15t0030160000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/69683514674325799df9e225/clusters | dev |  | 188.01s
[2026-01-31 00:35](#error-2026-01-31t0035310000) |  | dev | timeout | 6188.07s
[2026-02-02 00:38](#error-2026-02-02t0038590000) |  | dev | timeout | 6189.09s
[2026-02-03 00:39](#error-2026-02-03t0039410000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143cbe3c7fce2317eb000/clusters | dev | out_of_capacity | 6.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 22 minutes
- 2026-01-09 PASS 24 minutes
- 2026-01-10 PASS 18 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 19 minutes
- 2026-01-13 PASS 25 minutes
- 2026-01-14 PASS 22 minutes
- 2026-01-15

### Error 2026-01-15T00:30:16+00:00
```
2026-01-15T00:30:16.5365757Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-15T00:31:43.0229137Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-15T00:34:51.1073467Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-15T00:34:51.1074275Z     resource_test.go:1109: Step 2/6 error: Error running apply: exit status 1
2026-01-15T00:34:51.1074765Z         
2026-01-15T00:34:51.1075079Z         Error: Error in create
2026-01-15T00:34:51.1075350Z         
2026-01-15T00:34:51.1075829Z           with mongodbatlas_advanced_cluster.test,
2026-01-15T00:34:51.1076539Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-15T00:34:51.1077203Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-15T00:34:51.1077538Z         
2026-01-15T00:34:51.1077979Z         cluster name: test-acc-tf-c-7374298473278635761, API error details:
2026-01-15T00:34:51.1078714Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69683514674325799df9e225/clusters
2026-01-15T00:34:51.1079448Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2026-01-15T00:34:51.1080128Z         cluster or serverless instance named test-acc-tf-c-7374298473278635761 is
2026-01-15T00:34:51.1080796Z         already present in group 69683514674325799df9e225. Reason: Bad Request.
2026-01-15T00:34:51.1081443Z         Params: [cluster or serverless instance test-acc-tf-c-7374298473278635761
2026-01-15T00:34:51.1081974Z         69683514674325799df9e225], BadRequestDetail: 
2026-01-15T00:34:51.1510173Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (188.13s)
```

- 2026-01-16 PASS 26 minutes
- 2026-01-17 PASS 21 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 20 minutes
- 2026-01-20 PASS 24 minutes
- 2026-01-21 PASS 23 minutes
- 2026-01-22 PASS 20 minutes
- 2026-01-23 PASS 26 minutes
- 2026-01-24 PASS 18 minutes
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

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-18 00:34](#error-2026-01-18t0034510000) | OUT_OF_CAPACITY /api/atlas/v2/groups/696c2aa9ed3ba1d446f0d6a2/clusters | qa | out_of_capacity | 6.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 23 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18

### Error 2026-01-18T00:34:51+00:00
```
2026-01-18T00:34:51.8034903Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-18T00:36:19.7396661Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-18T00:36:26.1291806Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-01-18T00:36:26.1293211Z     resource_test.go:1109: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-18T00:36:26.1294115Z         
2026-01-18T00:36:26.1294550Z         Error: Error in create
2026-01-18T00:36:26.1294967Z         
2026-01-18T00:36:26.1295533Z           with mongodbatlas_advanced_cluster.test,
2026-01-18T00:36:26.1296965Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-18T00:36:26.1298072Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-18T00:36:26.1298653Z         
2026-01-18T00:36:26.1299381Z         cluster name: test-acc-tf-c-5776996146155909467, API error details:
2026-01-18T00:36:26.1300583Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/696c2aa9ed3ba1d446f0d6a2/clusters
2026-01-18T00:36:26.1301802Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-18T00:36:26.1302990Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-18T00:36:26.1303876Z         Conflict. Params: [], BadRequestDetail: 
2026-01-18T00:36:26.1814655Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (6.46s)
```

- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 20 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 23 minutes
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
