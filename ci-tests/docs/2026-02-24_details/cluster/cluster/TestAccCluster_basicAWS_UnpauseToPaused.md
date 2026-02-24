# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | timeout | 10816.00s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 10845.09s
[2026-02-03 00:39](#error-2026-02-03t0039240000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b9e3c7fce2317e1081/clusters | dev | out_of_capacity | 40.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 23 minutes
- 2026-01-27 PASS 25 minutes
- 2026-01-28 PASS 24 minutes
- 2026-01-29 PASS 28 minutes
- 2026-01-30 PASS 34 minutes
- 2026-01-31

### Error 2026-01-31T00:35:14+00:00
```
2026-01-31T00:35:14.2393634Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-01-31T00:35:14.2410974Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2026-01-31T00:35:29.2432229Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-01-31T00:35:29.2434323Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:29.242935362Z, ProjectID: 697d4e3eff188f1e45c4593f, Cluster name: test-acc-tf-c-1433854199778461805
2026-01-31T03:35:30.1947281Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-01-31T03:35:30.1948037Z     resource_cluster_test.go:1222: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:35:30.1948474Z         
2026-01-31T03:35:30.1949609Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:30.1950292Z         
2026-01-31T03:35:30.1950624Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:30.1951362Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:30.1952069Z           12: resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:30.1952480Z         
2026-01-31T03:35:30.2394822Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (10816.00s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:37+00:00
```
2026-02-02T00:38:37.8800039Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-02-02T00:38:37.8822508Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2026-02-02T00:39:22.8992465Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-02-02T00:39:22.8993363Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:39:22.899009816Z, ProjectID: 697ff20a71768356d7f820d7, Cluster name: test-acc-tf-c-6889801411149715685
2026-02-02T03:39:23.7704066Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-02-02T03:39:23.7704873Z     resource_cluster_test.go:1222: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:39:23.7705397Z         
2026-02-02T03:39:23.7706190Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:39:23.7706993Z         
2026-02-02T03:39:23.7707310Z           with mongodbatlas_cluster.test,
2026-02-02T03:39:23.7707872Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:39:23.7708382Z           12: resource "mongodbatlas_cluster" "test" {
2026-02-02T03:39:23.7708670Z         
2026-02-02T03:39:23.8173276Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (10845.94s)
```

- 2026-02-03

### Error 2026-02-03T00:39:24+00:00
```
2026-02-03T00:39:24.5572104Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-02-03T00:39:24.5733108Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2026-02-03T00:40:04.5717044Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-02-03T00:40:04.5718599Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:40:04.571401568Z, ProjectID: 698143b9e3c7fce2317e1081, Cluster name: test-acc-tf-c-5704319992621421435
2026-02-03T00:40:05.2711554Z    test_step_number=1 test_name=TestAccCluster_basicAWS_UnpauseToPaused test_terraform_path=/home/runner/work/_temp/c1b3bf8f-1066-43a0-90d3-e6f3bed97ca1/terraform
2026-02-03T00:40:05.2713341Z     resource_cluster_test.go:1222: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:40:05.2713900Z         
2026-02-03T00:40:05.2715493Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b9e3c7fce2317e1081/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:40:05.2716666Z         
2026-02-03T00:40:05.2716974Z           with mongodbatlas_cluster.test,
2026-02-03T00:40:05.2717601Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:40:05.2718171Z           12: resource "mongodbatlas_cluster" "test" {
2026-02-03T00:40:05.2718735Z         
2026-02-03T00:40:05.3205375Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (40.76s)
```

- 2026-02-04 PASS 20 minutes
- 2026-02-05 PASS 26 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 22 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 28 minutes
- 2026-02-10 PASS 23 minutes
- 2026-02-11 PASS 20 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13 PASS 24 minutes
- 2026-02-14 PASS 20 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 23 minutes
- 2026-02-17 PASS 38 minutes
- 2026-02-18 PASS 24 minutes
- 2026-02-19 PASS 40 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 22 minutes
- 2026-02-24 PASS 25 minutes

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
- 2026-02-04 PASS 19 minutes
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
- 2026-02-15 PASS 28 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 20 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 24 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
