# cluster/cluster/TestAccCluster_basicAWS_simple Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035050000) |  | dev | timeout | 10808.03s
[2026-02-02 00:38](#error-2026-02-02t0038320000) |  | dev | timeout | 10830.09s
[2026-02-03 00:39](#error-2026-02-03t0039160000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters | dev | out_of_capacity | 8.00s
[2026-02-24 00:36](#error-2026-02-24t0036530000) | Step 1 1 | dev | flaky_500 | 1012.09s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 16 minutes
- 2026-01-27 PASS 19 minutes
- 2026-01-28 PASS 19 minutes
- 2026-01-29 PASS 28 minutes
- 2026-01-30 PASS 27 minutes
- 2026-01-31

### Error 2026-01-31T00:35:05+00:00
```
2026-01-31T00:35:05.2317079Z === RUN   TestAccCluster_basicAWS_simple
2026-01-31T00:35:14.2402708Z === CONT  TestAccCluster_basicAWS_simple
2026-01-31T00:35:19.2400706Z === NAME  TestAccCluster_basicAWS_simple
2026-01-31T00:35:19.2402536Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:19.239740933Z, ProjectID: 697d4e39ff188f1e45c42165, Cluster name: test-acc-tf-c-7869935687216016234
2026-01-31T03:35:20.2209665Z === NAME  TestAccCluster_basicAWS_simple
2026-01-31T03:35:20.2210830Z     resource_cluster_test.go:28: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:35:20.2211553Z         
2026-01-31T03:35:20.2212809Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:20.2213762Z         
2026-01-31T03:35:20.2214280Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:20.2215189Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:20.2216073Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:20.2216398Z         
2026-01-31T03:35:20.2651883Z --- FAIL: TestAccCluster_basicAWS_simple (10808.31s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:32+00:00
```
2026-02-02T00:38:32.4171544Z === RUN   TestAccCluster_basicAWS_simple
2026-02-02T00:38:37.8814741Z === CONT  TestAccCluster_basicAWS_simple
2026-02-02T00:39:07.8913668Z === NAME  TestAccCluster_basicAWS_simple
2026-02-02T00:39:07.8916007Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:39:07.891116981Z, ProjectID: 697ff20571768356d7f7d653, Cluster name: test-acc-tf-c-1634881037119535582
2026-02-02T03:39:08.7879305Z === NAME  TestAccCluster_basicAWS_simple
2026-02-02T03:39:08.7879836Z     resource_cluster_test.go:28: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:39:08.7880302Z         
2026-02-02T03:39:08.7881264Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:39:08.7882056Z         
2026-02-02T03:39:08.7882513Z           with mongodbatlas_cluster.test,
2026-02-02T03:39:08.7883513Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:39:08.7884560Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:39:08.7884992Z         
2026-02-02T03:39:08.8356597Z --- FAIL: TestAccCluster_basicAWS_simple (10830.95s)
```

- 2026-02-03

### Error 2026-02-03T00:39:16+00:00
```
2026-02-03T00:39:16.3085999Z === RUN   TestAccCluster_basicAWS_simple
2026-02-03T00:39:24.5581342Z === CONT  TestAccCluster_basicAWS_simple
2026-02-03T00:39:29.5576130Z === NAME  TestAccCluster_basicAWS_simple
2026-02-03T00:39:29.5577786Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:29.557258901Z, ProjectID: 698143b4e3c7fce2317dca6a, Cluster name: test-acc-tf-c-4414031300609730820
2026-02-03T00:39:30.2774716Z    test_working_directory=/tmp/plugintest2764110920 test_step_number=1 test_name=TestAccCluster_basicAWS_simple test_terraform_path=/home/runner/work/_temp/c1b3bf8f-1066-43a0-90d3-e6f3bed97ca1/terraform
2026-02-03T00:39:30.2776064Z     resource_cluster_test.go:28: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:39:30.2776497Z         
2026-02-03T00:39:30.2778084Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:30.2779351Z         
2026-02-03T00:39:30.2779655Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:30.2780278Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:30.2780862Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:30.2781167Z         
2026-02-03T00:39:30.3264755Z --- FAIL: TestAccCluster_basicAWS_simple (8.01s)
```

- 2026-02-04 PASS 31 minutes
- 2026-02-05 PASS 21 minutes
- 2026-02-06 PASS 20 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 25 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 21 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 18 minutes
- 2026-02-18 PASS 19 minutes
- 2026-02-19 PASS 34 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:36:53+00:00
```
2026-02-24T00:36:53.0847024Z === RUN   TestAccCluster_basicAWS_simple
2026-02-24T00:37:02.7162749Z === CONT  TestAccCluster_basicAWS_simple
2026-02-24T00:37:07.7178066Z === NAME  TestAccCluster_basicAWS_simple
2026-02-24T00:37:07.7179452Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:07.717519208Z, ProjectID: 699cf2a5ae2412ce62117913, Cluster name: test-acc-tf-c-6766245648344357440
2026-02-24T00:50:43.1355391Z === NAME  TestAccCluster_basicAWS_simple
2026-02-24T00:50:43.1357753Z     resource_cluster_test.go:28: Step 1/3 error: Check failed: Check 1/16 error: cluster(699cf2a5ae2412ce62117913:test-acc-tf-c-6766245648344357440) does not exist: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:51:49.7777690Z    test_name=TestAccCluster_basicAWS_PausedToUnpaused test_terraform_path=/home/runner/work/_temp/5202aa85-26bc-4031-8145-a87a186217d7/terraform test_working_directory=/tmp/plugintest2304670775 test_step_number=1
2026-02-24T00:53:52.8771719Z --- FAIL: TestAccCluster_basicAWS_simple (1012.87s)
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
- 2026-02-01 PASS 20 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 23 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 23 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 22 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 18 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
