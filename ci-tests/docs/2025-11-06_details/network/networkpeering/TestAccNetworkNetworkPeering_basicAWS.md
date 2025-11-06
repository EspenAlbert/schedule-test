# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:32](#error-2025-10-20t1032360000) |  | dev |  | 374.10s
[2025-10-30 00:34](#error-2025-10-30t0034130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b115abf4374f3298c461 | dev | flaky_500 | 171.09s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 3 minutes
- 2025-10-09 PASS 4 minutes
- 2025-10-10 PASS 5 minutes
- 2025-10-11 PASS 3 minutes
- 2025-10-12 PASS 3 minutes
- 2025-10-13 PASS 2 minutes
- 2025-10-14 PASS 2 minutes
- 2025-10-15 PASS 2 minutes
- 2025-10-16 PASS 3 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19 PASS 3 minutes
- 2025-10-20
  - PASS 2 minutes
  - FAIL 6 minutes

### Error 2025-10-20T10:32:36+00:00
```
2025-10-20T10:32:36.9651637Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-10-20T10:32:36.9663383Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-10-20T10:32:36.9696492Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-10-20T10:32:36.9697635Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-20T10:32:36.9698435Z         
2025-10-20T10:32:36.9699310Z         Error: error deleting MongoDB Network Peering Container (68f60e525a13b66d7cb68d1e): couldn't find resource (21 retries)
2025-10-20T10:32:36.9700155Z         
2025-10-20T10:32:36.9700512Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (374.97s)
```

- 2025-10-21 PASS 2 minutes
- 2025-10-22
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-10-23 PASS 2 minutes
- 2025-10-24 PASS 3 minutes
- 2025-10-25 PASS 3 minutes
- 2025-10-26 PASS 3 minutes
- 2025-10-27 PASS 3 minutes
- 2025-10-28 PASS 2 minutes
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
- 2025-11-02 PASS 2 minutes
- 2025-11-03 PASS 3 minutes
- 2025-11-04 PASS 3 minutes
- 2025-11-05
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-11-06 PASS 2 minutes