# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035100000) |  | dev | flaky_500 | 10810.04s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 10807.01s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143beb2e54ee995907b6c/clusters | dev | out_of_capacity | 8.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
- 2026-01-09 PASS 28 minutes
- 2026-01-10 PASS 22 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 23 minutes
- 2026-01-13 PASS 31 minutes
- 2026-01-14 PASS 27 minutes
- 2026-01-15 PASS 25 minutes
- 2026-01-16 PASS 28 minutes
- 2026-01-17 PASS 23 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 19 minutes
- 2026-01-20 PASS 25 minutes
- 2026-01-21 PASS 23 minutes
- 2026-01-22 PASS 24 minutes
- 2026-01-23 PASS 23 minutes
- 2026-01-24 PASS 21 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 23 minutes
- 2026-01-27 PASS 25 minutes
- 2026-01-28 PASS 25 minutes
- 2026-01-29 PASS 30 minutes
- 2026-01-30 PASS 32 minutes
- 2026-01-31

### Error 2026-01-31T00:35:10+00:00
```
2026-01-31T00:35:10.2864841Z === RUN   TestAccCluster_WithTags
2026-01-31T00:35:14.2410406Z === CONT  TestAccCluster_WithTags
2026-01-31T03:35:24.1124121Z === NAME  TestAccCluster_WithTags
2026-01-31T03:35:24.1125054Z     resource_cluster_test.go:696: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:35:24.1126045Z         
2026-01-31T03:35:24.1127447Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:24.1128291Z         
2026-01-31T03:35:24.1128749Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:24.1129753Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:24.1130415Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:24.1130770Z         
2026-01-31T03:35:24.6496137Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-31T03:35:24.6496637Z         
2026-01-31T03:35:24.6497126Z         Error: error when destroying resource
2026-01-31T03:35:24.6497430Z         
2026-01-31T03:35:24.6497791Z         error deleting project (697d4e44ff188f1e45c4b5cd):
2026-01-31T03:35:24.6498390Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e44ff188f1e45c4b5cd
2026-01-31T03:35:24.6498906Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-31T03:35:24.6499464Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-31T03:35:24.6500120Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-31T03:35:24.6500595Z         Params: [], BadRequestDetail: 
2026-01-31T03:35:24.6500911Z --- FAIL: TestAccCluster_WithTags (10810.41s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:37+00:00
```
2026-02-02T00:38:37.8784235Z === RUN   TestAccCluster_WithTags
2026-02-02T00:38:37.8826282Z === CONT  TestAccCluster_WithTags
2026-02-02T03:38:44.4531171Z === NAME  TestAccCluster_WithTags
2026-02-02T03:38:44.4531847Z     resource_cluster_test.go:696: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:38:44.4532446Z         
2026-02-02T03:38:44.4533217Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:44.4533798Z         
2026-02-02T03:38:44.4534296Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:44.4535137Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:44.4535745Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:38:44.4536080Z         
2026-02-02T03:38:44.9768882Z === NAME  TestAccCluster_WithTags
2026-02-02T03:38:44.9769394Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-02T03:38:44.9769820Z         
2026-02-02T03:38:44.9770101Z         Error: error when destroying resource
2026-02-02T03:38:44.9770367Z         
2026-02-02T03:38:44.9770682Z         error deleting project (697ff20f71768356d7f8529b):
2026-02-02T03:38:44.9771232Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff20f71768356d7f8529b
2026-02-02T03:38:44.9771698Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-02T03:38:44.9772200Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-02-02T03:38:44.9772774Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-02-02T03:38:44.9773279Z         Params: [], BadRequestDetail: 
2026-02-02T03:38:44.9773581Z --- FAIL: TestAccCluster_WithTags (10807.09s)
```

- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.2149175Z === RUN   TestAccCluster_WithTags
2026-02-03T00:39:24.5641055Z === CONT  TestAccCluster_WithTags
2026-02-03T00:39:32.3513484Z === NAME  TestAccCluster_WithTags
2026-02-03T00:39:32.3514295Z     resource_cluster_test.go:696: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:39:32.3514794Z         
2026-02-03T00:39:32.3516583Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143beb2e54ee995907b6c/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:32.3518235Z         
2026-02-03T00:39:32.3518558Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:32.3519186Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:32.3519764Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:32.3520070Z         
2026-02-03T00:39:33.1192203Z --- FAIL: TestAccCluster_WithTags (8.56s)
```

- 2026-02-04 PASS 23 minutes
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 26 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 25 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 21 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 22 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 25 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 26 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
