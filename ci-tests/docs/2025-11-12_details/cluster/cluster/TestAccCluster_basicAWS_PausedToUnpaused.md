# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 11936.02s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 22 minutes
- 2025-10-05 PASS 21 minutes
- 2025-10-06 PASS 21 minutes
- 2025-10-07 PASS 33 minutes
- 2025-10-08 PASS 21 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 30 minutes
- 2025-10-11 PASS 24 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 24 minutes
- 2025-10-14 PASS 32 minutes
- 2025-10-15 PASS 22 minutes
- 2025-10-16 PASS 38 minutes
- 2025-10-17 PASS 25 minutes
- 2025-10-18 PASS 21 minutes
- 2025-10-19 PASS 18 minutes
- 2025-10-20
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-10-21 PASS 21 minutes
- 2025-10-22
  - PASS 29 minutes
  - PASS 22 minutes
- 2025-10-23 PASS 30 minutes
- 2025-10-24 PASS an hour
- 2025-10-25 PASS 20 minutes
- 2025-10-26 PASS 20 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 21 minutes
- 2025-10-29 PASS 28 minutes
- 2025-10-30

### Error 2025-10-30T00:28:10+00:00
```
2025-10-30T00:28:10.4929085Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-10-30T00:28:10.5054668Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-10-30T00:28:55.5087359Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-10-30T00:28:55.5088880Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:55.508403012Z, ProjectID: 6902b118abf4374f3298f77b, Cluster name: test-acc-tf-c-2778914024425745007
2025-10-30T03:47:06.7537469Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-10-30T03:47:06.7538159Z     resource_cluster_test.go:1286: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:47:06.7538656Z         
2025-10-30T03:47:06.7539553Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-2778914024425745007): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:47:06.7540203Z         
2025-10-30T03:47:06.7540491Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (11936.25s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 23 minutes
- 2025-11-03 PASS 21 minutes
- 2025-11-04 PASS 20 minutes
- 2025-11-05
  - PASS 25 minutes
  - PASS 20 minutes
- 2025-11-06 PASS 28 minutes
- 2025-11-07 PASS 24 minutes
- 2025-11-08 PASS 50 minutes
- 2025-11-09 PASS 23 minutes
- 2025-11-10 PASS 21 minutes
- 2025-11-11 PASS 21 minutes
- 2025-11-12 PASS 26 minutes