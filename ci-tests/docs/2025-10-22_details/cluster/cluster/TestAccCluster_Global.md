# cluster/cluster/TestAccCluster_Global Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027290000) |  | dev | timeout | 10802.08s
[2025-10-20 10:26](#error-2025-10-20t1026150000) |  | dev | timeout | 10802.08s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 29 minutes
- 2025-09-24 PASS 30 minutes
- 2025-09-25 PASS 31 minutes
- 2025-09-26 PASS 29 minutes
- 2025-09-27 PASS 18 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29 PASS 21 minutes
- 2025-09-30
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 18 minutes
- 2025-10-01
  - PASS 26 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 32 minutes
  - PASS 15 minutes
  - PASS 26 minutes
  - PASS 17 minutes
- 2025-10-02 PASS 2 hours
- 2025-10-03 PASS 21 minutes
- 2025-10-04 PASS 38 minutes
- 2025-10-05 PASS 13 minutes
- 2025-10-06 PASS 15 minutes
- 2025-10-07

### Error 2025-10-07T00:27:29+00:00
```
2025-10-07T00:27:29.2619055Z === RUN   TestAccCluster_Global
2025-10-07T00:27:32.1764797Z === CONT  TestAccCluster_Global
2025-10-07T03:27:34.9110141Z === NAME  TestAccCluster_Global
2025-10-07T03:27:34.9110816Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2025-10-07T03:27:34.9111481Z         
2025-10-07T03:27:34.9112735Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-07T03:27:34.9113642Z         
2025-10-07T03:27:34.9113938Z           with mongodbatlas_cluster.test,
2025-10-07T03:27:34.9114527Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-07T03:27:34.9115047Z           12: 		resource "mongodbatlas_cluster" test {
2025-10-07T03:27:34.9115717Z         
2025-10-07T03:27:34.9686581Z --- FAIL: TestAccCluster_Global (10802.79s)
```

- 2025-10-08 PASS 25 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 20 minutes
- 2025-10-11 PASS 23 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 30 minutes
- 2025-10-14 PASS 35 minutes
- 2025-10-15 PASS 17 minutes
- 2025-10-16 PASS 29 minutes
- 2025-10-17 PASS 18 minutes
- 2025-10-18 PASS 15 minutes
- 2025-10-19 PASS 16 minutes
- 2025-10-20
  - PASS 22 minutes
  - FAIL 3 hours

### Error 2025-10-20T10:26:15+00:00
```
2025-10-20T10:26:15.1315252Z === RUN   TestAccCluster_Global
2025-10-20T10:26:18.8060328Z === CONT  TestAccCluster_Global
2025-10-20T13:26:21.5281762Z === NAME  TestAccCluster_Global
2025-10-20T13:26:21.5282563Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2025-10-20T13:26:21.5283192Z         
2025-10-20T13:26:21.5284584Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-20T13:26:21.5285312Z         
2025-10-20T13:26:21.5285655Z           with mongodbatlas_cluster.test,
2025-10-20T13:26:21.5286273Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-20T13:26:21.5286909Z           12: 		resource "mongodbatlas_cluster" test {
2025-10-20T13:26:21.5287442Z         
2025-10-20T13:26:21.5345665Z    test_terraform_path=/home/runner/work/_temp/a1e70420-1b8e-4a35-bbea-fc98285590a7/terraform
2025-10-20T13:26:21.5852289Z --- FAIL: TestAccCluster_Global (10802.78s)
```

- 2025-10-21 PASS 16 minutes
- 2025-10-22
  - PASS 35 minutes
  - PASS 14 minutes