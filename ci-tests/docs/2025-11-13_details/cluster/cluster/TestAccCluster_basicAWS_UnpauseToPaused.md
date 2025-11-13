# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 11791.03s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 17 minutes
- 2025-10-16 PASS 34 minutes
- 2025-10-17 PASS 21 minutes
- 2025-10-18 PASS 19 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS 18 minutes
  - PASS 16 minutes
- 2025-10-21 PASS 18 minutes
- 2025-10-22
  - PASS 26 minutes
  - PASS 22 minutes
- 2025-10-23 PASS 22 minutes
- 2025-10-24 PASS 22 minutes
- 2025-10-25 PASS 17 minutes
- 2025-10-26 PASS 19 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 18 minutes
- 2025-10-29 PASS 20 minutes
- 2025-10-30

### Error 2025-10-30T00:28:10+00:00
```
2025-10-30T00:28:10.4927180Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-10-30T00:28:10.5127870Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-10-30T00:28:50.5067305Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-10-30T00:28:50.5068569Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:50.506407788Z, ProjectID: 6902b118abf4374f3298f77b, Cluster name: test-acc-tf-c-4225454017059833396
2025-10-30T03:44:41.8375045Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-10-30T03:44:41.8376177Z     resource_cluster_test.go:1247: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:44:41.8377322Z         
2025-10-30T03:44:41.8378902Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-4225454017059833396): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:44:41.8380028Z         
2025-10-30T03:44:41.8380489Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (11791.33s)
```

- 2025-10-31 PASS 23 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 19 minutes
- 2025-11-03 PASS 18 minutes
- 2025-11-04 PASS 20 minutes
- 2025-11-05
  - PASS 25 minutes
  - PASS 18 minutes
- 2025-11-06 PASS 24 minutes
- 2025-11-07 PASS 22 minutes
- 2025-11-08 PASS 48 minutes
- 2025-11-09 PASS 19 minutes
- 2025-11-10 PASS 21 minutes
- 2025-11-11 PASS 18 minutes
- 2025-11-12 PASS 22 minutes
- 2025-11-13
  - PASS 26 minutes
  - PASS 19 minutes