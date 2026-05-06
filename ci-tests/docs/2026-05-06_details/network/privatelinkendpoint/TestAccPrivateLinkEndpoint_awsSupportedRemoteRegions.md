# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions Test Details
# Found 25 TestRuns in dev, qa from 2026-04-17 to 2026-05-06 from master branch: 1 unique tests, PASS(x 24) FAIL
Success rate: 96.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-18 00:52](#error-2026-04-18t0052320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69e2d3e7eb355eaa1b2ea18e/privateEndpoint/endpointService | dev | flaky_500 | 2.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08: MISSING
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17 PASS 9 minutes
- 2026-04-18

### Error 2026-04-18T00:52:32+00:00
```
2026-04-18T00:52:32.4778035Z === RUN   TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions
2026-04-18T00:52:32.4786833Z === CONT  TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions
2026-04-18T00:52:32.4840047Z === NAME  TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions
2026-04-18T00:52:32.4840631Z     resource_test.go:171: Step 1/7 error: Error running apply: exit status 1
2026-04-18T00:52:32.4841042Z         
2026-04-18T00:52:32.4843177Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e2d3e7eb355eaa1b2ea18e/privateEndpoint/endpointService POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:52:32.4844494Z         
2026-04-18T00:52:32.4845010Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-18T00:52:32.4845763Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-18T00:52:32.4846469Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-18T00:52:32.4846828Z         
2026-04-18T00:52:32.4854261Z    test_step_number=1 test_name=TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-04-18T00:52:32.4863725Z --- FAIL: TestAccPrivateLinkEndpoint_awsSupportedRemoteRegions (2.34s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 9 minutes
- 2026-04-21 PASS 10 minutes
- 2026-04-22 PASS 40 minutes
- 2026-04-23 PASS 9 minutes
- 2026-04-24 PASS 9 minutes
- 2026-04-25 PASS 9 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 10 minutes
- 2026-04-28 PASS 8 minutes
- 2026-04-29 PASS 8 minutes
- 2026-04-30 PASS 10 minutes
- 2026-05-01 PASS 10 minutes
- 2026-05-02 PASS 9 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 8 minutes
- 2026-05-05 PASS 10 minutes
- 2026-05-06 PASS 9 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08: MISSING
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 10 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 11 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 11 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 10 minutes
- 2026-05-04
  - PASS 8 minutes
  - PASS 10 minutes
- 2026-05-05 PASS 8 minutes
- 2026-05-06 PASS 10 minutes
