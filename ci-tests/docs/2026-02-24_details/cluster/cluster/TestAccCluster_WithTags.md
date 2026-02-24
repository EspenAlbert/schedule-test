# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035100000) |  | dev | flaky_500 | 10810.04s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 10807.01s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143beb2e54ee995907b6c/clusters | dev | out_of_capacity | 8.06s
[2026-02-24 00:36](#error-2026-02-24t0036580000) |  | dev | flaky_500 | 1489.04s

### Timeline
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
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 23 minutes
- 2026-02-11 PASS 27 minutes
- 2026-02-12 PASS 25 minutes
- 2026-02-13 PASS 24 minutes
- 2026-02-14 PASS 24 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 25 minutes
- 2026-02-17 PASS 25 minutes
- 2026-02-18 PASS 26 minutes
- 2026-02-19 PASS 37 minutes
- 2026-02-20 PASS 26 minutes
- 2026-02-21 PASS 23 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 26 minutes
- 2026-02-24

### Error 2026-02-24T00:36:58+00:00
```
2026-02-24T00:36:58.8950192Z === RUN   TestAccCluster_WithTags
2026-02-24T00:37:02.7272796Z === CONT  TestAccCluster_WithTags
2026-02-24T00:37:04.9746922Z    test_name=TestAccCluster_basicAzure test_terraform_path=/home/runner/work/_temp/5202aa85-26bc-4031-8145-a87a186217d7/terraform test_step_number=1
2026-02-24T00:57:35.0205962Z === NAME  TestAccCluster_WithTags
2026-02-24T00:57:35.0206566Z     resource_cluster_test.go:696: Step 2/3 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:57:35.0207357Z         
2026-02-24T00:57:35.0208660Z         Error: error reading Advanced Configuration Option  for MongoDB Cluster (test-acc-tf-c-5689539952620223111): (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:35.0209455Z         
2026-02-24T00:57:35.0209738Z           with mongodbatlas_cluster.test,
2026-02-24T00:57:35.0210333Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-24T00:57:35.0210900Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-24T00:57:35.0211192Z         
2026-02-24T01:01:52.1630393Z --- FAIL: TestAccCluster_WithTags (1489.44s)
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
- 2026-02-01 PASS 26 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 22 minutes
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
- 2026-02-15 PASS 27 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 23 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 25 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
