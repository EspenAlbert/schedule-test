# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:33](#error-2025-07-06t0033170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c3fd7267b5775b682780/dataFederation | qa | flaky_500 | 75.03s
[2025-07-10 13:08](#error-2025-07-10t1308210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbaff006d8d55bb9e650c/dataFederation | qa | flaky_500 | 64.03s
[2025-07-20 00:35](#error-2025-07-20t0035100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3933426db7026b5b1483/dataFederation/test-acc-tf-923601083881615927 | qa | flaky_500 | 134.02s
[2025-07-23 13:25](#error-2025-07-23t1325360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880e2430afa8a5c60505e38/dataFederation/test-acc-tf-6163684574709203512 | qa | flaky_500 | 135.08s
[2025-07-27 00:35](#error-2025-07-27t0035480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573d8ef1f7377717a889e/dataFederation/test-acc-tf-6043079116874865620 | qa | flaky_500 | 134.03s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:33:17+00:00
```
2025-07-06T00:33:17.8149666Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-06T00:33:17.8151415Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-2455723482815305701
2025-07-06T00:33:17.8175271Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-06T00:33:17.8218159Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-06T00:33:17.8219380Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:33:17.8220275Z         
2025-07-06T00:33:17.8223334Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c3fd7267b5775b682780/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-06T00:33:17.8225624Z         
2025-07-06T00:33:17.8226344Z           with mongodbatlas_federated_database_instance.test,
2025-07-06T00:33:17.8227603Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-06T00:33:17.8228756Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-06T00:33:17.8229324Z         
2025-07-06T00:33:17.8229833Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (75.33s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10
  - PASS a minute
  - FAIL a minute

### Error 2025-07-10T13:08:21+00:00
```
2025-07-10T13:08:21.0577775Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-10T13:08:21.0582050Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-7157504977098925937
2025-07-10T13:08:21.0632917Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-10T13:08:21.0772471Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-10T13:08:21.0773678Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:08:21.0774494Z         
2025-07-10T13:08:21.0777598Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbaff006d8d55bb9e650c/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-10T13:08:21.0888782Z         
2025-07-10T13:08:21.0890026Z           with mongodbatlas_federated_database_instance.test,
2025-07-10T13:08:21.0891367Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-10T13:08:21.0892820Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-10T13:08:21.0893438Z         
2025-07-10T13:08:21.0894070Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (64.32s)
```

- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13 PASS 2 minutes
- 2025-07-14 PASS a minute
- 2025-07-15 PASS a minute
- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20

### Error 2025-07-20T00:35:10+00:00
```
2025-07-20T00:35:10.2414193Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-20T00:35:10.2417018Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-5671600869487267288
2025-07-20T00:35:10.2424152Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-20T00:35:10.2446612Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-20T00:35:10.2447433Z     resource_cloud_provider_access_authorization_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-20T00:35:10.2447993Z         
2025-07-20T00:35:10.2449978Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-923601083881615927): https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3933426db7026b5b1483/dataFederation/test-acc-tf-923601083881615927 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-20T00:35:10.2451515Z         
2025-07-20T00:35:10.2451829Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (134.22s)
```

- 2025-07-21 PASS a minute
- 2025-07-22 PASS 2 minutes
- 2025-07-23
  - PASS a minute
  - PASS 2 minutes
  - FAIL 2 minutes

### Error 2025-07-23T13:25:36+00:00
```
2025-07-23T13:25:36.7591076Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-23T13:25:36.7594319Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-5869031547689697080
2025-07-23T13:25:36.7600347Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-23T13:25:36.7623060Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-23T13:25:36.7623959Z     resource_cloud_provider_access_authorization_test.go:17: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-23T13:25:36.7625055Z         
2025-07-23T13:25:36.7627092Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-6163684574709203512): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880e2430afa8a5c60505e38/dataFederation/test-acc-tf-6163684574709203512 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-23T13:25:36.7628650Z         
2025-07-23T13:25:36.7628984Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (135.81s)
```

- 2025-07-24 PASS a minute
- 2025-07-25 PASS a minute
- 2025-07-26 PASS a minute
- 2025-07-27

### Error 2025-07-27T00:35:48+00:00
```
2025-07-27T00:35:48.5293183Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-27T00:35:48.5308429Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-7640676487898530849
2025-07-27T00:35:48.5317531Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-27T00:35:48.5365280Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-27T00:35:48.5367096Z     resource_cloud_provider_access_authorization_test.go:17: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-07-27T00:35:48.5367995Z         
2025-07-27T00:35:48.5371948Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-6043079116874865620): https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573d8ef1f7377717a889e/dataFederation/test-acc-tf-6043079116874865620 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-27T00:35:48.5374747Z         
2025-07-27T00:35:48.5375599Z           with mongodbatlas_federated_database_instance.test,
2025-07-27T00:35:48.5377235Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-27T00:35:48.5378443Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-27T00:35:48.5379040Z         
2025-07-27T00:35:48.5379591Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (134.35s)
```

- 2025-07-28 PASS a minute
- 2025-07-29 PASS a minute
- 2025-07-30 PASS a minute
- 2025-07-31 PASS a minute