# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-11 00:33](#error-2025-12-11t0033380000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/693a10cd7e4083401753ea64/dataFederation | dev | 28.00s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS a minute
- 2025-12-05 PASS a minute
- 2025-12-06 PASS a minute
- 2025-12-07: MISSING
- 2025-12-08 PASS a minute
- 2025-12-09 PASS a minute
- 2025-12-10
  - PASS a minute
  - PASS a minute
- 2025-12-11

### Error 2025-12-11T00:33:38+00:00
```
2025-12-11T00:33:38.8414707Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-12-11T00:33:38.8417855Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-2948632316252714703
2025-12-11T00:33:38.8436720Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-12-11T00:33:38.8468606Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-12-11T00:33:38.8469919Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-12-11T00:33:38.8470743Z         
2025-12-11T00:33:38.8474099Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/693a10cd7e4083401753ea64/dataFederation POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (693a11487e4083401755ba4d). Reason: Bad Request. Params: [693a11487e4083401755ba4d], BadRequestDetail: 
2025-12-11T00:33:38.8476379Z         
2025-12-11T00:33:38.8477049Z           with mongodbatlas_federated_database_instance.test,
2025-12-11T00:33:38.8478341Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-12-11T00:33:38.8479530Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-12-11T00:33:38.8480108Z         
2025-12-11T00:33:38.8480665Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (28.05s)
```

- 2025-12-12 PASS a minute
- 2025-12-13 PASS a minute
- 2025-12-14: MISSING
- 2025-12-15 PASS a minute
- 2025-12-16 PASS a minute
- 2025-12-17 PASS a minute
- 2025-12-18 PASS a minute
- 2025-12-19 PASS a minute
- 2025-12-20 PASS a minute
- 2025-12-21: MISSING
- 2025-12-22 PASS a minute
- 2025-12-23 PASS a minute
- 2025-12-24 PASS a minute
- 2025-12-25 PASS a minute
- 2025-12-26 PASS a minute
- 2025-12-27 PASS 59 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS a minute
- 2025-12-31 PASS a minute
- 2026-01-01 PASS a minute
- 2026-01-02 PASS a minute

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS a minute
- 2025-12-08: MISSING
- 2025-12-09 PASS a minute
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS a minute
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a minute
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS a minute
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
