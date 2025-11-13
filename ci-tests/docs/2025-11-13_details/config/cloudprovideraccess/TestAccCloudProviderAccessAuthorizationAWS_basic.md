# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-13 00:30](#error-2025-11-13t0030040000) | API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation | dev | real_test_failure | 40.07s

## Timeline
- 2025-10-14: MISSING
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
- 2025-11-07 PASS a minute
- 2025-11-08 PASS a minute
- 2025-11-09 PASS a minute
- 2025-11-10 PASS a minute
- 2025-11-11 PASS a minute
- 2025-11-12 PASS a minute
- 2025-11-13
  - FAIL 40 seconds

### Error 2025-11-13T00:30:04+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T00:30:04.820000+00:00-TestAccCloudProviderAccessAuthorizationAWS_basic',confidence=1.0,ts_when='4 hours ago')
API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation
```
2025-11-13T00:30:04.8200881Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-11-13T00:30:04.8207706Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-7562370584416435598
2025-11-13T00:30:04.8227566Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-11-13T00:30:04.8268266Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-11-13T00:30:04.8269622Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-11-13T00:30:04.8270489Z         
2025-11-13T00:30:04.8277556Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691525fde22cff7a66575076/dataFederation POST: HTTP 400 Bad Request (Error code: "DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET") Detail: Data Federation cannot access the specified test S3 bucket (691525fde22cff7a66575076) via the provided IAM role. Ensure that the IAM role provides access to read the bucket's contents. ***. Reason: Bad Request. Params: [691525fde22cff7a66575076 *** Data Federation cannot retrieve the object metadata from the specified S3 bucket (***) with prefix (null)], BadRequestDetail: 
2025-11-13T00:30:04.8281310Z         
2025-11-13T00:30:04.8282183Z           with mongodbatlas_federated_database_instance.test,
2025-11-13T00:30:04.8283678Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-11-13T00:30:04.8284929Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-11-13T00:30:04.8285562Z         
2025-11-13T00:30:04.8286896Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (40.70s)
```

  - PASS a minute