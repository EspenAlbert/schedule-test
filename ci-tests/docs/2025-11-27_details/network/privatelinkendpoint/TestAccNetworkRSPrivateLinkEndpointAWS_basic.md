# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAWS_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:39](#error-2025-10-30t0039520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b113e2dc7470847b1c31 | dev | flaky_500 | 209.06s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 3 minutes
- 2025-10-30

### Error 2025-10-30T00:39:52+00:00
```
2025-10-30T00:39:52.0769134Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-30T00:39:52.0775232Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-30T00:39:52.0811400Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-10-30T00:39:52.0812074Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:39:52.0812567Z         
2025-10-30T00:39:52.0812898Z         Error: error when destroying resource
2025-10-30T00:39:52.0813214Z         
2025-10-30T00:39:52.0813599Z         error deleting project (6902b113e2dc7470847b1c31):
2025-10-30T00:39:52.0814215Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b113e2dc7470847b1c31
2025-10-30T00:39:52.0815133Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:39:52.0815793Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:39:52.0816237Z         BadRequestDetail: 
2025-10-30T00:39:52.0816626Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (209.61s)
```

- 2025-10-31 PASS 3 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 4 minutes
- 2025-11-04 PASS 3 minutes
- 2025-11-05
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-11-06 PASS 3 minutes
- 2025-11-07 PASS 3 minutes
- 2025-11-08 PASS 3 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 3 minutes
- 2025-11-11 PASS 3 minutes
- 2025-11-12 PASS 3 minutes
- 2025-11-13 PASS 7 minutes
- 2025-11-14 PASS 4 minutes
- 2025-11-15 PASS 3 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 3 minutes
- 2025-11-18 PASS 4 minutes
- 2025-11-19 PASS 3 minutes
- 2025-11-20 PASS 3 minutes
- 2025-11-21 PASS 3 minutes
- 2025-11-22 PASS 4 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 3 minutes
- 2025-11-25 PASS 3 minutes
- 2025-11-26 PASS 4 minutes
- 2025-11-27 PASS 3 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 3 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 3 minutes
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
