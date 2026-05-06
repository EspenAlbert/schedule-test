# network/privatelinkendpointservice/TestAccPrivateLinkEndpointService_deleteOnCreateTimeout Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-16 01:01](#error-2026-04-16t0101240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e032c81ec945fedc72a799/privateEndpoint/endpointService | dev | 0.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 3 minutes
- 2026-04-08 PASS 3 minutes
- 2026-04-09 PASS 3 minutes
- 2026-04-10 PASS 4 minutes
- 2026-04-11 PASS 4 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 3 minutes
- 2026-04-14 PASS 3 minutes
- 2026-04-15 PASS 3 minutes
- 2026-04-16

### Error 2026-04-16T01:01:24+00:00
```
2026-04-16T01:01:24.7933483Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-04-16T01:01:24.7936098Z === CONT  TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-04-16T01:01:24.7999209Z === NAME  TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-04-16T01:01:24.8000132Z     resource_test.go:70: Step 1/2, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T01:01:24.8000668Z         
2026-04-16T01:01:24.8002726Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032c81ec945fedc72a799/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-16T01:01:24.8004031Z         
2026-04-16T01:01:24.8004421Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-16T01:01:24.8005160Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-16T01:01:24.8005861Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-16T01:01:24.8006227Z         
2026-04-16T01:01:24.8007086Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (0.67s)
```

- 2026-04-17 PASS 3 minutes
- 2026-04-18 PASS 3 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 minutes
- 2026-04-21 PASS 3 minutes
- 2026-04-22 PASS 32 minutes
- 2026-04-23 PASS 3 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 3 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 minutes
- 2026-04-28 PASS 3 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30 PASS 4 minutes
- 2026-05-01 PASS 3 minutes
- 2026-05-02 PASS 3 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 minutes
- 2026-05-05 PASS 3 minutes
- 2026-05-06 PASS 4 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 4 minutes
  - PASS 3 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 3 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 4 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 minutes
- 2026-05-04
  - PASS 4 minutes
  - PASS 3 minutes
- 2026-05-05 PASS 3 minutes
- 2026-05-06 PASS 4 minutes
