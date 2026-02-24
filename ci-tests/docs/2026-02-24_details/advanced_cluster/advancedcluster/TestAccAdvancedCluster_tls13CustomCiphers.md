# advanced_cluster/advancedcluster/TestAccAdvancedCluster_tls13CustomCiphers Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035310000) |  | dev | timeout | 10805.00s
[2026-02-02 00:38](#error-2026-02-02t0038590000) |  | dev | timeout | 10807.00s
[2026-02-03 00:39](#error-2026-02-03t0039410000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143cbe3c7fce2317eb000/clusters | dev | out_of_capacity | 6.05s
[2026-02-24 00:37](#error-2026-02-24t0037170000) |  | dev | flaky_500 | 1242.04s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 21 minutes
- 2026-01-28 PASS 18 minutes
- 2026-01-29 PASS 25 minutes
- 2026-01-30 PASS 36 minutes
- 2026-01-31

### Error 2026-01-31T00:35:31+00:00
```
2026-01-31T00:35:31.9020747Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-01-31T00:36:56.1465854Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-01-31T03:37:01.1358746Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-01-31T03:37:01.1359574Z     resource_test.go:2104: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:37:01.1360079Z         
2026-01-31T03:37:01.1360414Z         Error: Error in create
2026-01-31T03:37:01.1360665Z         
2026-01-31T03:37:01.1361123Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.1361934Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.1362715Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.1363134Z         
2026-01-31T03:37:01.1364053Z         cluster=test-acc-tf-c-5046581194366575677 didn't reach desired state: IDLE,
2026-01-31T03:37:01.1364561Z         error: context deadline exceeded
2026-01-31T03:37:01.1861233Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (10805.04s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:59+00:00
```
2026-02-02T00:38:59.2765786Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-02-02T00:40:19.9543464Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-02-02T03:40:26.7697315Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-02-02T03:40:26.7698229Z     resource_test.go:2104: Step 1/1 error: Error running apply: exit status 1
2026-02-02T03:40:26.7698894Z         
2026-02-02T03:40:26.7699301Z         Error: Error in create
2026-02-02T03:40:26.7699711Z         
2026-02-02T03:40:26.7700260Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.7701464Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.7702759Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.7703705Z         
2026-02-02T03:40:26.7704511Z         cluster=test-acc-tf-c-4102890288728931466 didn't reach desired state: IDLE,
2026-02-02T03:40:26.7705328Z         error: context deadline exceeded
2026-02-02T03:40:26.9775476Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (10807.04s)
```

- 2026-02-03

### Error 2026-02-03T00:39:41+00:00
```
2026-02-03T00:39:41.9887579Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-02-03T00:42:03.6662885Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-02-03T00:42:09.8005035Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-02-03T00:42:09.8005945Z     resource_test.go:2104: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:42:09.8006565Z         
2026-02-03T00:42:09.8006940Z         Error: Error in create
2026-02-03T00:42:09.8007354Z         
2026-02-03T00:42:09.8007929Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.8009084Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.8010246Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.8010870Z         
2026-02-03T00:42:09.8011698Z         cluster name: test-acc-tf-c-923246464023788415, API error details:
2026-02-03T00:42:09.8012866Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143cbe3c7fce2317eb000/clusters
2026-02-03T00:42:09.8013961Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.8014910Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.8015697Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.8183537Z   
2026-02-03T00:42:10.1816071Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (6.53s)
```

- 2026-02-04 PASS 19 minutes
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 21 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 23 minutes
- 2026-02-10 PASS 20 minutes
- 2026-02-11 PASS 20 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 19 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 19 minutes
- 2026-02-18 PASS 21 minutes
- 2026-02-19 PASS 37 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 19 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:37:17+00:00
```
2026-02-24T00:37:17.1468699Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-02-24T00:40:00.5583944Z === CONT  TestAccAdvancedCluster_tls13CustomCiphers
2026-02-24T00:57:37.6228837Z === NAME  TestAccAdvancedCluster_tls13CustomCiphers
2026-02-24T00:57:37.6230050Z     resource_test.go:2063: Step 1/1 error: Error running apply: exit status 1
2026-02-24T00:57:37.6230466Z         
2026-02-24T00:57:37.6230812Z         Error: error reading Advanced Configuration
2026-02-24T00:57:37.6231120Z         
2026-02-24T00:57:37.6231524Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:37.6232683Z           on terraform_plugin_test.tf line 47, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:37.6234116Z           47: 	data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:37.6234466Z         
2026-02-24T00:57:37.6234921Z         cluster name: test-acc-tf-c-6106527468132737212, API error details: (503
2026-02-24T00:57:37.6235634Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:41.7374596Z    test_name=TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2026-02-24T01:00:42.9536501Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (1242.40s)
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
- 2026-02-01 PASS 21 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 19 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 18 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 17 minutes
  - PASS 15 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
