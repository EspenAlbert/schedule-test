# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035140000) |  | dev | timeout | 10841.01s
[2026-02-02 00:38](#error-2026-02-02t0038370000) |  | dev | timeout | 10841.00s
[2026-02-03 00:39](#error-2026-02-03t0039240000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b9e3c7fce2317e1081/clusters | dev | out_of_capacity | 45.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
- 2026-01-09 PASS 31 minutes
- 2026-01-10 PASS 26 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 30 minutes
- 2026-01-13 PASS 33 minutes
- 2026-01-14 PASS 29 minutes
- 2026-01-15 PASS 28 minutes
- 2026-01-16 PASS 28 minutes
- 2026-01-17 PASS 24 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 23 minutes
- 2026-01-20 PASS 26 minutes
- 2026-01-21 PASS 30 minutes
- 2026-01-22 PASS 31 minutes
- 2026-01-23 PASS 30 minutes
- 2026-01-24 PASS 22 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 24 minutes
- 2026-01-27 PASS 25 minutes
- 2026-01-28 PASS 26 minutes
- 2026-01-29 PASS 34 minutes
- 2026-01-30 PASS 34 minutes
- 2026-01-31

### Error 2026-01-31T00:35:14+00:00
```
2026-01-31T00:35:14.2396119Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-01-31T00:35:14.2503396Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-01-31T00:35:54.2483211Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-01-31T00:35:54.2485303Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:54.248017729Z, ProjectID: 697d4e3eff188f1e45c4593f, Cluster name: test-acc-tf-c-8272231104395646266
2026-01-31T03:35:55.2932008Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-01-31T03:35:55.2932899Z     resource_cluster_test.go:1261: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:35:55.2933356Z         
2026-01-31T03:35:55.2934640Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:55.2935377Z         
2026-01-31T03:35:55.2936074Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:55.2936792Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:55.2937611Z           12: resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:55.2938049Z         
2026-01-31T03:35:55.3410710Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (10841.09s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:37+00:00
```
2026-02-02T00:38:37.8801101Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-02-02T00:38:37.8821876Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-02-02T00:39:17.8966015Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-02-02T00:39:17.8967475Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:39:17.8962817Z, ProjectID: 697ff20a71768356d7f820d7, Cluster name: test-acc-tf-c-4368289932869962304
2026-02-02T03:39:18.8271330Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-02-02T03:39:18.8272222Z     resource_cluster_test.go:1261: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:39:18.8272856Z         
2026-02-02T03:39:18.8273779Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:39:18.8274556Z         
2026-02-02T03:39:18.8274831Z           with mongodbatlas_cluster.test,
2026-02-02T03:39:18.8275601Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:39:18.8276134Z           12: resource "mongodbatlas_cluster" "test" {
2026-02-02T03:39:18.8276405Z         
2026-02-02T03:39:18.8784122Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (10841.00s)
```

- 2026-02-03

### Error 2026-02-03T00:39:24+00:00
```
2026-02-03T00:39:24.5574322Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-02-03T00:39:24.5734041Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-02-03T00:40:09.5751778Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-02-03T00:40:09.5753406Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:40:09.574863067Z, ProjectID: 698143b9e3c7fce2317e1081, Cluster name: test-acc-tf-c-1561517536119588959
2026-02-03T00:40:10.3062755Z    test_name=TestAccCluster_basicAWS_PausedToUnpaused test_terraform_path=/home/runner/work/_temp/c1b3bf8f-1066-43a0-90d3-e6f3bed97ca1/terraform test_working_directory=/tmp/plugintest2798433902
2026-02-03T00:40:10.3064906Z     resource_cluster_test.go:1261: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:10.3065665Z         
2026-02-03T00:40:10.3068286Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b9e3c7fce2317e1081/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:40:10.3070105Z         
2026-02-03T00:40:10.3070621Z           with mongodbatlas_cluster.test,
2026-02-03T00:40:10.3071695Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:40:10.3072658Z           12: resource "mongodbatlas_cluster" "test" {
2026-02-03T00:40:10.3073163Z         
2026-02-03T00:40:10.3569691Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (45.79s)
```

- 2026-02-04 PASS 23 minutes
- 2026-02-05 PASS 28 minutes
- 2026-02-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 28 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 23 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 23 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 27 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 31 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 23 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
