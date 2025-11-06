# cluster/cluster/TestAccCluster_AWSWithLabels Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028080000) |  | dev | timeout | 11727.06s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 28 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 27 minutes
- 2025-10-11 PASS 22 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 24 minutes
- 2025-10-14 PASS 31 minutes
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 32 minutes
- 2025-10-17 PASS 25 minutes
- 2025-10-18 PASS 20 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS 35 minutes
  - PASS 19 minutes
- 2025-10-21 PASS 19 minutes
- 2025-10-22
  - PASS 31 minutes
  - PASS 22 minutes
- 2025-10-23 PASS 25 minutes
- 2025-10-24 PASS 21 minutes
- 2025-10-25 PASS 18 minutes
- 2025-10-26 PASS 21 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 21 minutes
- 2025-10-29 PASS 25 minutes
- 2025-10-30

### Error 2025-10-30T00:28:08+00:00
```
2025-10-30T00:28:08.1347808Z === RUN   TestAccCluster_AWSWithLabels
2025-10-30T00:28:10.4959354Z === CONT  TestAccCluster_AWSWithLabels
2025-10-30T00:28:45.5054296Z === NAME  TestAccCluster_AWSWithLabels
2025-10-30T00:28:45.5056326Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:45.505122674Z, ProjectID: 6902b116abf4374f3298dad1, Cluster name: test-acc-tf-c-4167347932411742857
2025-10-30T03:43:38.0444573Z === NAME  TestAccCluster_AWSWithLabels
2025-10-30T03:43:38.0445226Z     resource_cluster_test.go:622: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:43:38.0445711Z         
2025-10-30T03:43:38.0446849Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-4167347932411742857): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:43:38.0447507Z         
2025-10-30T03:43:38.0447754Z --- FAIL: TestAccCluster_AWSWithLabels (11727.55s)
```

- 2025-10-31 PASS 26 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 22 minutes
- 2025-11-03 PASS 18 minutes
- 2025-11-04 PASS 21 minutes
- 2025-11-05
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-11-06 PASS 26 minutes