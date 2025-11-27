# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:34](#error-2025-10-30t0034130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b115abf4374f3298c461 | dev | flaky_500 | 171.09s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 3 minutes
- 2025-10-30

### Error 2025-10-30T00:34:13+00:00
```
2025-10-30T00:34:13.8298256Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-10-30T00:34:13.8305077Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-10-30T00:34:13.8345826Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-10-30T00:34:13.8346481Z     resource_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:34:13.8346980Z         
2025-10-30T00:34:13.8347318Z         Error: error when destroying resource
2025-10-30T00:34:13.8347633Z         
2025-10-30T00:34:13.8348010Z         error deleting project (6902b115abf4374f3298c461):
2025-10-30T00:34:13.8348637Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b115abf4374f3298c461
2025-10-30T00:34:13.8349313Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:34:13.8349958Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:34:13.8350413Z         BadRequestDetail: 
2025-10-30T00:34:13.8350768Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (171.91s)
```

- 2025-10-31 PASS 3 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 3 minutes
- 2025-11-04 PASS 3 minutes
- 2025-11-05
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-11-06 PASS 2 minutes
- 2025-11-07 PASS 3 minutes
- 2025-11-08 PASS 3 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 2 minutes
- 2025-11-11 PASS 3 minutes
- 2025-11-12 PASS 2 minutes
- 2025-11-13 PASS 5 minutes
- 2025-11-14 PASS 3 minutes
- 2025-11-15 PASS 3 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 3 minutes
- 2025-11-18 PASS 2 minutes
- 2025-11-19 PASS 2 minutes
- 2025-11-20 PASS 3 minutes
- 2025-11-21 PASS 3 minutes
- 2025-11-22 PASS 2 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 2 minutes
- 2025-11-25 PASS 3 minutes
- 2025-11-26 PASS 2 minutes
- 2025-11-27 PASS 2 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 2 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 2 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 2 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 3 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
