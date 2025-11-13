# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointGCP_basic Test Details
# Found 34 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-27 01:35](#error-2025-10-27t0135040000) |  | dev | timeout | 3880.10s
[2025-10-30 00:39](#error-2025-10-30t0039520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b113e2dc7470847b1e34 | dev | flaky_500 | 708.04s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 8 minutes
- 2025-10-16 PASS 9 minutes
- 2025-10-17 PASS 10 minutes
- 2025-10-18 PASS 9 minutes
- 2025-10-19 PASS 8 minutes
- 2025-10-20
  - PASS 12 minutes
  - PASS 8 minutes
- 2025-10-21 PASS 9 minutes
- 2025-10-22
  - PASS 13 minutes
  - PASS 7 minutes
- 2025-10-23 PASS 12 minutes
- 2025-10-24 PASS 10 minutes
- 2025-10-25 PASS 14 minutes
- 2025-10-26 PASS 8 minutes
- 2025-10-27

### Error 2025-10-27T01:35:04+00:00
```
2025-10-27T01:35:04.5594125Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-27T01:35:04.5602450Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-27T01:35:04.5604964Z   diagnostic_summary=
2025-10-27T01:35:04.5607445Z    diagnostic_detail=""
2025-10-27T01:35:04.5618122Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-27T01:35:04.5618805Z     resource_test.go:95: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-27T01:35:04.5619290Z         
2025-10-27T01:35:04.5620723Z         Error: error deleting MongoDB Private Endpoints Connection(68febd235c665f6c63cf8f12): timeout while waiting for state to become 'DELETED, FAILED' (last state: 'DELETING', timeout: 1h0m0s)
2025-10-27T01:35:04.5621505Z         
2025-10-27T01:35:04.5621847Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3880.98s)
```

- 2025-10-28 PASS 8 minutes
- 2025-10-29 PASS 9 minutes
- 2025-10-30

### Error 2025-10-30T00:39:52+00:00
```
2025-10-30T00:39:52.0771975Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-30T00:39:52.0775800Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-30T00:39:52.0827931Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-30T00:39:52.0828600Z     resource_test.go:95: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:39:52.0829090Z         
2025-10-30T00:39:52.0829426Z         Error: error when destroying resource
2025-10-30T00:39:52.0829894Z         
2025-10-30T00:39:52.0830278Z         error deleting project (6902b113e2dc7470847b1e34):
2025-10-30T00:39:52.0830883Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b113e2dc7470847b1e34
2025-10-30T00:39:52.0831545Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:39:52.0832177Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:39:52.0832622Z         BadRequestDetail: 
2025-10-30T00:39:52.0833007Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (708.36s)
```

- 2025-10-31 PASS 12 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 8 minutes
- 2025-11-03 PASS 9 minutes
- 2025-11-04 PASS 10 minutes
- 2025-11-05
  - PASS 17 minutes
  - PASS 9 minutes
- 2025-11-06 PASS 11 minutes
- 2025-11-07 PASS 9 minutes
- 2025-11-08 PASS 9 minutes
- 2025-11-09 PASS 8 minutes
- 2025-11-10 PASS 9 minutes
- 2025-11-11 PASS 10 minutes
- 2025-11-12 PASS 10 minutes
- 2025-11-13
  - PASS 9 minutes
  - PASS 9 minutes
  - PASS 9 minutes