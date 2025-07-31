# cluster/cluster/TestMigCluster_partial_advancedConf Test Details
# Found 34 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-02 00:28](#error-2025-07-02t0028470000) |  | dev | unclassified | 308.06s
[2025-07-11 00:29](#error-2025-07-11t0029450000) |  | dev | timeout | 10843.01s
[2025-07-14 00:30](#error-2025-07-14t0030560000) |  | dev | timeout | 10857.00s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02

### Error 2025-07-02T00:28:47+00:00
GoTestErrorClassification(error_class='unclassified',author='human',run_id='2025-07-02T00:28:47.595000+00:00-TestMigCluster_partial_advancedConf',confidence=1.0,ts_when='29 days ago')

```
2025-07-02T00:28:47.5959695Z === RUN   TestMigCluster_partial_advancedConf
2025-07-02T00:28:55.2684009Z === CONT  TestMigCluster_partial_advancedConf
2025-07-02T00:28:57.7924217Z   
2025-07-02T00:29:55.2561827Z === NAME  TestMigCluster_partial_advancedConf
2025-07-02T00:29:55.2563290Z     pre_check.go:40: Time before creating cluster: 2025-07-02T00:29:55.255849645Z, ProjectID: 68647d3d948ea608f1ec2630, Cluster name: test-acc-tf-c-6758096426470617589
2025-07-02T00:34:03.7284323Z === NAME  TestMigCluster_partial_advancedConf
2025-07-02T00:34:03.7284889Z     resource_cluster_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-07-02T00:34:03.7285303Z         
2025-07-02T00:34:03.7286501Z         Error: error creating MongoDB Cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68647d3d948ea608f1ec2630/clusters/test-acc-tf-c-6758096426470617589": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-02T00:34:03.7287368Z         
2025-07-02T00:34:03.7287642Z           with mongodbatlas_cluster.test,
2025-07-02T00:34:03.7288624Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-07-02T00:34:03.7289161Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-07-02T00:34:03.7289441Z         
2025-07-02T00:34:03.9155071Z --- FAIL: TestMigCluster_partial_advancedConf (308.65s)
```

- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 22 minutes
- 2025-07-05 PASS 11 minutes
- 2025-07-06 PASS 10 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 16 minutes
  - PASS 13 minutes
- 2025-07-11

### Error 2025-07-11T00:29:45+00:00
```
2025-07-11T00:29:45.7898028Z === RUN   TestMigCluster_partial_advancedConf
2025-07-11T00:29:49.8204632Z === CONT  TestMigCluster_partial_advancedConf
2025-07-11T00:30:29.8270752Z === NAME  TestMigCluster_partial_advancedConf
2025-07-11T00:30:29.8272939Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:30:29.826801954Z, ProjectID: 68705af80642f25f3ba080f1, Cluster name: test-acc-tf-c-3485320844220107843
2025-07-11T03:30:32.7359100Z === NAME  TestMigCluster_partial_advancedConf
2025-07-11T03:30:32.7359989Z     resource_cluster_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:30:32.7360479Z         
2025-07-11T03:30:32.7361286Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:30:32.7361888Z         
2025-07-11T03:30:32.7362356Z           with mongodbatlas_cluster.test,
2025-07-11T03:30:32.7363012Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:30:32.7363573Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-07-11T03:30:32.7363863Z         
2025-07-11T03:30:32.9230252Z --- FAIL: TestMigCluster_partial_advancedConf (10843.10s)
```

- 2025-07-12 PASS 13 minutes
- 2025-07-13 PASS 25 minutes
- 2025-07-14

### Error 2025-07-14T00:30:56+00:00
```
2025-07-14T00:30:56.4776883Z === RUN   TestMigCluster_partial_advancedConf
2025-07-14T00:31:01.0441716Z === CONT  TestMigCluster_partial_advancedConf
2025-07-14T00:31:56.0285735Z === NAME  TestMigCluster_partial_advancedConf
2025-07-14T00:31:56.0287203Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:56.02809358Z, ProjectID: 68744fbe52cba864e5f0f8c7, Cluster name: test-acc-tf-c-1715210403014436465
2025-07-14T03:31:57.8947128Z === NAME  TestMigCluster_partial_advancedConf
2025-07-14T03:31:57.8947728Z     resource_cluster_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:57.8948145Z         
2025-07-14T03:31:57.8948833Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:57.8949350Z         
2025-07-14T03:31:57.8950260Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:57.8950889Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:57.8951417Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:57.8951702Z         
2025-07-14T03:31:58.0790317Z --- FAIL: TestMigCluster_partial_advancedConf (10857.04s)
```

- 2025-07-15 PASS 11 minutes
- 2025-07-16 PASS 12 minutes
- 2025-07-17 PASS 12 minutes
- 2025-07-18 PASS 12 minutes
- 2025-07-19 PASS 11 minutes
- 2025-07-20 PASS 12 minutes
- 2025-07-21 PASS 12 minutes
- 2025-07-22 PASS 11 minutes
- 2025-07-23
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-07-24 PASS 13 minutes
- 2025-07-25 PASS 12 minutes
- 2025-07-26 PASS 12 minutes
- 2025-07-27 PASS 12 minutes
- 2025-07-28 PASS 11 minutes
- 2025-07-29 PASS 11 minutes
- 2025-07-30 PASS 15 minutes
- 2025-07-31 PASS 18 minutes