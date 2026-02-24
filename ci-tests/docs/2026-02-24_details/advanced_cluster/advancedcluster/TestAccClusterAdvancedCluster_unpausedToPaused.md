# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035220000) |  | dev | timeout | 10825.08s
[2026-02-02 00:38](#error-2026-02-02t0038510000) |  | dev | timeout | 10845.07s
[2026-02-03 00:39](#error-2026-02-03t0039330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters | dev | out_of_capacity | 35.08s
[2026-02-21 00:37](#error-2026-02-21t0037010000) |  | dev | flaky_500 | 1313.02s
[2026-02-24 00:37](#error-2026-02-24t0037080000) |  | dev | flaky_500 | 1239.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 22 minutes
- 2026-01-27 PASS 24 minutes
- 2026-01-28 PASS 25 minutes
- 2026-01-29 PASS 31 minutes
- 2026-01-30 PASS 38 minutes
- 2026-01-31

### Error 2026-01-31T00:35:22+00:00
```
2026-01-31T00:35:22.4150218Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-31T00:36:56.1507230Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-31T00:37:21.1484494Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-31T00:37:21.1486227Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:21.148219971Z, ProjectID: 697d4e477d00588dcf9f3a06, Cluster name: test-acc-tf-c-5925448429234336201
2026-01-31T03:37:21.8389723Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-31T03:37:21.8390704Z     resource_test.go:194: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:21.8391706Z         
2026-01-31T03:37:21.8392107Z         Error: Error in create
2026-01-31T03:37:21.8392386Z         
2026-01-31T03:37:21.8392733Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:21.8393427Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:21.8396380Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:21.8396738Z         
2026-01-31T03:37:21.8397220Z         cluster=test-acc-tf-c-5925448429234336201 didn't reach desired state: IDLE,
2026-01-31T03:37:21.8397723Z         error: context deadline exceeded
2026-01-31T03:37:21.8956296Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10825.75s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:51+00:00
```
2026-02-02T00:38:51.9704186Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-02T00:40:19.9757218Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-02T00:41:04.9223766Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-02T00:41:04.9226759Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:41:04.921981608Z, ProjectID: 697ff219197cc66080b0f49b, Cluster name: test-acc-tf-c-3575383585798400638
2026-02-02T03:41:05.5358389Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-02T03:41:05.5359245Z     resource_test.go:194: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:41:05.5359817Z         
2026-02-02T03:41:05.5360284Z         Error: Error in create
2026-02-02T03:41:05.5360643Z         
2026-02-02T03:41:05.5361169Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:41:05.5362525Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:41:05.5363496Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:41:05.5363901Z         
2026-02-02T03:41:05.5364480Z         cluster=test-acc-tf-c-3575383585798400638 didn't reach desired state: IDLE,
2026-02-02T03:41:05.5365081Z         error: context deadline exceeded
2026-02-02T03:41:05.5884357Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (10845.65s)
```

- 2026-02-03

### Error 2026-02-03T00:39:33+00:00
```
2026-02-03T00:39:33.6357313Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-03T00:42:03.6225877Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-03T00:42:38.6560820Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-02-03T00:42:38.6562331Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:38.655721122Z, ProjectID: 698143c2b2e54ee995909f8a, Cluster name: test-acc-tf-c-7926079029766337492
2026-02-03T00:42:39.3947656Z    test_working_directory=/tmp/plugintest1778102371 test_step_number=1 test_name=TestAccClusterAdvancedCluster_unpausedToPaused test_terraform_path=/home/runner/work/_temp/1396652e-b654-4378-a4d9-60ca59d3b556/terraform
2026-02-03T00:42:39.3948998Z     resource_test.go:194: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:39.3949415Z         
2026-02-03T00:42:39.3949729Z         Error: Error in create
2026-02-03T00:42:39.3950434Z         
2026-02-03T00:42:39.3950867Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:39.3951744Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:39.3952412Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:39.3952729Z         
2026-02-03T00:42:39.3953217Z         cluster name: test-acc-tf-c-7926079029766337492, API error details:
2026-02-03T00:42:39.3953965Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters
2026-02-03T00:42:39.3954710Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:39.3955422Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:39.3955919Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:39.4510263Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (35.84s)
```

- 2026-02-04 PASS 34 minutes
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


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 22 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
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
