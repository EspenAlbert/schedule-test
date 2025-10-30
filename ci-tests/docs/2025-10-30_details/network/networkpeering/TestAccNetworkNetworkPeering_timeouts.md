# network/networkpeering/TestAccNetworkNetworkPeering_timeouts Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 39) FAIL
Success rate: 97.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:34](#error-2025-10-30t0034130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b115abf4374f3298c47a | dev | flaky_500 | 135.03s

## Timeline
- 2025-09-30 PASS 2 minutes
- 2025-10-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-10-02 PASS 2 minutes
- 2025-10-03 PASS 2 minutes
- 2025-10-04 PASS 2 minutes
- 2025-10-05 PASS 2 minutes
- 2025-10-06 PASS 2 minutes
- 2025-10-07 PASS 2 minutes
- 2025-10-08 PASS 2 minutes
- 2025-10-09 PASS 2 minutes
- 2025-10-10 PASS 2 minutes
- 2025-10-11 PASS 2 minutes
- 2025-10-12 PASS 2 minutes
- 2025-10-13 PASS 2 minutes
- 2025-10-14 PASS 2 minutes
- 2025-10-15 PASS 2 minutes
- 2025-10-16 PASS 2 minutes
- 2025-10-17 PASS 2 minutes
- 2025-10-18 PASS 2 minutes
- 2025-10-19 PASS 2 minutes
- 2025-10-20
  - PASS 2 minutes
  - PASS 4 minutes
- 2025-10-21 PASS 2 minutes
- 2025-10-22
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-10-23 PASS 2 minutes
- 2025-10-24 PASS 2 minutes
- 2025-10-25 PASS 2 minutes
- 2025-10-26 PASS 2 minutes
- 2025-10-27 PASS 2 minutes
- 2025-10-28 PASS 2 minutes
- 2025-10-29 PASS 2 minutes
- 2025-10-30

### Error 2025-10-30T00:34:13+00:00
```
2025-10-30T00:34:13.8303907Z === RUN   TestAccNetworkNetworkPeering_timeouts
2025-10-30T00:34:13.8306017Z === CONT  TestAccNetworkNetworkPeering_timeouts
2025-10-30T00:34:13.8329267Z === NAME  TestAccNetworkNetworkPeering_timeouts
2025-10-30T00:34:13.8330076Z     resource_test.go:212: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:34:13.8330595Z         
2025-10-30T00:34:13.8330941Z         Error: error when destroying resource
2025-10-30T00:34:13.8331267Z         
2025-10-30T00:34:13.8331650Z         error deleting project (6902b115abf4374f3298c47a):
2025-10-30T00:34:13.8332281Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b115abf4374f3298c47a
2025-10-30T00:34:13.8332951Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:34:13.8333593Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:34:13.8334179Z         BadRequestDetail: 
2025-10-30T00:34:13.8334542Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (135.29s)
```
