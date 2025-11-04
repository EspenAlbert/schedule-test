# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAzure_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:39](#error-2025-10-30t0039520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b113e2dc7470847b1db5 | dev | flaky_500 | 99.02s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS a minute
- 2025-10-07 PASS 2 minutes
- 2025-10-08 PASS 2 minutes
- 2025-10-09 PASS 7 minutes
- 2025-10-10 PASS 3 minutes
- 2025-10-11 PASS 2 minutes
- 2025-10-12 PASS a minute
- 2025-10-13 PASS a minute
- 2025-10-14 PASS 2 minutes
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17 PASS 2 minutes
- 2025-10-18 PASS a minute
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS a minute
  - PASS a minute
- 2025-10-21 PASS a minute
- 2025-10-22
  - PASS 2 minutes
  - PASS a minute
- 2025-10-23 PASS a minute
- 2025-10-24 PASS a minute
- 2025-10-25 PASS a minute
- 2025-10-26 PASS a minute
- 2025-10-27 PASS a minute
- 2025-10-28 PASS a minute
- 2025-10-29 PASS a minute
- 2025-10-30

### Error 2025-10-30T00:39:52+00:00
```
2025-10-30T00:39:52.0770708Z === RUN   TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-10-30T00:39:52.0776317Z === CONT  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-10-30T00:39:52.0794178Z === NAME  TestAccNetworkRSPrivateLinkEndpointAzure_basic
2025-10-30T00:39:52.0795096Z     resource_test.go:60: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:39:52.0795730Z         
2025-10-30T00:39:52.0796077Z         Error: error when destroying resource
2025-10-30T00:39:52.0796395Z         
2025-10-30T00:39:52.0796770Z         error deleting project (6902b113e2dc7470847b1db5):
2025-10-30T00:39:52.0797376Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b113e2dc7470847b1db5
2025-10-30T00:39:52.0798062Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:39:52.0798707Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:39:52.0799162Z         BadRequestDetail: 
2025-10-30T00:39:52.0799558Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAzure_basic (99.18s)
```

- 2025-10-31 PASS a minute
- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03 PASS a minute
- 2025-11-04 PASS a minute