# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 09:36](#error-2025-09-08t0936070000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a8341d8a4987762202/dataFederation/test-acc-tf-4762442047135723754 | qa | flaky_500 | 124.02s
[2025-09-14 00:31](#error-2025-09-14t0031200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c391411d835e95b218f/dataFederation | qa | flaky_500 | 59.06s
[2025-09-15 06:23](#error-2025-09-15t0623280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b040d444485797b5d04b/dataFederation | qa | flaky_500 | 60.06s
[2025-09-21 00:32](#error-2025-09-21t0032220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf46e65ccc8c44171880d8/dataFederation | qa | flaky_500 | 68.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute
- 2025-09-05 PASS a minute
- 2025-09-06 PASS a minute
- 2025-09-07 PASS a minute
- 2025-09-08
  - PASS a minute
  - FAIL 2 minutes

### Error 2025-09-08T09:36:07+00:00
```
2025-09-08T09:36:07.0249467Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-08T09:36:07.0253663Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-1071293585358273675
2025-09-08T09:36:07.0282217Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-08T09:36:07.0305862Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-08T09:36:07.0306637Z     resource_cloud_provider_access_authorization_test.go:17: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-09-08T09:36:07.0307158Z         
2025-09-08T09:36:07.0309334Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-4762442047135723754): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a8341d8a4987762202/dataFederation/test-acc-tf-4762442047135723754 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-08T09:36:07.0310825Z         
2025-09-08T09:36:07.0311200Z           with mongodbatlas_federated_database_instance.test,
2025-09-08T09:36:07.0311931Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-08T09:36:07.0312601Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-08T09:36:07.0312943Z         
2025-09-08T09:36:07.0313268Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (124.21s)
```

  - PASS a minute
- 2025-09-09 PASS a minute
- 2025-09-10 PASS a minute
- 2025-09-11 PASS a minute
- 2025-09-12 PASS a minute
- 2025-09-13 PASS 4 minutes
- 2025-09-14

### Error 2025-09-14T00:31:20+00:00
```
2025-09-14T00:31:20.4404131Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-14T00:31:20.4405456Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-1016619595814820723
2025-09-14T00:31:20.4419819Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-14T00:31:20.4439767Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-14T00:31:20.4440447Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:31:20.4440910Z         
2025-09-14T00:31:20.4442561Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c391411d835e95b218f/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-14T00:31:20.4443724Z         
2025-09-14T00:31:20.4444099Z           with mongodbatlas_federated_database_instance.test,
2025-09-14T00:31:20.4444974Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-14T00:31:20.4445651Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-14T00:31:20.4445994Z         
2025-09-14T00:31:20.4446306Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (59.57s)
```

- 2025-09-15
  - PASS a minute
  - FAIL a minute

### Error 2025-09-15T06:23:28+00:00
```
2025-09-15T06:23:28.1895477Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-15T06:23:28.1896882Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-8592959467625354563
2025-09-15T06:23:28.1917818Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-15T06:23:28.1951718Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-15T06:23:28.1953212Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:23:28.1954047Z         
2025-09-15T06:23:28.1957158Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b040d444485797b5d04b/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-15T06:23:28.1959272Z         
2025-09-15T06:23:28.1959931Z           with mongodbatlas_federated_database_instance.test,
2025-09-15T06:23:28.1961386Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-15T06:23:28.1962741Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-15T06:23:28.1963339Z         
2025-09-15T06:23:28.1963873Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (60.56s)
```

- 2025-09-16 PASS a minute
- 2025-09-17 PASS a minute
- 2025-09-18 PASS a minute
- 2025-09-19 PASS a minute
- 2025-09-20 PASS a minute
- 2025-09-21

### Error 2025-09-21T00:32:22+00:00
```
2025-09-21T00:32:22.2105697Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-21T00:32:22.2107095Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-3666924981009411091
2025-09-21T00:32:22.2125939Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-21T00:32:22.2163273Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-09-21T00:32:22.2163995Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-09-21T00:32:22.2164480Z         
2025-09-21T00:32:22.2166411Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46e65ccc8c44171880d8/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-21T00:32:22.2167604Z         
2025-09-21T00:32:22.2167999Z           with mongodbatlas_federated_database_instance.test,
2025-09-21T00:32:22.2168737Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-21T00:32:22.2169423Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-21T00:32:22.2169760Z         
2025-09-21T00:32:22.2170079Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (68.79s)
```

- 2025-09-22 PASS a minute
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS a minute
- 2025-09-28 PASS a minute
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-02 PASS a minute