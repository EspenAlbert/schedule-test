# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointGCP_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 01:40](#error-2025-10-09t0140180000) |  | dev | timeout | 4394.00s
[2025-10-12 01:32](#error-2025-10-12t0132410000) |  | qa | timeout | 3838.04s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 8 minutes
- 2025-09-24 PASS 9 minutes
- 2025-09-25 PASS 8 minutes
- 2025-09-26 PASS 9 minutes
- 2025-09-27 PASS 9 minutes
- 2025-09-28 PASS 8 minutes
- 2025-09-29 PASS 12 minutes
- 2025-09-30
  - PASS 7 minutes
  - PASS 8 minutes
  - PASS 7 minutes
  - PASS 9 minutes
- 2025-10-01
  - PASS 9 minutes
  - PASS 7 minutes
  - PASS 9 minutes
  - PASS 9 minutes
  - PASS 8 minutes
  - PASS 9 minutes
  - PASS 11 minutes
  - PASS 8 minutes
- 2025-10-02 PASS 10 minutes
- 2025-10-03 PASS 10 minutes
- 2025-10-04 PASS 11 minutes
- 2025-10-05 PASS 7 minutes
- 2025-10-06 PASS 7 minutes
- 2025-10-07 PASS 13 minutes
- 2025-10-08 PASS 10 minutes
- 2025-10-09

### Error 2025-10-09T01:40:18+00:00
```
2025-10-09T01:40:18.2691126Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-09T01:40:18.2694428Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-09T01:40:18.2726248Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-09T01:40:18.2727047Z     resource_test.go:95: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-09T01:40:18.2727622Z         
2025-10-09T01:40:18.2728807Z         Error: error deleting MongoDB Private Endpoints Connection(68e7015bc2a3cd16930402fc): timeout while waiting for state to become 'DELETED, FAILED' (last state: 'DELETING', timeout: 1h0m0s)
2025-10-09T01:40:18.2729837Z         
2025-10-09T01:40:18.2730196Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (4394.03s)
```

- 2025-10-10 PASS 14 minutes
- 2025-10-11 PASS 11 minutes
- 2025-10-12

### Error 2025-10-12T01:32:41+00:00
```
2025-10-12T01:32:41.4957874Z === RUN   TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-12T01:32:41.4963254Z === CONT  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-12T01:32:41.4992948Z === NAME  TestAccNetworkRSPrivateLinkEndpointGCP_basic
2025-10-12T01:32:41.4994120Z     resource_test.go:95: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-12T01:32:41.4994951Z         
2025-10-12T01:32:41.4996877Z         Error: error deleting MongoDB Private Endpoints Connection(68eaf63e454e3b49aeac188a): timeout while waiting for state to become 'DELETED, FAILED' (last state: 'DELETING', timeout: 1h0m0s)
2025-10-12T01:32:41.4998198Z         
2025-10-12T01:32:41.4998952Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointGCP_basic (3838.43s)
```

- 2025-10-13 PASS 10 minutes
- 2025-10-14 PASS 9 minutes
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