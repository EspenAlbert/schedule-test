# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 00:31](#error-2025-10-12t0031220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68eaf635bae6807c75495425/dataFederation | qa | flaky_500 | 59.07s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS a minute
- 2025-10-09 PASS a minute
- 2025-10-10 PASS a minute
- 2025-10-11 PASS a minute
- 2025-10-12

### Error 2025-10-12T00:31:22+00:00
```
2025-10-12T00:31:22.1224346Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-10-12T00:31:22.1225796Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-1023982216232873383
2025-10-12T00:31:22.1240100Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-10-12T00:31:22.1259736Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-10-12T00:31:22.1260444Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-10-12T00:31:22.1260920Z         
2025-10-12T00:31:22.1262590Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf635bae6807c75495425/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-12T00:31:22.1263753Z         
2025-10-12T00:31:22.1264135Z           with mongodbatlas_federated_database_instance.test,
2025-10-12T00:31:22.1264870Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-10-12T00:31:22.1265541Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-10-12T00:31:22.1265893Z         
2025-10-12T00:31:22.1266211Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (59.72s)
```

- 2025-10-13 PASS a minute
- 2025-10-14 PASS a minute
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18 PASS a minute
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS a minute
  - PASS 57 seconds
- 2025-10-21 PASS 58 seconds
- 2025-10-22
  - PASS a minute
  - PASS a minute
- 2025-10-23 PASS a minute
- 2025-10-24 PASS a minute
- 2025-10-25 PASS 58 seconds
- 2025-10-26 PASS a minute
- 2025-10-27 PASS a minute
- 2025-10-28 PASS a minute
- 2025-10-29 PASS a minute
- 2025-10-30 PASS a minute
- 2025-10-31 PASS a minute
- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03 PASS a minute
- 2025-11-04 PASS a minute
- 2025-11-05
  - PASS a minute
  - PASS a minute
- 2025-11-06 PASS a minute