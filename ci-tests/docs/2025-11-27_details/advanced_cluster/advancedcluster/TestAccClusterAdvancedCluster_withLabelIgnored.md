# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withLabelIgnored Test Details
# Found 33 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b183e2dc7470847cbc97 | dev | flaky_500 | 6.08s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 7 seconds
- 2025-11-04 PASS 6 seconds
- 2025-11-05
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-11-06 PASS 7 seconds
- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 7 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 10 seconds
- 2025-11-11 PASS 8 seconds
- 2025-11-12 PASS 7 seconds
- 2025-11-13 PASS 8 seconds
- 2025-11-14 PASS 8 seconds
- 2025-11-15 PASS 7 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 7 seconds
- 2025-11-18 PASS 6 seconds
- 2025-11-19
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-11-20
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-11-21 PASS 7 seconds
- 2025-11-22 PASS 9 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 8 seconds
- 2025-11-25 PASS 8 seconds
- 2025-11-26 PASS 7 seconds
- 2025-11-27 PASS 7 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 11 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 6 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 9 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 8 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 7 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
