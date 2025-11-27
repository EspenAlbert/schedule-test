# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028080000) |  | dev | timeout | 11722.05s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 21 minutes
- 2025-11-04 PASS 23 minutes
- 2025-11-05
  - PASS 22 minutes
  - PASS 22 minutes
- 2025-11-06 PASS 28 minutes
- 2025-11-07 PASS 25 minutes
- 2025-11-08 PASS 48 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 20 minutes
- 2025-11-11 PASS 19 minutes
- 2025-11-12 PASS 24 minutes
- 2025-11-13 PASS 31 minutes
- 2025-11-14 PASS 25 minutes
- 2025-11-15 PASS 21 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 26 minutes
- 2025-11-18 PASS 21 minutes
- 2025-11-19
  - PASS 22 minutes
  - PASS 17 minutes
- 2025-11-20 PASS 25 minutes
- 2025-11-21 PASS 20 minutes
- 2025-11-22 PASS 20 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 18 minutes
- 2025-11-25 PASS 24 minutes
- 2025-11-26 PASS 19 minutes
- 2025-11-27 PASS 27 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 18 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 20 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 21 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 22 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 21 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
