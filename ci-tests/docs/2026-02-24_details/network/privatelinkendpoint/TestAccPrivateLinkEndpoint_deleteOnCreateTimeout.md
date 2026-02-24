# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_deleteOnCreateTimeout Test Details
# Found 35 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-03 00:47](#error-2026-02-03t0047140000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/698143b0e3c7fce2317daeb4/privateEndpoint/endpointService | dev | 3.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 4 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 6 seconds
- 2026-01-29 PASS 6 seconds
- 2026-01-30 PASS 4 seconds
- 2026-01-31 PASS 7 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 4 seconds
- 2026-02-03

### Error 2026-02-03T00:47:14+00:00
```
2026-02-03T00:47:14.7542585Z === RUN   TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-02-03T00:47:14.7543309Z     resource_test.go:123: Creating execution project (1): test-acc-tf-p-1945420478545768155
2026-02-03T00:47:14.7546291Z === CONT  TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-02-03T00:47:14.7559898Z   
2026-02-03T00:47:14.7560478Z     resource_test.go:128: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:47:14.7561011Z         
2026-02-03T00:47:14.7562840Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b0e3c7fce2317daeb4/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-03T00:47:14.7564123Z         
2026-02-03T00:47:14.7564503Z           with mongodbatlas_privatelink_endpoint.test,
2026-02-03T00:47:14.7565241Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-02-03T00:47:14.7565939Z           12: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-02-03T00:47:14.7566447Z         
2026-02-03T00:47:14.7566778Z --- FAIL: TestAccPrivateLinkEndpoint_deleteOnCreateTimeout (3.49s)
```

- 2026-02-04 PASS 6 seconds
- 2026-02-05 PASS 4 seconds
- 2026-02-06 PASS 4 seconds
- 2026-02-07 PASS 8 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 8 seconds
- 2026-02-10 PASS 4 seconds
- 2026-02-11 PASS 4 seconds
- 2026-02-12 PASS 4 seconds
- 2026-02-13 PASS 4 seconds
- 2026-02-14 PASS 2 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 2 seconds
- 2026-02-17
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2026-02-18 PASS 2 seconds
- 2026-02-19 PASS 2 seconds
- 2026-02-20 PASS 2 seconds
- 2026-02-21 PASS 2 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 2 seconds
- 2026-02-24 PASS 2 seconds

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 4 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 4 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 5 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 2 seconds
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 2 seconds
  - PASS 2 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 2 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
