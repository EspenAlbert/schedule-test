# network/privateendpointregionalmode/TestMigPrivateEndpointRegionalMode_basic Test Details
# Found 17 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 16) FAIL
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-27 01:15](#error-2026-05-27t0115060000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a16429e05489c7dc3cd89dc/clusters | dev | flaky_500 | 70.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS a minute
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS a minute
- 2026-05-12: MISSING
- 2026-05-13 PASS a minute
- 2026-05-14: MISSING
- 2026-05-15 PASS a minute
- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS a minute
- 2026-05-19: MISSING
- 2026-05-20 PASS a minute
- 2026-05-21: MISSING
- 2026-05-22 PASS a minute
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS a minute
- 2026-05-26: MISSING
- 2026-05-27

### Error 2026-05-27T01:15:06+00:00
```
2026-05-27T01:15:06.2445351Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2026-05-27T01:15:06.2447995Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2026-05-27T01:15:06.2470222Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2026-05-27T01:15:06.2470876Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-05-27T01:15:06.2471306Z         
2026-05-27T01:15:06.2472715Z         Error: error updating MongoDB Group `6a16429e05489c7dc3cd89dc` Private Endpoints Regional Mode: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a16429e05489c7dc3cd89dc/clusters GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-27T01:15:06.2473702Z         
2026-05-27T01:15:06.2474045Z           with mongodbatlas_private_endpoint_regional_mode.test,
2026-05-27T01:15:06.2474675Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_private_endpoint_regional_mode" "test":
2026-05-27T01:15:06.2475277Z           19: 		resource "mongodbatlas_private_endpoint_regional_mode" "test" {
2026-05-27T01:15:06.2475765Z         
2026-05-27T01:15:06.2476417Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (70.73s)
```

- 2026-05-28: MISSING
- 2026-05-29 PASS a minute
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS a minute
- 2026-06-02: MISSING
- 2026-06-03 PASS a minute
- 2026-06-04: MISSING
- 2026-06-05 PASS a minute

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a minute
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
