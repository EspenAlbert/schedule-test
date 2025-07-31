# cluster/cluster/TestAccCluster_Global Test Details
# Found 34 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 00:30](#error-2025-07-14t0030580000) |  | dev | timeout | 10802.03s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 17 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 28 minutes
- 2025-07-05 PASS 14 minutes
- 2025-07-06 PASS 14 minutes
- 2025-07-07 PASS 14 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 17 minutes
  - PASS 12 minutes
- 2025-07-11 PASS 40 minutes
- 2025-07-12 PASS 17 minutes
- 2025-07-13 PASS 18 minutes
- 2025-07-14

### Error 2025-07-14T00:30:58+00:00
```
2025-07-14T00:30:58.8244521Z === RUN   TestAccCluster_Global
2025-07-14T00:31:01.0114914Z === CONT  TestAccCluster_Global
2025-07-14T03:31:03.2212255Z === NAME  TestAccCluster_Global
2025-07-14T03:31:03.2213070Z     resource_cluster_test.go:590: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:03.2213748Z         
2025-07-14T03:31:03.2214944Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.2215834Z         
2025-07-14T03:31:03.2216290Z           with mongodbatlas_cluster.test,
2025-07-14T03:31:03.2216915Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-14T03:31:03.2217597Z           12: 		resource "mongodbatlas_cluster" test {
2025-07-14T03:31:03.2218004Z         
2025-07-14T03:31:03.2685401Z --- FAIL: TestAccCluster_Global (10802.26s)
```

- 2025-07-15 PASS 18 minutes
- 2025-07-16 PASS 19 minutes
- 2025-07-17 PASS 14 minutes
- 2025-07-18 PASS 41 minutes
- 2025-07-19 PASS 14 minutes
- 2025-07-20 PASS 12 minutes
- 2025-07-21 PASS 15 minutes
- 2025-07-22 PASS 15 minutes
- 2025-07-23
  - PASS 15 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-07-24 PASS 14 minutes
- 2025-07-25 PASS 15 minutes
- 2025-07-26 PASS 15 minutes
- 2025-07-27 PASS 19 minutes
- 2025-07-28 PASS 14 minutes
- 2025-07-29 PASS 15 minutes
- 2025-07-30 PASS 16 minutes
- 2025-07-31 PASS 22 minutes