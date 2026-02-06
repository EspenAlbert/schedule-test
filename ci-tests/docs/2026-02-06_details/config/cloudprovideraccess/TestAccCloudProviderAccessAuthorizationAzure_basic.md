# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAzure_basic Test Details
# Found 38 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-09 00:34](#error-2026-01-09t0034580000) | API Error CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/{groupId}/cloudProviderAccess | dev | real_test_failure | 8.02s
[2026-01-31 00:38](#error-2026-01-31t0038030000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/697d4e3b7d00588dcf9ea1ee/cloudProviderAccess | dev |  | 8.07s
[2026-02-02 00:41](#error-2026-02-02t0041380000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/697ff20c197cc66080b070ea/cloudProviderAccess | dev |  | 8.06s
[2026-02-03 00:42](#error-2026-02-03t0042130000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/698143b8b2e54ee995904ea1/cloudProviderAccess | dev |  | 7.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 seconds
- 2026-01-09
  - FAIL 8 seconds

### Error 2026-01-09T00:34:58+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2026-01-09T00:34:58.397000+00:00-TestAccCloudProviderAccessAuthorizationAzure_basic',confidence=1.0,ts_when='28 days ago')
API Error CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/{groupId}/cloudProviderAccess
```
2026-01-09T00:34:58.3977222Z === RUN   TestAccCloudProviderAccessAuthorizationAzure_basic
2026-01-09T00:34:58.3993082Z    test_name=TestAccCloudProviderAccessAuthorizationAzure_basic test_terraform_path=/home/runner/work/_temp/5d696a24-8ec2-44c2-b69f-1aee53fd72ea/terraform test_working_directory=/tmp/plugintest1893429153 test_step_number=1
2026-01-09T00:34:58.3994412Z     resource_cloud_provider_access_authorization_test.go:28: Step 1/1 error: Error running apply: exit status 1
2026-01-09T00:34:58.3995512Z         
2026-01-09T00:34:58.3997932Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69604c81f15fa9f1d48ca3c9/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-01-09T00:34:58.3999540Z         
2026-01-09T00:34:58.3999936Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-01-09T00:34:58.4000718Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-01-09T00:34:58.4001743Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-01-09T00:34:58.4002137Z         
2026-01-09T00:34:58.4002487Z --- FAIL: TestAccCloudProviderAccessAuthorizationAzure_basic (8.20s)
```

  - PASS 6 seconds
  - PASS 3 seconds
- 2026-01-10 PASS 6 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 6 seconds
- 2026-01-13 PASS 6 seconds
- 2026-01-14 PASS 3 seconds
- 2026-01-15 PASS 3 seconds
- 2026-01-16 PASS 5 seconds
- 2026-01-17 PASS 5 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 6 seconds
- 2026-01-20 PASS 5 seconds
- 2026-01-21 PASS 7 seconds
- 2026-01-22 PASS 6 seconds
- 2026-01-23
  - PASS 9 seconds
  - PASS 6 seconds
- 2026-01-24 PASS 6 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 6 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 5 seconds
- 2026-01-29 PASS 6 seconds
- 2026-01-30 PASS 6 seconds
- 2026-01-31

### Error 2026-01-31T00:38:03+00:00
```
2026-01-31T00:38:03.4987921Z === RUN   TestAccCloudProviderAccessAuthorizationAzure_basic
2026-01-31T00:38:03.5012525Z    test_name=TestAccCloudProviderAccessAuthorizationAzure_basic test_step_number=1
2026-01-31T00:38:03.5013530Z     resource_cloud_provider_access_authorization_test.go:28: Step 1/1 error: Error running apply: exit status 1
2026-01-31T00:38:03.5014299Z         
2026-01-31T00:38:03.5016986Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e3b7d00588dcf9ea1ee/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-01-31T00:38:03.5018907Z         
2026-01-31T00:38:03.5019407Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-01-31T00:38:03.5020326Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-01-31T00:38:03.5021259Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-01-31T00:38:03.5021771Z         
2026-01-31T00:38:03.5022180Z --- FAIL: TestAccCloudProviderAccessAuthorizationAzure_basic (8.70s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:41:38+00:00
```
2026-02-02T00:41:38.6339003Z === RUN   TestAccCloudProviderAccessAuthorizationAzure_basic
2026-02-02T00:41:38.6363300Z    test_name=TestAccCloudProviderAccessAuthorizationAzure_basic test_terraform_path=/home/runner/work/_temp/42b43058-fb29-4bc2-884e-50cc5a172b30/terraform test_working_directory=/tmp/plugintest2407418097 test_step_number=1
2026-02-02T00:41:38.6365678Z     resource_cloud_provider_access_authorization_test.go:28: Step 1/1 error: Error running apply: exit status 1
2026-02-02T00:41:38.6366586Z         
2026-02-02T00:41:38.6370890Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff20c197cc66080b070ea/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-02-02T00:41:38.6373879Z         
2026-02-02T00:41:38.6374568Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-02-02T00:41:38.6375976Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-02-02T00:41:38.6377306Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-02-02T00:41:38.6377950Z         
2026-02-02T00:41:38.6378530Z --- FAIL: TestAccCloudProviderAccessAuthorizationAzure_basic (8.57s)
```

- 2026-02-03

### Error 2026-02-03T00:42:13+00:00
```
2026-02-03T00:42:13.7268877Z === RUN   TestAccCloudProviderAccessAuthorizationAzure_basic
2026-02-03T00:42:13.7293297Z    test_name=TestAccCloudProviderAccessAuthorizationAzure_basic test_terraform_path=/home/runner/work/_temp/418d860f-fb2f-4ff7-885d-9d6c3ebe42f6/terraform test_working_directory=/tmp/plugintest1875480140 test_step_number=1
2026-02-03T00:42:13.7295793Z     resource_cloud_provider_access_authorization_test.go:28: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:42:13.7296705Z         
2026-02-03T00:42:13.7300827Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b8b2e54ee995904ea1/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-02-03T00:42:13.7303813Z         
2026-02-03T00:42:13.7304495Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-02-03T00:42:13.7305863Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-02-03T00:42:13.7307202Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-02-03T00:42:13.7307846Z         
2026-02-03T00:42:13.7308424Z --- FAIL: TestAccCloudProviderAccessAuthorizationAzure_basic (7.83s)
```

- 2026-02-04 PASS 8 seconds
- 2026-02-05 PASS 6 seconds
- 2026-02-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 6 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 6 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 6 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 6 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 6 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 3 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
