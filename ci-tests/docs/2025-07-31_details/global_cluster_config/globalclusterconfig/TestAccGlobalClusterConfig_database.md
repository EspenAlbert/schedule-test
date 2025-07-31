# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029410000) |  | dev | timeout | 10806.02s
[2025-07-14 00:31](#error-2025-07-14t0031020000) |  | dev | timeout | 10806.02s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 20 minutes
- 2025-07-04 PASS 30 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 19 minutes
- 2025-07-09 PASS 34 minutes
- 2025-07-10
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-07-11

### Error 2025-07-11T00:29:41+00:00
```
2025-07-11T00:29:41.2589801Z === RUN   TestAccGlobalClusterConfig_database
2025-07-11T00:29:46.2639664Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:29:46.263579528Z, ProjectID: 68705af30642f25f3ba07af4, Cluster name: test-acc-tf-c-3372558085406500725
2025-07-11T03:29:47.4225191Z   
2025-07-11T03:29:47.4226075Z     resource_global_cluster_config_test.go:164: Step 1/5 error: Error running apply: exit status 1
2025-07-11T03:29:47.4226535Z         
2025-07-11T03:29:47.4227407Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:47.4228179Z         
2025-07-11T03:29:47.4228775Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-11T03:29:47.4229858Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-11T03:29:47.4231000Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-11T03:29:47.4231746Z         
2025-07-11T03:29:47.4738729Z --- FAIL: TestAccGlobalClusterConfig_database (10806.21s)
```

- 2025-07-12 PASS 18 minutes
- 2025-07-13 PASS 18 minutes
- 2025-07-14

### Error 2025-07-14T00:31:02+00:00
```
2025-07-14T00:31:02.4952599Z === RUN   TestAccGlobalClusterConfig_database
2025-07-14T00:31:07.4969849Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:07.496372947Z, ProjectID: 68744fc452cba864e5f0fb32, Cluster name: test-acc-tf-c-8330744752557128972
2025-07-14T03:31:08.6343534Z   
2025-07-14T03:31:08.6344402Z     resource_global_cluster_config_test.go:164: Step 1/5 error: Error running apply: exit status 1
2025-07-14T03:31:08.6345170Z         
2025-07-14T03:31:08.6346461Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:08.6347381Z         
2025-07-14T03:31:08.6348314Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-14T03:31:08.6349683Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-14T03:31:08.6350904Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-14T03:31:08.6351518Z         
2025-07-14T03:31:08.6792111Z --- FAIL: TestAccGlobalClusterConfig_database (10806.18s)
```

- 2025-07-15 PASS 18 minutes
- 2025-07-16 PASS 19 minutes
- 2025-07-17 PASS 19 minutes
- 2025-07-18 PASS 22 minutes
- 2025-07-19 PASS 18 minutes
- 2025-07-20 PASS 17 minutes
- 2025-07-21 PASS 18 minutes
- 2025-07-22 PASS 17 minutes
- 2025-07-23
  - PASS 21 minutes
  - PASS 17 minutes
- 2025-07-24 PASS 19 minutes
- 2025-07-25 PASS 19 minutes
- 2025-07-26 PASS 18 minutes
- 2025-07-27 PASS 24 minutes
- 2025-07-28 PASS 19 minutes
- 2025-07-29 PASS 18 minutes
- 2025-07-30 PASS 19 minutes
- 2025-07-31 PASS 26 minutes