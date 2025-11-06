# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAWS_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:39](#error-2025-10-30t0039520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b113e2dc7470847b1c31 | dev | flaky_500 | 209.06s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 3 minutes
- 2025-10-09 PASS 5 minutes
- 2025-10-10 PASS 6 minutes
- 2025-10-11 PASS 4 minutes
- 2025-10-12 PASS 3 minutes
- 2025-10-13 PASS 3 minutes
- 2025-10-14 PASS 3 minutes
- 2025-10-15 PASS 3 minutes
- 2025-10-16 PASS 7 minutes
- 2025-10-17 PASS 4 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19 PASS 3 minutes
- 2025-10-20
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-21 PASS 3 minutes
- 2025-10-22
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-23 PASS 3 minutes
- 2025-10-24 PASS 4 minutes
- 2025-10-25 PASS 3 minutes
- 2025-10-26 PASS 3 minutes
- 2025-10-27 PASS 3 minutes
- 2025-10-28 PASS 3 minutes
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
- 2025-11-02 PASS 5 minutes
- 2025-11-03 PASS 4 minutes
- 2025-11-04 PASS 3 minutes
- 2025-11-05
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-11-06 PASS 3 minutes