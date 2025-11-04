# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028080000) |  | dev | timeout | 11722.05s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 19 minutes
- 2025-10-07 PASS 21 minutes
- 2025-10-08 PASS 23 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 26 minutes
- 2025-10-11 PASS 23 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 20 minutes
- 2025-10-14 PASS 20 minutes
- 2025-10-15 PASS 22 minutes
- 2025-10-16 PASS 32 minutes
- 2025-10-17 PASS 25 minutes
- 2025-10-18 PASS 21 minutes
- 2025-10-19 PASS 22 minutes
- 2025-10-20
  - PASS 22 minutes
  - PASS 17 minutes
- 2025-10-21 PASS 20 minutes
- 2025-10-22
  - PASS 24 minutes
  - PASS 19 minutes
- 2025-10-23 PASS 30 minutes
- 2025-10-24 PASS 22 minutes
- 2025-10-25 PASS 20 minutes
- 2025-10-26 PASS 22 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 19 minutes
- 2025-10-29 PASS 25 minutes
- 2025-10-30

### Error 2025-10-30T00:28:08+00:00
```
2025-10-30T00:28:08.1351863Z === RUN   TestAccCluster_WithTags
2025-10-30T00:28:10.4937589Z === CONT  TestAccCluster_WithTags
2025-10-30T03:43:32.9972883Z === NAME  TestAccCluster_WithTags
2025-10-30T03:43:32.9973559Z     resource_cluster_test.go:697: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:43:32.9974055Z         
2025-10-30T03:43:32.9974970Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-7861098636068173401): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:43:32.9975623Z         
2025-10-30T03:43:32.9975866Z --- FAIL: TestAccCluster_WithTags (11722.50s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 18 minutes
- 2025-11-03 PASS 21 minutes
- 2025-11-04 PASS 23 minutes