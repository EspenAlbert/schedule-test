# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | flaky_500 | 10807.03s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 10806.04s
[2026-02-03 00:39](#error-2026-02-03t0039240000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143beb2e54ee995907c26/clusters | dev | out_of_capacity | 7.03s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09 PASS 24 minutes
- 2026-01-10 PASS 19 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 21 minutes
- 2026-01-13 PASS 27 minutes
- 2026-01-14 PASS 20 minutes
- 2026-01-15 PASS 24 minutes
- 2026-01-16 PASS 25 minutes
- 2026-01-17 PASS 18 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 18 minutes
- 2026-01-20 PASS 21 minutes
- 2026-01-21 PASS 23 minutes
- 2026-01-22 PASS 19 minutes
- 2026-01-23 PASS 24 minutes
- 2026-01-24 PASS 17 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27 PASS 22 minutes
- 2026-01-28 PASS 20 minutes
- 2026-01-29 PASS 21 minutes
- 2026-01-30 PASS 28 minutes
- 2026-01-31

### Error 2026-01-31T00:35:14+00:00
```
2026-01-31T00:35:14.2399231Z === RUN   TestAccCluster_create_RedactClientLogData
2026-01-31T00:35:14.2507179Z === CONT  TestAccCluster_create_RedactClientLogData
2026-01-31T03:35:21.0301136Z === NAME  TestAccCluster_create_RedactClientLogData
2026-01-31T03:35:21.0302007Z     resource_cluster_test.go:1343: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:35:21.0302448Z         
2026-01-31T03:35:21.0303201Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:21.0304069Z         
2026-01-31T03:35:21.0304384Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:21.0305002Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:21.0305594Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:21.0306102Z         
2026-01-31T03:35:21.5401415Z === NAME  TestAccCluster_create_RedactClientLogData
2026-01-31T03:35:21.5402060Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-31T03:35:21.5402531Z         
2026-01-31T03:35:21.5402842Z         Error: error when destroying resource
2026-01-31T03:35:21.5403137Z         
2026-01-31T03:35:21.5403490Z         error deleting project (697d4e447d00588dcf9f11a8):
2026-01-31T03:35:21.5404086Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e447d00588dcf9f11a8
2026-01-31T03:35:21.5404594Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-31T03:35:21.5405145Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-31T03:35:21.5405987Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-31T03:35:21.5406471Z         Params: [], BadRequestDetail: 
2026-01-31T03:35:21.5406853Z --- FAIL: TestAccCluster_create_RedactClientLogData (10807.28s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:37+00:00
```
2026-02-02T00:38:37.8803277Z === RUN   TestAccCluster_create_RedactClientLogData
2026-02-02T00:38:37.8812337Z === CONT  TestAccCluster_create_RedactClientLogData
2026-02-02T03:38:43.7900260Z === NAME  TestAccCluster_create_RedactClientLogData
2026-02-02T03:38:43.7901061Z     resource_cluster_test.go:1343: Step 1/1 error: Error running apply: exit status 1
2026-02-02T03:38:43.7901646Z         
2026-02-02T03:38:43.7902842Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:43.7903655Z         
2026-02-02T03:38:43.7904192Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:43.7904751Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:43.7905337Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:38:43.7905767Z         
2026-02-02T03:38:44.2918730Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-02T03:38:44.2919151Z         
2026-02-02T03:38:44.2919437Z         Error: error when destroying resource
2026-02-02T03:38:44.2919707Z         
2026-02-02T03:38:44.2920037Z         error deleting project (697ff20f71768356d7f84e61):
2026-02-02T03:38:44.2920566Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff20f71768356d7f84e61
2026-02-02T03:38:44.2921023Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-02T03:38:44.2921524Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-02-02T03:38:44.2922105Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-02-02T03:38:44.2922522Z         Params: [], BadRequestDetail: 
2026-02-02T03:38:44.2922872Z --- FAIL: TestAccCluster_create_RedactClientLogData (10806.41s)
```

- 2026-02-03

### Error 2026-02-03T00:39:24+00:00
```
2026-02-03T00:39:24.5577870Z === RUN   TestAccCluster_create_RedactClientLogData
2026-02-03T00:39:24.5584359Z === CONT  TestAccCluster_create_RedactClientLogData
2026-02-03T00:39:30.9767817Z === NAME  TestAccCluster_create_RedactClientLogData
2026-02-03T00:39:30.9768812Z     resource_cluster_test.go:1343: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:39:30.9769392Z         
2026-02-03T00:39:30.9771245Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143beb2e54ee995907c26/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:30.9772457Z         
2026-02-03T00:39:30.9772756Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:30.9773556Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:30.9774141Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:30.9774440Z         
2026-02-03T00:39:31.8358233Z --- FAIL: TestAccCluster_create_RedactClientLogData (7.28s)
```

- 2026-02-04 PASS 21 minutes
- 2026-02-05 PASS 23 minutes
- 2026-02-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 16 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 19 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 17 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 16 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 19 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 20 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
