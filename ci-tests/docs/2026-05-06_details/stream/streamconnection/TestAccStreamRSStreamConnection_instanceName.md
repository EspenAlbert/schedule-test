# stream/streamconnection/TestAccStreamRSStreamConnection_instanceName Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 04:23](#error-2026-04-07t0423270000) |  | dev | timeout | 10802.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T04:23:27+00:00
```
2026-04-07T04:23:27.1257350Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-04-07T04:23:27.1266344Z === CONT  TestAccStreamRSStreamConnection_instanceName
2026-04-07T04:23:27.1324563Z === NAME  TestAccStreamRSStreamConnection_instanceName
2026-04-07T04:23:27.1325676Z     resource_stream_connection_test.go:532: Step 1/2 error: Error running apply: exit status 1
2026-04-07T04:23:27.1326476Z         
2026-04-07T04:23:27.1327155Z         Error: error waiting for stream connection to be ready
2026-04-07T04:23:27.1327741Z         
2026-04-07T04:23:27.1328342Z           with mongodbatlas_stream_connection.test,
2026-04-07T04:23:27.1329576Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-04-07T04:23:27.1330742Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-04-07T04:23:27.1331342Z         
2026-04-07T04:23:27.1332307Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-04-07T04:23:27.1333865Z         'NOT_FOUND', timeout: 3h0m0s)
2026-04-07T04:23:27.1334576Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (10802.51s)
```

- 2026-04-08 PASS 6 seconds
- 2026-04-09 PASS 4 seconds
- 2026-04-10 PASS 7 seconds
- 2026-04-11 PASS 5 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 5 seconds
- 2026-04-14 PASS 5 seconds
- 2026-04-15 PASS 7 seconds
- 2026-04-16 PASS 5 seconds
- 2026-04-17 PASS 6 seconds
- 2026-04-18 PASS 4 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 5 seconds
- 2026-04-21 PASS 4 seconds
- 2026-04-22 PASS 8 seconds
- 2026-04-23 PASS 6 seconds
- 2026-04-24 PASS 6 seconds
- 2026-04-25 PASS 6 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 6 seconds
- 2026-04-28 PASS 6 seconds
- 2026-04-29 PASS 7 seconds
- 2026-04-30
  - PASS 5 seconds
  - PASS 6 seconds
- 2026-05-01 PASS 6 seconds
- 2026-05-02 PASS 7 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 8 seconds
- 2026-05-05 PASS 5 seconds
- 2026-05-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 7 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 5 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 5 seconds
  - PASS 8 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 6 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 seconds
- 2026-05-04
  - PASS 7 seconds
  - PASS 6 seconds
- 2026-05-05 PASS 6 seconds
- 2026-05-06 PASS 6 seconds
