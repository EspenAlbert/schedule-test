# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-21 00:37](#error-2026-02-21t0037010000) |  | dev | flaky_500 | 1313.02s
[2026-02-24 00:37](#error-2026-02-24t0037080000) |  | dev | flaky_500 | 1239.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 24 minutes
- 2026-02-07 PASS 21 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 23 minutes
- 2026-02-10 PASS 22 minutes
- 2026-02-11 PASS 24 minutes
- 2026-02-12 PASS 21 minutes
- 2026-02-13 PASS 21 minutes
- 2026-02-14 PASS 25 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 26 minutes
- 2026-02-17 PASS 19 minutes
- 2026-02-18 PASS 25 minutes
- 2026-02-19 PASS 31 minutes
- 2026-02-20 PASS 27 minutes
- 2026-02-21

### Error 2026-02-21T00:37:01+00:00
```
2026-02-21T00:37:01.9410877Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-21T00:38:40.1829416Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-21T00:39:10.1951661Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-21T00:39:10.1953237Z     pre_check.go:46: Time before creating cluster: 2026-02-21T00:39:10.194856185Z, ProjectID: 6998fe2a23648dd3abd58fec, Cluster name: test-acc-tf-c-5235241907652914292
2026-02-21T00:56:29.0424999Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-21T00:56:29.0425579Z     resource_test.go:193: Step 2/4 error: Error running apply: exit status 1
2026-02-21T00:56:29.0425982Z         
2026-02-21T00:56:29.0426277Z         Error: Error in pause after update
2026-02-21T00:56:29.0426733Z         
2026-02-21T00:56:29.0427335Z           with mongodbatlas_advanced_cluster.test,
2026-02-21T00:56:29.0428031Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-21T00:56:29.0428669Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-21T00:56:29.0429236Z         
2026-02-21T00:56:29.0429682Z         cluster name: test-acc-tf-c-5235241907652914292, API error details:
2026-02-21T00:56:29.0430572Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6998fe2a23648dd3abd58fec/clusters/test-acc-tf-c-5235241907652914292
2026-02-21T00:56:29.0431252Z         PATCH: HTTP 400 Bad Request (Error code:
2026-02-21T00:56:29.0431821Z         "OPERATION_INVALID_MEMBER_REPLICATION_LAG") Detail: The operation cannot
2026-02-21T00:56:29.0432500Z         begin because monitoring indicates these nodes have too much replication lag:
2026-02-21T00:56:29.0433197Z         atlas-yz95nx-shard-00-00.vbvlvh.mongodb-dev.net (20sec). Reason: Bad Request.
2026-02-21T00:56:29.0433828Z         Params: [atlas-yz95nx-shard-00-00.vbvlvh.mongodb-dev.net (20sec)],
2026-02-21T00:56:29.0434251Z         BadRequestDetail: 
2026-02-21T01:00:33.4045251Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (1313.22s)
```

- 2026-02-22: MISSING
- 2026-02-23 PASS 24 minutes
- 2026-02-24

### Error 2026-02-24T00:37:08+00:00
```
2026-02-24T00:37:08.6988137Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-24T00:40:00.5505140Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-24T00:40:30.5543358Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-24T00:40:30.5545313Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:30.554065509Z, ProjectID: 699cf2b18dfec41eaa8533ad, Cluster name: test-acc-tf-c-2517546451600548032
2026-02-24T00:57:34.9891421Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-24T00:57:34.9892103Z     resource_test.go:193: Step 1/4 error: Error running apply: exit status 1
2026-02-24T00:57:34.9892726Z         
2026-02-24T00:57:34.9893133Z         Error: error reading Advanced Configuration
2026-02-24T00:57:34.9893540Z         
2026-02-24T00:57:34.9893918Z           with data.mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:34.9894587Z           on terraform_plugin_test.tf line 35, in data "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:34.9895195Z           35: 	data "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:34.9895504Z         
2026-02-24T00:57:34.9895944Z         cluster name: test-acc-tf-c-2517546451600548032, API error details: (503
2026-02-24T00:57:34.9896605Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:34.9897004Z         
2026-02-24T00:57:34.9897530Z         Error: error resolving container IDs
2026-02-24T00:57:34.9898009Z         
2026-02-24T00:57:34.9898451Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:34.9899125Z           on terraform_plugin_test.tf line 41, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:34.9899730Z           41: 	data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:34.9900042Z         
2026-02-24T00:57:34.9900501Z         cluster name = test-acc-tf-c-2517546451600548032, error details: (503 Service
2026-02-24T00:57:34.9901141Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:37.4522494Z   
2026-02-24T01:00:40.2036142Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (1239.66s)
```

- 2026-02-25 PASS 23 minutes
- 2026-02-26 PASS 32 minutes
- 2026-02-27 PASS 23 minutes
- 2026-02-28 PASS 24 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 20 minutes
  - PASS 21 minutes
- 2026-03-03 PASS 25 minutes
- 2026-03-04 PASS 22 minutes
- 2026-03-05 PASS 35 minutes
- 2026-03-06 PASS 27 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 25 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 29 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 22 minutes
  - PASS 18 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 23 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 25 minutes
- 2026-03-02 PASS 17 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
