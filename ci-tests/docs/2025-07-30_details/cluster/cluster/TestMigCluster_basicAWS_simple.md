# cluster/cluster/TestMigCluster_basicAWS_simple Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029440000) |  | dev | timeout | 10809.08s
[2025-07-14 00:30](#error-2025-07-14t0030540000) |  | dev | timeout | 10809.07s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-07-02 PASS 10 minutes
- 2025-07-03 PASS 14 minutes
- 2025-07-04 PASS 23 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 11 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 9 minutes
- 2025-07-09 PASS 11 minutes
- 2025-07-10
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-07-11

### Error 2025-07-11T00:29:44+00:00
```
2025-07-11T00:29:44.2308650Z === RUN   TestMigCluster_basicAWS_simple
2025-07-11T00:29:49.8187772Z === CONT  TestMigCluster_basicAWS_simple
2025-07-11T00:29:54.8183772Z === NAME  TestMigCluster_basicAWS_simple
2025-07-11T00:29:54.8185634Z     pre_check.go:40: Time before creating cluster: 2025-07-11T00:29:54.818103715Z, ProjectID: 68705af80642f25f3ba080f1, Cluster name: test-acc-tf-c-9119040209291152696
2025-07-11T03:29:57.8985675Z === NAME  TestMigCluster_basicAWS_simple
2025-07-11T03:29:57.8986244Z     resource_cluster_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:29:57.8986667Z         
2025-07-11T03:29:57.8987376Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:57.8987908Z         
2025-07-11T03:29:57.8988200Z           with mongodbatlas_cluster.test,
2025-07-11T03:29:57.8989019Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-07-11T03:29:57.8989562Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-07-11T03:29:57.8989866Z         
2025-07-11T03:29:58.0795527Z --- FAIL: TestMigCluster_basicAWS_simple (10809.82s)
```

- 2025-07-12 PASS 11 minutes
- 2025-07-13 PASS 26 minutes
- 2025-07-14

### Error 2025-07-14T00:30:54+00:00
```
2025-07-14T00:30:54.0137821Z === RUN   TestMigCluster_basicAWS_simple
2025-07-14T00:31:01.0113621Z === CONT  TestMigCluster_basicAWS_simple
2025-07-14T00:31:06.0096898Z === NAME  TestMigCluster_basicAWS_simple
2025-07-14T00:31:06.0098469Z     pre_check.go:40: Time before creating cluster: 2025-07-14T00:31:06.009415787Z, ProjectID: 68744fbe52cba864e5f0f8c7, Cluster name: test-acc-tf-c-6049979809085045180
2025-07-14T03:31:08.0956993Z === NAME  TestMigCluster_basicAWS_simple
2025-07-14T03:31:08.0957765Z     resource_cluster_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:08.0958182Z         
2025-07-14T03:31:08.0958870Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:08.0959594Z         
2025-07-14T03:31:08.0959978Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:08.0960552Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:08.0961068Z           14: 		resource "mongodbatlas_cluster" "test" {
2025-07-14T03:31:08.0961343Z         
2025-07-14T03:31:08.2835129Z --- FAIL: TestMigCluster_basicAWS_simple (10809.74s)
```

- 2025-07-15 PASS 13 minutes
- 2025-07-16 PASS 12 minutes
- 2025-07-17 PASS 11 minutes
- 2025-07-18 PASS 12 minutes
- 2025-07-19 PASS 12 minutes
- 2025-07-20 PASS 10 minutes
- 2025-07-21 PASS 11 minutes
- 2025-07-22 PASS 11 minutes
- 2025-07-23
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-07-24 PASS 13 minutes
- 2025-07-25 PASS 14 minutes
- 2025-07-26 PASS 15 minutes
- 2025-07-27 PASS 12 minutes
- 2025-07-28 PASS 13 minutes
- 2025-07-29 PASS 9 minutes
- 2025-07-30 PASS 13 minutes