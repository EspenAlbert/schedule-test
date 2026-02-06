# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
# Found 38 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-17 00:32](#error-2026-01-17t0032530000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/696ad825bab4422df2999bb2/dataFederation | dev |  | 29.08s
[2026-01-22 00:36](#error-2026-01-22t0036270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/697170652097326e64f5f9da/dataFederation/test-acc-tf-5493101893164719278 | dev | flaky_500 | 63.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a minute
- 2026-01-09
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2026-01-10 PASS a minute
- 2026-01-11: MISSING
- 2026-01-12 PASS a minute
- 2026-01-13 PASS a minute
- 2026-01-14 PASS a minute
- 2026-01-15 PASS a minute
- 2026-01-16 PASS a minute
- 2026-01-17

### Error 2026-01-17T00:32:53+00:00
```
2026-01-17T00:32:53.0472611Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2026-01-17T00:32:53.0475482Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project (1): test-acc-tf-p-914776015611264536
2026-01-17T00:32:53.0490271Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2026-01-17T00:32:53.0509799Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2026-01-17T00:32:53.0510523Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2026-01-17T00:32:53.0511038Z         
2026-01-17T00:32:53.0513024Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/696ad825bab4422df2999bb2/dataFederation POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (696ad89beb83155461d17b66). Reason: Bad Request. Params: [696ad89beb83155461d17b66], BadRequestDetail: 
2026-01-17T00:32:53.0514393Z         
2026-01-17T00:32:53.0514768Z           with mongodbatlas_federated_database_instance.test,
2026-01-17T00:32:53.0515526Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2026-01-17T00:32:53.0516234Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2026-01-17T00:32:53.0516590Z         
2026-01-17T00:32:53.0516902Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (29.76s)
```

- 2026-01-18: MISSING
- 2026-01-19 PASS a minute
- 2026-01-20 PASS 59 seconds
- 2026-01-21 PASS a minute
- 2026-01-22

### Error 2026-01-22T00:36:27+00:00
```
2026-01-22T00:36:27.9423999Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2026-01-22T00:36:27.9426738Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project (1): test-acc-tf-p-1491689433051178156
2026-01-22T00:36:27.9443242Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2026-01-22T00:36:27.9467158Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2026-01-22T00:36:27.9468038Z     resource_cloud_provider_access_authorization_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-22T00:36:27.9468673Z         
2026-01-22T00:36:27.9470816Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-5493101893164719278): https://cloud-dev.mongodb.com/api/atlas/v2/groups/697170652097326e64f5f9da/dataFederation/test-acc-tf-5493101893164719278 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-22T00:36:27.9472472Z         
2026-01-22T00:36:27.9472809Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (63.11s)
```

- 2026-01-23
  - PASS a minute
  - PASS a minute
- 2026-01-24 PASS a minute
- 2026-01-25: MISSING
- 2026-01-26 PASS a minute
- 2026-01-27 PASS a minute
- 2026-01-28 PASS a minute
- 2026-01-29 PASS a minute
- 2026-01-30 PASS a minute
- 2026-01-31 PASS a minute
- 2026-02-01: MISSING
- 2026-02-02 PASS a minute
- 2026-02-03 PASS a minute
- 2026-02-04 PASS a minute
- 2026-02-05 PASS 59 seconds
- 2026-02-06 PASS a minute

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a minute
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS a minute
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS a minute
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS a minute
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS a minute
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS a minute
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2026-02-05: MISSING
- 2026-02-06: MISSING
