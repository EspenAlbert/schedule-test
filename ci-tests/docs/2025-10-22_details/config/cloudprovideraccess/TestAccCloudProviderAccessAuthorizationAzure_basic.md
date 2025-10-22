# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAzure_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-25 00:29](#error-2025-09-25t0029480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68d48c4a8256687520047d11/cloudProviderAccess | dev | flaky_500 | 0.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 5 seconds
- 2025-09-24 PASS 6 seconds
- 2025-09-25

### Error 2025-09-25T00:29:48+00:00
```
2025-09-25T00:29:48.9383485Z === RUN   TestAccCloudProviderAccessAuthorizationAzure_basic
2025-09-25T00:29:48.9399695Z   
2025-09-25T00:29:48.9400276Z     resource_cloud_provider_access_authorization_test.go:28: Step 1/1 error: Error running apply: exit status 1
2025-09-25T00:29:48.9400766Z         
2025-09-25T00:29:48.9402413Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d48c4a8256687520047d11/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-25T00:29:48.9403553Z         
2025-09-25T00:29:48.9403944Z           with mongodbatlas_cloud_provider_access_setup.test,
2025-09-25T00:29:48.9404855Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2025-09-25T00:29:48.9405552Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2025-09-25T00:29:48.9405909Z         
2025-09-25T00:29:48.9406237Z --- FAIL: TestAccCloudProviderAccessAuthorizationAzure_basic (0.55s)
```

- 2025-09-26 PASS 5 seconds
- 2025-09-27 PASS 5 seconds
- 2025-09-28 PASS 5 seconds
- 2025-09-29 PASS 8 seconds
- 2025-09-30
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 2 seconds
- 2025-10-01
  - PASS 2 seconds
  - PASS 8 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-10-02 PASS 5 seconds
- 2025-10-03 PASS 8 seconds
- 2025-10-04 PASS 5 seconds
- 2025-10-05 PASS 5 seconds
- 2025-10-06 PASS 3 seconds
- 2025-10-07 PASS 7 seconds
- 2025-10-08 PASS 2 seconds
- 2025-10-09 PASS 8 seconds
- 2025-10-10 PASS 6 seconds
- 2025-10-11 PASS 5 seconds
- 2025-10-12 PASS 6 seconds
- 2025-10-13 PASS 6 seconds
- 2025-10-14 PASS 6 seconds
- 2025-10-15 PASS 5 seconds
- 2025-10-16 PASS 4 seconds
- 2025-10-17 PASS 6 seconds
- 2025-10-18 PASS 6 seconds
- 2025-10-19 PASS 8 seconds
- 2025-10-20
  - PASS 6 seconds
  - PASS 3 seconds
- 2025-10-21 PASS 5 seconds
- 2025-10-22
  - PASS 3 seconds
  - PASS 6 seconds