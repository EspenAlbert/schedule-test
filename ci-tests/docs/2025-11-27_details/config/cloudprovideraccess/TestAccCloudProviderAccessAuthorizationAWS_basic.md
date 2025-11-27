# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-13 00:30](#error-2025-11-13t0030040000) | API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation | dev | real_test_failure | 40.07s
[2025-11-14 00:30](#error-2025-11-14t0030510000) | API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation | dev | real_test_failure | 44.02s
[2025-11-18 00:30](#error-2025-11-18t0030250000) | API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/dataFederation | dev | unknown | 26.00s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS a minute
- 2025-10-30 PASS a minute
- 2025-10-31 PASS a minute
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS a minute
- 2025-11-04 PASS a minute
- 2025-11-05
  - PASS a minute
  - PASS a minute
- 2025-11-06 PASS a minute
- 2025-11-07 PASS a minute
- 2025-11-08 PASS a minute
- 2025-11-09: MISSING
- 2025-11-10 PASS a minute
- 2025-11-11 PASS a minute
- 2025-11-12 PASS a minute
- 2025-11-13

### Error 2025-11-13T00:30:04+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-11-13T00:30:04.820000+00:00-TestAccCloudProviderAccessAuthorizationAWS_basic',confidence=1.0,ts_when='14 days ago')
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

- 2025-11-14

### Error 2025-11-14T00:30:51+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-11-14T00:30:51.613000+00:00-TestAccCloudProviderAccessAuthorizationAWS_basic',confidence=1.0,ts_when='13 days ago')
API Error DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET /api/atlas/v2/groups/{groupId}/dataFederation
```
2025-11-14T00:30:51.6139144Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-11-14T00:30:51.6141940Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-2918148610916699145
2025-11-14T00:30:51.6163668Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-11-14T00:30:51.6207680Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-11-14T00:30:51.6208979Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-11-14T00:30:51.6209881Z         
2025-11-14T00:30:51.6217099Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691677a6aecdd843bb082f49/dataFederation POST: HTTP 400 Bad Request (Error code: "DATA_FEDERATION_CANNOT_ACCESS_TEST_S3_BUCKET") Detail: Data Federation cannot access the specified test S3 bucket (691677a6aecdd843bb082f49) via the provided IAM role. Ensure that the IAM role provides access to read the bucket's contents. ***. Reason: Bad Request. Params: [691677a6aecdd843bb082f49 *** Data Federation cannot retrieve the object metadata from the specified S3 bucket (***) with prefix (null)], BadRequestDetail: 
2025-11-14T00:30:51.6220973Z         
2025-11-14T00:30:51.6221713Z           with mongodbatlas_federated_database_instance.test,
2025-11-14T00:30:51.6223114Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-11-14T00:30:51.6224366Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-11-14T00:30:51.6224957Z         
2025-11-14T00:30:51.6225687Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (44.22s)
```

- 2025-11-15 PASS a minute
- 2025-11-16: MISSING
- 2025-11-17 PASS a minute
- 2025-11-18

### Error 2025-11-18T00:30:25+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-11-18T00:30:25.790000+00:00-TestAccCloudProviderAccessAuthorizationAWS_basic',confidence=1.0,ts_when='9 days ago')
API Error CANNOT_ASSUME_ROLE /api/atlas/v2/groups/{groupId}/dataFederation
```
2025-11-18T00:30:25.7900887Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-11-18T00:30:25.7904956Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-1690580454755866034
2025-11-18T00:30:25.7919660Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-11-18T00:30:25.7938628Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-11-18T00:30:25.7939370Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-11-18T00:30:25.7939848Z         
2025-11-18T00:30:25.7941978Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/691bbd9049da6618f2343ccd/dataFederation POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (691bbe05a85be77e23f39139). Reason: Bad Request. Params: [691bbe05a85be77e23f39139], BadRequestDetail: 
2025-11-18T00:30:25.7943378Z         
2025-11-18T00:30:25.7943973Z           with mongodbatlas_federated_database_instance.test,
2025-11-18T00:30:25.7944773Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-11-18T00:30:25.7945506Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-11-18T00:30:25.7945844Z         
2025-11-18T00:30:25.7946167Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (26.01s)
```

- 2025-11-19 PASS a minute
- 2025-11-20 PASS a minute
- 2025-11-21 PASS a minute
- 2025-11-22 PASS 59 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS a minute
- 2025-11-25 PASS a minute
- 2025-11-26 PASS a minute
- 2025-11-27 PASS 59 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS a minute
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS a minute
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS a minute
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS a minute
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
