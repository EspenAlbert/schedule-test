# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b183e2dc7470847cbc97 | dev | flaky_500 | 6.08s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 8 seconds
- 2025-10-16 PASS 7 seconds
- 2025-10-17 PASS 8 seconds
- 2025-10-18 PASS 7 seconds
- 2025-10-19 PASS 6 seconds
- 2025-10-20
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-10-21 PASS 6 seconds
- 2025-10-22
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-10-23 PASS 7 seconds
- 2025-10-24 PASS 7 seconds
- 2025-10-25 PASS 7 seconds
- 2025-10-26 PASS 7 seconds
- 2025-10-27 PASS 10 seconds
- 2025-10-28 PASS 10 seconds
- 2025-10-29 PASS 8 seconds
- 2025-10-30

### Error 2025-10-30T00:28:20+00:00
```
2025-10-30T00:28:20.8267388Z === RUN   TestAccClusterAdvancedCluster_withLabelIgnored
2025-10-30T00:29:52.4643147Z === CONT  TestAccClusterAdvancedCluster_withLabelIgnored
2025-10-30T00:29:59.2444981Z === NAME  TestAccClusterAdvancedCluster_withLabelIgnored
2025-10-30T00:29:59.2445636Z     resource_test.go:603: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:29:59.2446092Z         
2025-10-30T00:29:59.2446392Z         Error: error when destroying resource
2025-10-30T00:29:59.2446671Z         
2025-10-30T00:29:59.2447000Z         error deleting project (6902b183e2dc7470847cbc97):
2025-10-30T00:29:59.2447813Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b183e2dc7470847cbc97
2025-10-30T00:29:59.2448454Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:29:59.2449038Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:29:59.2449439Z         BadRequestDetail: 
2025-10-30T00:29:59.2449770Z --- FAIL: TestAccClusterAdvancedCluster_withLabelIgnored (6.78s)
```

- 2025-10-31 PASS 8 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 11 seconds
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 6 seconds
- 2025-11-05
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-11-06 PASS 7 seconds
- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 7 seconds
- 2025-11-09 PASS 6 seconds
- 2025-11-10 PASS 10 seconds
- 2025-11-11 PASS 8 seconds
- 2025-11-12 PASS 7 seconds
- 2025-11-13
  - PASS 8 seconds
  - PASS 9 seconds