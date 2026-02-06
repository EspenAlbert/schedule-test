# cluster/cluster/TestAccCluster_partial_advancedConf Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035070000) |  | dev | timeout | 10835.10s
[2026-02-02 00:38](#error-2026-02-02t0038320000) |  | dev | timeout | 10825.10s
[2026-02-03 00:39](#error-2026-02-03t0039180000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters | dev | out_of_capacity | 30.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09 PASS 23 minutes
- 2026-01-10 PASS 18 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 21 minutes
- 2026-01-13 PASS 27 minutes
- 2026-01-14 PASS 21 minutes
- 2026-01-15 PASS 24 minutes
- 2026-01-16 PASS 25 minutes
- 2026-01-17 PASS 18 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 21 minutes
- 2026-01-20 PASS 22 minutes
- 2026-01-21 PASS 19 minutes
- 2026-01-22 PASS 20 minutes
- 2026-01-23 PASS 23 minutes
- 2026-01-24 PASS 21 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 18 minutes
- 2026-01-27 PASS 19 minutes
- 2026-01-28 PASS 21 minutes
- 2026-01-29 PASS 26 minutes
- 2026-01-30 PASS 27 minutes
- 2026-01-31

### Error 2026-01-31T00:35:07+00:00
```
2026-01-31T00:35:07.5176217Z === RUN   TestAccCluster_partial_advancedConf
2026-01-31T00:35:14.2499645Z === CONT  TestAccCluster_partial_advancedConf
2026-01-31T00:35:49.2481380Z === NAME  TestAccCluster_partial_advancedConf
2026-01-31T00:35:49.2483171Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:49.247838038Z, ProjectID: 697d4e39ff188f1e45c42165, Cluster name: test-acc-tf-c-3324319120866420729
2026-01-31T03:35:50.1901643Z === NAME  TestAccCluster_partial_advancedConf
2026-01-31T03:35:50.1902293Z     resource_cluster_test.go:82: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:35:50.1903005Z         
2026-01-31T03:35:50.1904245Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:50.1905282Z         
2026-01-31T03:35:50.1905991Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:50.1907084Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:50.1908097Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:50.1908653Z         
2026-01-31T03:35:50.2379125Z --- FAIL: TestAccCluster_partial_advancedConf (10835.99s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:32+00:00
```
2026-02-02T00:38:32.4172682Z === RUN   TestAccCluster_partial_advancedConf
2026-02-02T00:38:37.8814219Z === CONT  TestAccCluster_partial_advancedConf
2026-02-02T00:39:02.8891783Z === NAME  TestAccCluster_partial_advancedConf
2026-02-02T00:39:02.8892854Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:39:02.888811731Z, ProjectID: 697ff20571768356d7f7d653, Cluster name: test-acc-tf-c-8827499296627433074
2026-02-02T03:39:03.8059799Z === NAME  TestAccCluster_partial_advancedConf
2026-02-02T03:39:03.8060397Z     resource_cluster_test.go:82: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:39:03.8060925Z         
2026-02-02T03:39:03.8061766Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:39:03.8062379Z         
2026-02-02T03:39:03.8062692Z           with mongodbatlas_cluster.test,
2026-02-02T03:39:03.8063275Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:39:03.8063989Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:39:03.8064293Z         
2026-02-02T03:39:03.8549085Z --- FAIL: TestAccCluster_partial_advancedConf (10825.97s)
```

- 2026-02-03

### Error 2026-02-03T00:39:18+00:00
```
2026-02-03T00:39:18.5531074Z === RUN   TestAccCluster_partial_advancedConf
2026-02-03T00:39:24.5623563Z === CONT  TestAccCluster_partial_advancedConf
2026-02-03T00:39:54.5649371Z === NAME  TestAccCluster_partial_advancedConf
2026-02-03T00:39:54.5651187Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:54.564658717Z, ProjectID: 698143b4e3c7fce2317dca6a, Cluster name: test-acc-tf-c-6332793466524123320
2026-02-03T00:39:55.2790815Z   
2026-02-03T00:39:55.2791559Z     resource_cluster_test.go:82: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:39:55.2792094Z         
2026-02-03T00:39:55.2793720Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:55.2794851Z         
2026-02-03T00:39:55.2795158Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:55.2795781Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:55.2796375Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:55.2796680Z         
2026-02-03T00:39:55.3249955Z --- FAIL: TestAccCluster_partial_advancedConf (30.76s)
```

- 2026-02-04 PASS 32 minutes
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 20 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 20 minutes
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
- 2026-01-22 PASS 17 minutes
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
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
