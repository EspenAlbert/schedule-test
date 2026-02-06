# cluster/cluster/TestAccCluster_basic_RedactClientLogData Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | flaky_500 | 10807.01s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 10807.03s
[2026-02-03 00:39](#error-2026-02-03t0039240000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143bee3c7fce2317e349a/clusters | dev | out_of_capacity | 8.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 23 minutes
- 2026-01-09 PASS 28 minutes
- 2026-01-10 PASS 22 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 23 minutes
- 2026-01-13 PASS 31 minutes
- 2026-01-14 PASS 25 minutes
- 2026-01-15 PASS 25 minutes
- 2026-01-16 PASS 29 minutes
- 2026-01-17 PASS 24 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 22 minutes
- 2026-01-20 PASS 22 minutes
- 2026-01-21 PASS 24 minutes
- 2026-01-22 PASS 24 minutes
- 2026-01-23 PASS 25 minutes
- 2026-01-24 PASS 22 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27 PASS 24 minutes
- 2026-01-28 PASS 24 minutes
- 2026-01-29 PASS 44 minutes
- 2026-01-30 PASS 31 minutes
- 2026-01-31

### Error 2026-01-31T00:35:14+00:00
```
2026-01-31T00:35:14.2397736Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-01-31T00:35:14.2500684Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-01-31T03:35:20.8423395Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-01-31T03:35:20.8424411Z     resource_cluster_test.go:1303: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:35:20.8425182Z         
2026-01-31T03:35:20.8426248Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:20.8427055Z         
2026-01-31T03:35:20.8427455Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:20.8428074Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:20.8428652Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:20.8429542Z         
2026-01-31T03:35:21.3506649Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-01-31T03:35:21.3507293Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-31T03:35:21.3507766Z         
2026-01-31T03:35:21.3508068Z         Error: error when destroying resource
2026-01-31T03:35:21.3508369Z         
2026-01-31T03:35:21.3508707Z         error deleting project (697d4e44ff188f1e45c4b617):
2026-01-31T03:35:21.3509309Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e44ff188f1e45c4b617
2026-01-31T03:35:21.3509820Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-31T03:35:21.3510380Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-31T03:35:21.3511037Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-31T03:35:21.3511519Z         Params: [], BadRequestDetail: 
2026-01-31T03:35:21.3511886Z --- FAIL: TestAccCluster_basic_RedactClientLogData (10807.10s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:37+00:00
```
2026-02-02T00:38:37.8802143Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-02T00:38:37.8813555Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-02T03:38:44.6330058Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-02T03:38:44.6330931Z     resource_cluster_test.go:1303: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:38:44.6331565Z         
2026-02-02T03:38:44.6332628Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:44.6333186Z         
2026-02-02T03:38:44.6333604Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:44.6334467Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:44.6335085Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:38:44.6335400Z         
2026-02-02T03:38:44.9768143Z    test_step_number=1 test_name=TestAccCluster_WithTags test_terraform_path=/home/runner/work/_temp/3d353ea1-6a07-441f-98c3-1c55053dc79f/terraform test_working_directory=/tmp/plugintest1470331716
2026-02-02T03:38:45.1462617Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-02T03:38:45.1463163Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-02T03:38:45.1463575Z         
2026-02-02T03:38:45.1464020Z         Error: error when destroying resource
2026-02-02T03:38:45.1464300Z         
2026-02-02T03:38:45.1464630Z         error deleting project (697ff20f71768356d7f84f20):
2026-02-02T03:38:45.1465167Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff20f71768356d7f84f20
2026-02-02T03:38:45.1465617Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-02T03:38:45.1466117Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-02-02T03:38:45.1466709Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-02-02T03:38:45.1467122Z         Params: [], BadRequestDetail: 
2026-02-02T03:38:45.1467728Z --- FAIL: TestAccCluster_basic_RedactClientLogData (10807.26s)
```

- 2026-02-03

### Error 2026-02-03T00:39:24+00:00
```
2026-02-03T00:39:24.5576106Z === RUN   TestAccCluster_basic_RedactClientLogData
2026-02-03T00:39:24.5585470Z === CONT  TestAccCluster_basic_RedactClientLogData
2026-02-03T00:39:31.9333074Z === NAME  TestAccCluster_basic_RedactClientLogData
2026-02-03T00:39:31.9334675Z     resource_cluster_test.go:1303: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:39:31.9335444Z         
2026-02-03T00:39:31.9337906Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143bee3c7fce2317e349a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:31.9339063Z         
2026-02-03T00:39:31.9339373Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:31.9339993Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:31.9340588Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:31.9340900Z         
2026-02-03T00:39:33.0557081Z --- FAIL: TestAccCluster_basic_RedactClientLogData (8.50s)
```

- 2026-02-04 PASS 23 minutes
- 2026-02-05 PASS 28 minutes
- 2026-02-06 PASS 26 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 23 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 25 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 22 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 22 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 23 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 24 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
