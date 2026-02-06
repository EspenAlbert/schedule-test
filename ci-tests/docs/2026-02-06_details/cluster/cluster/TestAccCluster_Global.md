# cluster/cluster/TestAccCluster_Global Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035100000) |  | dev | timeout | 10802.08s
[2026-02-02 00:38](#error-2026-02-02t0038340000) |  | dev | timeout | 10802.06s
[2026-02-03 00:39](#error-2026-02-03t0039210000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b6e3c7fce2317df7df/clusters | dev | out_of_capacity | 2.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
- 2026-01-09 PASS 23 minutes
- 2026-01-10 PASS 17 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 18 minutes
- 2026-01-13 PASS 27 minutes
- 2026-01-14 PASS 20 minutes
- 2026-01-15 PASS 22 minutes
- 2026-01-16 PASS 21 minutes
- 2026-01-17 PASS 20 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 17 minutes
- 2026-01-20 PASS 18 minutes
- 2026-01-21 PASS 20 minutes
- 2026-01-22 PASS 20 minutes
- 2026-01-23 PASS 23 minutes
- 2026-01-24 PASS 17 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 19 minutes
- 2026-01-28 PASS 17 minutes
- 2026-01-29 PASS 25 minutes
- 2026-01-30 PASS 27 minutes
- 2026-01-31

### Error 2026-01-31T00:35:10+00:00
```
2026-01-31T00:35:10.2857562Z === RUN   TestAccCluster_Global
2026-01-31T00:35:14.2409878Z === CONT  TestAccCluster_Global
2026-01-31T03:35:16.9942519Z === NAME  TestAccCluster_Global
2026-01-31T03:35:16.9943253Z     resource_cluster_test.go:589: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:35:16.9943874Z         
2026-01-31T03:35:16.9944816Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:16.9945541Z         
2026-01-31T03:35:16.9946069Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:16.9947032Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:16.9947810Z           12: 		resource "mongodbatlas_cluster" test {
2026-01-31T03:35:16.9948263Z         
2026-01-31T03:35:17.0417184Z --- FAIL: TestAccCluster_Global (10802.80s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:34+00:00
```
2026-02-02T00:38:34.8399556Z === RUN   TestAccCluster_Global
2026-02-02T00:38:37.8806590Z === CONT  TestAccCluster_Global
2026-02-02T03:38:40.4509476Z === NAME  TestAccCluster_Global
2026-02-02T03:38:40.4510219Z     resource_cluster_test.go:589: Step 1/1 error: Error running apply: exit status 1
2026-02-02T03:38:40.4510847Z         
2026-02-02T03:38:40.4512184Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:40.4513247Z         
2026-02-02T03:38:40.4513765Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:40.4514843Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:40.4515725Z           12: 		resource "mongodbatlas_cluster" test {
2026-02-02T03:38:40.4516185Z         
2026-02-02T03:38:40.5111081Z --- FAIL: TestAccCluster_Global (10802.63s)
```

- 2026-02-03

### Error 2026-02-03T00:39:21+00:00
```
2026-02-03T00:39:21.2146897Z === RUN   TestAccCluster_Global
2026-02-03T00:39:24.5582343Z === CONT  TestAccCluster_Global
2026-02-03T00:39:26.6735095Z === NAME  TestAccCluster_Global
2026-02-03T00:39:26.6735784Z     resource_cluster_test.go:589: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:39:26.6736301Z         
2026-02-03T00:39:26.6737929Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b6e3c7fce2317df7df/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:26.6739386Z         
2026-02-03T00:39:26.6739695Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:26.6740448Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:26.6741147Z           12: 		resource "mongodbatlas_cluster" test {
2026-02-03T00:39:26.6741538Z         
2026-02-03T00:39:26.7258100Z --- FAIL: TestAccCluster_Global (2.17s)
```

- 2026-02-04 PASS 34 minutes
- 2026-02-05 PASS 37 minutes
- 2026-02-06 PASS 40 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 18 minutes
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
- 2026-01-22 PASS 21 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 17 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 19 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
