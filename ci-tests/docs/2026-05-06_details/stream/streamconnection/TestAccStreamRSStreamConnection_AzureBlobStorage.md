# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStorage Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 7)
Success rate: 81.58%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-02 01:24](#error-2026-05-02t0124130000) | DUPLICATE_AZURE_SERVICE_PRINCIPAL /api/atlas/v2/groups/69f54ae361aa98158bd8d9ae/cloudProviderAccess | dev |  | 186.02s
[2026-05-04 01:38](#error-2026-05-04t0138530000) | DUPLICATE_AZURE_SERVICE_PRINCIPAL /api/atlas/v2/groups/69f7ee6dc8db7e025f537ba1/cloudProviderAccess | dev |  | 202.04s
[2026-05-06 02:34](#error-2026-05-06t0234200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69fa907a60f26af82a9bf7d8/cloudProviderAccess | dev | flaky_500 | 186.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 4 minutes
- 2026-04-08 PASS 4 minutes
- 2026-04-09 PASS 3 minutes
- 2026-04-10 PASS 4 minutes
- 2026-04-11 PASS 3 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 4 minutes
- 2026-04-14 PASS 3 minutes
- 2026-04-15 PASS 3 minutes
- 2026-04-16 PASS 3 minutes
- 2026-04-17 PASS 3 minutes
- 2026-04-18 PASS 4 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 minutes
- 2026-04-21 PASS 3 minutes
- 2026-04-22 PASS 3 minutes
- 2026-04-23 PASS 3 minutes
- 2026-04-24 PASS 4 minutes
- 2026-04-25 PASS 4 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 minutes
- 2026-04-28 PASS 3 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30
  - PASS 4 minutes
  - PASS 4 minutes
- 2026-05-01 PASS 3 minutes
- 2026-05-02

### Error 2026-05-02T01:24:13+00:00
```
2026-05-02T01:24:13.2688677Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-02T01:24:13.2696868Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-02T01:24:13.2785407Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-02T01:24:13.2786721Z     resource_stream_connection_test.go:1309: Step 1/2 error: Error running apply: exit status 1
2026-05-02T01:24:13.2787612Z         
2026-05-02T01:24:13.2792400Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f54ae361aa98158bd8d9ae/cloudProviderAccess POST: HTTP 409 Conflict (Error code: "DUPLICATE_AZURE_SERVICE_PRINCIPAL") Detail: An Azure Service Principal has already been configured for the specified Azure Service Principal ID (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Conflict. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-05-02T01:24:13.2795910Z         
2026-05-02T01:24:13.2796734Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-02T01:24:13.2798344Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-02T01:24:13.2799880Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-02T01:24:13.2800650Z         
2026-05-02T01:24:13.2814437Z    test_name=TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink test_terraform_path=/home/runner/work/_temp/ee734eee-8a93-4cce-9363-e9f526cd82a5/terraform test_working_directory=/tmp/plugintest3709841739 test_step_number=1
2026-05-02T01:24:13.2828039Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (186.19s)
```

- 2026-05-03: MISSING
- 2026-05-04

### Error 2026-05-04T01:38:53+00:00
```
2026-05-04T01:38:53.4236627Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-04T01:38:53.4243914Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-04T01:38:53.4335057Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-04T01:38:53.4335732Z     resource_stream_connection_test.go:1309: Step 1/2 error: Error running apply: exit status 1
2026-05-04T01:38:53.4336204Z         
2026-05-04T01:38:53.4338645Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69f7ee6dc8db7e025f537ba1/cloudProviderAccess POST: HTTP 409 Conflict (Error code: "DUPLICATE_AZURE_SERVICE_PRINCIPAL") Detail: An Azure Service Principal has already been configured for the specified Azure Service Principal ID (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Conflict. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-05-04T01:38:53.4340346Z         
2026-05-04T01:38:53.4340792Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-04T01:38:53.4341639Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-04T01:38:53.4342450Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-04T01:38:53.4342865Z         
2026-05-04T01:38:53.4344261Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (202.43s)
```

- 2026-05-05 PASS 4 minutes
- 2026-05-06

### Error 2026-05-06T02:34:20+00:00
```
2026-05-06T02:34:20.7695063Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-06T02:34:20.7701262Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-06T02:34:20.7741495Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-06T02:34:20.7742171Z     resource_stream_connection_test.go:1309: Step 1/2 error: Error running apply: exit status 1
2026-05-06T02:34:20.7742657Z         
2026-05-06T02:34:20.7744403Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fa907a60f26af82a9bf7d8/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-06T02:34:20.7745629Z         
2026-05-06T02:34:20.7746085Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-06T02:34:20.7746973Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-06T02:34:20.7747823Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-06T02:34:20.7748234Z         
2026-05-06T02:34:20.7748562Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (186.01s)
```


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-04 17:36](#error-2026-05-04t1736300000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69f8cb3f90e7e75f3bb7a3c4/cloudProviderAccess | qa | flaky_500 | 253.02s
[2026-05-04 19:45](#error-2026-05-04t1945450000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69f8eba7bc658e8fedce52ac/cloudProviderAccess | qa | flaky_500 | 193.01s
[2026-05-05 08:42](#error-2026-05-05t0842320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69f9a21c036e3abdaa72b51f/cloudProviderAccess | qa | flaky_500 | 167.10s
[2026-05-06 07:47](#error-2026-05-06t0747380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69fae4931954b6a279b8c494/cloudProviderAccess | qa | flaky_500 | 189.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 4 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 4 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 4 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 minutes
- 2026-05-04
  - FAIL 4 minutes

### Error 2026-05-04T17:36:30+00:00
```
2026-05-04T17:36:30.4696736Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-04T17:36:30.4707966Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-04T17:36:30.4827434Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-04T17:36:30.4828654Z     resource_stream_connection_test.go:1309: Step 1/2 error: Error running apply: exit status 1
2026-05-04T17:36:30.4829500Z         
2026-05-04T17:36:30.4832885Z         Error: error creating cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f8cb3f90e7e75f3bb7a3c4/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-04T17:36:30.4835041Z         
2026-05-04T17:36:30.4835850Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-04T17:36:30.4837432Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-04T17:36:30.4838936Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-04T17:36:30.4839842Z         
2026-05-04T17:36:30.4840458Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (253.16s)
```

  - FAIL 3 minutes

### Error 2026-05-04T19:45:45+00:00
```
2026-05-04T19:45:45.1272049Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-04T19:45:45.1275568Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-04T19:45:45.1333544Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-04T19:45:45.1334352Z     resource_stream_connection_test.go:1309: Step 1/2 error: Error running apply: exit status 1
2026-05-04T19:45:45.1334918Z         
2026-05-04T19:45:45.1337097Z         Error: error creating cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f8eba7bc658e8fedce52ac/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-04T19:45:45.1338634Z         
2026-05-04T19:45:45.1339192Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-04T19:45:45.1340219Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-04T19:45:45.1341206Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-04T19:45:45.1341702Z         
2026-05-04T19:45:45.1343247Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (193.07s)
```

- 2026-05-05

### Error 2026-05-05T08:42:32+00:00
```
2026-05-05T08:42:32.4333963Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-05T08:42:32.4338410Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-05T08:42:32.4380407Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-05T08:42:32.4381122Z     resource_stream_connection_test.go:1309: Step 1/2 error: Error running apply: exit status 1
2026-05-05T08:42:32.4381627Z         
2026-05-05T08:42:32.4383574Z         Error: error creating cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f9a21c036e3abdaa72b51f/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T08:42:32.4385517Z         
2026-05-05T08:42:32.4386007Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-05T08:42:32.4386904Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-05T08:42:32.4387738Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-05T08:42:32.4388165Z         
2026-05-05T08:42:32.4388527Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (167.98s)
```

- 2026-05-06

### Error 2026-05-06T07:47:38+00:00
```
2026-05-06T07:47:38.5920859Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-06T07:47:38.5933509Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-06T07:47:38.5970764Z === NAME  TestAccStreamRSStreamConnection_AzureBlobStorage
2026-05-06T07:47:38.5971435Z     resource_stream_connection_test.go:1309: Step 1/2 error: Error running apply: exit status 1
2026-05-06T07:47:38.5971909Z         
2026-05-06T07:47:38.5973637Z         Error: error creating cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/69fae4931954b6a279b8c494/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-06T07:47:38.5975092Z         
2026-05-06T07:47:38.5975552Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-05-06T07:47:38.5976403Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-05-06T07:47:38.5977214Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-05-06T07:47:38.5977893Z         
2026-05-06T07:47:38.5978550Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (189.88s)
```

