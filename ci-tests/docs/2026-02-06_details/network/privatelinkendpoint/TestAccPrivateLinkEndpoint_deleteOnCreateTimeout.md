# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_deleteOnCreateTimeout Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-03 00:47](#error-2026-02-03t0047140000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/698143b0e3c7fce2317daeb4/privateEndpoint/endpointService | dev | 3.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 5 seconds
- 2026-01-09 PASS 5 seconds
- 2026-01-10 PASS 6 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 4 seconds
- 2026-01-13 PASS 6 seconds
- 2026-01-14 PASS 4 seconds
- 2026-01-15 PASS 4 seconds
- 2026-01-16 PASS 4 seconds
- 2026-01-17 PASS 3 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 5 seconds
- 2026-01-20 PASS 5 seconds
- 2026-01-21 PASS 5 seconds
- 2026-01-22 PASS 4 seconds
- 2026-01-23 PASS 5 seconds
- 2026-01-24 PASS 5 seconds
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

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 4 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 5 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 5 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 5 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 4 seconds
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
