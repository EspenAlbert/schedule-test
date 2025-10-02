# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 03:22](#error-2025-10-01t0322560000) |  | dev | flaky_client | 2031.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS an hour
- 2025-09-04 PASS 54 minutes
- 2025-09-05 PASS 41 minutes
- 2025-09-06 PASS 55 minutes
- 2025-09-07 PASS 45 minutes
- 2025-09-08
  - PASS 58 minutes
  - PASS 46 minutes
  - PASS 49 minutes
- 2025-09-09 PASS 51 minutes
- 2025-09-10 PASS 51 minutes
- 2025-09-11 PASS 47 minutes
- 2025-09-12 PASS 45 minutes
- 2025-09-13 PASS 58 minutes
- 2025-09-14 PASS 41 minutes
- 2025-09-15
  - PASS 45 minutes
  - PASS 41 minutes
- 2025-09-16 PASS 51 minutes
- 2025-09-17 PASS 49 minutes
- 2025-09-18 PASS an hour
- 2025-09-19 PASS an hour
- 2025-09-20 PASS 58 minutes
- 2025-09-21 PASS 50 minutes
- 2025-09-22 PASS 51 minutes
- 2025-09-23 PASS 54 minutes
- 2025-09-24 PASS 53 minutes
- 2025-09-25 PASS 57 minutes
- 2025-09-26 PASS 58 minutes
- 2025-09-27 PASS 50 minutes
- 2025-09-28 PASS 52 minutes
- 2025-09-29 PASS an hour
- 2025-09-30
  - PASS 50 minutes
  - PASS 48 minutes
  - PASS 45 minutes
- 2025-10-01
  - PASS 58 minutes
  - FAIL 33 minutes

### Error 2025-10-01T03:22:56+00:00
```
2025-10-01T03:22:56.8692906Z === RUN   TestAccCluster_RegionsConfig
2025-10-01T03:22:56.8741863Z === CONT  TestAccCluster_RegionsConfig
2025-10-01T03:56:48.5611041Z === NAME  TestAccCluster_RegionsConfig
2025-10-01T03:56:48.5612398Z     resource_cluster_test.go:1208: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T03:56:48.5613436Z         
2025-10-01T03:56:48.5616491Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-3366672339827219371): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dc9e8d5a2f9645001ee4ff/clusters/test-acc-tf-c-3366672339827219371": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-10-01T03:56:48.5618352Z         
2025-10-01T03:56:48.5618808Z --- FAIL: TestAccCluster_RegionsConfig (2031.69s)
```

  - PASS 56 minutes
  - PASS 37 minutes
  - PASS 58 minutes
  - PASS 45 minutes
  - PASS an hour
  - PASS 38 minutes
- 2025-10-02 PASS 2 hours