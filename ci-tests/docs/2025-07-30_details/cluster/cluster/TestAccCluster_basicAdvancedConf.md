# cluster/cluster/TestAccCluster_basicAdvancedConf Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029450000) |  | dev | timeout | 10810.09s
[2025-07-14 00:30](#error-2025-07-14t0030560000) |  | dev | timeout | 10825.08s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 18 minutes
- 2025-07-02 PASS 17 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 27 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 32 minutes
- 2025-07-10
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-07-11

### Error 2025-07-11T00:29:45+00:00
```
2025-07-11T00:29:45.7917303Z === RUN   TestAccCluster_basicAdvancedConf
2025-07-11T00:29:49.8190588Z === CONT  TestAccCluster_basicAdvancedConf
2025-07-11T00:29:59.8185813Z === NAME  TestAccCluster_basicAdvancedConf
2025-07-11T00:29:59.8188026Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:29:59.81828558Z, ProjectID: 68705af80642f25f3ba080f1, Cluster name: test-acc-tf-c-7793436258837103564
2025-07-11T03:30:00.7228206Z === NAME  TestAccCluster_basicAdvancedConf
2025-07-11T03:30:00.7228907Z     resource_cluster_test.go:265: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:30:00.7229443Z         
2025-07-11T03:30:00.7230292Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:30:00.7231120Z         
2025-07-11T03:30:00.7231481Z           with mongodbatlas_cluster.test,
2025-07-11T03:30:00.7232085Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:30:00.7232723Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-07-11T03:30:00.7233064Z         
2025-07-11T03:30:00.7672249Z --- FAIL: TestAccCluster_basicAdvancedConf (10810.95s)
```

- 2025-07-12 PASS 18 minutes
- 2025-07-13 PASS 28 minutes
- 2025-07-14

### Error 2025-07-14T00:30:56+00:00
```
2025-07-14T00:30:56.4794914Z === RUN   TestAccCluster_basicAdvancedConf
2025-07-14T00:31:01.0422386Z === CONT  TestAccCluster_basicAdvancedConf
2025-07-14T00:31:26.0172136Z === NAME  TestAccCluster_basicAdvancedConf
2025-07-14T00:31:26.0173754Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:26.016934129Z, ProjectID: 68744fbe52cba864e5f0f8c7, Cluster name: test-acc-tf-c-7234823249694000789
2025-07-14T03:31:26.7749841Z === NAME  TestAccCluster_basicAdvancedConf
2025-07-14T03:31:26.7750734Z     resource_cluster_test.go:265: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:26.7751397Z         
2025-07-14T03:31:26.7752597Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:26.7753446Z         
2025-07-14T03:31:26.7753941Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:26.7754522Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:26.7755159Z           12: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:26.7755625Z         
2025-07-14T03:31:26.8241222Z --- FAIL: TestAccCluster_basicAdvancedConf (10825.78s)
```

- 2025-07-15 PASS 15 minutes
- 2025-07-16 PASS 18 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 15 minutes
- 2025-07-19 PASS 15 minutes
- 2025-07-20 PASS 14 minutes
- 2025-07-21 PASS 13 minutes
- 2025-07-22 PASS 13 minutes
- 2025-07-23
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-07-24 PASS 16 minutes
- 2025-07-25 PASS 17 minutes
- 2025-07-26 PASS 18 minutes
- 2025-07-27 PASS 17 minutes
- 2025-07-28 PASS 16 minutes
- 2025-07-29 PASS 16 minutes
- 2025-07-30 PASS 17 minutes