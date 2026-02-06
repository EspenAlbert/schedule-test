# cluster/cluster/TestAccCluster_emptyAdvancedConf Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035070000) |  | dev | timeout | 10825.09s
[2026-02-02 00:38](#error-2026-02-02t0038320000) |  | dev | timeout | 10815.09s
[2026-02-03 00:39](#error-2026-02-03t0039180000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters | dev | out_of_capacity | 20.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09 PASS 25 minutes
- 2026-01-10 PASS 18 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 19 minutes
- 2026-01-13 PASS 27 minutes
- 2026-01-14 PASS 19 minutes
- 2026-01-15 PASS 24 minutes
- 2026-01-16 PASS 25 minutes
- 2026-01-17 PASS 20 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 17 minutes
- 2026-01-20 PASS 21 minutes
- 2026-01-21 PASS 19 minutes
- 2026-01-22 PASS 21 minutes
- 2026-01-23 PASS 22 minutes
- 2026-01-24 PASS 19 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 22 minutes
- 2026-01-28 PASS 21 minutes
- 2026-01-29 PASS 25 minutes
- 2026-01-30 PASS 28 minutes
- 2026-01-31

### Error 2026-01-31T00:35:07+00:00
```
2026-01-31T00:35:07.5181909Z === RUN   TestAccCluster_emptyAdvancedConf
2026-01-31T00:35:14.2434086Z === CONT  TestAccCluster_emptyAdvancedConf
2026-01-31T00:35:39.2462305Z === NAME  TestAccCluster_emptyAdvancedConf
2026-01-31T00:35:39.2464591Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:39.245926119Z, ProjectID: 697d4e39ff188f1e45c42165, Cluster name: test-acc-tf-c-6537384272791552634
2026-01-31T03:35:40.1477223Z === NAME  TestAccCluster_emptyAdvancedConf
2026-01-31T03:35:40.1477969Z     resource_cluster_test.go:224: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:35:40.1478505Z         
2026-01-31T03:35:40.1479502Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:35:40.1480209Z         
2026-01-31T03:35:40.1480621Z           with mongodbatlas_cluster.test,
2026-01-31T03:35:40.1481268Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-31T03:35:40.1481957Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-01-31T03:35:40.1482445Z         
2026-01-31T03:35:40.1918896Z --- FAIL: TestAccCluster_emptyAdvancedConf (10825.95s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:32+00:00
```
2026-02-02T00:38:32.4175085Z === RUN   TestAccCluster_emptyAdvancedConf
2026-02-02T00:38:37.8811806Z === CONT  TestAccCluster_emptyAdvancedConf
2026-02-02T00:38:52.8846404Z === NAME  TestAccCluster_emptyAdvancedConf
2026-02-02T00:38:52.8848180Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:52.884357349Z, ProjectID: 697ff20571768356d7f7d653, Cluster name: test-acc-tf-c-6649121019827420625
2026-02-02T03:38:53.7762952Z === NAME  TestAccCluster_emptyAdvancedConf
2026-02-02T03:38:53.7763753Z     resource_cluster_test.go:224: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:38:53.7764505Z         
2026-02-02T03:38:53.7765733Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:53.7766698Z         
2026-02-02T03:38:53.7767181Z           with mongodbatlas_cluster.test,
2026-02-02T03:38:53.7768227Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-02T03:38:53.7769198Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-02T03:38:53.7769707Z         
2026-02-02T03:38:53.8255130Z --- FAIL: TestAccCluster_emptyAdvancedConf (10815.95s)
```

- 2026-02-03

### Error 2026-02-03T00:39:18+00:00
```
2026-02-03T00:39:18.5535787Z === RUN   TestAccCluster_emptyAdvancedConf
2026-02-03T00:39:24.5621112Z === CONT  TestAccCluster_emptyAdvancedConf
2026-02-03T00:39:44.5635926Z === NAME  TestAccCluster_emptyAdvancedConf
2026-02-03T00:39:44.5637271Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:44.563302221Z, ProjectID: 698143b4e3c7fce2317dca6a, Cluster name: test-acc-tf-c-7940433018617277669
2026-02-03T00:39:45.2611176Z   
2026-02-03T00:39:45.2611696Z     resource_cluster_test.go:224: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:39:45.2612195Z         
2026-02-03T00:39:45.2614046Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143b4e3c7fce2317dca6a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:39:45.2615138Z         
2026-02-03T00:39:45.2615446Z           with mongodbatlas_cluster.test,
2026-02-03T00:39:45.2616063Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-03T00:39:45.2616676Z           12: 		resource "mongodbatlas_cluster" "test" {
2026-02-03T00:39:45.2616977Z         
2026-02-03T00:39:45.3120411Z --- FAIL: TestAccCluster_emptyAdvancedConf (20.75s)
```

- 2026-02-04 PASS 29 minutes
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 20 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 18 minutes
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
- 2026-02-01 PASS 19 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
