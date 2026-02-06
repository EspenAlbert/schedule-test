# cluster/cluster/TestAccCluster_basic_DefaultWriteRead_AdvancedConf Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035070000) |  | dev | timeout | 10831.00s
[2026-02-02 00:38](#error-2026-02-02t0038320000) |  | dev | timeout | 10820.09s
[2026-02-03 00:39](#error-2026-02-03t0039180000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters | dev | out_of_capacity | 25.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09 PASS 25 minutes
- 2026-01-10 PASS 18 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 20 minutes
- 2026-01-13 PASS 28 minutes
- 2026-01-14 PASS 22 minutes
- 2026-01-15 PASS 25 minutes
- 2026-01-16 PASS 26 minutes
- 2026-01-17 PASS 18 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 17 minutes
- 2026-01-20 PASS 22 minutes
- 2026-01-21 PASS 23 minutes
- 2026-01-22 PASS 21 minutes
- 2026-01-23 PASS 22 minutes
- 2026-01-24 PASS 21 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27 PASS 20 minutes
- 2026-01-28 PASS 22 minutes
- 2026-01-29 PASS 28 minutes
- 2026-01-30 PASS 28 minutes
- 2026-01-31

### Error 2026-01-31T00:35:07+00:00
```
2026-01-31T00:35:07.5179690Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-01-31T00:35:14.2434910Z === CONT  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-01-31T00:35:44.2473310Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-01-31T00:35:44.2475032Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:44.24705373Z, ProjectID: 697d4e39ff188f1e45c42165, Cluster name: test-acc-tf-c-1576479793809191990
2026-01-31T03:35:45.2164310Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-01-31T03:35:45.2165395Z     resource_cluster_test.go:219: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:35:45.2166379Z         
2026-01-31T03:35:45.2167701Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:45.2168757Z         
2026-01-31T03:35:45.2169263Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:45.2170319Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:45.2171308Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:45.2171828Z         
2026-01-31T03:35:45.2676025Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (10831.02s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:32+00:00
```
2026-02-02T00:38:32.4173701Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-02T00:38:37.8812938Z === CONT  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-02T00:38:57.8867673Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-02T00:38:57.8868790Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:57.88640849Z, ProjectID: 697ff20571768356d7f7d653, Cluster name: test-acc-tf-c-8602196522812445762
2026-02-02T03:38:58.7651687Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-02T03:38:58.7652456Z     resource_cluster_test.go:219: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:38:58.7652899Z         
2026-02-02T03:38:58.7655509Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:58.7656444Z         
2026-02-02T03:38:58.7656893Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:58.7657902Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:58.7658961Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:38:58.7659525Z         
2026-02-02T03:38:58.8128667Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (10820.93s)
```

- 2026-02-03

### Error 2026-02-03T00:39:18+00:00
```
2026-02-03T00:39:18.5532305Z === RUN   TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-03T00:39:24.5622286Z === CONT  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-03T00:39:49.5647315Z === NAME  TestAccCluster_basic_DefaultWriteRead_AdvancedConf
2026-02-03T00:39:49.5649160Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:49.564428506Z, ProjectID: 698143b4e3c7fce2317dca6a, Cluster name: test-acc-tf-c-8860540052961734531
2026-02-03T00:39:50.3016975Z    test_name=TestAccCluster_basic_DefaultWriteRead_AdvancedConf test_terraform_path=/home/runner/work/_temp/c1b3bf8f-1066-43a0-90d3-e6f3bed97ca1/terraform
2026-02-03T00:39:50.3018600Z     resource_cluster_test.go:219: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:39:50.3019394Z         
2026-02-03T00:39:50.3021119Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:50.3022235Z         
2026-02-03T00:39:50.3022663Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:50.3023687Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:50.3024404Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:50.3024715Z         
2026-02-03T00:39:50.3550627Z --- FAIL: TestAccCluster_basic_DefaultWriteRead_AdvancedConf (25.79s)
```

- 2026-02-04 PASS 33 minutes
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
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
- 2026-01-22 PASS 17 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 18 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 21 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
