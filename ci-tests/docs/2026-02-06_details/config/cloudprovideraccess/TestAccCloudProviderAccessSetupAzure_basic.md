# config/cloudprovideraccess/TestAccCloudProviderAccessSetupAzure_basic Test Details
# Found 38 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-09 00:34](#error-2026-01-09t0034580000) | API Error CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/{groupId}/cloudProviderAccess | dev | real_test_failure | 5.01s
[2026-01-31 00:38](#error-2026-01-31t0038030000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/697d4e3b7d00588dcf9ea1ee/cloudProviderAccess | dev |  | 5.00s
[2026-02-02 00:41](#error-2026-02-02t0041380000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/697ff20c197cc66080b070ea/cloudProviderAccess | dev |  | 5.04s
[2026-02-03 00:42](#error-2026-02-03t0042130000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/698143b8b2e54ee995904ea1/cloudProviderAccess | dev |  | 5.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 seconds
- 2026-01-09
  - FAIL 5 seconds

### Error 2026-01-09T00:34:58+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2026-01-09T00:34:58.401000+00:00-TestAccCloudProviderAccessSetupAzure_basic',confidence=1.0,ts_when='28 days ago')
API Error CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/{groupId}/cloudProviderAccess
```
2026-01-09T00:34:58.4011679Z === RUN   TestAccCloudProviderAccessSetupAzure_basic
2026-01-09T00:34:58.4013711Z === CONT  TestAccCloudProviderAccessSetupAzure_basic
2026-01-09T00:34:58.4029821Z === NAME  TestAccCloudProviderAccessSetupAzure_basic
2026-01-09T00:34:58.4030495Z     resource_cloud_provider_access_setup_test.go:44: Step 1/1 error: Error running apply: exit status 1
2026-01-09T00:34:58.4030993Z         
2026-01-09T00:34:58.4033350Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69604c81f15fa9f1d48ca3c9/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-01-09T00:34:58.4035014Z         
2026-01-09T00:34:58.4035414Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-01-09T00:34:58.4036197Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-01-09T00:34:58.4036928Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-01-09T00:34:58.4037304Z         
2026-01-09T00:34:58.4037605Z --- FAIL: TestAccCloudProviderAccessSetupAzure_basic (5.10s)
```

  - PASS 3 seconds
  - PASS 4 seconds
- 2026-01-10 PASS 3 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 3 seconds
- 2026-01-13 PASS 2 seconds
- 2026-01-14 PASS 2 seconds
- 2026-01-15 PASS 2 seconds
- 2026-01-16 PASS 2 seconds
- 2026-01-17 PASS 2 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 seconds
- 2026-01-20 PASS 2 seconds
- 2026-01-21 PASS 2 seconds
- 2026-01-22 PASS 3 seconds
- 2026-01-23
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-01-24 PASS 2 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 seconds
- 2026-01-27 PASS 3 seconds
- 2026-01-28 PASS 4 seconds
- 2026-01-29 PASS 3 seconds
- 2026-01-30 PASS 3 seconds
- 2026-01-31

### Error 2026-01-31T00:38:03+00:00
```
2026-01-31T00:38:03.5032278Z === RUN   TestAccCloudProviderAccessSetupAzure_basic
2026-01-31T00:38:03.5034717Z === CONT  TestAccCloudProviderAccessSetupAzure_basic
2026-01-31T00:38:03.5050526Z === NAME  TestAccCloudProviderAccessSetupAzure_basic
2026-01-31T00:38:03.5051201Z     resource_cloud_provider_access_setup_test.go:44: Step 1/1 error: Error running apply: exit status 1
2026-01-31T00:38:03.5051712Z         
2026-01-31T00:38:03.5053991Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e3b7d00588dcf9ea1ee/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-01-31T00:38:03.5055920Z         
2026-01-31T00:38:03.5056333Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-01-31T00:38:03.5057118Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-01-31T00:38:03.5057864Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-01-31T00:38:03.5058249Z         
2026-01-31T00:38:03.5058696Z --- FAIL: TestAccCloudProviderAccessSetupAzure_basic (5.05s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:41:38+00:00
```
2026-02-02T00:41:38.6394509Z === RUN   TestAccCloudProviderAccessSetupAzure_basic
2026-02-02T00:41:38.6398010Z === CONT  TestAccCloudProviderAccessSetupAzure_basic
2026-02-02T00:41:38.6426557Z === NAME  TestAccCloudProviderAccessSetupAzure_basic
2026-02-02T00:41:38.6427726Z     resource_cloud_provider_access_setup_test.go:44: Step 1/1 error: Error running apply: exit status 1
2026-02-02T00:41:38.6428592Z         
2026-02-02T00:41:38.6432870Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff20c197cc66080b070ea/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-02-02T00:41:38.6435712Z         
2026-02-02T00:41:38.6436399Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-02-02T00:41:38.6437783Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-02-02T00:41:38.6439126Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-02-02T00:41:38.6439770Z         
2026-02-02T00:41:38.6440286Z --- FAIL: TestAccCloudProviderAccessSetupAzure_basic (5.36s)
```

- 2026-02-03

### Error 2026-02-03T00:42:13+00:00
```
2026-02-03T00:42:13.7322761Z === RUN   TestAccCloudProviderAccessSetupAzure_basic
2026-02-03T00:42:13.7326487Z === CONT  TestAccCloudProviderAccessSetupAzure_basic
2026-02-03T00:42:13.7353579Z === NAME  TestAccCloudProviderAccessSetupAzure_basic
2026-02-03T00:42:13.7354745Z     resource_cloud_provider_access_setup_test.go:44: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:42:13.7355773Z         
2026-02-03T00:42:13.7359825Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b8b2e54ee995904ea1/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-02-03T00:42:13.7362647Z         
2026-02-03T00:42:13.7363315Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-02-03T00:42:13.7364827Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-02-03T00:42:13.7366112Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-02-03T00:42:13.7366743Z         
2026-02-03T00:42:13.7367256Z --- FAIL: TestAccCloudProviderAccessSetupAzure_basic (5.48s)
```

- 2026-02-04 PASS 6 seconds
- 2026-02-05 PASS 2 seconds
- 2026-02-06 PASS 2 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 3 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 3 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 4 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
